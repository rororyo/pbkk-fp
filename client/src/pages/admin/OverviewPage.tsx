import React from 'react';
import Sidebar from '../../components/Sidebar';

const OverviewPage: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-gradient-to-tr from-blue-50 to-blue-100">
      <Sidebar />
      <div className="flex-1 p-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8">Overview</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white shadow-lg rounded-xl p-6 transition-transform transform hover:scale-105 hover:shadow-2xl">
            <h2 className="text-xl font-semibold text-blue-700 mb-2">Total Users</h2>
            <p className="text-3xl font-extrabold text-gray-900">1,234</p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 transition-transform transform hover:scale-105 hover:shadow-2xl">
            <h2 className="text-xl font-semibold text-blue-700 mb-2">Total Orders</h2>
            <p className="text-3xl font-extrabold text-gray-900">567</p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 transition-transform transform hover:scale-105 hover:shadow-2xl">
            <h2 className="text-xl font-semibold text-blue-700 mb-2">Revenue</h2>
            <p className="text-3xl font-extrabold text-gray-900">$12,345</p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 transition-transform transform hover:scale-105 hover:shadow-2xl">
            <h2 className="text-xl font-semibold text-blue-700 mb-2">Products</h2>
            <p className="text-3xl font-extrabold text-gray-900">89</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewPage;
