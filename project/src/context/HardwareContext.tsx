import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Component, ComponentType, CompatibilityIssue } from '../types/hardware';
import hardwareData from '../data/hardwareData';

interface HardwareContextType {
  components: Component[];
  selectedComponents: Record<ComponentType, Component | null>;
  setSelectedComponent: (type: ComponentType, component: Component | null) => void;
  getFilteredComponents: (type: ComponentType) => Component[];
  resetSelections: () => void;
  isCompatible: (component: Component) => boolean;
  getCompatibilityIssues: () => CompatibilityIssue[];
  getTotalPrice: () => number;
}

const defaultSelectedComponents: Record<ComponentType, Component | null> = {
  cpu: null,
  motherboard: null,
  ram: null,
  gpu: null,
  storage: null,
  psu: null,
  case: null,
  cooling: null
};

const HardwareContext = createContext<HardwareContextType | undefined>(undefined);

export const useHardware = () => {
  const context = useContext(HardwareContext);
  if (context === undefined) {
    throw new Error('useHardware must be used within a HardwareProvider');
  }
  return context;
};

interface HardwareProviderProps {
  children: ReactNode;
}

export const HardwareProvider: React.FC<HardwareProviderProps> = ({ children }) => {
  const [selectedComponents, setSelectedComponents] = useState<Record<ComponentType, Component | null>>(
    { ...defaultSelectedComponents }
  );

  const setSelectedComponent = (type: ComponentType, component: Component | null) => {
    setSelectedComponents(prev => {
      // Create a new selection state
      const newSelections = { ...prev, [type]: component };

      // If we're changing CPU or motherboard, we might need to clear incompatible selections
      if (type === 'cpu' || type === 'motherboard') {
        // Check if both CPU and motherboard are selected
        const cpu = type === 'cpu' ? component : prev.cpu;
        const motherboard = type === 'motherboard' ? component : prev.motherboard;

        // If incompatible, clear motherboard when selecting CPU or vice versa
        if (cpu && motherboard) {
          const cpuSocket = cpu.compatibility.socketType;
          const mbSocket = motherboard.compatibility.socketType;

          if (cpuSocket !== mbSocket) {
            if (type === 'cpu') {
              newSelections.motherboard = null;
            } else {
              newSelections.cpu = null;
            }
          }
        }

        // If changing motherboard, check RAM compatibility
        if (type === 'motherboard' && prev.ram) {
          const newMotherboard = component;
          const currentRam = prev.ram;

          if (newMotherboard && currentRam) {
            const mbMemoryType = newMotherboard.compatibility.memoryType;
            const ramMemoryType = currentRam.compatibility.memoryType;

            if (mbMemoryType !== ramMemoryType) {
              newSelections.ram = null;
            }
          }
        }
      }

      return newSelections;
    });
  };

  const getFilteredComponents = (type: ComponentType): Component[] => {
    const componentsOfType = hardwareData.filter(component => component.type === type);

    switch (type) {
      case 'motherboard':
        // Filter motherboards compatible with selected CPU
        if (selectedComponents.cpu) {
          const cpuSocket = selectedComponents.cpu.compatibility.socketType;
          return componentsOfType.filter(motherboard => 
            motherboard.compatibility.socketType === cpuSocket
          );
        }
        break;
      case 'ram':
        // Filter RAM compatible with selected motherboard
        if (selectedComponents.motherboard) {
          const mbMemoryType = selectedComponents.motherboard.compatibility.memoryType;
          return componentsOfType.filter(ram => 
            ram.compatibility.memoryType === mbMemoryType
          );
        }
        break;
      case 'case':
        // Filter cases that can fit the selected motherboard
        if (selectedComponents.motherboard) {
          const mbFormFactor = selectedComponents.motherboard.compatibility.formFactor;
          return componentsOfType.filter(pcCase => {
            // Typically larger cases can fit smaller motherboards
            if (mbFormFactor === 'Micro-ATX' && pcCase.compatibility.formFactor === 'ATX') return true;
            if (mbFormFactor === 'Mini-ITX' && 
              (pcCase.compatibility.formFactor === 'ATX' || pcCase.compatibility.formFactor === 'Micro-ATX')) return true;
            return pcCase.compatibility.formFactor === mbFormFactor;
          });
        }
        break;
      case 'cooling':
        // Filter coolers that can handle the CPU's TDP
        if (selectedComponents.cpu) {
          const cpuTdp = selectedComponents.cpu.specs.tdp as number;
          return componentsOfType.filter(cooler => 
            cooler.compatibility.tdp as number >= cpuTdp
          );
        }
        break;
      case 'psu':
        // Filter PSUs that can handle the system's power requirements
        // This is a simplified calculation
        let estimatedWattage = 0;
        if (selectedComponents.cpu) estimatedWattage += selectedComponents.cpu.specs.tdp as number;
        if (selectedComponents.gpu) estimatedWattage += selectedComponents.gpu.specs.tdp as number;
        // Add base system wattage
        estimatedWattage += 150; // Approximate for motherboard, RAM, storage, etc.
        
        if (estimatedWattage > 0) {
          // Add 30% headroom for safety
          const recommendedWattage = Math.ceil(estimatedWattage * 1.3);
          return componentsOfType.filter(psu => 
            psu.compatibility.wattage as number >= recommendedWattage
          );
        }
        break;
    }

    return componentsOfType;
  };

  const isCompatible = (component: Component): boolean => {
    // Already implemented in getFilteredComponents, but this is a simpler check
    // for individual component compatibility
    switch (component.type) {
      case 'motherboard':
        return !selectedComponents.cpu || 
               selectedComponents.cpu.compatibility.socketType === component.compatibility.socketType;
      case 'ram':
        return !selectedComponents.motherboard || 
               selectedComponents.motherboard.compatibility.memoryType === component.compatibility.memoryType;
      // Add more compatibility checks as needed
      default:
        return true;
    }
  };

  const getCompatibilityIssues = (): CompatibilityIssue[] => {
    const issues: CompatibilityIssue[] = [];

    // Check CPU and motherboard socket compatibility
    if (selectedComponents.cpu && selectedComponents.motherboard) {
      const cpuSocket = selectedComponents.cpu.compatibility.socketType;
      const mbSocket = selectedComponents.motherboard.compatibility.socketType;

      if (cpuSocket !== mbSocket) {
        issues.push({
          componentType: 'motherboard',
          severity: 'error',
          message: `Socket mismatch: CPU uses ${cpuSocket} but motherboard has ${mbSocket}`
        });
      }
    }

    // Check RAM and motherboard compatibility
    if (selectedComponents.ram && selectedComponents.motherboard) {
      const ramType = selectedComponents.ram.compatibility.memoryType;
      const mbRamType = selectedComponents.motherboard.compatibility.memoryType;

      if (ramType !== mbRamType) {
        issues.push({
          componentType: 'ram',
          severity: 'error',
          message: `Memory type mismatch: Motherboard supports ${mbRamType} but RAM is ${ramType}`
        });
      }
    }

    // Check if PSU can handle the system power requirements
    let totalPower = 0;
    if (selectedComponents.cpu) totalPower += selectedComponents.cpu.specs.tdp as number;
    if (selectedComponents.gpu) totalPower += selectedComponents.gpu.specs.tdp as number;
    totalPower += 150; // Base system power

    if (selectedComponents.psu && totalPower > (selectedComponents.psu.compatibility.wattage as number)) {
      issues.push({
        componentType: 'psu',
        severity: 'error',
        message: `Power supply insufficient: System needs ${totalPower}W but PSU provides ${selectedComponents.psu.compatibility.wattage}W`
      });
    }

    // Check if GPU fits in case
    if (selectedComponents.case && selectedComponents.gpu) {
      const caseGpuClearance = selectedComponents.case.compatibility.maxGpuLength as number;
      const gpuLength = selectedComponents.gpu.specs.length as number;

      if (gpuLength > caseGpuClearance) {
        issues.push({
          componentType: 'gpu',
          severity: 'error',
          message: `GPU too long: ${gpuLength}mm GPU doesn't fit in case with ${caseGpuClearance}mm clearance`
        });
      }
    }

    return issues;
  };

  const resetSelections = () => {
    setSelectedComponents({ ...defaultSelectedComponents });
  };

  const getTotalPrice = (): number => {
    return Object.values(selectedComponents)
      .filter(component => component !== null)
      .reduce((total, component) => total + (component?.price || 0), 0);
  };

  return (
    <HardwareContext.Provider
      value={{
        components: hardwareData,
        selectedComponents,
        setSelectedComponent,
        getFilteredComponents,
        resetSelections,
        isCompatible,
        getCompatibilityIssues,
        getTotalPrice
      }}
    >
      {children}
    </HardwareContext.Provider>
  );
};