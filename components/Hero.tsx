import React from 'react';
import { Button } from './Button';
import { useLanguage } from '../contexts/LanguageContext';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-blue-50 to-purple-50">
      {/* Decorative Blobs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-brand-yellow rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-20 right-10 w-64 h-64 bg-brand-pink rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-1/2 w-64 h-64 bg-brand-teal rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="inline-block mb-4 px-4 py-1 rounded-full bg-white border border-brand-orange/20 text-brand-orange font-bold text-sm shadow-sm">
          {t('hero.tag')}
        </div>
        <h1 className="text-5xl md:text-7xl font-black mb-6 text-gray-900 leading-tight">
          {t('hero.title.start')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-pink">{t('hero.title.highlight')}</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          {t('hero.subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            {t('hero.cta.primary')}
          </Button>
          <Button size="lg" variant="outline" onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}>
            {t('hero.cta.secondary')}
          </Button>
        </div>
      </div>
    </section>
  );
};