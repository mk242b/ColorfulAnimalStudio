import React, { useState } from 'react';
import { PortfolioItem } from '../types';

// Curated list of colorful animal animations to represent the studio's work
const items: PortfolioItem[] = [
  { 
    id: '1', 
    title: 'Jungle Beat: Munki and Trunk', 
    category: 'Animation Series', 
    imageUrl: 'https://img.youtube.com/vi/pW9dyhM_Ikw/maxresdefault.jpg',
    videoId: 'pW9dyhM_Ikw'
  },
  { 
    id: '2', 
    title: 'Caminandes: Llama Drama', 
    category: 'Short Film', 
    imageUrl: 'https://img.youtube.com/vi/a1Y73sPHKxw/maxresdefault.jpg',
    videoId: 'a1Y73sPHKxw'
  },
  { 
    id: '3', 
    title: 'Hey Deer!', 
    category: '3D Animation', 
    imageUrl: 'https://img.youtube.com/vi/Oox578I-02E/maxresdefault.jpg',
    videoId: 'Oox578I-02E'
  },
  { 
    id: '4', 
    title: 'Sweet Cocoon', 
    category: 'Award Winning', 
    imageUrl: 'https://img.youtube.com/vi/pWBfPqT83V8/maxresdefault.jpg',
    videoId: 'pWBfPqT83V8'
  },
  { 
    id: '5', 
    title: 'Round Safari', 
    category: 'Character Shorts', 
    imageUrl: 'https://img.youtube.com/vi/DqX9y3_kFkU/hqdefault.jpg',
    videoId: 'DqX9y3_kFkU'
  },
  { 
    id: '6', 
    title: 'Caminandes: Gran Dillama', 
    category: 'Short Film', 
    imageUrl: 'https://img.youtube.com/vi/Z4C82eyhwgU/maxresdefault.jpg',
    videoId: 'Z4C82eyhwgU'
  },
];

export const Portfolio: React.FC = () => {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-black text-gray-900 mb-2">Latest Videos</h2>
            <p className="text-lg text-gray-600">Fresh from our studio to your screen.</p>
          </div>
          <a 
            href="https://www.youtube.com/@ColorfulAnimalStudio" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden md:flex items-center space-x-2 text-brand-orange font-bold hover:underline mt-4 md:mt-0"
          >
            <span>Visit our YouTube Channel</span>
            <span className="text-xl">📺</span>
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <div className="relative aspect-video w-full bg-gray-900">
                {playingVideo === item.id && item.videoId ? (
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src={`https://www.youtube.com/embed/${item.videoId}?autoplay=1`} 
                    title={item.title} 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="absolute inset-0"
                  ></iframe>
                ) : (
                  <button 
                    onClick={() => setPlayingVideo(item.id)}
                    className="w-full h-full relative cursor-pointer group"
                  >
                    <img 
                      src={item.imageUrl} 
                      alt={item.title} 
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                    />
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
                        <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                        <span className="bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                            {item.category}
                        </span>
                    </div>
                  </button>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1 leading-tight group-hover:text-brand-orange transition-colors">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center md:hidden">
            <a 
                href="https://www.youtube.com/@ColorfulAnimalStudio"
                target="_blank"
                rel="noopener noreferrer" 
                className="inline-flex items-center space-x-2 text-brand-orange font-bold hover:underline"
            >
                <span>Visit Channel</span>
                <span>&rarr;</span>
            </a>
        </div>
      </div>
    </section>
  );
};