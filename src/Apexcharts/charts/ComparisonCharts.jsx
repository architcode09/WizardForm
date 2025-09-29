import React from 'react';
import Chart from 'react-apexcharts';

const ComparisonCharts = () => {
  // --- Data for Comparison Charts (Farm Yield vs. Rainfall in Srinagar) ---
  const farmAnalytics = {
    years: ['2021', '2022', '2023', '2024', '2025'],
    appleYield: [30, 40, 45, 50, 49], // in Tons
    rainfall: [800, 1200, 1400, 1300, 900] // in mm
  };

  // --- Column Chart Config ---
  const columnChartOptions = {
    chart: { id: 'apple-yield-column', foreColor: '#373d3f' },
    xaxis: { categories: farmAnalytics.years },
    plotOptions: { bar: { horizontal: false } },
    dataLabels: { enabled: false },
    title: { text: 'Annual Apple Yield (Column Chart)', align: 'left' },
    yaxis: { title: { text: 'Yield (Tons)' } }
  };
  const columnChartSeries = [{ name: 'Apple Yield', data: farmAnalytics.appleYield }];

  // --- Mixed Chart (Line + Column) Config ---
  const mixedChartOptions = {
    chart: { id: 'yield-vs-rainfall' },
    stroke: { width: [0, 4] }, // No stroke for bar, 4px for line
    title: { text: 'Apple Yield vs. Annual Rainfall', align: 'left' },
    xaxis: { categories: farmAnalytics.years },
    yaxis: [
      { // Primary Y-Axis for Columns (Rainfall)
        title: { text: 'Rainfall (mm)' },
      },
      { // Secondary Y-Axis for Line (Yield)
        opposite: true,
        title: { text: 'Apple Yield (Tons)' }
      }
    ]
  };
  const mixedChartSeries = [
    { name: 'Rainfall', type: 'column', data: farmAnalytics.rainfall },
    { name: 'Apple Yield', type: 'line', data: farmAnalytics.appleYield }
  ];

  return (
    <>
      {/* Column Chart */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <Chart options={columnChartOptions} series={columnChartSeries} type="bar" width="100%" height="350" />
      </div>

      {/* Mixed Chart */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <Chart options={mixedChartOptions} series={mixedChartSeries} type="line" width="100%" height="350" />
      </div>
    </>
  );
};

export default ComparisonCharts;