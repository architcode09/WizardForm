// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import './index.css';

// Import the page components
// Updated to import the DashboardPage.jsx file you created
import DashboardPage from './DashboardPage.jsx'; 
import ApexchartDashboard from './Apexcharts/apexchart.jsx'; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true, 
        // Set the Dashboard as the default homepage
        element: <DashboardPage />,
      },
      {
        path: "apexchart",
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