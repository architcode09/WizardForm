import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const Step4_ZoneInfo = ({ formData, setFormData }) => {
  const [activePolyhouseId, setActivePolyhouseId] = useState(formData.polyhouses[0]?.id);
  const [activeZoneId, setActiveZoneId] = useState('A');

  const activePolyhouse = formData.polyhouses.find(p => p.id === activePolyhouseId);
  const activeZone = activePolyhouse?.zones.find(z => z.id === activeZoneId);

  // THE FIX: The logic for these two functions has been fully restored.

  // This function handles changes for the main zone form fields (name, type, crop info)
  const handleZoneChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      polyhouses: prev.polyhouses.map(p =>
        p.id === activePolyhouseId
          ? { ...p, zones: p.zones.map(z => z.id === activeZoneId ? { ...z, [name]: value } : z) }
          : p
      )
    }));
  };

  // This function handles changes for the count inputs at the bottom
  const handleCountChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => {
        const updatedPolyhouses = prevData.polyhouses.map(polyhouse => {
            if (polyhouse.id === activePolyhouseId) {
                return {
                    ...polyhouse,
                    counts: {
                        ...polyhouse.counts,
                        [name]: parseInt(value, 10) || 0 
                    }
                };
            }
            return polyhouse;
        });
        return { ...prevData, polyhouses: updatedPolyhouses };
    });
  };

  return (
    <div className="p-2 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Left Column: List of Polyhouses */}
      <div className="md:col-span-1 space-y-3">
        <h3 className="text-lg font-semibold text-gray-800">Polyhouses</h3>
        {formData.polyhouses.map((polyhouse) => (
          <button
            key={polyhouse.id}
            onClick={() => setActivePolyhouseId(polyhouse.id)}
            className={`w-full flex items-center justify-between p-3 rounded-lg border text-left
              ${activePolyhouseId === polyhouse.id ? 'bg-green-600 text-white shadow' : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'}`}
          >
            <span className="font-semibold">{polyhouse.name}</span>
            <ChevronRight size={16} />
          </button>
        ))}
      </div>

      {/* Right Column: Zone Tabs and Form */}
      <div className="md:col-span-2">
        <div className="flex border-b border-gray-200">
          {activePolyhouse?.zones.map(zone => (
            <button
              key={zone.id}
              onClick={() => setActiveZoneId(zone.id)}
              className={`px-6 py-2 text-sm font-semibold -mb-px
                ${activeZoneId === zone.id ? 'border-b-2 border-green-500 text-green-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              {zone.name}
            </button>
          ))}
        </div>

        <div className="pt-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Zone Name *</label>
              <input type="text" name="name" value={activeZone?.name || ''} onChange={handleZoneChange} required className="w-full border border-gray-300 rounded-lg px-3 py-2"/>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Zone Type</label>
              <input type="text" name="type" value={activeZone?.type || ''} onChange={handleZoneChange} className="w-full border border-gray-300 rounded-lg px-3 py-2"/>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Crop Info</label>
            <textarea name="cropInfo" value={activeZone?.cropInfo || ''} onChange={handleZoneChange} rows="3" className="w-full border border-gray-300 rounded-lg px-3 py-2"></textarea>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
             {Object.keys(activePolyhouse?.counts || {}).map(key => (
                 <div key={key}>
                    <label className="block text-sm font-medium text-gray-700 mb-1 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</label>
                    <input type="number" name={key} value={activePolyhouse?.counts[key] || 0} onChange={handleCountChange} className="w-full border border-gray-300 rounded-lg px-3 py-2"/>
                 </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step4_ZoneInfo;