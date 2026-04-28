import { AnimatePresence, motion } from 'framer-motion';
import { Filter, Layers3 } from 'lucide-react';
import { useState } from 'react';
import GlassCard from '../common/GlassCard';
import SectionHeading from '../common/SectionHeading';
import { useLanguage } from '../../context/LanguageContext';
import { getContent, baseProjects } from '../../data/content';

export default function PortfolioGrid() {
  const { lang } = useLanguage();
  const content = getContent(lang).portfolio;
  const [selectedFilter, setSelectedFilter] = useState('All');

  const visibleProjects =
    selectedFilter === 'All'
      ? baseProjects
      : baseProjects.filter((project) => project.tag === selectedFilter);

  return (
    <section id="portfolio" className="px-4 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl space-y-10">
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          copy={content.copy}
        />

        <div className="flex flex-wrap gap-3">
          <Filter className="mt-2 h-4 w-4 text-cyan-300" />
          {content.filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setSelectedFilter(filter)}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                selectedFilter === filter
                  ? 'border-cyan-300/40 bg-cyan-300/15 text-cyan-100'
                  : 'border-white/10 bg-white/5 text-slate-300 hover:border-cyan-300/25 hover:bg-white/10'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <AnimatePresence mode="popLayout">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
              >
                <GlassCard className="group h-full p-5 transition hover:-translate-y-1">
                  <p className="font-mono text-xs uppercase tracking-[0.24em] text-cyan-200/80">{project.tag}</p>
                  <h3 className="mt-3 text-2xl font-semibold text-slate-50 group-hover:text-cyan-100">{project.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-400">{project.summary}</p>
                  <div className="mt-6 flex items-center gap-2 text-sm font-medium text-cyan-200">
                    <Layers3 className="h-4 w-4" /> {content.capability}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      </div>
    </section>
  );
}