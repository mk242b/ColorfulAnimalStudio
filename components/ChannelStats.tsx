import React, { useEffect, useState } from 'react';
import { fetchChannelStats, ChannelStats, formatNumber } from '../services/youtubeService';
import { useLanguage } from '../contexts/LanguageContext';
import { RevealOnScroll } from './RevealOnScroll';

export const ChannelStatsPanel: React.FC = () => {
  const [stats, setStats] = useState<ChannelStats | null>(null);
  const [loading, setLoading] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    const loadStats = async () => {
      const data = await fetchChannelStats();
      setStats(data);
      setLoading(false);
    };
    loadStats();
  }, []);

  // Hook for counting animation
  const useCounter = (end: string | undefined) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      if (!end || loading) return;
      
      const target = parseInt(end, 10);
      if (isNaN(target)) return;

      let start = 0;
      const duration = 2000; // 2 seconds
      const increment = target / (duration / 16); // 60fps
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }, [end, loading]);

    return count;
  };

  const subCount = useCounter(stats?.subscriberCount || '0');
  const viewCount = useCounter(stats?.viewCount || '0');
  const videoCount = useCounter(stats?.videoCount || '0');

  const displayValue = (currentVal: number, originalStr: string | undefined) => {
      if (loading) return '...';
      if (!stats) return '-'; 
      return formatNumber(currentVal.toString());
  };

  return (
    <div className="max-w-5xl mx-auto mb-6 md:mb-20 transform -translate-y-6 px-4 relative z-20">
      <RevealOnScroll>
        <div className="bg-white rounded-[1.5rem] md:rounded-[2.5rem] p-1 bg-gradient-to-r from-brand-orange via-brand-red to-brand-blue shadow-2xl">
          <div className="bg-white rounded-[1.3rem] md:rounded-[2.3rem] p-2 md:p-10 flex flex-col items-center">
              
              <div className="mb-2 md:mb-8 flex items-center gap-2 bg-red-50 px-3 py-1 md:px-4 rounded-full border border-red-100">
                  <span className="relative flex h-2 w-2 md:h-3 md:w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 md:h-3 md:w-3 bg-red-500"></span>
                  </span>
                  <span className="text-red-500 font-bold text-[10px] md:text-xs tracking-wider uppercase">Live Analytics</span>
              </div>

              {/* Grid Layout: Always 3 columns (Horizontal on Mobile) */}
              <div className="w-full grid grid-cols-3 gap-1 md:gap-8 divide-x divide-gray-100">
                  {/* Subscribers */}
                  <div className="text-center px-1">
                      <div className="text-xl sm:text-3xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-brand-orange to-red-500 mb-1 md:mb-2 font-sans truncate">
                          {displayValue(subCount, stats?.subscriberCount)}
                      </div>
                      <div className="text-gray-500 font-bold text-[9px] sm:text-xs md:text-base uppercase tracking-widest truncate">
                          {t('stats.subscribers')}
                      </div>
                  </div>

                  {/* Views */}
                  <div className="text-center px-1">
                      <div className="text-xl sm:text-3xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-brand-blue to-purple-600 mb-1 md:mb-2 font-sans truncate">
                          {displayValue(viewCount, stats?.viewCount)}
                      </div>
                      <div className="text-gray-500 font-bold text-[9px] sm:text-xs md:text-base uppercase tracking-widest truncate">
                          {t('stats.views')}
                      </div>
                  </div>

                  {/* Videos */}
                  <div className="text-center px-1">
                      <div className="text-xl sm:text-3xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-brand-green to-teal-500 mb-1 md:mb-2 font-sans truncate">
                          {displayValue(videoCount, stats?.videoCount)}
                      </div>
                      <div className="text-gray-500 font-bold text-[9px] sm:text-xs md:text-base uppercase tracking-widest truncate">
                          {t('stats.videos')}
                      </div>
                  </div>
              </div>
              
              <div className="mt-2 md:mt-8 text-center text-gray-400 text-[10px] md:text-sm font-medium">
                  Our content is growing fast! Join the adventure.
              </div>
          </div>
        </div>
      </RevealOnScroll>
    </div>
  );
};