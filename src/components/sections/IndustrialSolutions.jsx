import { motion } from 'framer-motion';
import { ExternalLink, MapPinned, MoveRight, Radar, Sparkles } from 'lucide-react';
import { useState } from 'react';
import GlassCard from '../common/GlassCard';
import SectionHeading from '../common/SectionHeading';
import { useLanguage } from '../../context/LanguageContext';
import { getContent } from '../../data/content';

export default function IndustrialSolutions() {
  const { lang } = useLanguage();
  const content = getContent(lang).solutions;

  return (
    <section id="solutions" className="px-4 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl space-y-8">
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          copy={content.copy}
        />

        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center justify-between gap-3 pb-2">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-slate-400">{content.label}</p>
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-slate-400">{content.mapTitle}</p>
            </div>
          </div>
          <div className="hidden lg:block lg:col-span-7">
            <div className="flex items-center justify-between gap-3 pb-2">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-slate-400">{content.officialSiteLabel}</p>
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-slate-400">{content.locationLabel}</p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-5"
          >
            <GlassCard className="relative overflow-hidden p-5 sm:p-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.16),transparent_35%)]" />
              <div className="relative flex items-center justify-between gap-3">
                <div>
                  <h3 className="text-2xl font-semibold text-slate-50">{content.overviewTitle}</h3>
                </div>
                <MapPinned className="h-8 w-8 text-cyan-300" />
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {content.cards.map((solution, index) => (
                  <motion.div
                    key={solution.title}
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="group rounded-3xl border border-white/10 bg-slate-950/40 p-5 transition hover:border-cyan-300/30 hover:bg-slate-950/70"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <h4 className="text-lg font-semibold text-slate-50">{solution.title}</h4>
                      <Sparkles className="h-4 w-4 text-cyan-300 transition group-hover:scale-110" />
                    </div>
                    <p className="mt-3 text-sm leading-7 text-slate-400">{solution.copy}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <a
                  href={content.officialSiteUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-4 transition hover:border-cyan-300/40 hover:bg-cyan-300/15"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.24em] text-cyan-100/80">{content.officialSiteLabel}</p>
                      <h4 className="mt-2 text-lg font-semibold text-slate-50">{content.companyName}</h4>
                    </div>
                    <ExternalLink className="h-4 w-4 text-cyan-200 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{content.companySubtitle}</p>
                </a>

                <a
                  href={content.locationUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-3xl border border-white/10 bg-white/5 p-4 transition hover:border-cyan-300/30 hover:bg-white/10"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.24em] text-slate-400">{content.locationLabel}</p>
                      <h4 className="mt-2 text-lg font-semibold text-slate-50">Monastir</h4>
                    </div>
                    <Radar className="h-4 w-4 text-cyan-300 transition group-hover:scale-110" />
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{content.logoCopy}</p>
                </a>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="lg:col-span-7"
          >
            <GlassCard className="relative overflow-hidden p-4 sm:p-5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.18),transparent_50%)]" />
              <div className="relative flex items-center justify-between px-1 pb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-slate-50">{content.mapTitle}</h3>
                </div>
                <Radar className="h-8 w-8 text-cyan-300" />
              </div>

              <div className="overflow-hidden rounded-[28px] border border-white/10 bg-slate-900/70">
                <iframe
                  title="MYC Monastir map"
                  src={content.locationEmbedUrl}
                  className="h-[290px] w-full saturate-[0.7] hue-rotate-[170deg] brightness-[0.7] contrast-[1.15]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="relative mt-4 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:col-span-1">
                  <p className="font-mono text-xs uppercase tracking-[0.24em] text-slate-400">{content.logoLabel}</p>
                  <div className="mt-3 flex items-center gap-3">
                    <div className="grid h-14 w-14 place-items-center overflow-hidden rounded-2xl border border-cyan-300/20 bg-cyan-300/10">
                      <img src={content.logoAsset} alt="MYC logo" className="h-full w-full object-contain p-2" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-50">Beauty Innovation</p>
                      <p className="text-xs text-slate-400">Official brand mark placeholder</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:col-span-2">
                  <p className="font-mono text-xs uppercase tracking-[0.24em] text-slate-400">{content.previewLabel}</p>
                  <p className="mt-2 text-sm leading-7 text-slate-300">{content.previewCopy}</p>
                  <a
                    href={content.officialSiteUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200"
                  >
                    Open official site <MoveRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="relative mt-5 grid gap-4 lg:grid-cols-2">
                {content.showcaseCards.map((project) => (
                  <PreviewTile key={project.title} project={project} />
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function PreviewTile({ project }) {
  const [active, setActive] = useState(false);

  return (
    <div className="overflow-hidden rounded-[24px] border border-white/10 bg-slate-950/60">
      <button
        type="button"
        onClick={() => setActive((value) => !value)}
        className="group flex w-full items-center justify-between border-b border-white/10 px-4 py-3 text-left"
      >
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-cyan-200/80">{project.subtitle}</p>
          <h4 className="mt-1 text-sm font-semibold text-slate-50">{project.title}</h4>
        </div>
        <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-[0.24em] text-slate-300">
          {active ? 'Pause' : 'Activate'}
        </span>
      </button>

      <div className="relative aspect-[16/11] bg-slate-900">
        {active ? (
          <iframe
            title={project.title}
            src={project.url}
            className="h-full w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        ) : (
          <div className="flex h-full flex-col justify-end bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.16),transparent_42%),linear-gradient(180deg,rgba(15,23,42,0.2),rgba(2,6,23,0.95))] p-5">
            <div className="mb-3 overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <img src={project.image} alt={project.title} className="h-36 w-full object-cover" />
            </div>
            <p className="text-sm leading-6 text-slate-400">{project.description}</p>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between gap-3 border-t border-white/10 px-4 py-3">
        <a href={project.url} target="_blank" rel="noreferrer" className="text-xs font-semibold text-cyan-200">
          Open live site
        </a>
        <span className="text-[10px] uppercase tracking-[0.24em] text-slate-500">Preview</span>
      </div>
    </div>
  );
}