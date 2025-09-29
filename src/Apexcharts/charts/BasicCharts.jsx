import React from 'react';
import Chart from 'react-apexcharts';

const BasicCharts = () => {
  // --- Data for Basic Charts ---
  const employeeData = {
    names: ['Ali', 'Bhavna', 'Chen', 'David', 'Elena'],
    salaries: [55000, 72000, 68000, 91000, 84000]
  };

  // --- Bar Chart Config ---
  const barChartOptions = {
    chart: { id: 'bar-chart', toolbar: { show: false }, foreColor: '#373d3f' },
    xaxis: { categories: employeeData.names },
    title: { text: 'Employee Salaries (Bar Chart)', align: 'left' },
  };
  const barChartSeries = [{ name: 'Salary', data: employeeData.salaries }];

  // --- Area Chart Config ---
  const areaChartOptions = {
    chart: { id: 'area-chart', toolbar: { show: false }, foreColor: '#373d3f' },
    xaxis: { categories: employeeData.names },
    stroke: { curve: 'smooth' },
    title: { text: 'Employee Salaries (Area Chart)', align: 'left' },
  };
  const areaChartSeries = [{ name: 'Salary', data: employeeData.salaries }];

  return (
    <>
      {/* Bar Chart */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <Chart options={barChartOptions} series={barChartSeries} type="bar" width="100%" height="350" />
      </div>

      {/* Area Chart */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <Chart options={areaChartOptions} series={areaChartSeries} type="area" width="100%" height="350" />
      </div>
    </>
  );
};

export default BasicCharts;