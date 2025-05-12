import React from 'react';
import { Cpu, HardDrive, MemoryStick as Memory, MonitorSmartphone, Battery, Box, Fan, CircuitBoard } from 'lucide-react';
import ComponentSelector from '../components/builder/ComponentSelector';
import BuildSummary from '../components/builder/BuildSummary';
import { useHardware } from '../context/HardwareContext';
import { motion } from 'framer-motion';

const BuilderPage = () => {
  const { resetSelections } = useHardware();

  return (
    <div>
      {/* Header Section */}
      <motion.div 
        className="mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">PC Builder</h1>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-6">
          Select compatible components for your custom PC build. 
          As you select each part, we'll ensure everything works together perfectly.
        </p>
        <button
          onClick={resetSelections}
          className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-500 
                   text-white rounded transition-colors"
        >
          Reset Selections
        </button>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Component Selectors */}
        <div className="lg:w-2/3">
          <ComponentSelector 
            componentType="cpu" 
            title="Processor (CPU)" 
            icon={<Cpu className="h-5 w-5 text-cyan-400" />} 
          />
          
          <ComponentSelector 
            componentType="motherboard" 
            title="Motherboard" 
            icon={<CircuitBoard className="h-5 w-5 text-cyan-400" />} 
          />
          
          <ComponentSelector 
            componentType="ram" 
            title="Memory (RAM)" 
            icon={<Memory className="h-5 w-5 text-cyan-400" />} 
          />
          
          <ComponentSelector 
            componentType="gpu" 
            title="Graphics Card" 
            icon={<MonitorSmartphone className="h-5 w-5 text-cyan-400" />} 
          />
          
          <ComponentSelector 
            componentType="storage" 
            title="Storage" 
            icon={<HardDrive className="h-5 w-5 text-cyan-400" />} 
          />
          
          <ComponentSelector 
            componentType="psu" 
            title="Power Supply" 
            icon={<Battery className="h-5 w-5 text-cyan-400" />} 
          />
          
          <ComponentSelector 
            componentType="case" 
            title="Case" 
            icon={<Box className="h-5 w-5 text-cyan-400" />} 
          />
          
          <ComponentSelector 
            componentType="cooling" 
            title="CPU Cooling" 
            icon={<Fan className="h-5 w-5 text-cyan-400" />} 
          />
        </div>

        {/* Build Summary */}
        <div className="lg:w-1/3">
          <BuildSummary />
        </div>
      </div>
    </div>
  );
};

export default BuilderPage;