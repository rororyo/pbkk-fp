import React, { useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: string;
  description: string;
  sizes: string[];
  imageUrl: string;
}

const ProductDetailPage: React.FC = () => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);

  // Dummy product data
  const product: Product = {
    id: 1,
    name: 'Running Shoes',
    price: '$120',
    description: 'High-quality running shoes designed for comfort and performance.',
    sizes: ['US 7', 'US 8', 'US 9', 'US 10', 'US 11'],
    imageUrl: '/path-to-image1.jpg',
  };

  const handleAddToCart = () => {
    if (selectedSize) {
      // Logika menambahkan produk ke keranjang
      console.log(`Added ${quantity}x ${product.name} (Size: ${selectedSize}) to cart`);
      // Notifikasi berhasil, bisa menggunakan toast atau alert
    } else {
      // Pemberitahuan jika ukuran belum dipilih
      console.log('Please select a size before adding to cart');
    }
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Bagian kiri: Gambar Produk */}
        <div className="md:w-1/2">
          <img src={product.imageUrl} alt={product.name} className="w-full h-auto rounded-lg" />
        </div>

        {/* Bagian kanan: Informasi Produk */}
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-xl text-gray-700 mb-4">{product.price}</p>
          <p className="text-gray-600 mb-6">{product.description}</p>

          {/* Pilihan ukuran sepatu */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Select Size:</h3>
            <div className="flex space-x-2">
              {product.sizes.map((size) => (
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