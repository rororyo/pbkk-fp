import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import "@fortawesome/fontawesome-free/css/all.min.css";

interface HeaderProps {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  handleImageSearch: (file: File) => void;
}

const Header: React.FC<HeaderProps> = ({ setSearchTerm, handleImageSearch }) => {
  const [searchTermInput, setSearchTermInput] = useState("");
  const [imageSearchLoading, setImageSearchLoading] = useState(false);
  const [footSizeLoading, setFootSizeLoading] = useState(false);
  const navigate = useNavigate(); 

  // Handle input search
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchTerm(searchTermInput);
  };

  // Handle search by image
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setImageSearchLoading(true);
      try {
        const formData = new FormData();
        formData.append('file', file);

        const response = await fetch(
          'https://detect.roboflow.com/pbkk-footwear/1?api_key=n3srtvio0FyZNRt19mra',
          { method: 'POST', body: formData }
        );

        const data = await response.json();
        if (data && data.predictions && data.predictions.length > 0) {
          const detectedClass = data.predictions[0].class;
          setSearchTerm(detectedClass);
        } else {
          console.log('No objects detected');
        }
      } catch (error) {
        console.error('Error during image search:', error);
      } finally {
        setImageSearchLoading(false);
      }
    }
  };

  const handleFootSizeUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setFootSizeLoading(true);
      try {
        const formData = new FormData();
        formData.append('image', file);
        formData.append('gender', 'Men');
        
        const response = await fetch(
          'http://localhost:4000/api/homepage/foot-size',
          { method: 'POST', body: formData }
        );
  
        const data = await response.json();
  
        if (data && data.status === 'success') {
        // Ambil informasi ukuran kaki dan ukuran sepatu dari respons
        const footSize = data.data.footSize.toFixed(2); // Membulatkan footSize ke 2 desimal
        const shoeSize = data.data.shoeSize;
        
        // Format pesan alert
        const message = `
          Foot size successfully calculated:
          - Foot Size: ${footSize} cm
          - Shoe Size (US): ${shoeSize.US}
          - Shoe Size (EU): ${shoeSize.EU}
          - Shoe Size (UK): ${shoeSize.UK}
          - Foot Length (cm): ${shoeSize['Foot Length (cm)']}
        `;

        // Tampilkan pesan dalam alert
        alert(message);
        } else {
          alert('Error in calculating foot size. Please try again.');
        }
      } catch (error) {
        alert('Error during foot size calculation. Please check your connection or try again later.');
      } finally {
        setFootSizeLoading(false);
      }
    }
  };  
  

  return (
    <header className="flex flex-col">
      <div className="flex justify-between items-center p-4 bg-gray-100 border-b"></div>
      <header className="flex flex-col bg-white shadow-sm">
      <div className="flex flex-col md:flex-row justify-center items-center p-4 border-b">
        <h1 className="text-3xl font-bold text-gray-700 mr-4">OnlyFootwear</h1>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <form className="flex items-center border rounded-lg overflow-hidden shadow-md" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search"
              className="px-4 py-2 focus:outline-none"
              value={searchTermInput}
              onChange={(e) => setSearchTermInput(e.target.value)}
            />
            <button
              type="submit"
              className="text-white bg-indigo-600 px-3 py-2 hover:bg-indigo-700 transition-all"
            >
              <i className="fas fa-search"></i>
            </button>
          </form>
          <label className="relative cursor-pointer">
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
            <div className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-all">
              {imageSearchLoading ? (
                <span className="text-sm text-gray-500">Loading...</span>
              ) : (
                <i className="fas fa-camera text-gray-700"></i>
              )}
            </div>
          </label>
          <label className="relative cursor-pointer">
              <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFootSizeUpload}
            />
            <div className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-all">
              {footSizeLoading ? (
                <span className="text-sm text-gray-500">Loading...</span>
              ) : (
                <i className="fas fa-ruler-combined text-gray-700"></i>
              )}
            </div>
          </label>
          <div className="flex space-x-3 text-gray-700">
            <i className="fas fa-user hover:text-black transition-all"></i>
            <i className="fas fa-heart hover:text-black transition-all"></i>
            <i className="fas fa-shopping-bag hover:text-black transition-all"></i>
          </div>
        </div>
      </div>
      <nav className="flex flex-wrap justify-center space-x-3 p-2 border-t">
        <a href="#" className="text-gray-700 hover:text-black">New</a>
        <a href="#" className="text-gray-700 hover:text-black">Brand</a>
        <a href="#" className="text-gray-700 hover:text-black">Women</a>
        <a href="#" className="text-gray-700 hover:text-black">Men</a>
        <a href="#" className="text-gray-700 hover:text-black">Bags</a>
        <a href="#" className="text-gray-700 hover:text-black">Accessories</a>
        <a href="#" className="text-red-500 font-bold hover:text-red-700">SALE</a>
      </nav>
      <div className="flex justify-center items-center p-2 bg-black text-white">
        <i className="fas fa-shipping-fast mr-2"></i>
        <span>Free Shipping All Over Indonesia! -</span>
        <a href="#" className="ml-1 underline hover:text-gray-300">
          Shop Now
        </a>
      </div>
    </header>
    </header>
  );
};

export default Header;
