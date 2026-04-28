import { Menu, MoonStar, Shield, X } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import { getContent } from '../../data/content';

function LanguageButton({ active, flagSrc, label, onClick, mobile = false }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center gap-2 rounded-full border font-semibold transition ${
        mobile ? 'flex-1 px-4 py-3 text-sm' : 'px-3 py-2 text-xs'
      } ${active ? 'border-cyan-300/40 bg-cyan-300/15 text-cyan-100' : 'border-white/10 bg-white/5 text-slate-300'}`}
    >
      <img src={flagSrc} alt="" aria-hidden="true" className={mobile ? 'h-4 w-6 rounded-sm object-cover' : 'h-3.5 w-5 rounded-sm object-cover'} />
      <span>{label}</span>
    </button>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { lang, setLang } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const content = getContent(lang);
  const links = content.nav.links;

  return (
    <header className="sticky top-3 z-50 px-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-white/8 bg-slate-950/50 px-3 py-2.5 backdrop-blur-2xl">
        <a href="#top" className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
            <Shield className="h-4.5 w-4.5" />
          </span>
          <span>
            <span className="block text-[11px] font-semibold tracking-[0.28em] text-slate-50">MYC</span>
            <span className="block text-[10px] text-slate-400">{content.nav.brand}</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1.5 md:flex">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="rounded-full px-3.5 py-2 text-sm text-slate-300 transition hover:bg-white/5 hover:text-cyan-200"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <button
            type="button"
            onClick={toggleTheme}
            className="flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-2 text-xs font-semibold text-cyan-100 transition hover:border-cyan-300/40 hover:bg-cyan-300/15"
            aria-pressed={theme === 'night'}
          >
            <MoonStar className="h-3.5 w-3.5" /> {theme === 'night' ? 'Mode nuit' : 'Mode jour'}
          </button>
          <LanguageButton active={lang === 'fr'} flagSrc="/assets/flags/fr.svg" label="FR" onClick={() => setLang('fr')} />
          <LanguageButton active={lang === 'en'} flagSrc="/assets/flags/en.svg" label="EN" onClick={() => setLang('en')} />
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-slate-100 md:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="mx-auto mt-3 max-w-6xl rounded-2xl border border-white/8 bg-slate-950/92 p-3 backdrop-blur-2xl md:hidden">
          <div className="grid gap-2">
            {links.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-xl border border-white/5 bg-white/5 px-4 py-3 text-sm text-slate-200"
              >
                {label}
              </a>
            ))}
            <div className="mt-2 flex gap-2 px-1">
              <button
                type="button"
                onClick={toggleTheme}
                className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-cyan-300/20 bg-cyan-300/10 px-4 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-300/40 hover:bg-cyan-300/15"
                aria-pressed={theme === 'night'}
              >
                <MoonStar className="h-4 w-4" /> {theme === 'night' ? 'Mode nuit' : 'Mode jour'}
              </button>
              <LanguageButton mobile active={lang === 'fr'} flagSrc="/assets/flags/fr.svg" label="FR" onClick={() => setLang('fr')} />
              <LanguageButton mobile active={lang === 'en'} flagSrc="/assets/flags/en.svg" label="EN" onClick={() => setLang('en')} />
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}