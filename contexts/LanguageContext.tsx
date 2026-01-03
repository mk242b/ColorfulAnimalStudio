import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'en' | 'mm';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Language, string>> = {
  // Navigation
  'nav.services': { en: 'Services', mm: 'ဝန်ဆောင်မှုများ' },
  'nav.portfolio': { en: 'Portfolio', mm: 'လက်ရာများ' },
  'nav.contact': { en: 'Contact', mm: 'ဆက်သွယ်ရန်' },
  
  // Hero
  'hero.tag': { en: '✨ Bringing imagination to life!', mm: '✨ စိတ်ကူးအိပ်မက်တွေကို လက်တွေ့အကောင်အထည်ဖော်လိုက်ပါ!' },
  'hero.title.start': { en: 'Fun Learning for', mm: 'ကလေးတို့အတွက် ပျော်ရွှင်စရာ' },
  'hero.title.highlight': { en: 'Kids', mm: 'သင်ယူလေ့လာစရာများ' },
  'hero.subtitle': { en: 'From YouTube animation series to custom game assets. Colorful Animal Studio creates vibrant worlds that spark joy.', mm: 'YouTube ကာတွန်းဇာတ်လမ်းတွေကနေ ဂိမ်းတွေအထိ... Colorful Animal Studio က ကလေးတွေအတွက် ပျော်ရွှင်စရာ ရောင်စုံကမ္ဘာလေးတစ်ခုကို ဖန်တီးပေးနေပါတယ်။' },
  'hero.cta.primary': { en: 'Start Your Project 🚀', mm: 'ဆက်သွယ်ဆွေးနွေးရန် 🚀' },
  'hero.cta.secondary': { en: 'View Our Work 📺', mm: 'လက်ရာများကို ကြည့်ရန် 📺' },

  // Services
  'services.title': { en: 'Our Services', mm: 'ဝန်ဆောင်မှုများ' },
  'services.subtitle': { en: 'Everything you need to build a colorful digital presence for a young audience.', mm: 'ကလေးပရိသတ်တွေအတွက် ဆွဲဆောင်မှုရှိတဲ့ ဒီဂျစ်တယ်ကမ္ဘာတစ်ခု တည်ဆောက်ဖို့ လိုအပ်တာမှန်သမျှ ဒီမှာရှိပါတယ်။' },
  'service.animation.title': { en: 'Kids Animation', mm: 'ကလေး ကာတွန်း' },
  'service.animation.desc': { en: 'We produce engaging, educational, and fun animation content tailored for YouTube Kids and broadcast.', mm: 'YouTube Kids နဲ့ ရုပ်သံလိုင်းတွေအတွက် ပညာပေးကာတွန်းတွေကို စိတ်ဝင်စားစရာကောင်းအောင် ဖန်တီးပေးပါတယ်။' },
  'service.game.title': { en: 'Game Development', mm: 'ဂိမ်း ဖန်တီးခြင်း' },
  'service.game.desc': { en: 'Full-cycle game development for mobile and web. We turn your colorful ideas into playable reality.', mm: 'ဖုန်းနဲ့ ဝဘ်ဆိုက်တွေမှာ ကစားလို့ရမယ့် ဂိမ်းတွေကို အစအဆုံး ရေးဆွဲဖန်တီးပေးပါတယ်။' },
  'service.character.title': { en: 'Character Design', mm: 'ဇာတ်ကောင် ဒီဇိုင်း' },
  'service.character.desc': { en: 'Custom character design and rigging services. We bring mascots and heroes to life with personality.', mm: 'ကိုယ့်လုပ်ငန်းအတွက် သီးသန့် ဇာတ်ကောင်ဒီဇိုင်းတွေနဲ့ လှုပ်ရှားမှုတွေကို စိတ်ကြိုက်ဖန်တီးနိုင်ပါတယ်။' },

  // Portfolio
  'portfolio.title': { en: 'Latest From Our Channel', mm: 'ချန်နယ်မှ နောက်ဆုံးရ ဗီဒီယိုများ' },
  'portfolio.visit': { en: 'Visit @ColorfulAnimalStudio', mm: '@ColorfulAnimalStudio သို့ သွားရောက်ကြည့်ရှုပါ' },
  'stats.subscribers': { en: 'Subscribers', mm: 'Subscribe လုပ်ထားသူများ' },
  'stats.views': { en: 'Total Views', mm: 'ကြည့်ရှုကြိမ်ရေ' },
  'stats.videos': { en: 'Videos', mm: 'ဗီဒီယိုများ' },
  'stats.loading': { en: 'Loading stats...', mm: 'စာရင်းများ ဆွဲယူနေသည်...' },

  // Contact
  'contact.title': { en: "Let's Chat!", mm: 'ဆက်သွယ်မေးမြန်းရန်' },
  'contact.subtitle': { en: "We can't wait to hear about your amazing ideas.", mm: 'လူကြီးမင်းတို့ရဲ့ စိတ်ကူးတွေကို လက်တွေ့ဖန်တီးပေးဖို့ အဆင်သင့်ပါပဲ။' },
  'contact.email': { en: 'Email Us', mm: 'အီးမေးလ်' },
  'contact.call': { en: 'Call Us', mm: 'ဖုန်း' },
  'contact.follow': { en: 'Follow Us', mm: 'Social Media' },
  'contact.form.title': { en: 'Send a Message', mm: 'စာပို့ရန်' },
  'contact.form.name': { en: 'Your Name', mm: 'အမည်' },
  'contact.form.email': { en: 'Email', mm: 'အီးမေးလ်' },
  'contact.form.topic': { en: 'Topic', mm: 'ခေါင်းစဉ်' },
  'contact.form.message': { en: 'Message', mm: 'စာသား' },
  'contact.form.send': { en: 'Send Message', mm: 'ပေးပို့မည်' },
  'contact.form.sending': { en: 'Sending...', mm: 'ပေးပို့နေသည်...' },
  'contact.success.title': { en: 'Message Sent!', mm: 'ပေးပို့ပြီးပါပြီ!' },
  'contact.success.desc': { en: "High five! We'll get back to you soon.", mm: "လက်ခံရရှိပါပြီ! မကြာခင် ပြန်လည်ဆက်သွယ်ပါမည်။" },
  'contact.success.again': { en: 'Send another message', mm: 'နောက်ထပ်စာပို့မည်' },
  
  // Topics
  'topic.animation': { en: 'Animation Project', mm: 'ကာတွန်း ပရောဂျက်' },
  'topic.game': { en: 'Game Project', mm: 'ဂိမ်း ပရောဂျက်' },
  'topic.character': { en: 'Character Design', mm: 'ဇာတ်ကောင် ဒီဇိုင်း' },
  'topic.other': { en: 'Just saying hi!', mm: 'နှုတ်ဆက်ချင်လို့ပါ' },
  
  // Footer
  'footer.tag': { en: 'Sparking joy and imagination through digital play.', mm: 'ဒီဂျစ်တယ်နည်းပညာနဲ့ ကလေးတို့ရဲ့ စိတ်ကူးတွေကို အရောင်တင်ပေးမယ့် Colorful Animal Studio' },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};