import React from 'react';
import AddFarmWizard from './components/AddFarmWizard/AddFarmWizard';

function App() {
  return (
    // This wrapper simulates the modal appearing over a dark background
    <div className="bg-gray-900 bg-opacity-75 min-h-screen flex items-center justify-center font-sans p-4">
      <AddFarmWizard />
    </div>
  );
}

export default App;