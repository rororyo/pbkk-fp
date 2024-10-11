import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import HeroSection from '../../components/HeroSection';
import ProductList from '../../components/ProductList';
import Footer from '../../components/Footer';

// Define the type for the individual item in the API response
interface ProductItem {
  id: number;
  item_name: string;
  img_path: string;
  description: string;
  stock: number;
  price: number;
  tags: string[];
  category: {
    id: number;
    name: string;
  };
}

// Define the type for categories
interface Category {
  id: number;
  name: string;
}

// Define the type for the product that will be used in the ProductList component
interface Product {
  id: number;
  name: string;
  price: string;
  imageUrl: string;
  description: string;
  stock: number;
  category: Category; // Add category here
}

const HomePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  // Fetch categories from the API
  useEffect(() => {
    fetch('http://localhost:4000/api/homepage/categories')
      .then(response => response.json())
      .then(data => {
        if (data.status === "success") {
          setCategories(data.data);
        }
      })
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

  // Fetch products from the API
  useEffect(() => {
    fetch('http://localhost:4000/api/homepage/items')
      .then(response => response.json())
      .then(data => {
        if (data.status === "success") {
          const formattedProducts: Product[] = data.data.map((item: ProductItem) => ({
            id: item.id,
            name: item.item_name,
            price: `Rp ${item.price.toLocaleString()}`,
            imageUrl: item.img_path,
            description: item.description,
            stock: item.stock,
            category: item.category // Include category in each product
          }));
          setProducts(formattedProducts);
        }
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  // Handle category change
  const handleCategoryChange = (categoryId: number) => {
    setSelectedCategory(categoryId);
  };

  // Filter products by selected category
  const filteredProducts = selectedCategory
    ? products.filter(product => product.category.id === selectedCategory)
    : products;

  const handleImageSearch = (file: File) => {
    console.log("Searching by image:", file);
  };

  return (
    <div>
      <Header setSearchTerm={setSearchTerm} handleImageSearch={handleImageSearch} />
      <HeroSection />
      
      {/* Category Filter Dropdown */}
      <div className="category-filter">
        <label htmlFor="category">Filter by Category: </label>
        <select id="category" onChange={(e) => handleCategoryChange(Number(e.target.value))}>
          <option value="">All Categories</option>
          {categories.map(category => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      
      {/* Product List */}
      <ProductList searchTerm={searchTerm} products={filteredProducts} />
      
      <Footer />
    </div>
  );
};

export default HomePage;
