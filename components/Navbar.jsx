'use client';

import { useState } from 'react';
import { Download, Globe, Menu, X } from 'lucide-react';

export default function Navbar({ lang, setLang, content }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = content[lang].nav;

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'id' ? 'en' : 'id'));
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/95 backdrop-blur-md shadow-sm transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-sm shadow-md transition-transform group-hover:scale-105">
            AF
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm tracking-tight text-slate-900">
              {t.brand}
            </span>
            <span className="text-[11px] text-slate-500 font-medium">
              {t.brandSub}
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-medium text-slate-600">
          <a href="#hero" className="hover:text-blue-600 transition">
            {t.home}
          </a>
          <a href="#lifecycle" className="hover:text-blue-600 transition">
            {t.methodology}
          </a>
          <a href="#skills" className="hover:text-blue-600 transition">
            {t.skills}
          </a>
          <a href="#projects" className="hover:text-blue-600 transition">
            {t.projects}
          </a>
          <a href="#experience" className="hover:text-blue-600 transition">
            {content[lang].experience.title}
          </a>
          <a href="#contact" className="hover:text-blue-600 transition">
            {t.contact}
          </a>
        </nav>

        {/* Right CTA Area */}
        <div className="flex items-center gap-3">
          {/* Segmented Language Toggle (ID / EN) */}
          <div className="flex items-center rounded-lg border border-slate-200 bg-slate-50 p-0.5 text-xs font-bold text-slate-600">
            <button
              onClick={() => setLang('id')}
              className={`px-2.5 py-1 rounded-md transition ${
                lang === 'id'
                  ? 'bg-white text-blue-600 shadow-sm font-extrabold'
                  : 'hover:text-slate-900 text-slate-500'
              }`}
              title="Bahasa Indonesia"
            >
              ID
            </button>
            <span className="text-slate-300">|</span>
            <button
              onClick={() => setLang('en')}
              className={`px-2.5 py-1 rounded-md transition ${
                lang === 'en'
                  ? 'bg-white text-blue-600 shadow-sm font-extrabold'
                  : 'hover:text-slate-900 text-slate-500'
              }`}
              title="English"
            >
              EN
            </button>
          </div>

          {/* Download CV Button */}
          <a
            href={t.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-600/20 transition-all hover:scale-[1.02]"
          >
            <span>{t.downloadCv}</span>
            <Download className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg border border-slate-200 text-slate-700"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white px-6 py-4 space-y-3 text-sm font-medium text-slate-700 shadow-xl">
          <a
            href="#hero"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1.5 hover:text-blue-600"
          >
            {t.home}
          </a>
          <a
            href="#lifecycle"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1.5 hover:text-blue-600"
          >
            {t.methodology}
          </a>
          <a
            href="#skills"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1.5 hover:text-blue-600"
          >
            {t.skills}
          </a>
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1.5 hover:text-blue-600"
          >
            {t.projects}
          </a>
          <a
            href="#experience"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1.5 hover:text-blue-600"
          >
            {content[lang].experience.title}
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1.5 hover:text-blue-600"
          >
            {t.contact}
          </a>
          <div className="pt-2">
            <a
              href={t.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-blue-600 text-white font-semibold text-xs shadow-md"
            >
              <span>{t.downloadCv}</span>
              <Download className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
