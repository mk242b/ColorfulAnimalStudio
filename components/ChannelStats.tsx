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

  if (loading) {
    return (
        <div className="flex justify-center py-8">
            <div className="animate-pulse flex space-x-4">
                <div className="h-12 w-32 bg-gray-200 rounded-xl"></div>
                <div className="h-12 w-32 bg-gray-200 rounded-xl"></div>
            </div>
        </div>
    );
  }

  // Fallback if API fails or key is invalid
  if (!stats) {
     return null; 
  }

  return (
    <div className="max-w-4xl mx-auto mb-12 transform -translate-y-4">
      <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 flex flex-col md:flex-row justify-around items-center gap-8 border-b-4 border-brand-orange/20">
        
        <div className="text-center group hover:scale-105 transition-transform duration-300">
           <div className="text-4xl md:text-5xl font-black text-brand-orange mb-1 font-sans">
             {formatNumber(stats.subscriberCount)}
           </div>
           <div className="text-gray-500 font-bold uppercase tracking-wider text-sm">
             {t('stats.subscribers')}
           </div>
        </div>

        <div className="hidden md:block w-px h-16 bg-gray-100"></div>

        <div className="text-center group hover:scale-105 transition-transform duration-300">
           <div className="text-4xl md:text-5xl font-black text-brand-purple mb-1 font-sans">
             {formatNumber(stats.viewCount)}
           </div>
           <div className="text-gray-500 font-bold uppercase tracking-wider text-sm">
             {t('stats.views')}
           </div>
        </div>

        <div className="hidden md:block w-px h-16 bg-gray-100"></div>
        
        <div className="text-center group hover:scale-105 transition-transform duration-300">
           <div className="text-4xl md:text-5xl font-black text-brand-teal mb-1 font-sans">
             {formatNumber(stats.videoCount)}
           </div>
           <div className="text-gray-500 font-bold uppercase tracking-wider text-sm">
             {t('stats.videos')}
           </div>
        </div>

      </div>
    </div>
  );
};