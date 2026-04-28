import { motion } from 'framer-motion';
import { Activity, AlertTriangle, Bolt, Waves } from 'lucide-react';
import { useEffect, useState } from 'react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import GlassCard from '../common/GlassCard';
import SectionHeading from '../common/SectionHeading';
import { useLanguage } from '../../context/LanguageContext';
import { getContent } from '../../data/content';

const seedSeries = [74, 77, 81, 79, 84, 86, 88, 90, 89, 88];

const formatPercent = (value) => `${Math.round(value)}%`;

export default function LiveOperations() {
  const { lang } = useLanguage();
  const content = getContent(lang).dashboard;
  const [series, setSeries] = useState(
    seedSeries.map((value, index) => ({ name: `T${index + 1}`, value }))
  );
  const [anomalyRate, setAnomalyRate] = useState(4.2);
  const [energyConsumption, setEnergyConsumption] = useState(71.5);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setSeries((currentSeries) =>
        currentSeries.map((point, index) => {
          const drift = Math.sin(Date.now() / 1400 + index) * 1.4 + (Math.random() - 0.5) * 0.9;
          return { ...point, value: Math.max(72, Math.min(96, point.value + drift)) };
        })
      );
      setAnomalyRate((current) => Math.max(1.3, Math.min(7.8, current + (Math.random() - 0.45) * 0.5)));
      setEnergyConsumption((current) => Math.max(62, Math.min(86, current + (Math.random() - 0.45) * 0.8)));
    }, 1800);

    return () => window.clearInterval(interval);
  }, []);

  const kpis = [
    {
      label: content.kpis[0][0],
      value: '88%',
      icon: Activity,
      detail: content.kpis[0][2]
    },
    {
      label: content.kpis[1][0],
      value: formatPercent(anomalyRate),
      icon: AlertTriangle,
      detail: content.kpis[1][2]
    },
    {
      label: content.kpis[2][0],
      value: formatPercent(energyConsumption),
      icon: Bolt,
      detail: content.kpis[2][2]
    }
  ];

  return (
    <section id="dashboard" className="px-4 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl space-y-10">
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          copy={content.copy}
        />

        <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
          <div className="grid gap-4 sm:grid-cols-3 xl:grid-cols-1">
            {kpis.map((kpi, index) => {
              const Icon = kpi.icon;
              return (
                <motion.div
                  key={kpi.label}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  <GlassCard className="h-full p-5">
                    <div className="flex items-center justify-between">
                      <p className="font-mono text-xs uppercase tracking-[0.24em] text-slate-400">{kpi.label}</p>
                      <Icon className="h-5 w-5 text-cyan-300" />
                    </div>
                    <p className="mt-4 text-4xl font-bold text-slate-50">{kpi.value}</p>
                    <p className="mt-3 text-sm leading-7 text-slate-400">{kpi.detail}</p>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>

          <GlassCard className="overflow-hidden p-5 sm:p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-slate-400">{content.stateLabel}</p>
                <h3 className="mt-2 text-xl font-semibold text-slate-50">{content.stateTitle}</h3>
              </div>
              <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-200">
                {content.realtime}
              </div>
            </div>

            <div className="mt-6 h-[320px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={series}>
                  <defs>
                    <linearGradient id="oeeFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#22d3ee" stopOpacity={0.38} />
                      <stop offset="100%" stopColor="#22d3ee" stopOpacity={0.02} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid stroke="rgba(148,163,184,0.12)" vertical={false} />
                  <XAxis dataKey="name" stroke="#94a3b8" tickLine={false} axisLine={false} />
                  <YAxis domain={[70, 96]} stroke="#94a3b8" tickLine={false} axisLine={false} />
                  <Tooltip
                    contentStyle={{
                      background: 'rgba(2,6,23,0.92)',
                      border: '1px solid rgba(34,211,238,0.2)',
                      borderRadius: '16px',
                      color: '#e2e8f0'
                    }}
                  />
                  <Area type="monotone" dataKey="value" stroke="#67e8f9" strokeWidth={3} fill="url(#oeeFill)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-slate-400">{content.oeeTarget}</p>
                <p className="mt-2 text-2xl font-bold text-slate-50">88%</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-slate-400">{content.anomalyRate}</p>
                <p className="mt-2 text-2xl font-bold text-slate-50">{formatPercent(anomalyRate)}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-slate-400">{content.energyIndex}</p>
                <p className="mt-2 text-2xl font-bold text-slate-50">{formatPercent(energyConsumption)}</p>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}