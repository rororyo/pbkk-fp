import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ProductCard from '../../components/ProductCard';
import { Product } from '../../types/interfaces';

const FavItemPage: React.FC = () => {
  const [favoriteItems, setFavoriteItems] = useState<Product[]>([]);

  useEffect(() => {
    // Fetch favorite items from local storage, API, or a mock data source
    const fetchFavorites = () => {
      // Mock example, replace with actual fetch or local storage call
      const mockFavorites: Product[] = [
        {
          id: 1,
          item_name: 'Favorite Item 1',
          price: 100000,
          img_path: '/path/to/image1.jpg',
          description: 'Description for favorite item 1',
          stock: 10,
          category: { id: 1, name: 'Category 1' },
        },
        {
          id: 2,
          item_name: 'Favorite Item 2',
          price: 150000,
          img_path: '/path/to/image2.jpg',
          description: 'Description for favorite item 2',
          stock: 5,
          category: { id: 2, name: 'Category 2' },
        },
      ];

      setFavoriteItems(mockFavorites);
    };

    fetchFavorites();
  }, []);

  return (
    <div className="bg-gray-100 flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-4">My Favorite Items</h1>
        {favoriteItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {favoriteItems.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center h-64">
            <p className="text-center text-gray-600">No favorite items found</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default FavItemPage;