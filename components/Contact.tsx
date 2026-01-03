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
    <section id="contact" className="py-12 md:py-24 bg-brand-yellow/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-[2rem] md:rounded-[3rem] shadow-xl overflow-hidden flex flex-col md:flex-row">
            
            {/* Minimalist Sidebar - Hidden on Mobile */}
            <div className="hidden md:flex bg-brand-orange p-10 flex-col justify-center items-center text-center md:w-1/3 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <div className="relative z-10">
                    <h3 className="text-3xl font-black text-white mb-4">{t('contact.title')}</h3>
                    <p className="mb-8 text-white/90 font-medium">{t('contact.subtitle')}</p>
                    
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl border border-white/30 inline-block">
                        <span className="block text-xs font-bold text-white/80 uppercase tracking-wider mb-1">{t('contact.email')}</span>
                        <a href="mailto:colorfulanimalstudio@gmail.com" className="text-white font-bold hover:underline break-all text-sm md:text-base">
                            colorfulanimalstudio<br/>@gmail.com
                        </a>
                    </div>
                </div>
            </div>

            {/* Form Area */}
            <div className="p-6 md:p-12 md:w-2/3">
                {/* Mobile Header - Just "Let's Chat!" */}
                <div className="md:hidden mb-6 text-center border-b border-gray-100 pb-4">
                     <h2 className="text-3xl font-black text-brand-orange">{t('contact.title')}</h2>
                </div>

                {status === 'success' ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-8">
                    <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-4xl mb-6 text-green-500 animate-bounce">
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
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                    <div className="grid md:grid-cols-2 gap-4 md:gap-6">
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