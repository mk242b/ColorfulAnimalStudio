import React, { useState } from 'react';
import { Button } from './Button';
import { useLanguage } from '../contexts/LanguageContext';

export const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Video Animation',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate network request
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', service: 'Video Animation', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-brand-yellow/20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-[3rem] shadow-xl overflow-hidden flex flex-col md:flex-row">
            
            {/* Contact Info Sidebar */}
            <div className="bg-brand-orange p-10 md:p-12 text-white flex flex-col justify-center md:w-1/3">
                <h3 className="text-3xl font-black mb-6">{t('contact.title')}</h3>
                <p className="mb-8 opacity-90 text-lg">{t('contact.subtitle')}</p>
                
                <div className="space-y-6">
                    <div>
                        <span className="block text-sm font-bold opacity-75 uppercase tracking-wider mb-1">{t('contact.email')}</span>
                        <a href="mailto:colorfulanimalstudio@gmail.com" className="text-lg md:text-xl font-bold hover:underline break-words">colorfulanimalstudio@gmail.com</a>
                    </div>
                    <div>
                        <span className="block text-sm font-bold opacity-75 uppercase tracking-wider mb-1">{t('contact.call')}</span>
                        <a href="tel:+1234567890" className="text-xl font-bold hover:underline">+1 (555) 123-4567</a>
                    </div>
                    <div className="pt-6 border-t border-white/20">
                        <span className="block text-sm font-bold opacity-75 uppercase tracking-wider mb-3">{t('contact.follow')}</span>
                        <div className="flex gap-4 text-2xl">
                             <a href="#" className="hover:opacity-75 transition-opacity">📺</a>
                             <a href="#" className="hover:opacity-75 transition-opacity">📘</a>
                             <a href="#" className="hover:opacity-75 transition-opacity">🎵</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Form Area */}
            <div className="p-8 md:p-12 md:w-2/3">
                {status === 'success' ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-8">
                    <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-4xl mb-6 text-green-500">
                        ✓
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-2">{t('contact.success.title')}</h3>
                    <p className="text-gray-500 text-lg">{t('contact.success.desc')}</p>
                    <button 
                    onClick={() => setStatus('idle')}
                    className="mt-8 text-brand-orange font-bold hover:underline"
                    >
                    {t('contact.success.again')}
                    </button>
                </div>
                ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-800 md:hidden">{t('contact.form.title')}</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="name" className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">{t('contact.form.name')}</label>
                        <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-transparent focus:bg-white focus:border-brand-orange outline-none transition-all font-bold text-gray-700 placeholder-gray-300"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">{t('contact.form.email')}</label>
                        <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-transparent focus:bg-white focus:border-brand-orange outline-none transition-all font-bold text-gray-700 placeholder-gray-300"
                        />
                    </div>
                    </div>

                    <div>
                    <label htmlFor="service" className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">{t('contact.form.topic')}</label>
                    <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-transparent focus:bg-white focus:border-brand-orange outline-none transition-all font-bold text-gray-700"
                    >
                        <option value="Video Animation">{t('topic.animation')}</option>
                        <option value="Game Development">{t('topic.game')}</option>
                        <option value="Character Design">{t('topic.character')}</option>
                        <option value="Other">{t('topic.other')}</option>
                    </select>
                    </div>

                    <div>
                    <label htmlFor="message" className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">{t('contact.form.message')}</label>
                    <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-transparent focus:bg-white focus:border-brand-orange outline-none transition-all font-bold text-gray-700 placeholder-gray-300 resize-none"
                    ></textarea>
                    </div>

                    <Button 
                    type="submit" 
                    className="w-full text-lg"
                    disabled={status === 'submitting'}
                    >
                    {status === 'submitting' ? t('contact.form.sending') : t('contact.form.send')}
                    </Button>
                </form>
                )}
            </div>
        </div>
      </div>
    </section>
  );
};