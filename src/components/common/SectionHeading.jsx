import { motion } from 'framer-motion';

export default function SectionHeading({ eyebrow, title, copy }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55 }}
      className="max-w-2xl"
    >
      <p className="font-mono text-[10px] uppercase tracking-[0.34em] text-cyan-200/75">{eyebrow}</p>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl lg:text-[2.5rem]">{title}</h2>
      {copy ? <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-[15px]">{copy}</p> : null}
    </motion.div>
  );
}