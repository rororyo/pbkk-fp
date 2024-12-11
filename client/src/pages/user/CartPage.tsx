import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import { useNavigate } from 'react-router-dom'; // Importing useNavigate for navigation
import Footer from '../../components/Footer';

interface CartItemResponse {
  id: number;
  user_id: number;
  quantity: number;
  item: {
    id: number;
    item_name: string;
    img_path: string;
    description: string;
    stock: number;
    price: number;
    tags: string[];
  };
}

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItemResponse[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false); // Modal state for checkout
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    // Check if auth_user is in sessionStorage
    const authUser = sessionStorage.getItem('auth_token');
    if (!authUser) {
      alert('You need to login to view your cart');
      navigate('/');
      return;
    }

    const fetchCartItems = async () => {
      const token = sessionStorage.getItem('auth_token'); // Retrieve the token from sessionStorage

      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/cart`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`, // Add the Bearer token to the request headers
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch cart items');
        }

        const data = await response.json();
        if (data.status === 'success') {
          setCartItems(data.data); // Set the cart items based on the response data
        } else {
          throw new Error(data.message || 'Failed to fetch cart items');
        }
      } catch (error) {
        setError(error instanceof Error ? error.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchCartItems();
  }, [navigate]); // Adding navigate to dependency array to ensure effect is called properly

  const totalAmount = cartItems.reduce((acc, item) => acc + item.item.price * item.quantity, 0);

  const handleCheckoutClick = () => {
    setIsModalOpen(true); // Open the modal when the "Proceed to Checkout" button is clicked
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Header />
      <div className=" p-4">
        <div className="max-w-4xl mx-auto bg-white p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Shopping Cart</h1>
          {cartItems.length > 0 ? (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between items-center border-b pb-2">
                  <div className="flex items-center">
                    <img
                      src={item.item.img_path}
                      alt={item.item.item_name}
                      className="w-20 h-20 object-cover rounded-md mr-4"
                    />
                    <div>
                      <h2 className="text-lg font-semibold text-gray-700">{item.item.item_name}</h2>
                      <p className="text-gray-500">Quantity: {item.quantity}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 font-bold">${item.item.price * item.quantity}</p>
                </div>
              ))}
              <div className="flex justify-between items-center mt-4">
                <h2 className="text-xl font-bold text-gray-800">Total: </h2>
                <p className="text-xl font-bold text-gray-800">${totalAmount}</p>
              </div>
              <button
                onClick={handleCheckoutClick}
                className="w-full mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Proceed to Checkout
              </button>
            </div>
          ) : (
            <p className="text-gray-500">Your cart is empty.</p>
          )}
        </div>
      </div>

      {/* Modal for Proceed to Checkout */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-md shadow-lg max-w-sm w-full">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Checkout (Demo)</h2>
            <p className="text-gray-700">This is a demo, checkout is not available.</p>
            <div className="mt-4 flex justify-end">
              <button
                onClick={handleCloseModal}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default CartPage;
