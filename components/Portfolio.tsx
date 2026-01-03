import React, { useEffect, useState } from 'react';
import { PortfolioItem } from '../types';
import { YouTubeEmbed } from './YouTubeEmbed';
import { useLanguage } from '../contexts/LanguageContext';
import { fetchLatestVideos } from '../services/youtubeService';
import { RevealOnScroll } from './RevealOnScroll';

export const Portfolio: React.FC = () => {
  const { t } = useLanguage();
  const [items, setItems] = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadVideos = async () => {
      const videos = await fetchLatestVideos();
      setItems(videos);
      setLoading(false);
    };
    loadVideos();
  }, []);

  return (
    <section id="portfolio" className="py-12 md:py-20 bg-white relative">
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-blue-50/50 to-white pointer-events-none"></div>

      <div className="container mx-auto px-4">
        <RevealOnScroll>
          <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-4">{t('portfolio.title')}</h2>
              <div className="w-24 h-2 bg-brand-orange mx-auto rounded-full opacity-50 mb-6"></div>
          </div>

          <div className="text-center mb-10">
              <a 
                href="https://www.youtube.com/@ColorfulAnimalStudio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-brand-orange font-bold hover:text-brand-pink transition-colors text-sm md:text-lg bg-orange-50 px-6 py-2 rounded-full hover:bg-orange-100"
              >
                <span>{t('portfolio.visit')}</span>
                <span className="text-xl md:text-2xl">📺</span>
              </a>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {loading ? (
             // Responsive Skeletons
             [1, 2, 3, 4].map((n) => (
                <div key={n} className="bg-gray-100 rounded-2xl md:rounded-3xl overflow-hidden shadow-sm animate-pulse flex flex-col">
                   <div className="w-full relative" style={{ paddingBottom: '56.25%' }}>
                      <div className="absolute inset-0 bg-gray-200"></div>
                   </div>
                   <div className="p-4 space-y-3">
                      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                   </div>
                </div>
             ))
          ) : (
             items.map((item, index) => (
                <RevealOnScroll key={item.id} delay={index * 150} className="h-full">
                  <div 
                    className="bg-gray-100 rounded-2xl md:rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col group"
                  >
                     {/* Video Container */}
                     <div className="w-full">
                        <YouTubeEmbed videoId={item.videoId || ''} title={item.title} />
                     </div>
                     
                     <div className="p-4 bg-white flex-grow flex flex-col justify-center">
                       <h3 className="font-bold text-base md:text-lg text-gray-800 line-clamp-2 leading-tight group-hover:text-brand-orange transition-colors" title={item.title}>
                         {item.title}
                       </h3>
                     </div>
                  </div>
                </RevealOnScroll>
              ))
          )}
        </div>
      </div>
    </section>
  );
};