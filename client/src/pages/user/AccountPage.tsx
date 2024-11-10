import React from 'react';
import Header from '../../components/Header';

const AccountPage: React.FC = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-100 p-4">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-md p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">My Account</h1>
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-700">Personal Information</h2>
              <div className="mt-2">
                <p className="text-gray-600">Name: John Doe</p>
                <p className="text-gray-600">Email: johndoe@example.com</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-700">Order History</h2>
              <div className="mt-2">
                <p className="text-gray-600">Order #12345 - Delivered</p>
                <p className="text-gray-600">Order #67890 - Processing</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-700">Settings</h2>
              <div className="mt-2">
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                  Change Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountPage;
