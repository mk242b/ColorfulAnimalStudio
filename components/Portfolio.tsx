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
    <section id="portfolio" className="py-20 bg-white relative">
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-blue-50/50 to-white pointer-events-none"></div>

      <div className="container mx-auto px-4">
        <RevealOnScroll>
          <div className="text-center mb-8">
              <h2 className="text-4xl font-black text-gray-800 mb-4">{t('portfolio.title')}</h2>
              <div className="w-24 h-2 bg-brand-orange mx-auto rounded-full opacity-50 mb-6"></div>
          </div>

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
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {loading ? (
             // Simple Loading Skeletons
             [1, 2, 3, 4].map((n) => (
                <div key={n} className="bg-gray-100 rounded-3xl overflow-hidden shadow-sm h-64 animate-pulse">
                   <div className="h-full bg-gray-200"></div>
                </div>
             ))
          ) : (
             items.map((item, index) => (
                <RevealOnScroll key={item.id} delay={index * 150}>
                  <div 
                    className="bg-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                     <YouTubeEmbed videoId={item.videoId || ''} title={item.title} />
                     <div className="p-4 bg-white">
                       <h3 className="font-bold text-lg text-gray-800 truncate" title={item.title}>{item.title}</h3>
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