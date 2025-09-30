import React, { useState } from 'react';
import { Plus } from 'lucide-react';

// Import the wizard component that will act as our modal
import AddFarmWizard from './components/AddFarmWizard/AddFarmWizard.jsx';

const Dashboard = () => {
  // This state controls whether the modal is open or closed
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="w-full h-full bg-gray-100 p-8 rounded-lg">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Farm Management</h1>
        
        {/* This button will open the modal */}
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
          This is your main dashboard content. A list of existing farms would be displayed here.
        </p>
      </main>

      {/* This line conditionally renders the wizard modal.
          It only appears if isModalOpen is true.
          We pass the function to close the modal as a prop. */}
      {isModalOpen && (
        <AddFarmWizard onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
};

export default Dashboard;