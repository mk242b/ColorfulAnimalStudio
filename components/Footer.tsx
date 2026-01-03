import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-white border-t border-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="text-center md:text-left">
             <div className="flex items-center justify-center md:justify-start space-x-2 text-2xl font-black tracking-tight mb-2 text-gray-800">
                <span>Colorful <span className="text-brand-orange">Animal Studio</span></span>
            </div>
            <p className="text-gray-400 text-sm max-w-xs mx-auto md:mx-0">
                {t('footer.tag')}
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a href="https://www.youtube.com/@ColorfulAnimalStudio" target="_blank" rel="noreferrer" className="flex items-center space-x-2 px-4 py-2 bg-red-50 text-red-600 rounded-full font-bold hover:bg-red-100 transition-colors">
                <span>YouTube</span>
            </a>
            <a href="https://www.tiktok.com/@colorfulanimalstudio" target="_blank" rel="noreferrer" className="flex items-center space-x-2 px-4 py-2 bg-black/5 text-black rounded-full font-bold hover:bg-black/10 transition-colors">
                <span>TikTok</span>
            </a>
          </div>
          
        </div>
        
        <div className="mt-12 text-center text-gray-300 text-xs font-bold">
            &copy; {new Date().getFullYear()} Colorful Animal Studio.
        </div>
      </div>
    </footer>
  );
};