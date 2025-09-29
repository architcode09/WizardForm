import React from 'react';

// Import all chart components from the 'charts' folder
import BasicCharts from './charts/BasicCharts';
import CircularCharts from './charts/CircularCharts';
import SpecializedCharts from './charts/SpecializedCharts';
import ComparisonCharts from './charts/ComparisonCharts';
import DataRelationshipCharts from './charts/DataRelationshipCharts';

const ApexchartDashboard = () => {
  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-white mb-8 text-center">Charts Dashboard</h1>
      
      {/* A responsive grid for the dashboard layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Render all the imported chart components */}
        <BasicCharts />
        <CircularCharts />
        <SpecializedCharts />
        <ComparisonCharts />
        <DataRelationshipCharts />
        
      </div>
    </div>
  );
};

export default ApexchartDashboard;