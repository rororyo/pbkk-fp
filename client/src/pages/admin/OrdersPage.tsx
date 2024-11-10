import React from 'react';
import Sidebar from '../../components/Sidebar';

const OrdersPage: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-gradient-to-r from-gray-100 to-gray-200">
      <Sidebar />
      <div className="flex-1 p-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8">Orders</h1>
        <div className="overflow-x-auto">
          <table className="w-full table-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gradient-to-r from-blue-500 to-blue-700 text-white">
                <th className="p-4 text-left font-semibold">Order ID</th>
                <th className="p-4 text-left font-semibold">Customer</th>
                <th className="p-4 text-left font-semibold">Date</th>
                <th className="p-4 text-left font-semibold">Status</th>
                <th className="p-4 text-left font-semibold">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b transition-colors hover:bg-gray-100">
                <td className="p-4">#12345</td>
                <td className="p-4">John Doe</td>
                <td className="p-4">Nov 10, 2024</td>
                <td className="p-4 text-green-600 font-semibold">Completed</td>
                <td className="p-4 font-bold">$123.45</td>
              </tr>
              <tr className="border-b transition-colors hover:bg-gray-100">
                <td className="p-4">#12346</td>
                <td className="p-4">Jane Smith</td>
                <td className="p-4">Nov 9, 2024</td>
                <td className="p-4 text-yellow-600 font-semibold">Pending</td>
                <td className="p-4 font-bold">$67.89</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;
