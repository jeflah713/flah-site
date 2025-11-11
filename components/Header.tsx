import React from 'react';
import { YoutubeIcon } from './icons/YoutubeIcon';
import { InstagramIcon } from './icons/InstagramIcon';
import { BandcampIcon } from './icons/BandcampIcon';

const Header: React.FC = () => {
  return (
    <header className="sticky top-4 z-50 mx-4 sm:mx-6 lg:mx-8">
      <div className="container mx-auto p-4 rounded-2xl bg-white/30 backdrop-blur-lg shadow-lg border border-white/40">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-white" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>
            Flah
          </h1>
          <nav className="flex items-center space-x-4">
            <a 
              href="https://www.youtube.com/@flahobino" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-red-600 transition-all duration-300 ease-in-out hover:scale-110 hover:opacity-80"
              aria-label="Flah's YouTube Channel"
            >
              <YoutubeIcon className="w-8 h-8" />
            </a>
            <a 
              href="https://www.instagram.com/flahmusic/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="transition-all duration-300 ease-in-out hover:scale-110 hover:opacity-80"
              aria-label="Flah's Instagram Profile"
            >
              <InstagramIcon className="w-8 h-8" />
            </a>
            <a 
              href="https://flahobino.bandcamp.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-cyan-500 transition-all duration-300 ease-in-out hover:scale-110 hover:opacity-80"
              aria-label="Flah's Bandcamp Profile"
            >
              <BandcampIcon className="w-8 h-8" />
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;