import React from 'react';
import { Link } from 'react-router-dom';

interface ProductListProps {
  searchTerm: string;
  products: { id: number; name: string; price: string; imageUrl: string }[];
}

const ProductList: React.FC<ProductListProps> = ({ searchTerm, products }) => {
  // Filter produk berdasarkan search term
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold mb-6">Our Latest Collection</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="border p-4 rounded-lg">
              <img src={product.imageUrl} alt={product.name} className="h-40 object-cover mb-4" />
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.price}</p>
              <Link to={`/items/${product.id}`} className="text-blue-500 hover:underline">
                View Details
              </Link>
            </div>
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </section>
  );
};

export default ProductList;
