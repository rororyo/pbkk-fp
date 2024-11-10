import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <h1 className="text-xl">My App</h1>
      <ul className="flex space-x-4">
        <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
        <li><Link to="/login" className="hover:text-gray-400">Login</Link></li>
        <li><Link to="/signup" className="hover:text-gray-400">Sign Up</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
