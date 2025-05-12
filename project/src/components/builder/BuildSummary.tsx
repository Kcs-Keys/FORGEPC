import React from 'react';
import { motion } from 'framer-motion';
import { useHardware } from '../../context/HardwareContext';
import { ComponentType, CompatibilityIssue } from '../../types/hardware';
import { AlertTriangle, Check, X, Copy } from 'lucide-react';

const BuildSummary: React.FC = () => {
  const { 
    selectedComponents, 
    getCompatibilityIssues, 
    getTotalPrice 
  } = useHardware();

  const compatibilityIssues = getCompatibilityIssues();
  const totalPrice = getTotalPrice();

  // Check if we have selected components
  const hasSelectedComponents = Object.values(selectedComponents).some(component => component !== null);
  
  if (!hasSelectedComponents) {
    return null;
  }

  // Get component count
  const selectedCount = Object.values(selectedComponents).filter(component => component !== null).length;
  
  // Format component type to readable string
  const formatComponentType = (type: ComponentType): string => {
    const formats: Record<ComponentType, string> = {
      cpu: 'CPU',
      motherboard: 'Motherboard',
      ram: 'RAM',
      gpu: 'Graphics Card',
      storage: 'Storage',
      psu: 'Power Supply',
      case: 'Case',
      cooling: 'Cooling'
    };
    
    return formats[type] || type;
  };

  // Handle copying build to clipboard
  const copyBuildToClipboard = () => {
    const buildText = Object.entries(selectedComponents)
      .filter(([_, component]) => component !== null)
      .map(([type, component]) => `${formatComponentType(type as ComponentType)}: ${component?.name} - $${component?.price.toFixed(2)}`)
      .join('\n');
    
    const fullText = `My ForgePC Build:\n\n${buildText}\n\nTotal: $${totalPrice.toFixed(2)}`;
    
    navigator.clipboard.writeText(fullText)
      .then(() => {
        alert('Build copied to clipboard!');
      })
      .catch(() => {
        alert('Failed to copy build to clipboard');
      });
  };

  return (
    <motion.div 
      className="bg-slate-800 rounded-lg p-6 sticky top-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-white">Build Summary</h2>
        <span className="text-gray-400 text-sm">{selectedCount}/8 components selected</span>
      </div>

      {/* Compatibility Status */}
      <div className={`mb-6 p-3 rounded-lg ${
        compatibilityIssues.length > 0 ? 'bg-red-900/30 border border-red-700' : 'bg-green-900/30 border border-green-700'
      }`}>
        <div className="flex items-center">
          {compatibilityIssues.length > 0 ? (
            <AlertTriangle className="h-5 w-5 text-red-400 mr-2" />
          ) : (
            <Check className="h-5 w-5 text-green-400 mr-2" />
          )}
          <span className={`font-medium ${
            compatibilityIssues.length > 0 ? 'text-red-400' : 'text-green-400'
          }`}>
            {compatibilityIssues.length > 0 
              ? `${compatibilityIssues.length} compatibility issue${compatibilityIssues.length > 1 ? 's' : ''}` 
              : 'All components are compatible'}
          </span>
        </div>
        
        {compatibilityIssues.length > 0 && (
          <div className="mt-2 text-sm space-y-1">
            {compatibilityIssues.map((issue, index) => (
              <div key={index} className="text-gray-300 ml-7">
                • {issue.message}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Component List */}
      <div className="space-y-3 mb-6">
        {Object.entries(selectedComponents)
          .filter(([_, component]) => component !== null)
          .map(([type, component]) => (
            <div 
              key={type} 
              className="flex justify-between items-center bg-slate-700 p-3 rounded-lg"
            >
              <div className="flex items-center">
                <div className="mr-3 text-gray-400">
                  {formatComponentType(type as ComponentType)}:
                </div>
                <div className="text-white font-medium truncate max-w-[200px]">
                  {component?.name}
                </div>
              </div>
              <div className="text-cyan-400 font-medium">
                ${component?.price.toFixed(2)}
              </div>
            </div>
          ))}
      </div>

      {/* Total Price */}
      <div className="flex justify-between items-center mb-6 pt-4 border-t border-slate-700">
        <span className="text-white font-semibold">Total:</span>
        <span className="text-xl text-cyan-400 font-bold">${totalPrice.toFixed(2)}</span>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-3">
        <button
          className={`w-full py-3 rounded-lg font-medium flex justify-center items-center
                    transition-colors duration-300 ${
                      compatibilityIssues.length > 0
                        ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                        : 'bg-green-600 hover:bg-green-500 text-white'
                    }`}
          disabled={compatibilityIssues.length > 0}
        >
          {compatibilityIssues.length > 0 ? (
            <>
              <X className="h-5 w-5 mr-2" />
              Fix Issues to Complete
            </>
          ) : (
            <>
              <Check className="h-5 w-5 mr-2" />
              Complete Build
            </>
          )}
        </button>
        
        <button
          onClick={copyBuildToClipboard}
          className="w-full py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-medium
                    transition-colors duration-300 flex justify-center items-center"
        >
          <Copy className="h-5 w-5 mr-2" />
          Copy Build
        </button>
      </div>
    </motion.div>
  );
};

export default BuildSummary;