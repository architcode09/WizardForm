// src/App.jsx

import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function App() {
  return (
    <div className="bg-gray-800 min-h-screen font-sans p-4">
      
      {/* Shared navigation will stay here */}
      <nav className="mb-4 p-4 bg-gray-900 rounded-lg text-white flex gap-4">
        <Link to="/" className="hover:text-green-400">Farm Wizard</Link>
        <Link to="/apexchart" className="hover:text-green-400">Apexchart</Link>
      </nav>

      <div className="flex items-center justify-center">
        {/* The Outlet component renders the current route's element */}
        <Outlet />
      </div>

    </div>
  );
}

export default App;