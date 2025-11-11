import React from 'react';

const featuredVideos = [
  { id: 'FCA-j8q-3Vo', title: 'Play Between Calls Vol.1 [Full Album]' },
  { id: 'b4YjU5y2XbA', title: "Fallin' in a Dream [lofi]" },
  { id: 'D-jXtV5Igrw', title: 'Luv is Fake [lofi]' },
];

const FeaturedVideos: React.FC = () => {
  return (
    <section id="featured-videos" className="py-16">
      <h3 className="text-4xl md:text-5xl font-bold text-white text-center mb-12" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>
        Visuals From The Studio
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {featuredVideos.map((video) => (
          <div key={video.id} className="bg-white/30 backdrop-blur-lg rounded-2xl shadow-lg border border-white/40 overflow-hidden p-3 transition-transform duration-300 ease-in-out hover:-translate-y-2">
            <div className="aspect-video rounded-lg overflow-hidden">
               <iframe
                src={`https://www.youtube.com/embed/${video.id}`}
                title={`YouTube video player for ${video.title}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
             <p className="mt-4 text-center font-semibold text-slate-200 truncate px-2">{video.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedVideos;