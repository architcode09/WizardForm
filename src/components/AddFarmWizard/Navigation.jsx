import React from 'react';
import { HelpCircle } from 'lucide-react';

const Navigation = ({ currentStep, totalSteps, onNext, onBack }) => {
  return (
    <div className="flex justify-between items-center pt-6 border-t border-gray-200 px-2">
      <button className="flex items-center text-sm text-gray-600 hover:text-gray-800">
        <HelpCircle size={16} className="mr-2" />
        Help Center
      </button>
      <div className="flex gap-4">
        {currentStep > 1 && (
          <button onClick={onBack} className="bg-white text-gray-700 border border-gray-300 rounded-lg px-6 py-2.5 font-semibold hover:bg-gray-50">
            Back
          </button>
        )}
        <button onClick={onNext} className="bg-gray-800 text-white rounded-lg px-6 py-2.5 font-semibold hover:bg-gray-900">
          {currentStep === totalSteps ? 'Add Farm' : 'Save & Continue'}
        </button>
      </div>
    </div>
  );
};

export default Navigation;