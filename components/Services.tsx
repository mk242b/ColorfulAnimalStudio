import React from 'react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: '1',
    title: 'Kids Animation',
    description: 'We produce engaging, educational, and fun animation content tailored for YouTube Kids and broadcast.',
    icon: '🎥',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    id: '2',
    title: 'Game Development',
    description: 'Full-cycle game development for mobile and web. We turn your colorful ideas into playable reality.',
    icon: '🎮',
    color: 'bg-purple-100 text-purple-600',
  },
  {
    id: '3',
    title: 'Character Design',
    description: 'Custom character design and rigging services. We bring mascots and heroes to life with personality.',
    icon: '✏️',
    color: 'bg-orange-100 text-brand-orange',
  },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to build a colorful digital presence for a young audience.
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