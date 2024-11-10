import React from 'react';
import Sidebar from '../../components/Sidebar';

const ReportsPage: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-gradient-to-r from-gray-100 to-blue-100">
      <Sidebar />
      <div className="flex-1 p-8">
        <h1 className="text-4xl font-extrabold text-blue-900 mb-8">Reports</h1>
        <div className="bg-white shadow-lg rounded-lg p-8 hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">
            Monthly Revenue Report
          </h2>
          <p className="text-gray-700 text-lg">Revenue for November 2024: <span className="font-bold">$12,345.67</span></p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-8 mt-8 hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">
            User Growth Report
          </h2>
          <p className="text-gray-700 text-lg">New Users in November 2024: <span className="font-bold">234</span></p>
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;
