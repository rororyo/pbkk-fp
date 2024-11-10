import React from 'react';
import { ProductCardProps } from '../types/interfaces';

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <img
        src={product.img_path}
        alt={product.item_name}
        className="w-full h-40 object-cover mb-4"
      />
      <h2 className="text-lg font-semibold">{product.item_name}</h2>
      <p className="text-gray-600">{product.description}</p>
      <p className="text-blue-500 font-bold">
        {product.price.toLocaleString()} IDR
      </p>
      <p
        className={`text-sm ${
          product.stock > 0 ? 'text-green-600' : 'text-red-600'
        }`}
      >
        {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
      </p>
    </div>
  );
};

export default ProductCard;
