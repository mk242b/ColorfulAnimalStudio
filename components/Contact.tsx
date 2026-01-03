import React, { useState } from 'react';
import { Button } from './Button';

export const Contact: React.FC = () => {
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
      // Reset success message after 5 seconds
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
    <section id="contact" className="py-20 bg-brand-yellow/10">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h2 className="text-4xl font-black text-gray-900 mb-6">Ready to Start a Project?</h2>
        <p className="text-xl text-gray-600 mb-10">
          Whether you need a full season of cartoons or a Unity developer for your next game, we'd love to chat!
        </p>
        
        {status === 'success' ? (
          <div className="bg-white p-12 rounded-3xl shadow-xl animate-fade-in border-4 border-green-100">
            <div className="text-6xl mb-4">🎉</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
            <p className="text-gray-600">Thanks for reaching out! We'll get back to you within 24 hours.</p>
            <button 
              onClick={() => setStatus('idle')}
              className="mt-6 text-brand-orange font-bold hover:underline"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-3xl shadow-xl text-left space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">Your Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-orange focus:ring-4 focus:ring-brand-orange/10 outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-orange focus:ring-4 focus:ring-brand-orange/10 outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-bold text-gray-700 mb-2">Interested In</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-orange focus:ring-4 focus:ring-brand-orange/10 outline-none transition-all bg-white"
              >
                <option value="Video Animation">Video Animation 🎥</option>
                <option value="Game Development">Game Development 🎮</option>
                <option value="Character Design">Character Design ✏️</option>
                <option value="Other">Other ❓</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-orange focus:ring-4 focus:ring-brand-orange/10 outline-none transition-all resize-none"
                placeholder="Tell us a bit about your project..."
              ></textarea>
            </div>

            <Button 
              type="submit" 
              className="w-full"
              disabled={status === 'submitting'}
            >
              {status === 'submitting' ? 'Sending...' : 'Send Message 📨'}
            </Button>
          </form>
        )}
      </div>
    </section>
  );
};