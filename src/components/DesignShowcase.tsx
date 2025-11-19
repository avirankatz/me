import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Server, TrendingUp, Sparkles, Bot } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const DesignShowcase = () => {
  const { t } = useLanguage();
  const [activePackage, setActivePackage] = useState<string | null>(null);

  const handlePackageClick = (id: string) => {
    setActivePackage(id);
    setTimeout(() => setActivePackage(null), 2000);
  };

  const icons = {
    audit: Search,
    prod: Server,
    scale: TrendingUp,
    polish: Sparkles,
    ai: Bot
  };

  return (
    <section id="packages" className="py-20 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-7xl mb-12 font-black text-center title-gradient">
          {t.packages.title} <span className="text-neo-primary">{t.packages.subtitle}</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start packages-grid">
          {/* Packages List */}
          <div className="space-y-4">
            <h3 className="text-3xl font-bold mb-6 border-b-4 border-black inline-block">SELECT YOUR UPGRADE</h3>
            {t.packages.list.map((pkg) => {
              const Icon = icons[pkg.id as keyof typeof icons];
              return (
                <motion.div 
                  key={pkg.id}
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => handlePackageClick(pkg.id)}
                  className={`neo-box hover-lift p-4 flex items-start gap-4 cursor-pointer transition-colors border-2 border-black shadow-neo-sm package-card ${
                    activePackage === pkg.id ? 'bg-neo-secondary' : 'bg-white hover:bg-gray-50'
                  }`}
                >
                  <div className="bg-black text-white p-3 border-2 border-black shrink-0 package-icon">
                    <Icon size={24} />
                  </div>
                  <div>
                    <div className="flex justify-between items-baseline mb-1">
                      <h3 className="text-xl font-bold uppercase">{pkg.title}</h3>
                      <span className="text-xs font-mono bg-neo-accent px-2 py-0.5 border border-black">{pkg.time}</span>
                    </div>
                    <p className="text-sm text-gray-600">{pkg.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Case Studies / Process */}
          <div className="space-y-8">
            <div className="neo-box p-8 bg-gray-50 border-2 border-black shadow-neo-sm">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <TrendingUp className="text-neo-primary" />
                {t.packages.caseStudies.title}
              </h3>
              
              <div className="space-y-6">
                {t.packages.caseStudies.items.map((study, index) => (
                  <div key={index} className={`border-l-4 rtl:border-l-0 rtl:border-r-4 pl-4 rtl:pl-0 rtl:pr-4 ${
                    index === 0 ? 'border-neo-primary' : index === 1 ? 'border-neo-secondary' : 'border-neo-accent'
                  }`}>
                    <h4 className="font-bold text-lg">{study.title}</h4>
                    <p className="text-sm mb-2 text-gray-600">{study.desc}</p>
                    <div className="flex gap-2 text-xs font-bold flex-wrap">
                      {study.stats.map((stat, i) => (
                        <span key={i} className="bg-white border border-black px-2 py-1 shadow-sm">{stat}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="neo-box p-8 bg-black text-white border-2 border-black shadow-neo-sm">
              <h3 className="text-2xl font-bold mb-4 text-neo-secondary">{t.packages.process.title}</h3>
              <div className="grid grid-cols-2 gap-6">
                {t.packages.process.steps.map((step, index) => (
                  <div key={index}>
                    <span className="text-neo-accent font-bold block mb-1">{step.title}</span>
                    <span className="text-sm text-gray-400 leading-tight block">{step.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
