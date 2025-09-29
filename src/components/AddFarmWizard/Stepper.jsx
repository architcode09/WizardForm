import React from 'react';
import { Check } from 'lucide-react';

const Stepper = ({ steps, currentStep }) => {
  return (
    <div className="flex items-center p-2">
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <div className="flex flex-col items-center">
            <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300
                ${currentStep > index + 1 ? 'bg-green-600' : ''}
                ${currentStep === index + 1 ? 'bg-green-600' : 'bg-gray-300'}
            `}>
              {currentStep > index + 1 ? (
                <Check className="w-4 h-4 text-white" />
              ) : (
                <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
              )}
            </div>
            <p className={`mt-2 text-sm text-center ${currentStep >= index + 1 ? 'text-gray-800 font-semibold' : 'text-gray-400'}`}>
              {step}
            </p>
          </div>
          {index < steps.length - 1 && (
            <div className={`flex-auto border-t-2 mx-4 transition-all duration-300 
                ${currentStep > index + 1 ? 'border-green-600' : 'border-gray-300'}`}
            ></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Stepper;