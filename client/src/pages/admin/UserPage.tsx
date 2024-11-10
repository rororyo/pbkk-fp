import React from 'react';
import Sidebar from '../../components/Sidebar';

const UserPage: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-gradient-to-l from-gray-50 to-gray-200">
      <Sidebar />
      <div className="flex-1 p-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8">Users</h1>
        <div className="overflow-x-auto">
          <table className="w-full table-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-indigo-500 text-white">
                <th className="p-4 text-left font-semibold">ID</th>
                <th className="p-4 text-left font-semibold">Name</th>
                <th className="p-4 text-left font-semibold">Email</th>
                <th className="p-4 text-left font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b transition-colors hover:bg-gray-100">
                <td className="p-4">1</td>
                <td className="p-4">John Doe</td>
                <td className="p-4">johndoe@example.com</td>
                <td className="p-4 text-green-500 font-bold">Active</td>
              </tr>
              <tr className="border-b transition-colors hover:bg-gray-100">
                <td className="p-4">2</td>
                <td className="p-4">Jane Smith</td>
                <td className="p-4">janesmith@example.com</td>
                <td className="p-4 text-red-500 font-bold">Inactive</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
