import React from 'react';
import { Component } from '../../types/hardware';

interface ComponentExplanationProps {
  component: Component;
}

const ComponentExplanation: React.FC<ComponentExplanationProps> = ({ component }) => {
  // Get the appropriate icon based on performance rating
  const getPerformanceRating = (rating: number | undefined) => {
    if (!rating) return null;
    
    // Calculate filled stars based on rating (out of 10)
    const filledStars = Math.round(rating);
    
    return (
      <div className="flex items-center">
        {[...Array(10)].map((_, i) => (
          <span key={i} className={`text-lg ${i < filledStars ? 'text-yellow-400' : 'text-gray-600'}`}>
            ★
          </span>
        ))}
        <span className="ml-2 text-white">{rating.toFixed(1)}/10</span>
      </div>
    );
  };

  return (
    <div className="bg-slate-700 rounded-lg p-6">
      <h3 className="text-xl font-semibold text-white mb-4">About this Component</h3>
      
      <div className="space-y-4">
        <div>
          <h4 className="text-cyan-400 font-medium mb-1">What is it?</h4>
          <p className="text-gray-300">{component.explanation.what}</p>
        </div>
        
        <div>
          <h4 className="text-cyan-400 font-medium mb-1">Why it matters</h4>
          <p className="text-gray-300">{component.explanation.purpose}</p>
        </div>
        
        <div>
          <h4 className="text-cyan-400 font-medium mb-1">How to choose</h4>
          <p className="text-gray-300">{component.explanation.howToChoose}</p>
        </div>
        
        {component.performanceRating && (
          <div className="mt-6">
            <h4 className="text-cyan-400 font-medium mb-3">Performance Rating</h4>
            
            <div className="space-y-2">
              {component.performanceRating.gaming && (
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <span className="text-gray-300 w-32">Gaming:</span>
                  {getPerformanceRating(component.performanceRating.gaming)}
                </div>
              )}
              
              {component.performanceRating.productivity && (
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <span className="text-gray-300 w-32">Productivity:</span>
                  {getPerformanceRating(component.performanceRating.productivity)}
                </div>
              )}
              
              {component.performanceRating.content && (
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <span className="text-gray-300 w-32">Content Creation:</span>
                  {getPerformanceRating(component.performanceRating.content)}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ComponentExplanation;