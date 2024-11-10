import React, { useState } from 'react';

const Dropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="bg-gray-800 text-white px-4 py-2 rounded-md"
      >
        Options
      </button>

      {isOpen && (
        <ul className="absolute bg-white shadow-md rounded-lg mt-2 py-2 w-48">
          <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Option 1</li>
          <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Option 2</li>
          <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Option 3</li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
