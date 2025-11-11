import React from 'react';

const Hero: React.FC = () => {
    const scrollToShop = () => {
        document.getElementById('shop-section')?.scrollIntoView({ behavior: 'smooth' });
    };

  return (
    <section className="text-center py-20 sm:py-32">
      <h2 className="text-5xl md:text-7xl font-bold text-white mb-4" style={{ textShadow: '0 3px 6px rgba(0,0,0,0.25)' }}>
        Crafting Unique Electronic Beats
      </h2>
      <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>
        Welcome to the world of Flah. Discover high-quality lofi soundscapes, instrumental music, and sample packs for your creative projects. Explore the sound, and grab some free music downloads to get started.
      </p>
      <button
        onClick={scrollToShop}
        className="px-8 py-4 bg-gradient-to-b from-green-400 to-blue-500 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl border-2 border-white/50 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300"
      >
        Explore Beats & Samples
      </button>
    </section>
  );
};

export default Hero;