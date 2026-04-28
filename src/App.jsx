import { motion } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import ChatbotFab from './components/sections/ChatbotFab';
import CompanyChatbot from './components/sections/CompanyChatbot';
import CreativeIntelligence from './components/sections/CreativeIntelligence';
import Hero from './components/sections/Hero';
import IndustrialSolutions from './components/sections/IndustrialSolutions';
import LiveOperations from './components/sections/LiveOperations';
import PortfolioGrid from './components/sections/PortfolioGrid';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { getContent } from './data/content';

function AppShell() {
  const { lang } = useLanguage();
  const { theme } = useTheme();
  const content = getContent(lang);
  const footerLinks = content.footer.links.map((label, index) => [label, ['#dashboard', '#solutions', '#portfolio', '#intelligence'][index]]);
  const isNight = theme === 'night';

  return (
    <div className={`relative min-h-screen overflow-hidden ${isNight ? 'bg-slate-950 text-slate-50' : 'bg-slate-50 text-slate-900'}`}>
      <div className="absolute inset-0 -z-20 bg-mesh-gradient" />
      <div
        className={`absolute inset-0 -z-10 opacity-30 ${
          isNight
            ? '[background-image:radial-gradient(circle_at_1px_1px,rgba(148,163,184,0.16)_1px,transparent_0)] [background-size:34px_34px]'
            : '[background-image:radial-gradient(circle_at_1px_1px,rgba(148,163,184,0.10)_1px,transparent_0)] [background-size:40px_40px]'
        }`}
      />

      <Navbar />

      <main>
        <Hero />
        <LiveOperations />
        <IndustrialSolutions />
        <PortfolioGrid />
        <CompanyChatbot />
        <CreativeIntelligence />
      </main>

      <footer className="px-4 pb-10 pt-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mx-auto flex max-w-7xl flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 px-6 py-6 backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <p className="text-sm font-semibold text-slate-50">{content.footer.title}</p>
            <p className="mt-1 text-sm text-slate-400">{content.footer.copy}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {footerLinks.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="rounded-full border border-white/10 bg-slate-950/40 px-4 py-2 text-sm text-slate-300 hover:border-cyan-300/25 hover:text-cyan-100"
              >
                {label}
              </a>
            ))}
          </div>
        </motion.div>
      </footer>

      <ChatbotFab />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppShell />
      </LanguageProvider>
    </ThemeProvider>
  );
}