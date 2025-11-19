import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Contact = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-8 bg-neo-primary border-t-4 border-black contact">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-black mb-12 bg-white inline-block px-6 py-2 border-4 border-black shadow-neo transform -rotate-1 contact-title">
            {t.contact.title}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12 contact-grid">
            <a 
              href="mailto:aviran.katz@gmail.com"
              className="group relative contact-card"
            >
              <div className="absolute inset-0 bg-black translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform"></div>
              <div className="relative bg-white border-2 border-black p-8 hover:-translate-y-1 transition-transform h-full flex flex-col items-center justify-center gap-4">
                <div className="bg-neo-bg p-4 rounded-full border-2 border-black group-hover:rotate-12 transition-transform">
                  <Mail size={32} />
                </div>
                <h3 className="text-xl font-bold">{t.contact.email}</h3>
                <p className="text-sm font-mono break-all">aviran.katz@gmail.com</p>
              </div>
            </a>

            <a 
              href="https://www.linkedin.com/in/aviran-katz-491163b3/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative contact-card"
            >
              <div className="absolute inset-0 bg-black translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform"></div>
              <div className="relative bg-neo-secondary border-2 border-black p-8 hover:-translate-y-1 transition-transform h-full flex flex-col items-center justify-center gap-4">
                <div className="bg-white p-4 rounded-full border-2 border-black group-hover:-rotate-12 transition-transform">
                  <Linkedin size={32} />
                </div>
                <h3 className="text-xl font-bold">{t.contact.linkedin}</h3>
                <p className="text-sm font-mono flex items-center gap-1">
                  Connect <ExternalLink size={12} />
                </p>
              </div>
            </a>

            <a 
              href="https://github.com/avirankatz"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative contact-card"
            >
              <div className="absolute inset-0 bg-black translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform"></div>
              <div className="relative bg-neo-accent border-2 border-black p-8 hover:-translate-y-1 transition-transform h-full flex flex-col items-center justify-center gap-4">
                <div className="bg-white p-4 rounded-full border-2 border-black group-hover:rotate-12 transition-transform">
                  <Github size={32} />
                </div>
                <h3 className="text-xl font-bold">{t.contact.github}</h3>
                <p className="text-sm font-mono flex items-center gap-1">
                  Follow <ExternalLink size={12} />
                </p>
              </div>
            </a>
          </div>

          <div className="bg-black text-white p-6 border-2 border-neo-primary inline-block contact-location">
            <p className="font-mono text-lg">
              {t.contact.location}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
