import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const FAQ = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-8 bg-white border-t-4 border-black faq">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black mb-12 text-center faq-title">
          {t.faq.title}
        </h2>
        
        <div className="space-y-4 faq-list">
          {t.faq.items.map((faq, index) => (
            <div key={index} className="border-2 border-black shadow-neo-sm faq-item">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 flex justify-between items-center bg-neo-bg hover:bg-neo-secondary transition-colors text-start faq-q"
              >
                <span className="font-bold text-lg">{faq.q}</span>
                {openIndex === index ? <Minus size={24} /> : <Plus size={24} />}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 bg-white border-t-2 border-black faq-a">
                      <p className="text-lg">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
