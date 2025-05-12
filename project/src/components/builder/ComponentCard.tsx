import React from 'react';
import { motion } from 'framer-motion';
import { Component } from '../../types/hardware';

interface ComponentCardProps {
  component: Component;
  isSelected: boolean;
  onSelect: () => void;
}

const ComponentCard: React.FC<ComponentCardProps> = ({ component, isSelected, onSelect }) => {
  // Extract key specs for display
  const getKeySpecs = (component: Component) => {
    switch (component.type) {
      case 'cpu':
        return [
          { label: 'Cores', value: `${component.specs.cores} Cores` },
          { label: 'Threads', value: `${component.specs.threads} Threads` },
          { label: 'Clock', value: `${component.specs.baseClock} - ${component.specs.boostClock} GHz` },
          { label: 'Socket', value: component.specs.socketType }
        ];
      case 'motherboard':
        return [
          { label: 'Socket', value: component.specs.socketType },
          { label: 'Form Factor', value: component.specs.formFactor },
          { label: 'Memory Type', value: component.specs.memoryType },
          { label: 'M.2 Slots', value: `${component.specs.m2Slots} Slots` }
        ];
      case 'ram':
        return [
          { label: 'Capacity', value: `${component.specs.capacity}GB` },
          { label: 'Speed', value: `${component.specs.speed} MHz` },
          { label: 'Type', value: component.specs.type },
          { label: 'CAS Latency', value: `CL${component.specs.casLatency}` }
        ];
      case 'gpu':
        return [
          { label: 'VRAM', value: `${component.specs.vram}GB` },
          { label: 'Clock', value: `${component.specs.coreClock} MHz` },
          { label: 'TDP', value: `${component.specs.tdp}W` },
          { label: 'RT', value: component.specs.rayTracing ? 'Yes' : 'No' }
        ];
      case 'storage':
        return [
          { label: 'Capacity', value: `${component.specs.capacity}GB` },
          { label: 'Type', value: component.specs.type },
          { label: 'Interface', value: component.specs.interface },
          { label: 'Form Factor', value: component.specs.formFactor }
        ];
      case 'psu':
        return [
          { label: 'Wattage', value: `${component.specs.wattage}W` },
          { label: 'Efficiency', value: component.specs.efficiency },
          { label: 'Modular', value: component.specs.modular },
          { label: 'Warranty', value: `${component.specs.warranty} Years` }
        ];
      case 'case':
        return [
          { label: 'Form Factor', value: component.specs.formFactor },
          { label: 'GPU Clearance', value: `${component.specs.gpuClearance}mm` },
          { label: 'Fan Mounts', value: `${component.specs.fanMounts} Fans` },
          { label: 'USB Ports', value: component.specs.usbPorts }
        ];
      case 'cooling':
        return [
          { label: 'Type', value: component.specs.type },
          { label: 'TDP Capacity', value: `${component.specs.tdp}W` },
          { label: 'Fan Size', value: component.specs.fanSize },
          { label: 'Noise Level', value: component.specs.noise }
        ];
      default:
        return [];
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`bg-slate-700 rounded-lg overflow-hidden shadow-lg cursor-pointer
                  border-2 hover:border-cyan-400 transition-colors ${
                    isSelected ? 'border-cyan-400' : 'border-transparent'
                  }`}
      onClick={onSelect}
    >
      <div className="aspect-video relative overflow-hidden">
        <img
          src={component.image}
          alt={component.name}
          className="w-full h-full object-cover transition-transform transform hover:scale-110 duration-500 ease-in-out"
        />
        <div className="absolute bottom-0 right-0 bg-cyan-600 text-white px-3 py-1 rounded-tl-lg">
          ${component.price.toFixed(2)}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-white mb-1">{component.name}</h3>
        <p className="text-gray-400 text-sm mb-3">{component.description}</p>
        
        <div className="grid grid-cols-2 gap-2">
          {getKeySpecs(component).map((spec, index) => (
            <div key={index} className="bg-slate-800 rounded p-2">
              <p className="text-gray-400 text-xs">{spec.label}</p>
              <p className="text-white text-sm font-medium truncate">{spec.value}</p>
            </div>
          ))}
        </div>
        
        {isSelected && (
          <div className="mt-3 flex justify-end">
            <span className="text-cyan-400 text-sm flex items-center">
              Selected
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ComponentCard;