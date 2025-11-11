import React from 'react';
import type { Product } from '../types';
import ProductCard from './ProductCard';

interface ShopProps {
  products: Product[];
}

const Shop: React.FC<ShopProps> = ({ products }) => {
  return (
    <section id="shop-section" className="py-16">
      <div className="text-center mb-12">
        <h3 className="text-4xl md:text-5xl font-bold text-white" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>
          Beat & Sample Shop
        </h3>
        <p className="mt-4 text-lg text-white/90 max-w-3xl mx-auto" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.2)' }}>
          Looking to buy beats online? Browse this collection of professionally mixed electronic beats and lofi sample packs. Find the perfect instrumental music for your next YouTube video, stream, or creative project.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Shop;