import React from 'react';
import { Button } from './Button';
import { useLanguage } from '../contexts/LanguageContext';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      {/* Decorative Blobs matching Logo Colors */}
      <div className="absolute top-20 left-[-50px] w-72 h-72 bg-brand-blue rounded-full mix-blend-multiply filter blur-[64px] opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-[-50px] w-72 h-72 bg-brand-orange rounded-full mix-blend-multiply filter blur-[64px] opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-brand-yellow rounded-full mix-blend-multiply filter blur-[64px] opacity-20 animate-blob animation-delay-4000"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-brand-green rounded-full mix-blend-multiply filter blur-[64px] opacity-20 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="inline-block mb-6 px-6 py-2 rounded-full bg-white border-2 border-brand-blue/20 text-brand-blue font-bold text-sm md:text-base shadow-sm hover:shadow-md transition-shadow cursor-default">
          {t('hero.tag')}
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 text-gray-900 leading-[1.1] tracking-tight">
          {t('hero.title.start')} <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-brand-red to-brand-blue animate-gradient-x">
            {t('hero.title.highlight')}
          </span>
        </h1>
        
        <p className="text-lg md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed md:leading-normal">
          {t('hero.subtitle')}
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 px-8">
          <Button size="lg" className="w-full sm:w-auto shadow-brand-orange/30 hover:shadow-brand-orange/50" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            {t('hero.cta.primary')}
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto border-gray-300 text-gray-600 hover:border-brand-blue hover:text-brand-blue hover:bg-blue-50" onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}>
            {t('hero.cta.secondary')}
          </Button>
        </div>
      </div>
    </section>
  );
};