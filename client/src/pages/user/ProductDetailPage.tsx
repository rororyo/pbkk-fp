import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

interface Product {
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

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Dapatkan id produk dari URL
  const [product, setProduct] = useState<Product | null>(null); // State untuk produk
  const [loading, setLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const navigate = useNavigate(); // Hook untuk navigasi

  // Fetch product details from the API
  useEffect(() => {
    if (!id) {
      console.error('Product ID is undefined');
      return;
    }

    fetch(`http://localhost:4000/api/homepage/item/${id}`)
      .then(response => response.json())
      .then(data => {
        if (data.status === "success") {
          setProduct(data.data); // Set product state
        }
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching product details:', error);
        setLoading(false);
      });
  }, [id]);

  const handleAddToCart = () => {
    if (selectedSize) {
      console.log(`Added ${quantity}x ${product?.item_name} (Size: ${selectedSize}) to cart`);
    } else {
      console.log('Please select a size before adding to cart');
    }
  };

  const handleBackClick = () => {
    navigate('/'); // Navigasi ke homepage
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <button
        onClick={handleBackClick}
        className="mb-4 bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded"
      >
        Back to Homepage
      </button>
      <div className="flex flex-col md:flex-row gap-6">
        {/* Bagian kiri: Gambar Produk */}
        <div className="md:w-1/2">
          <img src={product.img_path} alt={product.item_name} className="w-full h-auto rounded-lg" />
        </div>

        {/* Bagian kanan: Informasi Produk */}
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{product.item_name}</h1>
          <p className="text-xl text-gray-700 mb-4">Rp {product.price.toLocaleString()}</p>
          <p className="text-gray-600 mb-6">{product.description}</p>

          {/* Pilihan ukuran sepatu */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Select Size:</h3>
            <div className="flex space-x-2">
              {["US 7", "US 8", "US 9", "US 10"].map((size) => (
                <button
                  key={size}
                  className={`border px-4 py-2 rounded-lg ${
                    selectedSize === size
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 text-gray-700'
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Pilihan jumlah produk */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Quantity:</h3>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-20 border rounded-lg px-4 py-2 text-center"
            />
          </div>

          {/* Tombol untuk menambahkan ke keranjang */}
          <button
            onClick={handleAddToCart}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
