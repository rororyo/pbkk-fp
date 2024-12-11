import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Product } from '../../types/interfaces';
import Loader from '../../components/Loader';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState<number>(1); // Default quantity is 1
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      setLoading(true);
      fetch(`${import.meta.env.VITE_API_URL}/homepage/item/${id}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.status === 'success') {
            setProduct(data.data);
          } else {
            setError(data.message || 'Product not found');
          }
        })
        .catch((error) => setError(error.message || 'An error occurred'))
        .finally(() => setLoading(false));
    }
  }, [id]);

  const handleAddToCart = () => {
    if (!product) return;

    const cartItem = {
      item_id: product.id,
      quantity,
    };

    fetch(`${import.meta.env.VITE_API_URL}/cart`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('auth_token')}`,
      },
      body: JSON.stringify(cartItem),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 'success') {
          alert('Item added to cart!');
        } else {
          alert('Failed to add item to cart');
        }
      })
      .catch((error) => alert('Error: ' + error.message));
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="bg-gray-100 flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 p-8">
        <div className="max-w-4xl mx-auto p-6 flex gap-8">
          {/* Image section */}
          <div className="flex-shrink-0 w-1/3">
            <img
              src={product.img_path}
              alt={product.item_name}
              className="w-full h-auto object-cover rounded-md"
            />
          </div>

          {/* Product details section */}
          <div className="flex-1">
            <h1 className="text-2xl font-bold mb-4">{product.item_name}</h1>
            <p className="text-lg text-gray-700 mb-4">{product.description}</p>
            <p className="text-xl font-bold text-gray-800 mb-4">${product.price}</p>
            <p className="text-gray-600 mb-4">Stock: {product.stock}</p>
            <p className="text-gray-600 mb-4">Category: {product.category.name}</p>

            {/* Quantity control */}
            <div className="flex items-center gap-4 mb-4">
              <label htmlFor="quantity" className="text-gray-600">Quantity:</label>
              <input
                type="number"
                id="quantity"
                value={quantity}
                min="1"
                max={product.stock}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-16 p-2 border rounded-md"
              />
            </div>

            {/* Add to Cart button */}
            <button
              onClick={handleAddToCart}
              className="w-full mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetailPage;
