import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export const Hero = () => {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-8 text-center relative overflow-hidden pt-24 hero">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl z-10"
      >
        <motion.h1 
          className="text-5xl md:text-7xl mb-6 font-black tracking-tight title-gradient hero-title"
        >
          {t.hero.title}
        </motion.h1>
        <h2 className="text-2xl md:text-3xl mb-8 font-medium text-gray-800 max-w-3xl mx-auto hero-subtitle">
          {t.hero.subtitle}
        </h2>
        <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-gray-600 leading-relaxed hero-desc">
          {t.hero.description}
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 text-start hero-outcomes">
          {t.hero.outcomes.map((item) => (
            <div 
              key={item.title}
              className="p-4 border-l-2 border-black rtl:border-l-0 rtl:border-r-2"
            >
              <h3 className="font-bold text-lg mb-1">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-tight">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex gap-4 justify-center flex-wrap">
          <button 
            onClick={() => scrollToSection('contact')}
            className="neo-button neo-pill bg-neo-primary text-white"
          >
            {t.hero.cta.audit}
          </button>
          <button 
            onClick={() => scrollToSection('packages')}
            className="neo-button neo-pill bg-white text-black"
          >
            {t.hero.cta.packages}
          </button>
        </div>
      </motion.div>
    </section>
  );
};
