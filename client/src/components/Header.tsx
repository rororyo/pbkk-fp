import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const [searchTermInput, setSearchTermInput] = useState("");
  const [, setImageSearchLoading] = useState(false);
  const [menuOpen, setmenuOpen] = useState(false);
  const [searchBarVisible, setSearchBarVisible] = useState(false);
  const navigate = useNavigate();

  const togglemenu = () => {
    setmenuOpen(!menuOpen);
  };

  const toggleSearchBar = () => {
    setSearchBarVisible(!searchBarVisible);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/categories/${searchTermInput}`);
  };

  const goToCategory = (category: string) => {
    navigate(`/categories/${category}`);
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setImageSearchLoading(true);
      try {
        const formData = new FormData();
        formData.append('file', file);

        const response = await fetch(
          `${import.meta.env.VITE_ROBOFLOW_API_URL}`,
          { method: 'POST', body: formData }
        );

        const data = await response.json();
        if (data && data.predictions && data.predictions.length > 0) {
          const detectedClass = data.predictions[0].class;
          goToCategory(detectedClass);
        } else {
          console.log('No objects detected');
          alert('No objects detected');
        }
      } catch (error) {
        console.error('Error during image search:', error);
      } finally {
        setImageSearchLoading(false);
      }
    }
  };

  return (
    <header className="flex flex-col">
      <div className="justify-between items-center p-4 bg-gray-100 border-b hidden md:flex"></div>
      <header className="flex flex-col bg-white shadow-sm">
        <div className="flex items-center justify-between p-4 border-b">
          <h1 className="text-2xl font-bold text-gray-700 md:ml-auto" onClick={() => navigate('/')}>OnlyFootwear</h1>
          
          {/* Ikon Search dan Hamburger untuk layar kecil */}
          <div className="flex items-center space-x-4 md:hidden">
            <button
              onClick={toggleSearchBar}
              className="text-gray-700 text-xl hover:text-black transition-all"
            >
              <i className="fas fa-search"></i>
            </button>
            <button
              className="text-gray-700 text-xl hover:text-black transition-all"
              onClick={togglemenu}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
  
          {/* Elemen untuk layar besar */}
          <div className="hidden md:flex items-center space-x-8 mx-auto">
            <form className="flex items-center border border-gray-300 rounded-lg overflow-hidden shadow-sm" onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Search"
                className="flex-1 px-4 py-2 focus:outline-none placeholder-gray-500 text-gray-700"
                value={searchTermInput}
                onChange={(e) => setSearchTermInput(e.target.value)}
              />
              <button
                type="submit"
                className="px-3 py-2 border-l border-gray-300 text-gray-500 hover:text-black transition-all"
              >
                <i className="fas fa-search"></i>
              </button>
            </form>
          </div>
  
          <div className="hidden md:flex items-center space-x-6 mr-auto">
            <label className="relative cursor-pointer">
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />
              <i className="fas fa-camera text-xl text-gray-700 hover:text-black transition-all"></i>
            </label>
            <label className="relative cursor-pointer">
              <i className="fas fa-ruler-combined text-xl text-gray-700 hover:text-black transition-all" onClick={() => navigate('/foot-measurement')}></i>
            </label>
  
            <div className="flex space-x-6 text-gray-700">
              <i className="fas fa-user text-xl hover:text-black transition-all" onClick={() => navigate('/auth')}></i>
              <i className="fas fa-heart text-xl hover:text-black transition-all" onClick={() => navigate('/favourites')}></i>
              <i className="fas fa-shopping-bag text-xl hover:text-black transition-all" onClick={() => navigate('/cart')}></i>
            </div>
          </div>
        </div>
  
        {searchBarVisible && (
          <div className="absolute top-16 left-0 right-0 p-4 border-t bg-gray-50 md:hidden">
            <form className="flex items-center border border-gray-300 rounded-lg overflow-hidden shadow-sm" onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Search"
                className="flex-1 px-4 py-2 focus:outline-none placeholder-gray-500 text-gray-700"
                value={searchTermInput}
                onChange={(e) => setSearchTermInput(e.target.value)}
              />
              <button
                type="submit"
                className="px-3 py-2 border-l border-gray-300 text-gray-500 hover:text-black transition-all"
              >
                <i className="fas fa-search"></i>
              </button>
            </form>
          </div>
        )}
  
  {menuOpen && (
  <div className="absolute top-16 left-0 right-0 flex flex-col space-y-4 p-4 bg-gray-50 border-t md:hidden z-50">
    <div className="flex justify-center items-center space-x-6 p-4">
      <label className="relative cursor-pointer">
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageUpload}
        />
        <i className="fas fa-camera text-xl text-gray-700 hover:text-black transition-all"></i>
      </label>
      <label className="relative cursor-pointer">
        <i
          className="fas fa-ruler-combined text-xl text-gray-700 hover:text-black transition-all"
          onClick={() => navigate('/foot-measurement')}
        ></i>
      </label>
      <div className="flex space-x-6 text-gray-700">
        <i className="fas fa-user text-xl hover:text-black transition-all" onClick={() => navigate('/auth')}></i>
        <i className="fas fa-heart text-xl hover:text-black transition-all" onClick={() => navigate('/favourites')}></i>
        <i className="fas fa-shopping-bag text-xl hover:text-black transition-all" onClick={() => navigate('/cart')}></i>
      </div>
    </div>

    <div className="flex flex-col space-y-2">
      <a href="#" className="text-gray-700 hover:text-black">New</a>
      <button onClick={() => goToCategory('sandals')} className="text-gray-700 hover:text-black text-left">
        Sandals
      </button>
      <button onClick={() => goToCategory('sneakers')} className="text-gray-700 hover:text-black text-left">
        Sneakers
      </button>
      <button onClick={() => goToCategory('crocs')} className="text-gray-700 hover:text-black text-left">
        Crocs
      </button>
      <button onClick={() => goToCategory('high heels')} className="text-gray-700 hover:text-black text-left">
        High Heels
      </button>
      <button onClick={() => goToCategory('boots')} className="text-gray-700 hover:text-black text-left">
        Boots
      </button>
      <a href="#" className="text-red-500 font-bold hover:text-red-700">SALE</a>
    </div>
  </div>
)}

  
        <nav className="flex-wrap justify-center space-x-3 p-2 border-t hidden md:flex">
          <a href="#" className="text-gray-700 hover:text-black">New</a>
          <button onClick={() => goToCategory('sandals')} className="text-gray-700 hover:text-black">Sandals</button>
          <button onClick={() => goToCategory('sneakers')} className="text-gray-700 hover:text-black">Sneakers</button>
          <button onClick={() => goToCategory('crocs')} className="text-gray-700 hover:text-black">Crocs</button>
          <button onClick={() => goToCategory('high heels')} className="text-gray-700 hover:text-black">High Heels</button>
          <button onClick={() => goToCategory('boots')} className="text-gray-700 hover:text-black">Boots</button>
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
