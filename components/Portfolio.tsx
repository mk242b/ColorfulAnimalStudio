import React from 'react';
import { PortfolioItem } from '../types';

const items: PortfolioItem[] = [
  { id: '1', title: 'The Happy Hippo', category: 'Animation Series', imageUrl: 'https://picsum.photos/600/400?random=1' },
  { id: '2', title: 'Jungle Jumpers', category: 'Mobile Game', imageUrl: 'https://picsum.photos/600/400?random=2' },
  { id: '3', title: 'Space Cats', category: 'Character Design', imageUrl: 'https://picsum.photos/600/400?random=3' },
  { id: '4', title: 'Learn with Leo', category: 'Educational', imageUrl: 'https://picsum.photos/600/400?random=4' },
  { id: '5', title: 'Ocean Explorers', category: 'Animation Series', imageUrl: 'https://picsum.photos/600/400?random=5' },
  { id: '6', title: 'Dino Dash', category: 'Game Asset Pack', imageUrl: 'https://picsum.photos/600/400?random=6' },
];

export const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-black text-gray-900 mb-2">Our Recent Work</h2>
            <p className="text-lg text-gray-600">See what we've been cooking up in the studio.</p>
          </div>
          <button className="hidden md:block text-brand-orange font-bold hover:underline mt-4 md:mt-0">
            View All Projects &rarr;
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.id} className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all">
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-brand-yellow font-bold text-sm mb-1">{item.category}</span>
                <h3 className="text-white text-xl font-bold">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
            <button className="text-brand-orange font-bold hover:underline">
            View All Projects &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};