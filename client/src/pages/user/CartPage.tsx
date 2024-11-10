import React from 'react';
import { CartItem } from '../../types/interfaces';
import Header from '../../components/Header';

const CartPage: React.FC = () => {
  const cartItems: CartItem[] = [
    { id: 1, name: 'Sneakers', price: 50, quantity: 1 },
    { id: 2, name: 'Sandals', price: 30, quantity: 2 },
  ];

  const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-100 p-4">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-md p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Shopping Cart</h1>
          {cartItems.length > 0 ? (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center border-b pb-2"
                >
                  <div>
                    <h2 className="text-lg font-semibold text-gray-700">{item.name}</h2>
                    <p className="text-gray-500">Quantity: {item.quantity}</p>
                  </div>
                  <p className="text-gray-700 font-bold">${item.price * item.quantity}</p>
                </div>
              ))}
              <div className="flex justify-between items-center mt-4">
                <h2 className="text-xl font-bold text-gray-800">Total: </h2>
                <p className="text-xl font-bold text-gray-800">${totalAmount}</p>
              </div>
              <button className="w-full mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                Proceed to Checkout
              </button>
            </div>
          ) : (
            <p className="text-gray-500">Your cart is empty.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default CartPage;
