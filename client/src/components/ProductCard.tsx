import React from 'react';
import { ProductCardProps } from '../types/interfaces';

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={product.img_path}
          alt={product.item_name}
          className="w-full h-40 object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      <h2 className="mt-4 text-lg font-bold text-gray-800">{product.item_name}</h2>
      <p className="text-sm text-gray-500 mt-2 line-clamp-2">{product.description}</p>
      <p className="text-blue-600 font-bold mt-2">
        {product.price.toLocaleString()} IDR
      </p>
      <p
        className={`text-sm mt-1 ${
          product.stock > 0 ? 'text-green-600' : 'text-red-600'
        }`}
      >
        {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
      </p>
    </div>
  );
};

export default ProductCard;
