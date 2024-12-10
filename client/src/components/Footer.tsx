import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-100 text-gray-800 p-6">
      <div className="max-w-screen-xl mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/3 mb-4">
          <h4 className="font-bold text-lg">About</h4>
          <ul className="mt-2">
            <li><a href="/Setapak" className="block hover:text-blue-600">Setapak</a></li>
            <li><a href="/terms" className="block hover:text-blue-600">Terms & Conditions</a></li>
            <li><a href="/privacy" className="block hover:text-blue-600">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 mb-4">
          <h4 className="font-bold text-lg">Customer Care</h4>
          <ul className="mt-2">
            <li><a href="/faq" className="block hover:text-blue-600">FAQ</a></li>
            <li><a href="/return-policy" className="block hover:text-blue-600">Return Policy</a></li>
            <li><a href="/contact" className="block hover:text-blue-600">Contact Us</a></li>
            <li><a href="/sitemap" className="block hover:text-blue-600">Sitemap</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 mb-4">
          <h4 className="font-bold text-lg">Subscribe to our emails</h4>
          <input type="email" placeholder="Enter your email" className="w-full p-2 border border-gray-300 rounded mt-2" />
          <button className="bg-black text-white p-2 rounded mt-2 w-full">Sign Up</button>
          <p className="mt-2 text-sm text-gray-600">
            By signing up, you agree to receive any communications from us and have read our 
            <a href="/privacy" className="text-blue-500 hover:underline"> Privacy Policy</a> and 
            <a href="/terms" className="text-blue-500 hover:underline"> Terms & Conditions</a>.
          </p>
        </div>
      </div>
      <p className="text-center mt-6 text-sm">&copy; {currentYear} Setapak. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
