import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import AddFarmWizard from '../components/AddFarmWizard/AddFarmWizard';

const FarmManagementPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="w-full h-full p-8">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Farms</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-gray-800 text-white font-semibold px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-700 transition-colors"
        >
          <Plus size={18} />
          Add Farm
        </button>
      </header>
      <main>
        <p className="text-gray-600">
          This is the main content area where a list of existing farms would be displayed.
        </p>
      </main>
      {isModalOpen && (
        <AddFarmWizard onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
};

export default FarmManagementPage;