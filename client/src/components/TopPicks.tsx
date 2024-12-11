import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

interface Category {
  id: number;
  name: string;
}

interface Item {
  id: number;
  item_name: string;
  img_path: string;
  description: string;
  stock: number;
  price: number;
  tags: string[];
  category: Category;
}

const TopPicks: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/homepage/items`);
        const data = await response.json();

        if (data.status === "success") {
          setItems(data.data);
        } else {
          setError("Failed to fetch items.");
        }
      } catch (err) {
        setError("An error occurred while fetching items."+err);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  if (loading) return <p className="text-center text-gray-500">Loading items...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Top Picks</h2>
      <div className="flex gap-4 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
        {items.map((item) => (
          <div
            className="min-w-[250px] bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            key={item.id}
            onClick={() => navigate(`/product/${item.id}`)} // Navigate to the product detail page
          >
            <img
              src={item.img_path}
              alt={item.item_name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800">{item.item_name}</h3>
              <p className="text-sm text-gray-600 mt-2 line-clamp-2">{item.description}</p>
              <p className="text-sm text-gray-700 mt-1">Category: {item.category.name}</p>
              <p className="text-lg font-semibold text-gray-900 mt-2">
                Rp {item.price.toLocaleString()}
              </p>
              <p className="text-sm text-gray-600 mt-1">Stock: {item.stock}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {item.tags.map((tag, index) => (
                  <span
                    className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
                    key={index}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPicks;
