
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 mt-16">
      <div className="container mx-auto text-center text-white/80" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>
        <p>&copy; {new Date().getFullYear()} Flah Music. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
