import React, { useState } from 'react';

const FreeDownloads: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert(`Thanks for subscribing! Your free download link has been sent to ${email}.`);
      setEmail('');
    } else {
      alert('Please enter a valid email address.');
    }
  };

  return (
    <section id="free-downloads" className="py-16">
      <div className="max-w-3xl mx-auto bg-white/30 backdrop-blur-lg rounded-2xl shadow-lg border border-white/40 p-8 text-center">
        <h3 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>
          Get Free Music Downloads
        </h3>
        <p className="text-lg text-white/90 mb-8" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.2)' }}>
          Get an exclusive, royalty-free beat pack delivered right to your inbox. Perfect for creators, streamers, and artists.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            aria-label="Email address for free downloads"
            required
            className="flex-grow px-5 py-3 rounded-full border-2 border-white/30 bg-black/20 text-slate-200 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-green-300 transition-all duration-300"
          />
          <button
            type="submit"
            className="px-8 py-3 bg-gradient-to-b from-green-400 to-blue-500 text-white font-bold rounded-full shadow-md hover:shadow-lg border border-white/50 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300"
          >
            Download Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default FreeDownloads;