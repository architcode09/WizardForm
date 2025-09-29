// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import './index.css';

import AddFarmWizard from './components/AddFarmWizard/AddFarmWizard.jsx';
// IMPORTANT: Update this import name
import ApexchartDashboard from './Apexcharts/apexchart.jsx'; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true, 
        element: <AddFarmWizard />,
      },
      {
        path: "apexchart",
        // And update the element here
        element: <ApexchartDashboard />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);