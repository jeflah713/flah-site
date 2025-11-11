import React from 'react';

const FeaturedAlbum: React.FC = () => {
  return (
    <section id="featured-album" className="py-16">
      <h3 className="text-4xl md:text-5xl font-bold text-white text-center mb-12" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>
        Stream the Latest Electronic Beats
      </h3>
      <div className="max-w-md mx-auto bg-white/30 backdrop-blur-lg rounded-2xl shadow-lg border border-white/40 p-4">
        <iframe 
          style={{ border: 0, width: '100%', height: '472px' }} 
          src="https://bandcamp.com/EmbeddedPlayer/album=1835905208/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" 
          seamless
          title="Play Between Calls, Vol. 1 by Flah"
        >
          <a href="https://flahobino.bandcamp.com/album/play-between-calls-vol-1">Play Between Calls, Vol. 1 by Flah</a>
        </iframe>
      </div>
    </section>
  );
};

export default FeaturedAlbum;