import React from 'react';
import { Button } from './Button';
import { useLanguage } from '../contexts/LanguageContext';

export const Hero: React.FC = () => {
  const { t, language } = useLanguage();
  const isMM = language === 'mm';

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      {/* Decorative Blobs - Reduced opacity for better text readability */}
      <div className="absolute top-20 left-[-50px] w-72 h-72 bg-brand-blue rounded-full mix-blend-multiply filter blur-[64px] opacity-10 animate-blob"></div>
      <div className="absolute top-40 right-[-50px] w-72 h-72 bg-brand-orange rounded-full mix-blend-multiply filter blur-[64px] opacity-10 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-brand-yellow rounded-full mix-blend-multiply filter blur-[64px] opacity-10 animate-blob animation-delay-4000"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-brand-green rounded-full mix-blend-multiply filter blur-[64px] opacity-10 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        {/* Tag - Clean, static, readable */}
        <div className="inline-block mb-6 px-6 py-2 rounded-full bg-blue-50 border border-brand-blue/10 text-brand-blue font-bold text-sm md:text-base cursor-default select-none">
          {t('hero.tag')}
        </div>
        
        {/* Main Heading */}
        <h1 className={`font-black mb-12 md:mb-16 text-gray-900 tracking-tight ${
            isMM 
              ? 'text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-relaxed' 
              : 'text-5xl md:text-7xl lg:text-8xl leading-[1.1]'
          }`}>
          
          {/* Static Text - No Jumping Animation for clarity */}
          <span className="inline-block text-gray-900">
            {t('hero.title.start')}
          </span> 
          
          <br className="hidden md:block"/>
          
          {/* Highlight Word - Gentle Float only (removed wiggle) for professional look */}
          <span className="inline-block animate-float mt-2 md:mt-0 relative mx-2 md:mx-0">
             <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-red pb-2">
                {t('hero.title.highlight')}
             </span>
             {/* Subtle underline SVG for emphasis without clutter */}
             <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-yellow -z-10 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
               <path d="M0 5 Q 50 15 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
             </svg>
          </span>
        </h1>
        
        {/* Subtitle - Optimized for reading */}
        <p className={`text-gray-600 mb-12 md:mb-16 max-w-2xl mx-auto font-medium ${
            isMM 
              ? 'text-base md:text-xl leading-8' 
              : 'text-lg md:text-2xl leading-relaxed'
          }`}>
          {t('hero.subtitle')}
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 px-8">
          <Button size="lg" className="w-full sm:w-auto shadow-xl shadow-brand-orange/20 hover:shadow-brand-orange/40 hover:-translate-y-1 transition-all duration-300" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            {t('hero.cta.primary')}
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white border-2 border-gray-200 text-gray-600 hover:border-brand-blue hover:text-brand-blue hover:bg-white hover:-translate-y-1 transition-all duration-300" onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}>
            {t('hero.cta.secondary')}
          </Button>
        </div>
      </div>
    </section>
  );
};