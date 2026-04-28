import { motion } from 'framer-motion';
import { ArrowRight, CirclePlay, Sparkles, Target } from 'lucide-react';
import GlassCard from '../common/GlassCard';
import TypingText from '../common/TypingText';
import { useLanguage } from '../../context/LanguageContext';
import { getContent } from '../../data/content';

export default function Hero() {
  const { lang } = useLanguage();
  const content = getContent(lang).hero;

  return (
    <section id="top" className="relative overflow-hidden px-4 pt-8 sm:pt-10">
      <div className="absolute inset-0 -z-10 mesh-overlay opacity-30" />
      <div className="absolute inset-x-0 top-0 -z-20 h-[520px] bg-mesh-gradient" />
      <div className="mx-auto grid max-w-6xl items-center gap-8 py-10 lg:grid-cols-[1.08fr_0.92fr] lg:py-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-medium tracking-[0.24em] text-cyan-200">
            <Sparkles className="h-4 w-4" /> {content.badge}
          </div>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl lg:text-[4.5rem]">
            {content.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            <TypingText text={content.typing} speed={38} className="font-mono text-cyan-200" />
          </p>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            {content.copy}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#dashboard"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:translate-y-[-1px]"
            >
              {content.primaryCta} <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#solutions"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/30 hover:bg-cyan-300/10"
            >
              {content.secondaryCta} <Target className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {content.stats.map(([label, value]) => (
              <GlassCard key={label} className="px-4 py-3">
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-slate-400">{label}</p>
                <p className="mt-2 text-xl font-semibold text-slate-50">{value}</p>
              </GlassCard>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative"
        >
          <GlassCard className="relative overflow-hidden p-5 sm:p-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.22),transparent_38%)]" />
            <div className="relative space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan-200/80">{content.snapshotLabel}</p>
                  <h2 className="mt-2 text-xl font-semibold text-slate-50 sm:text-2xl">{content.snapshotTitle}</h2>
                </div>
                <CirclePlay className="h-9 w-9 text-cyan-300" />
              </div>

              <svg viewBox="0 0 500 320" className="h-48 w-full overflow-visible sm:h-52">
                <defs>
                  <linearGradient id="meshStroke" x1="0" x2="1">
                    <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#67e8f9" stopOpacity="0.9" />
                  </linearGradient>
                </defs>
                <rect x="10" y="10" width="480" height="300" rx="28" fill="rgba(15, 23, 42, 0.45)" stroke="rgba(255,255,255,0.08)" />
                <path
                  d="M40 250L110 180L185 198L255 120L330 145L410 78L460 130"
                  stroke="url(#meshStroke)"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                />
                <circle cx="110" cy="180" r="6" fill="#67e8f9" />
                <circle cx="255" cy="120" r="6" fill="#67e8f9" />
                <circle cx="410" cy="78" r="6" fill="#67e8f9" />
                <path d="M40 250C140 205 200 225 255 120C320 35 390 125 460 130" stroke="rgba(34,211,238,0.22)" strokeWidth="2" fill="none" />
                <g fill="rgba(103,232,249,0.2)">
                  <circle cx="70" cy="70" r="3" />
                  <circle cx="160" cy="54" r="4" />
                  <circle cx="350" cy="52" r="3" />
                  <circle cx="430" cy="210" r="4" />
                  <circle cx="320" cy="250" r="3" />
                </g>
              </svg>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-slate-950/45 p-4">
                  <p className="font-mono text-xs uppercase tracking-[0.24em] text-slate-400">{content.outcomeLabel}</p>
                  <p className="mt-2 text-sm leading-7 text-slate-300">{content.outcomeCopy}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/45 p-4">
                  <p className="font-mono text-xs uppercase tracking-[0.24em] text-slate-400">{content.philosophyLabel}</p>
                  <p className="mt-2 text-sm leading-7 text-slate-300">{content.philosophyCopy}</p>
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}