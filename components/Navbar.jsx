'use client';

import { useState } from 'react';
import { FileText, Download, Moon, Sun, Globe, Menu, X, Terminal } from 'lucide-react';

export default function Navbar({ lang, setLang, isDark, setIsDark, content }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = content[lang].nav;

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'id' ? 'en' : 'id'));
  };

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 dark:border-zinc-800/80 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-950 flex items-center justify-center font-mono font-bold text-sm shadow-sm transition-transform group-hover:scale-105">
            AF
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-sm tracking-tight text-zinc-900 dark:text-zinc-100">
                {t.brand}
              </span>
              <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono font-medium bg-sky-100 dark:bg-sky-950/80 text-sky-800 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
                DOCS
              </span>
            </div>
            <span className="text-[11px] text-zinc-500 dark:text-zinc-400 font-mono">
              systems-writer
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 font-mono text-xs">
          <a
            href="#docs"
            className="px-3 py-1.5 rounded-md text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition"
          >
            {t.docs}
          </a>
          <a
            href="#lifecycle"
            className="px-3 py-1.5 rounded-md text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition"
          >
            {t.methodology}
          </a>
          <a
            href="#experience"
            className="px-3 py-1.5 rounded-md text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition"
          >
            {t.experience}
          </a>
          <a
            href="#skills"
            className="px-3 py-1.5 rounded-md text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition"
          >
            {t.skills}
          </a>
          <a
            href="#contact"
            className="px-3 py-1.5 rounded-md text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition"
          >
            {t.contact}
          </a>
        </nav>

        {/* Controls */}
        <div className="flex items-center gap-2">
          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-mono font-medium rounded-lg border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800/70 text-zinc-700 dark:text-zinc-300 transition"
            title="Switch Language"
          >
            <Globe className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
            <span className="uppercase">{lang}</span>
          </button>

          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800/70 text-zinc-700 dark:text-zinc-300 transition"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-zinc-600" />
            )}
          </button>

          {/* Download CV CTA */}
          <a
            href={t.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-white text-white dark:text-zinc-950 shadow-sm transition"
          >
            <Download className="w-3.5 h-3.5" />
            <span>{t.downloadCv}</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-4 pt-3 pb-5 space-y-2 font-mono text-sm">
          <a
            href="#docs"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800/70"
          >
            {t.docs}
          </a>
          <a
            href="#lifecycle"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800/70"
          >
            {t.methodology}
          </a>
          <a
            href="#experience"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800/70"
          >
            {t.experience}
          </a>
          <a
            href="#skills"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800/70"
          >
            {t.skills}
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800/70"
          >
            {t.contact}
          </a>
          <div className="pt-2">
            <a
              href={t.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-950 font-sans font-medium text-xs shadow-sm"
            >
              <Download className="w-4 h-4" />
              <span>{t.downloadCv}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
