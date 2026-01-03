import React from 'react';
import { Service } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

export const Services: React.FC = () => {
  const { t } = useLanguage();

  const services: Service[] = [
    {
      id: '1',
      title: t('service.animation.title'),
      description: t('service.animation.desc'),
      icon: '🎥',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      id: '2',
      title: t('service.game.title'),
      description: t('service.game.desc'),
      icon: '🎮',
      color: 'bg-purple-100 text-purple-600',
    },
    {
      id: '3',
      title: t('service.character.title'),
      description: t('service.character.desc'),
      icon: '✏️',
      color: 'bg-orange-100 text-brand-orange',
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-gray-900 mb-4">{t('services.title')}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="p-8 rounded-3xl border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-4xl mb-6 ${service.color}`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};