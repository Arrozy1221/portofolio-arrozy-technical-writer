'use client';

import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Metrics from '../components/Metrics';
import DocsShowcase from '../components/DocsShowcase';
import DocumentationLifecycle from '../components/DocumentationLifecycle';
import Experience from '../components/Experience';
import SkillsMatrix from '../components/SkillsMatrix';
import ContactFooter from '../components/ContactFooter';
import { content } from '../data/content';

export default function Home() {
  const [lang, setLang] = useState('id');
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Check local storage or system preference
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialDark = storedTheme === 'dark' || (!storedTheme && prefersDark);

    const storedLang = localStorage.getItem('lang');
    if (storedLang === 'en' || storedLang === 'id') {
      setLang(storedLang);
    }

    setIsDark(initialDark);
    if (initialDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark, mounted]);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
  }, [lang, mounted]);

  return (
    <div className="min-h-screen bg-slate-50/50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 flex flex-col font-sans transition-colors duration-200">
      <Navbar
        lang={lang}
        setLang={setLang}
        isDark={isDark}
        setIsDark={setIsDark}
        content={content}
      />
      <main className="flex-1">
        <Hero lang={lang} content={content} />
        <Metrics lang={lang} content={content} />
        <DocsShowcase lang={lang} content={content} />
        <DocumentationLifecycle lang={lang} content={content} />
        <Experience lang={lang} content={content} />
        <SkillsMatrix lang={lang} content={content} />
      </main>
      <ContactFooter lang={lang} content={content} />
    </div>
  );
}
