import React from 'react';
import { motion } from 'framer-motion';
import { Component, ComponentType } from '../../types/hardware';
import { useHardware } from '../../context/HardwareContext';
import ComponentCard from './ComponentCard';
import ComponentExplanation from './ComponentExplanation';

interface ComponentSelectorProps {
  componentType: ComponentType;
  title: string;
  icon: React.ReactNode;
}

const ComponentSelector: React.FC<ComponentSelectorProps> = ({ componentType, title, icon }) => {
  const { 
    getFilteredComponents, 
    selectedComponents, 
    setSelectedComponent 
  } = useHardware();

  const components = getFilteredComponents(componentType);
  const selectedComponent = selectedComponents[componentType];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  if (components.length === 0) {
    // Determine what's missing
    let message = "No compatible components found.";
    
    if (componentType === 'motherboard' && !selectedComponents.cpu) {
      message = "Please select a CPU first to see compatible motherboards.";
    } else if (componentType === 'ram' && !selectedComponents.motherboard) {
      message = "Please select a motherboard first to see compatible RAM.";
    }
    
    return (
      <div className="bg-slate-800 rounded-lg p-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            {icon}
            <h2 className="text-xl font-semibold text-white ml-2">{title}</h2>
          </div>
        </div>
        <div className="bg-slate-700 rounded-lg p-6 text-center text-gray-300">
          {message}
        </div>
      </div>
    );
  }

  const handleSelect = (component: Component) => {
    setSelectedComponent(componentType, component);
  };

  const handleDeselect = () => {
    setSelectedComponent(componentType, null);
  };

  return (
    <div className="bg-slate-800 rounded-lg p-6 mb-8">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          {icon}
          <h2 className="text-xl font-semibold text-white ml-2">{title}</h2>
        </div>
        {selectedComponent && (
          <button
            onClick={handleDeselect}
            className="text-sm text-red-400 hover:text-red-300"
          >
            Clear Selection
          </button>
        )}
      </div>

      {selectedComponent ? (
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/2">
            <ComponentCard
              component={selectedComponent}
              isSelected={true}
              onSelect={() => {}}
            />
          </div>
          <div className="md:w-1/2">
            <ComponentExplanation component={selectedComponent} />
          </div>
        </div>
      ) : (
        <>
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {components.map((component) => (
              <motion.div key={component.id} variants={item}>
                <ComponentCard
                  component={component}
                  isSelected={false}
                  onSelect={() => handleSelect(component)}
                />
              </motion.div>
            ))}
          </motion.div>
        </>
      )}
    </div>
  );
};

export default ComponentSelector;