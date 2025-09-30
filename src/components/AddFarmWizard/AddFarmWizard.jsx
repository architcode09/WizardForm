import React, { useState } from 'react';
import Stepper from './Stepper.jsx';
import Navigation from './Navigation.jsx';
import Step1_FarmDetails from './Step1_FarmDetails.jsx';
import Step2_AddReservoir from './Step2_AddReservoir.jsx';
import Step3_AddPolyhouse from './Step3_AddPolyhouse.jsx';
import Step4_ZoneInfo from './Step4_ZoneInfo.jsx';
import { CheckCircle2, X } from 'lucide-react';

// This function provides the initial data structure for a new farm.
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
        structureLife: '',
        plasticLife: '',
        polyhouseType: 'Pond',
        gutterHeight: '',
        topHeight: '',
        acfHafExoseNumber: '',
        exhaustFanNumber: '',
        acfNumber: '',
        zones: [
            { id: 'A', name: 'Zone A', type: 'Pond', area: '', cultivationArea: '', cropInfo: '' },
            { id: 'B', name: 'Zone B', type: 'Pond', area: '', cultivationArea: '', cropInfo: '' },
            { id: 'C', name: 'Zone C', type: 'Pond', area: '', cultivationArea: '', cropInfo: '' },
            { id: 'D', name: 'Zone D', type: 'Pond', area: '', cultivationArea: '', cropInfo: '' },
        ],
        counts: { rowCount: 0, rowSpacing: 0, plantSpacing: 0, plantPerRow: 0 }
    }]
});

const AddFarmWizard = ({ onClose }) => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState(getInitialFarmData());
    const [showSuccess, setShowSuccess] = useState(false);
    const [errors, setErrors] = useState({});

    const steps = ['Farm Details', 'Add Reservoir', 'Add Polyhouse', 'Zone Info'];

    // Complete validation logic for all 4 steps
    const validateStep = () => {
        const newErrors = {};
        switch (currentStep) {
            case 1:
                if (!formData.farmName.trim()) newErrors.farmName = 'Farm Name is required.';
                if (!formData.farmArea.trim()) newErrors.farmArea = 'Farm Area is required.';
                if (!formData.location.trim()) newErrors.location = 'Location is required.';
                break;
            case 2:
                formData.reservoirs.forEach((res, index) => {
                    if (!res.name.trim()) newErrors[`reservoir_name_${index}`] = 'Name is required.';
                    if (!res.capacity.trim()) newErrors[`reservoir_capacity_${index}`] = 'Capacity is required.';
                });
                break;
            case 3:
                formData.polyhouses.forEach((poly, index) => {
                    if (!poly.name.trim()) newErrors[`polyhouse_name_${index}`] = 'Name is required.';
                    if (!poly.area.trim()) newErrors[`polyhouse_area_${index}`] = 'Area is required.';
                    if (!poly.plasticLife.trim()) newErrors[`polyhouse_plasticLife_${index}`] = 'Plastic Life is required.';
                    if (!poly.gutterHeight.trim()) newErrors[`polyhouse_gutterHeight_${index}`] = 'Gutter Height is required.';
                    if (!poly.topHeight.trim()) newErrors[`polyhouse_topHeight_${index}`] = 'Top height is required.';
                    if (!poly.acfHafExoseNumber.trim()) newErrors[`polyhouse_acfHafExoseNumber_${index}`] = 'This number is required.';
                    if (!poly.exhaustFanNumber.trim()) newErrors[`polyhouse_exhaustFanNumber_${index}`] = 'This number is required.';
                    if (!poly.acfNumber.trim()) newErrors[`polyhouse_acfNumber_${index}`] = 'ACF Number is required.';
                });
                break;
            case 4:
                formData.polyhouses.forEach((poly, polyIndex) => {
                    poly.zones.forEach((zone, zoneIndex) => {
                        if (!zone.name.trim()) newErrors[`polyhouse_${polyIndex}_zone_name_${zoneIndex}`] = 'Zone Name is required.';
                    });
                });
                break;
            default:
                break;
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNext = () => {
        if (validateStep()) {
            setErrors({});
            if (currentStep < steps.length) {
                setCurrentStep(currentStep + 1);
            } else {
                console.log('Final Farm Data:', formData);
                setShowSuccess(true);
            }
        }
    };

    const handleBack = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };
    
    const handleResetAndClose = () => {
        setFormData(getInitialFarmData());
        setCurrentStep(1);
        setShowSuccess(false);
        onClose();
    };
    
    // This is the full implementation of the SuccessMessage component
    const SuccessMessage = () => (
        <div className="flex flex-col items-center justify-center text-center h-[550px]">
            <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
            <h2 className="text-2xl font-bold text-gray-800">Farm Added Successfully!</h2>
            <p className="text-gray-500 mt-2">The new farm data has been logged to the console.</p>
            <button
                onClick={handleResetAndClose}
                className="mt-8 bg-gray-800 text-white rounded-lg px-6 py-2.5 font-semibold hover:bg-gray-900"
            >
                Close
            </button>
        </div>
    );

    const renderStepContent = () => {
        const stepProps = { formData, setFormData, errors };
        switch (currentStep) {
            case 1: return <Step1_FarmDetails {...stepProps} />;
            case 2: return <Step2_AddReservoir {...stepProps} />;
            case 3: return <Step3_AddPolyhouse {...stepProps} />;
            case 4: return <Step4_ZoneInfo {...stepProps} />;
            default: return null;
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-6 space-y-4 relative">
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
                    <X size={24} />
                </button>
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
                            onCancel={onClose}
                        />
                    </>
                )}
            </div>
        </div>
    );
};

export default AddFarmWizard;