import React from 'react';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const handleBuy = () => {
    alert(`To purchase "${product.name}", please contact Flah on Instagram or YouTube!`);
  };

  return (
    <div className="bg-white/30 backdrop-blur-lg rounded-2xl shadow-lg border border-white/40 overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-2">
      <img src={product.coverArtUrl} alt={`${product.name} cover art`} className="w-full h-56 object-cover" />
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <div>
            <p className="text-sm font-semibold text-blue-600 uppercase">{product.type}</p>
            <h4 className="text-2xl font-bold text-slate-800">{product.name}</h4>
          </div>
          <p className="text-2xl font-bold text-green-600 bg-white/50 rounded-lg px-3 py-1">${product.price}</p>
        </div>
        <button 
          onClick={handleBuy}
          className="mt-4 w-full px-6 py-3 bg-gradient-to-b from-green-400 to-blue-500 text-white font-bold rounded-full shadow-md hover:shadow-lg border border-white/50 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;