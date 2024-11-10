import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ProductCard from '../../components/ProductCard';
import { Product } from '../../types/interfaces';

const CategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const [, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Fetch all items from the API
    fetch(`${import.meta.env.VITE_HOMEPAGE_API_URL}/items`)
      .then((response) => response.json())
      .then((data) => {
        const items = data.data;
        setProducts(items);

        // Filter products based on the search term or category
        if (category && category.trim() !== '') {
          const filtered = items.filter((product: Product) =>
            product.item_name.toLowerCase().includes(category.toLowerCase())
          );
          setFilteredProducts(filtered);
        } else {
          setFilteredProducts(items);
        }
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, [category]);

  return (
    <div className="bg-gray-100 flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-4">Results for: {category}</h1>
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center h-64">
            <p className="text-center text-gray-600">No result found</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default CategoryPage;
