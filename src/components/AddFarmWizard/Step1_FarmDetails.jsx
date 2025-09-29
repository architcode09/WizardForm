import React from 'react';

const Step1_FarmDetails = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="p-2 space-y-6">
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">Farm Type *</label>
        <div className="flex gap-6">
          {['Open', 'Closed', 'Both'].map(type => (
            <label key={type} className="flex items-center gap-2 text-gray-600">
              <input
                type="radio"
                name="farmType"
                value={type}
                checked={formData.farmType === type}
                onChange={handleChange}
                className="form-radio h-4 w-4 text-green-600 border-gray-300 focus:ring-green-500"
              />
              {type}
            </label>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="farmName" className="block text-sm font-medium text-gray-700 mb-1">Farm Name *</label>
          <input type="text" id="farmName" name="farmName" value={formData.farmName} onChange={handleChange} placeholder="Ex. form ABC" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-transparent"/>
        </div>
        <div>
          <label htmlFor="farmArea" className="block text-sm font-medium text-gray-700 mb-1">Farm Area (acres) *</label>
          <input type="text" id="farmArea" name="farmArea" value={formData.farmArea} onChange={handleChange} placeholder="Ex. 20 Acr" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-transparent"/>
        </div>
        <div className="md:col-span-2">
          <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Location *</label>
          <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} placeholder="Search or Set location" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-transparent"/>
        </div>
      </div>
    </div>
  );
};

export default Step1_FarmDetails;