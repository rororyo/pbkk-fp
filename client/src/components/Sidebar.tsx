import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const [adminName, setAdminName] = useState('');

  useEffect(() => {
    const name = localStorage.getItem('adminName') || 'Admin';
    setAdminName(name);
  }, []);

  return (
    <div className="w-64 bg-gradient-to-b from-blue-600 to-blue-800 shadow-lg h-screen p-6 text-white">
      <h1 className="text-2xl font-bold mb-8">Admin Dashboard</h1>
      <div className="mb-6">
        <p className="text-lg font-semibold">Welcome, {adminName}!</p>
      </div>
      <nav className="space-y-6">
        <button
          onClick={() => navigate('/dashboard')}
          className="flex items-center space-x-3 hover:bg-blue-700 p-3 rounded-md transition-transform transform hover:scale-105"
        >
          <i className="fas fa-tachometer-alt"></i>
          <span>Overview</span>
        </button>
        <button
          onClick={() => navigate('/users')}
          className="flex items-center space-x-3 hover:bg-blue-700 p-3 rounded-md transition-transform transform hover:scale-105"
        >
          <i className="fas fa-users"></i>
          <span>Users</span>
        </button>
        <button
          onClick={() => navigate('/orders')}
          className="flex items-center space-x-3 hover:bg-blue-700 p-3 rounded-md transition-transform transform hover:scale-105"
        >
          <i className="fas fa-box"></i>
          <span>Orders</span>
        </button>
        <button
          onClick={() => navigate('/products')}
          className="flex items-center space-x-3 hover:bg-blue-700 p-3 rounded-md transition-transform transform hover:scale-105"
        >
          <i className="fas fa-clipboard-list"></i>
          <span>Products</span>
        </button>
        <button
          onClick={() => navigate('/reports')}
          className="flex items-center space-x-3 hover:bg-blue-700 p-3 rounded-md transition-transform transform hover:scale-105"
        >
          <i className="fas fa-chart-line"></i>
          <span>Reports</span>
        </button>
        <button
          onClick={() => navigate('/logout')}
          className="flex items-center space-x-3 hover:bg-red-700 p-3 rounded-md transition-transform transform hover:scale-105 text-red-300"
        >
          <i className="fas fa-sign-out-alt"></i>
          <span>Logout</span>
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
