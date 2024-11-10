import React from 'react';
import Sidebar from '../../components/Sidebar';

const ProductsPage: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-white to-gray-100">
      <Sidebar />
      <div className="flex-1 p-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8">Products</h1>
        <div className="overflow-x-auto">
          <table className="w-full table-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th className="p-4 text-left font-semibold">Product ID</th>
                <th className="p-4 text-left font-semibold">Name</th>
                <th className="p-4 text-left font-semibold">Category</th>
                <th className="p-4 text-left font-semibold">Price</th>
                <th className="p-4 text-left font-semibold">Stock</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b transition-colors hover:bg-blue-50">
                <td className="p-4">1</td>
                <td className="p-4">Sneakers</td>
                <td className="p-4">Footwear</td>
                <td className="p-4 text-green-600 font-bold">$50.00</td>
                <td className="p-4">200</td>
              </tr>
              <tr className="border-b transition-colors hover:bg-blue-50">
                <td className="p-4">2</td>
                <td className="p-4">Sandals</td>
                <td className="p-4">Footwear</td>
                <td className="p-4 text-green-600 font-bold">$30.00</td>
                <td className="p-4">150</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
