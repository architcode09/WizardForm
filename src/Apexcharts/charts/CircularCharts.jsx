import React from 'react';
import Chart from 'react-apexcharts';

const CircularCharts = () => {
  // --- Data for Circular Charts (Srinagar Farm Crops) ---
  const cropData = {
    types: ['Apples', 'Saffron', 'Walnuts', 'Corn'],
    distribution: [40, 25, 15, 20]
  };

  // --- Pie Chart Config ---
  const pieChartOptions = {
    labels: cropData.types,
    title: { text: 'Crop Distribution (Pie Chart)', align: 'left' },
    chart: { foreColor: '#373d3f' }
  };
  const pieChartSeries = cropData.distribution;

  // --- Donut Chart Config ---
  const donutChartOptions = {
    labels: cropData.types,
    title: { text: 'Crop Distribution (Donut Chart)', align: 'left' },
    chart: { foreColor: '#373d3f' }
  };
  const donutChartSeries = cropData.distribution;

  // --- Radial Bar (Gauge) Config ---
  const radialBarOptions = {
    plotOptions: {
      radialBar: {
        hollow: { size: '70%' },
        dataLabels: {
          name: { fontSize: '22px' },
          value: { fontSize: '16px' },
          total: { show: true, label: 'Total', formatter: () => '100%' }
        }
      }
    },
    labels: cropData.types,
    title: { text: 'Crop Purity (Radial Bar)', align: 'left' },
    chart: { foreColor: '#373d3f' }
  };
  const radialBarSeries = [90, 85, 95, 70]; 

  return (
    <>
      {/* Pie Chart */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <Chart options={pieChartOptions} series={pieChartSeries} type="pie" width="100%" height="350" />
      </div>

      {/* Donut Chart */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <Chart options={donutChartOptions} series={donutChartSeries} type="donut" width="100%" height="350" />
      </div>

      {/* Radial Bar Chart */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <Chart options={radialBarOptions} series={radialBarSeries} type="radialBar" width="100%" height="350" />
      </div>
    </>
  );
};

export default CircularCharts;