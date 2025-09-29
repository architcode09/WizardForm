import React, { useState } from 'react';
import { ChevronDown, Plus, Trash2 } from 'lucide-react';

const Step3_AddPolyhouse = ({ formData, setFormData }) => {
  // State to track the ID of the currently active/selected polyhouse.
  const [activePolyhouseId, setActivePolyhouseId] = useState(formData.polyhouses[0]?.id);

  const handleAdd = () => {
    const newId = Date.now();
    const newPolyhouse = { 
      id: newId, 
      name: `Polyhouse ${formData.polyhouses.length + 1}`, 
      area: '',
      // === CHANGE 1: Initialize all new fields for a new polyhouse ===
      structureLife: '',
      plasticLife: '',
      polyhouseType: 'Pond',
      gutterHeight: '',
      topHeight: '',
      acfHafExoseNumber: '',
      exhaustFanNumber: '',
      acfNumber: '',
      // Add zones and counts as before
      zones: [
          { id: 'A', name: 'Zone A', type: 'Pond', area: '', cultivationArea: '', cropInfo: '' },
          { id: 'B', name: 'Zone B', type: 'Pond', area: '', cultivationArea: '', cropInfo: '' },
          { id: 'C', name: 'Zone C', type: 'Pond', area: '', cultivationArea: '', cropInfo: '' },
          { id: 'D', name: 'Zone D', type: 'Pond', area: '', cultivationArea: '', cropInfo: '' },
      ],
      counts: { rowCount: 0, rowSpacing: 0, plantSpacing: 0, plantPerRow: 0 }
    };

    setFormData(prev => ({
      ...prev,
      polyhouses: [...prev.polyhouses, newPolyhouse]
    }));
    // Automatically select the new polyhouse
    setActivePolyhouseId(newId);
  };

  const handleRemove = (idToRemove) => {
    setFormData(prev => {
      const newPolyhouses = prev.polyhouses.filter(p => p.id !== idToRemove);
      if (activePolyhouseId === idToRemove) {
        setActivePolyhouseId(newPolyhouses[0]?.id || null);
      }
      return { ...prev, polyhouses: newPolyhouses };
    });
  };

  const handleChange = (id, e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      polyhouses: prev.polyhouses.map(p => p.id === id ? { ...p, [name]: value } : p)
    }));
  };

  const activePolyhouse = formData.polyhouses.find(p => p.id === activePolyhouseId);

  // Helper component for select dropdowns to avoid repetition
  const SelectInput = ({ label, name, value, onChange, children }) => (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <div className="relative">
        <select 
          name={name} 
          value={value} 
          onChange={onChange} 
          className="w-full appearance-none bg-white border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-transparent"
        >
          {children}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
      </div>
    </div>
  );

  return (
    <div className="p-2 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Left Column: List of Polyhouses */}
      <div className="md:col-span-1 space-y-3">
        <h3 className="text-lg font-semibold text-gray-800">Polyhouses</h3>
        {formData.polyhouses.map((polyhouse) => (
          <button 
            key={polyhouse.id} 
            onClick={() => setActivePolyhouseId(polyhouse.id)}
            className={`w-full flex items-center justify-between p-3 rounded-lg border text-left transition-colors ${
                activePolyhouseId === polyhouse.id 
                ? 'bg-green-100 text-green-800 border-green-200' 
                : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
            }`}
          >
            <span className="font-semibold">{polyhouse.name}</span>
            {formData.polyhouses.length > 1 && (
              <div 
                onClick={(e) => { e.stopPropagation(); handleRemove(polyhouse.id); }} 
                className="text-gray-400 hover:text-red-500 p-1"
              >
                <Trash2 size={16} />
              </div>
            )}
          </button>
        ))}
        <button onClick={handleAdd} className="w-full border-2 border-dashed border-gray-300 text-gray-600 font-semibold rounded-lg py-2.5 flex items-center justify-center gap-2 hover:bg-gray-50">
          <Plus size={18} />
          Add Polyhouse
        </button>
      </div>

      {/* Right Column: Form for the ACTIVE Polyhouse */}
      {activePolyhouse ? (
        <div className="md:col-span-2 space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">{activePolyhouse.name}: Add Information</h3>
          
          {/* === CHANGE 2: Add all form fields from the screenshot === */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Polyhouse Name *</label>
              <input type="text" name="name" value={activePolyhouse.name || ''} onChange={(e) => handleChange(activePolyhouse.id, e)} className="w-full border border-gray-300 rounded-lg px-3 py-2"/>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Polyhouse Area (sq ft) *</label>
              <input type="number" name="area" placeholder="Enter Area" value={activePolyhouse.area || ''} onChange={(e) => handleChange(activePolyhouse.id, e)} className="w-full border border-gray-300 rounded-lg px-3 py-2"/>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Structure Life (Years)</label>
              <input type="number" name="structureLife" placeholder="Enter Area" value={activePolyhouse.structureLife || ''} onChange={(e) => handleChange(activePolyhouse.id, e)} className="w-full border border-gray-300 rounded-lg px-3 py-2"/>
            </div>
            <SelectInput label="Plastic Life *" name="plasticLife" value={activePolyhouse.plasticLife || ''} onChange={(e) => handleChange(activePolyhouse.id, e)}>
              <option value="">Select Option</option>
              <option value="1 Year">1 Year</option>
              <option value="3 Years">3 Years</option>
              <option value="5 Years">5 Years</option>
            </SelectInput>
            <SelectInput label="Polyhouse Type" name="polyhouseType" value={activePolyhouse.polyhouseType || ''} onChange={(e) => handleChange(activePolyhouse.id, e)}>
              <option value="Pond">Pond</option>
              <option value="Greenhouse">Greenhouse</option>
              <option value="Net House">Net House</option>
            </SelectInput>
             <SelectInput label="Gutter Height *" name="gutterHeight" value={activePolyhouse.gutterHeight || ''} onChange={(e) => handleChange(activePolyhouse.id, e)}>
              <option value="">Select Option</option>
              <option value="3m">3 meters</option>
              <option value="4m">4 meters</option>
              <option value="5m">5 meters</option>
            </SelectInput>
            <SelectInput label="Top height *" name="topHeight" value={activePolyhouse.topHeight || ''} onChange={(e) => handleChange(activePolyhouse.id, e)}>
              <option value="">Select Option</option>
              <option value="4m">4 meters</option>
              <option value="5m">5 meters</option>
              <option value="6m">6 meters</option>
            </SelectInput>
            <SelectInput label="ACF/HAF/Exose Number *" name="acfHafExoseNumber" value={activePolyhouse.acfHafExoseNumber || ''} onChange={(e) => handleChange(activePolyhouse.id, e)}>
              <option value="">Select Option</option>
              <option value="ACF-001">ACF-001</option>
              <option value="HAF-002">HAF-002</option>
            </SelectInput>
            <SelectInput label="Exhaust Fan Number *" name="exhaustFanNumber" value={activePolyhouse.exhaustFanNumber || ''} onChange={(e) => handleChange(activePolyhouse.id, e)}>
              <option value="">Select Option</option>
              <option value="EFN-001">EFN-001</option>
              <option value="EFN-002">EFN-002</option>
            </SelectInput>
            <SelectInput label="ACF Number *" name="acfNumber" value={activePolyhouse.acfNumber || ''} onChange={(e) => handleChange(activePolyhouse.id, e)}>
              <option value="">Select Option</option>
              <option value="ACF-101">ACF-101</option>
              <option value="ACF-102">ACF-102</option>
            </SelectInput>
          </div>
        </div>
      ) : (
        <div className="md:col-span-2 flex items-center justify-center text-gray-500">
            Please add a polyhouse to begin.
        </div>
      )}
    </div>
  );
};

export default Step3_AddPolyhouse;