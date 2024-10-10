import React, { useState } from 'react';
import Header from '../../components/Header';
import HeroSection from '../../components/HeroSection';
import ProductList from '../../components/ProductList';
import Footer from '../../components/Footer';

const HomePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Dummy data untuk produk
  const products = [
    { id: 1, name: 'Running Shoes', price: '$120', imageUrl: '/path-to-image1.jpg' },
    { id: 2, name: 'Basketball Shoes', price: '$140', imageUrl: '/path-to-image2.jpg' },
    { id: 3, name: 'Casual Sneakers', price: '$90', imageUrl: '/path-to-image3.jpg' },
  ];
  
  const handleImageSearch = (file: File) => {
    console.log("Searching by image:", file);
  };

  return (
    <div>
      <Header setSearchTerm={setSearchTerm} handleImageSearch={handleImageSearch} />
      <HeroSection />
      <ProductList searchTerm={searchTerm} products={products} />
      <Footer />
    </div>
  );
};

export default HomePage;