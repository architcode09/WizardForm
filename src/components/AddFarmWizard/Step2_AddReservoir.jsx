import React from 'react';
import { Plus, Trash2, ChevronDown } from 'lucide-react';

const Step2_AddReservoir = ({ formData, setFormData, errors }) => {

  // THE FIX: The logic for these three functions has been fully restored.

  // This function adds a new empty reservoir object to our main formData state.
  const handleAdd = () => {
    setFormData(prev => ({
      ...prev,
      reservoirs: [...prev.reservoirs, { id: Date.now(), name: '', capacity: '', type: 'Pond' }]
    }));
  };

  // This function removes a reservoir from the list by its unique ID.
  const handleRemove = (id) => {
    setFormData(prev => ({
      ...prev,
      reservoirs: prev.reservoirs.filter(r => r.id !== id)
    }));
  };

  // This function is called every time you type in an input field.
  // It finds the correct reservoir by its ID and updates the correct field (name or capacity).
  const handleChange = (id, e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      reservoirs: prev.reservoirs.map(r => r.id === id ? { ...r, [name]: value } : r)
    }));
  };

  return (
    <div className="p-2 space-y-4">
      {formData.reservoirs.map((reservoir, index) => (
        <div key={reservoir.id} className="p-4 border border-gray-200 rounded-lg space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-800">Reservoir {index + 1}</h3>
            {formData.reservoirs.length > 1 && (
              <button onClick={() => handleRemove(reservoir.id)} className="text-gray-400 hover:text-red-500">
                <Trash2 size={18} />
              </button>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Reservoir Name *</label>
              <input 
                type="text" 
                name="name" 
                value={reservoir.name} 
                onChange={(e) => handleChange(reservoir.id, e)} 
                placeholder="Select Option" 
                required 
                className={`w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-transparent ${errors[`reservoir_name_${index}`] ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors[`reservoir_name_${index}`] && <p className="text-red-500 text-xs mt-1">{errors[`reservoir_name_${index}`]}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Capacity (Liters) *</label>
              <input 
                type="text" 
                name="capacity" 
                value={reservoir.capacity} 
                onChange={(e) => handleChange(reservoir.id, e)} 
                placeholder="Select Option" 
                required 
                className={`w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-transparent ${errors[`reservoir_capacity_${index}`] ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors[`reservoir_capacity_${index}`] && <p className="text-red-500 text-xs mt-1">{errors[`reservoir_capacity_${index}`]}</p>}
            </div>
            <div className="relative md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Reservoir Type</label>
              <select name="type" value={reservoir.type} onChange={(e) => handleChange(reservoir.id, e)} className="w-full appearance-none bg-white border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-transparent">
                <option>Pond</option>
                <option>Tank</option>
                <option>Well</option>
              </select>
              <ChevronDown className="absolute right-3 top-9 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>
      ))}
      <button onClick={handleAdd} className="w-full border-2 border-dashed border-gray-300 text-gray-600 font-semibold rounded-lg py-3 hover:bg-gray-50 flex items-center justify-center gap-2">
        <Plus size={18} />
        Add Reservoir
      </button>
    </div>
  );
};

export default Step2_AddReservoir;