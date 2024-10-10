import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <p>&copy; 2024 ShoeStore. All rights reserved.</p>
      <div className="mt-4">
        <a href="https://facebook.com" className="text-blue-500 mx-2">Facebook</a>
        <a href="https://instagram.com" className="text-pink-500 mx-2">Instagram</a>
        <a href="https://twitter.com" className="text-blue-300 mx-2">Twitter</a>
      </div>
    </footer>
  );
};

export default Footer;
