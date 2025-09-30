import React from 'react';
import Sidebar from './components/layout/Sidebar';
import FarmManagementPage from './pages/FarmManagementPage';

function App() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1">
        <FarmManagementPage />
      </main>
    </div>
  );
}

export default App;