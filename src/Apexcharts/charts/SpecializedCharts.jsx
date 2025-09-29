import React from 'react';
import Chart from 'react-apexcharts';

const SpecializedCharts = () => {
  // --- Data for Radar Chart (Farm Metrics) ---
  const farmMetrics = {
    categories: ['Water Quality', 'Soil Health', 'Growth Rate', 'Pest Control', 'Sunlight'],
    polyhouseA: [90, 75, 85, 80, 95],
    polyhouseB: [80, 88, 70, 92, 85]
  };

  // --- Data for Candlestick Chart (Saffron Prices in Srinagar) ---
  const saffronPriceData = [{
    x: new Date('2025-09-22'),
    y: [532.35, 534.8, 522.3, 525.0] // [open, high, low, close]
  }, {
    x: new Date('2025-09-23'),
    y: [525.25, 542.4, 525.1, 540.8]
  }, {
    x: new Date('2025-09-24'),
    y: [540.9, 550.0, 538.1, 545.2]
  }, {
    x: new Date('2025-09-25'),
    y: [545.0, 548.9, 535.1, 541.8]
  }];

  // --- Radar Chart Config ---
  const radarChartOptions = {
    xaxis: { categories: farmMetrics.categories },
    title: { text: 'Polyhouse Performance (Radar Chart)', align: 'left' },
    chart: { foreColor: '#373d3f' }
  };
  const radarChartSeries = [
    { name: 'Polyhouse A', data: farmMetrics.polyhouseA },
    { name: 'Polyhouse B', data: farmMetrics.polyhouseB }
  ];

  // --- Candlestick Chart Config ---
  const candlestickOptions = {
    chart: { type: 'candlestick', foreColor: '#373d3f' },
    title: { text: 'Saffron Prices (Candlestick Chart)', align: 'left' },
    xaxis: { type: 'datetime' },
    yaxis: { tooltip: { enabled: true } }
  };
  const candlestickSeries = [{ data: saffronPriceData }];

  return (
    <>
      {/* Radar Chart */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <Chart options={radarChartOptions} series={radarChartSeries} type="radar" width="100%" height="350" />
      </div>

      {/* Candlestick Chart */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <Chart options={candlestickOptions} series={candlestickSeries} type="candlestick" width="100%" height="350" />
      </div>
    </>
  );
};

export default SpecializedCharts;