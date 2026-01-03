import React, { useEffect, useState } from 'react';
import { fetchChannelStats, ChannelStats, formatNumber } from '../services/youtubeService';
import { useLanguage } from '../contexts/LanguageContext';

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
      
      // Parse the number, handling K/M suffixes roughly for the animation target if needed, 
      // but here we expect raw numbers from the API before formatting in the UI usually.
      // However, fetchChannelStats returns strings that might be raw numbers.
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

  // If stats are null (error/loading), we use "0" for the counter target
  const subCount = useCounter(stats?.subscriberCount || '0');
  const viewCount = useCounter(stats?.viewCount || '0');
  const videoCount = useCounter(stats?.videoCount || '0');

  // Display logic: show formatted animated number if loaded, else formatted static number or placeholder
  const displayValue = (currentVal: number, originalStr: string | undefined) => {
      if (loading) return '...';
      if (!stats) return '-'; // Error state
      // If the number is huge, the counter might be expensive or jumpy, 
      // but for this simple implementation we count up to the raw value 
      // and then format the CURRENT count.
      return formatNumber(currentVal.toString());
  };

  return (
    <div className="max-w-4xl mx-auto mb-16 transform -translate-y-4 px-4 relative z-20">
      <div className="bg-white/80 backdrop-blur-lg rounded-[2rem] shadow-xl shadow-brand-blue/5 p-8 flex flex-col md:flex-row justify-around items-center gap-8 border border-white ring-1 ring-gray-100">
        
        {/* Subscribers */}
        <div className="text-center group hover:scale-105 transition-transform duration-300 w-full md:w-auto">
           <div className="text-4xl md:text-5xl font-black text-brand-orange mb-2 font-sans drop-shadow-sm min-w-[120px]">
             {displayValue(subCount, stats?.subscriberCount)}
           </div>
           <div className="text-gray-400 font-bold uppercase tracking-widest text-xs">
             {t('stats.subscribers')}
           </div>
        </div>

        {/* Divider */}
        <div className="w-16 h-1 md:w-1 md:h-16 bg-gradient-to-b from-transparent via-gray-200 to-transparent rounded-full opacity-50"></div>

        {/* Views */}
        <div className="text-center group hover:scale-105 transition-transform duration-300 w-full md:w-auto">
           <div className="text-4xl md:text-5xl font-black text-brand-blue mb-2 font-sans drop-shadow-sm min-w-[120px]">
             {displayValue(viewCount, stats?.viewCount)}
           </div>
           <div className="text-gray-400 font-bold uppercase tracking-widest text-xs">
             {t('stats.views')}
           </div>
        </div>

        {/* Divider */}
        <div className="w-16 h-1 md:w-1 md:h-16 bg-gradient-to-b from-transparent via-gray-200 to-transparent rounded-full opacity-50"></div>
        
        {/* Videos */}
        <div className="text-center group hover:scale-105 transition-transform duration-300 w-full md:w-auto">
           <div className="text-4xl md:text-5xl font-black text-brand-green mb-2 font-sans drop-shadow-sm min-w-[120px]">
             {displayValue(videoCount, stats?.videoCount)}
           </div>
           <div className="text-gray-400 font-bold uppercase tracking-widest text-xs">
             {t('stats.videos')}
           </div>
        </div>

      </div>
    </div>
  );
};