import React from 'react';
import Chart from 'react-apexcharts';

const DataRelationshipCharts = () => {
  // --- Data for Timeline Chart (Saffron Crop Cycle) ---
  const timelineSeries = [{
    data: [
      { x: 'Planting', y: [new Date('2025-08-01').getTime(), new Date('2025-09-15').getTime()] },
      { x: 'Flowering', y: [new Date('2025-10-01').getTime(), new Date('2025-10-30').getTime()] },
      { x: 'Harvesting', y: [new Date('2025-11-01').getTime(), new Date('2025-11-20').getTime()] },
      { x: 'Drying', y: [new Date('2025-11-21').getTime(), new Date('2025-12-05').getTime()] },
    ]
  }];
  const timelineOptions = {
    chart: { id: 'saffron-cycle', foreColor: '#373d3f' },
    plotOptions: { bar: { horizontal: true } },
    xaxis: { type: 'datetime' },
    title: { text: 'Saffron Crop Cycle Timeline', align: 'left' }
  };

  // --- Data for Treemap Chart (Farm Expense Distribution) ---
  const treemapSeries = [{
    data: [
      { x: 'Labor', y: 40000 },
      { x: 'Seeds', y: 15000 },
      { x: 'Fertilizer', y: 22000 },
      { x: 'Equipment', y: 35000 },
      { x: 'Utilities', y: 18000 }
    ]
  }];
  const treemapOptions = {
    chart: { id: 'expense-treemap', foreColor: '#373d3f' },
    title: { text: 'Farm Expense Distribution (Treemap)', align: 'left' }
  };
  
  // --- Data for Bubble Chart (Pest Incidents) ---
  const bubbleSeries = [{
    name: 'Pest Incidents',
    data: [ // Format: [Humidity %, Temperature °C, Crop Damage %]
        [65, 22, 5],
        [70, 24, 12],
        [75, 23, 18],
        [80, 26, 25],
        [85, 28, 40],
        [60, 21, 3]
    ]
  }];
  const bubbleOptions = {
    chart: { id: 'pest-incidents', foreColor: '#373d3f' },
    xaxis: { tickAmount: 10, title: { text: 'Humidity (%)' } },
    yaxis: { max: 35, title: { text: 'Temperature (°C)' } },
    title: { text: 'Pest Incidents vs. Climate (Bubble Chart)', align: 'left' }
  };
  
  // --- Data for Funnel Chart (Water Usage) ---

  // THE FIX: The series for a funnel chart should be a simple array of numbers,
  // not an array of objects with a 'name' and 'data' property.
  const funnelSeries = [10000, 8500, 7500, 6800]; // Liters at each stage

  const funnelOptions = {
      chart: { type: 'funnel', foreColor: '#373d3f' },
      plotOptions: { funnel: { dataLabels: { enabled: true, formatter: (val, opts) => opts.w.globals.labels[opts.dataPointIndex] + ': ' + val + 'L' } } },
      labels: ['Reservoir', 'Main Pipes', 'Irrigation Lines', 'Soil Absorption'],
      title: { text: 'Water Usage Funnel Chart', align: 'left' }
  };

  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <Chart options={timelineOptions} series={timelineSeries} type="rangeBar" height="350" />
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <Chart options={treemapOptions} series={treemapSeries} type="treemap" height="350" />
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <Chart options={bubbleOptions} series={bubbleSeries} type="bubble" height="350" />
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <Chart options={funnelOptions} series={funnelSeries} type="funnel" height="350" />
      </div>
    </>
  );
};

export default DataRelationshipCharts;