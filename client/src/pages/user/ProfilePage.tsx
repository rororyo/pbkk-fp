import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const ProfilePage = () => {
  const [userData, setUserData] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const token = sessionStorage.getItem("auth_token");

      if (token) {
        const response = await fetch(`${import.meta.env.VITE_AUTH_API_URL}/current-user`, {
          method: 'GET',
          headers: {
            "Authorization": `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUserData(data);
          setFormData({
            name: data.name,
            email: data.email,
            role: data.role,
          });
        } else {
          navigate('/login'); // Redirect to login if user is not authenticated
        }
      } else {
        navigate('/login');
      }
    };

    fetchUserData();
  }, [navigate]);

  const handleLogout = async () => {
    const token = sessionStorage.getItem("auth_token");

    if (token) {
      const response = await fetch(`${import.meta.env.VITE_AUTH_API_URL}/logout`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      });

      if (response.ok) {
        sessionStorage.removeItem("auth_token");
        navigate('/auth');
      } else {
        alert('Failed to logout');
      }
    }
  };

  return (
    <>
      <Header />
      <div className="profile-page max-w-4xl mx-auto p-6 bg-white">
        <h1 className="text-2xl font-bold mb-4 text-center">Profile</h1>
        {userData ? (
          <div className="profile-details flex flex-col items-center space-y-6">
            <div className="profile-pic">
              <img
                src={'https://via.placeholder.com/150'}
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover"
              />
            </div>
            <div className="w-full max-w-md space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  disabled
                  className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Role</label>
                <input
                  type="text"
                  name="role"
                  value={formData.role}
                  disabled
                  className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex justify-center items-center">
                <button
                  type="button"
                  onClick={handleLogout}
                  className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default ProfilePage;
