import React from 'react';

// Accept 'errors' as a prop
const Step1_FarmDetails = ({ formData, setFormData, errors }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="p-2 space-y-6">
      {/* ... Farm Type radio buttons are unchanged ... */}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="farmName" className="block text-sm font-medium text-gray-700 mb-1">Farm Name *</label>
          <input 
            type="text" 
            id="farmName" 
            name="farmName" 
            value={formData.farmName} 
            onChange={handleChange} 
            placeholder="Ex. form ABC" 
            required 
            // Conditionally apply red border if there's an error for this field
            className={`w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-transparent ${errors.farmName ? 'border-red-500' : 'border-gray-300'}`}
          />
          {/* Conditionally render the error message */}
          {errors.farmName && <p className="text-red-500 text-xs mt-1">{errors.farmName}</p>}
        </div>
        <div>
          <label htmlFor="farmArea" className="block text-sm font-medium text-gray-700 mb-1">Farm Area (acres) *</label>
          <input 
            type="text" 
            id="farmArea" 
            name="farmArea" 
            value={formData.farmArea} 
            onChange={handleChange} 
            placeholder="Ex. 20 Acr" 
            required 
            className={`w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-transparent ${errors.farmArea ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.farmArea && <p className="text-red-500 text-xs mt-1">{errors.farmArea}</p>}
        </div>
        <div className="md:col-span-2">
          <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Location *</label>
          <input 
            type="text" 
            id="location" 
            name="location" 
            value={formData.location} 
            onChange={handleChange} 
            placeholder="Search or Set location" 
            required 
            className={`w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-transparent ${errors.location ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.location && <p className="text-red-500 text-xs mt-1">{errors.location}</p>}
        </div>
        {/* ... Select Input is unchanged ... */}
      </div>
    </div>
  );
};

export default Step1_FarmDetails;