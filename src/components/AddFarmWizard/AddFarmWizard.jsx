import React, { useState } from 'react';
import Stepper from './Stepper.jsx';
import Step1_FarmDetails from './Step1_FarmDetails.jsx';
import Step2_AddReservoir from './Step2_AddReservoir.jsx';
import Step3_AddPolyhouse from './Step3_AddPolyhouse.jsx';
import Step4_ZoneInfo from './Step4_ZoneInfo.jsx';
import Navigation from './Navigation.jsx';
import { CheckCircle2 } from 'lucide-react'; // Import a success icon

// Moved initial data outside to be reusable for resetting the form
const getInitialFarmData = () => ({
    farmType: 'Open',
    farmName: '',
    farmArea: '',
    location: '',
    reservoirs: [{ id: Date.now(), name: '', capacity: '', type: 'Pond' }],
    polyhouses: [{
        id: Date.now(),
        name: 'Polyhouse 1',
        area: '',
        zones: [
            { id: 'A', name: 'Zone A', type: 'Pond', area: '', cultivationArea: '', cropInfo: '' },
            { id: 'B', name: 'Zone B', type: 'Pond', area: '', cultivationArea: '', cropInfo: '' },
            { id: 'C', name: 'Zone C', type: 'Pond', area: '', cultivationArea: '', cropInfo: '' },
            { id: 'D', name: 'Zone D', type: 'Pond', area: '', cultivationArea: '', cropInfo: '' },
        ],
        counts: { rowCount: 0, rowSpacing: 0, plantSpacing: 0, plantPerRow: 0 }
    }]
});

const AddFarmWizard = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState(getInitialFarmData());
    
    // 1. New state to control the success message visibility
    const [showSuccess, setShowSuccess] = useState(false);

    const steps = ['Farm Details', 'Add Reservoir', 'Add Polyhouse', 'Zone Info'];

    const handleNext = () => {
        if (currentStep < steps.length) {
            setCurrentStep(currentStep + 1);
        } else {
            // 2. On final submission, instead of alert(), we set the success state to true
            console.log('Final Farm Data:', formData);
            setShowSuccess(true); // This will trigger the success message UI
        }
    };

    const handleBack = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    // 3. New function to reset the form and start over
    const handleReset = () => {
        setFormData(getInitialFarmData());
        setCurrentStep(1);
        setShowSuccess(false);
    };

    const renderStepContent = () => {
        switch (currentStep) {
            case 1:
                return <Step1_FarmDetails formData={formData} setFormData={setFormData} />;
            case 2:
                return <Step2_AddReservoir formData={formData} setFormData={setFormData} />;
            case 3:
                return <Step3_AddPolyhouse formData={formData} setFormData={setFormData} />;
            case 4:
                return <Step4_ZoneInfo formData={formData} setFormData={setFormData} />;
            default:
                return <div>Unknown Step</div>;
        }
    };

    // 4. A new component for our success message UI
    const SuccessMessage = () => (
        <div className="flex flex-col items-center justify-center text-center h-[450px]">
            <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
            <h2 className="text-2xl font-bold text-gray-800">Farm Added Successfully!</h2>
            <p className="text-gray-500 mt-2">The new farm has been added to your management list.</p>
            <button
                onClick={handleReset}
                className="mt-8 bg-gray-800 text-white rounded-lg px-6 py-2.5 font-semibold hover:bg-gray-900"
            >
                Add Another Farm
            </button>
        </div>
    );

    return (
        <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-6 space-y-4">
            {/* 5. Conditionally render either the wizard or the success message */}
            {showSuccess ? (
                <SuccessMessage />
            ) : (
                <>
                    <div className="px-2">
                        <h1 className="text-2xl font-bold text-gray-800">Add Farm</h1>
                        <p className="text-gray-500">Share your project with your team!</p>
                    </div>
                    
                    <Stepper steps={steps} currentStep={currentStep} />

                    <div className="pt-4 min-h-[450px]">
                        {renderStepContent()}
                    </div>

                    <Navigation 
                        currentStep={currentStep}
                        totalSteps={steps.length}
                        onNext={handleNext}
                        onBack={handleBack}
                    />
                </>
            )}
        </div>
    );
};

export default AddFarmWizard;