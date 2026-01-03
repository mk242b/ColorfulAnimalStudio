import React from 'react';
import { PortfolioItem } from '../types';
import { YouTubeEmbed } from './YouTubeEmbed';
import { useLanguage } from '../contexts/LanguageContext';
import { ChannelStatsPanel } from './ChannelStats';

// Updated with specific video IDs
const items: PortfolioItem[] = [
  { 
    id: '1', 
    title: 'Fun Learning Adventure', 
    category: 'Learning', 
    imageUrl: '', 
    videoId: '34mRRnRFcps'
  },
  { 
    id: '2', 
    title: 'Animal Songs for Kids', 
    category: 'Music', 
    imageUrl: '',
    videoId: 'K5sPA2YAf18'
  },
  { 
    id: '3', 
    title: 'Colors & Shapes', 
    category: 'Education', 
    imageUrl: '',
    videoId: '_N2TUUkMySI'
  },
  { 
    id: '4', 
    title: 'Playtime Stories', 
    category: 'Stories', 
    imageUrl: '',
    videoId: 'HdyejSdLmaI'
  }
];

export const Portfolio: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="portfolio" className="py-20 bg-white relative">
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-blue-50/50 to-white pointer-events-none"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
            <h2 className="text-4xl font-black text-gray-800 mb-4">{t('portfolio.title')}</h2>
            <div className="w-24 h-2 bg-brand-orange mx-auto rounded-full opacity-50 mb-6"></div>
        </div>

        {/* Stats Panel */}
        <ChannelStatsPanel />

        <div className="text-center mb-10">
            <a 
              href="https://www.youtube.com/@ColorfulAnimalStudio" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-brand-orange font-bold hover:text-brand-pink transition-colors text-lg bg-orange-50 px-6 py-2 rounded-full hover:bg-orange-100"
            >
              <span>{t('portfolio.visit')}</span>
              <span className="text-2xl">📺</span>
            </a>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {items.map((item) => (
            <div 
              key={item.id} 
              className="bg-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
               <YouTubeEmbed videoId={item.videoId || ''} title={item.title} />
               <div className="p-4 bg-white">
                 <h3 className="font-bold text-lg text-gray-800 truncate">{item.title}</h3>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};