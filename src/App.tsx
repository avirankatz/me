import { Hero } from './components/Hero';
import { PerformanceDemo } from './components/PerformanceDemo';
import { DesignShowcase } from './components/DesignShowcase';
import { Contact } from './components/Contact';
import { FAQ } from './components/FAQ';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { StyleProvider } from './context/StyleContext';
import { Header } from './components/Header';

const AppContent = () => {
  const { t } = useLanguage();
  
  return (
    <main className="bg-white min-h-screen text-black selection:bg-neo-primary selection:text-white">
      <Header />
      <Hero />
      <PerformanceDemo />
      <DesignShowcase />
      <FAQ />
      <div id="contact">
        <Contact />
      </div>
      
      <footer className="bg-black text-white py-12 text-center border-t-4 border-neo-primary px-4">
        <p className="font-mono text-sm">
          {t.footer.built}
        </p>
        <p className="mt-2 text-gray-500 text-xs max-w-2xl mx-auto">
          {t.footer.habits}
        </p>
      </footer>
    </main>
  );
};

function App() {
  return (
    <LanguageProvider>
      <StyleProvider>
        <AppContent />
      </StyleProvider>
    </LanguageProvider>
  );
}

export default App;
