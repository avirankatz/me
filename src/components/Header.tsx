import { useLanguage } from '../context/LanguageContext';
import { useStyle } from '../context/StyleContext';
import { motion } from 'framer-motion';

export const Header = () => {
  const { t, language, setLanguage } = useLanguage();
  const { style, setStyle, styles } = useStyle();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b-2 border-black px-4 py-3 site-header"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex flex-col">
          <h1 className="font-black text-lg leading-none">{t.header.name}</h1>
          <span className="text-xs font-mono text-gray-600">{t.header.title}</span>
        </div>

        <div className="flex items-center gap-4">
          {/* Style Switcher */}
          <div className="hidden md:flex items-center gap-2">
            <label className="text-xs font-bold text-gray-600" htmlFor="styleSelect">Style</label>
            <select
              id="styleSelect"
              value={style}
              onChange={(e) => setStyle(e.target.value as any)}
              className="neo-input px-2 py-1 text-xs w-auto"
            >
              {styles.map((s) => (
                <option key={s.id} value={s.id}>{s.label}</option>
              ))}
            </select>
          </div>
          <div className="hidden md:flex gap-2">
            <button 
              onClick={() => scrollToSection('packages')}
              className="text-sm font-bold hover:underline px-3 py-1"
            >
              {t.header.cta.packages}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-sm font-bold bg-neo-primary text-white px-3 py-1 border border-black shadow-neo-sm hover:translate-y-0.5 hover:shadow-none transition-all"
            >
              {t.header.cta.audit}
            </button>
          </div>

          <div className="flex border border-black">
            <button
              onClick={() => setLanguage('he')}
              className={`px-2 py-0.5 text-xs font-bold ${language === 'he' ? 'bg-black text-white' : 'hover:bg-gray-100'}`}
            >
              עב
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-2 py-0.5 text-xs font-bold ${language === 'en' ? 'bg-black text-white' : 'hover:bg-gray-100'}`}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};
