import React, { useState } from 'react';

interface HeaderProps {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  handleImageSearch: (file: File) => void;
}

const Header: React.FC<HeaderProps> = ({ setSearchTerm, handleImageSearch }) => {
  const [searchTermInput, setSearchTermInput] = useState("");

  // Handle input search
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchTerm(searchTermInput); // Kirim search term ke komponen HomePage
  };

  // Handle search by image
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      handleImageSearch(file); // Kirim file ke komponen HomePage
    }
  };

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">ShoeStore</h1>
      <form className="flex items-center space-x-4" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for shoes..."
          className="px-4 py-2 rounded-lg text-black"
          value={searchTermInput}
          onChange={(e) => setSearchTermInput(e.target.value)}
        />
        <button type="submit" className="bg-blue-500 px-4 py-2 rounded-lg">Search</button>
      </form>
      <div>
        <label className="bg-gray-600 px-4 py-2 rounded-lg cursor-pointer">
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageUpload}
          />
          Search by Image
        </label>
      </div>
    </header>
  );
};

export default Header;
