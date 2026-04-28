import { motion } from 'framer-motion';
import { Palette, Sparkles, Wand2 } from 'lucide-react';
import GlassCard from '../common/GlassCard';
import SectionHeading from '../common/SectionHeading';
import { useLanguage } from '../../context/LanguageContext';
import { creativeWorkflow } from '../../data/siteData';
import { getContent } from '../../data/content';

export default function CreativeIntelligence() {
  const { lang } = useLanguage();
  const content = getContent(lang).intelligence;

  return (
    <section id="intelligence" className="px-4 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl space-y-10">
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          copy={content.copy}
        />

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <GlassCard className="p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <Palette className="h-6 w-6 text-cyan-300" />
              <h3 className="text-2xl font-semibold text-slate-50">{content.pipelineTitle}</h3>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              {content.pipelineCopy}
            </p>

            <div className="mt-6 space-y-4">
              {creativeWorkflow.map((step, index) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: -14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <p className="font-mono text-xs uppercase tracking-[0.24em] text-slate-400">
                    {content.stepLabel} {index + 1}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-300">{step}</p>
                </motion.div>
              ))}
            </div>
          </GlassCard>

          <div className="grid gap-5 sm:grid-cols-2">
            <GlassCard className="p-6">
              <Wand2 className="h-7 w-7 text-cyan-300" />
              <h3 className="mt-4 text-xl font-semibold text-slate-50">{content.leonadoTitle}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{content.leonadoCopy}</p>
            </GlassCard>

            <GlassCard className="p-6">
              <Sparkles className="h-7 w-7 text-cyan-300" />
              <h3 className="mt-4 text-xl font-semibold text-slate-50">{content.canvaTitle}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{content.canvaCopy}</p>
            </GlassCard>

            <GlassCard className="sm:col-span-2 p-6">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-slate-400">{content.outcomeLabel}</p>
              <p className="mt-3 text-sm leading-7 text-slate-300">{content.outcomeCopy}</p>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}