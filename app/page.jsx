'use client';

import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Metrics from '../components/Metrics';
import ProjectShowcase from '../components/ProjectShowcase';
import DocumentationLifecycle from '../components/DocumentationLifecycle';
import Experience from '../components/Experience';
import SkillsMatrix from '../components/SkillsMatrix';
import ContactFooter from '../components/ContactFooter';
import { content } from '../data/content';

export default function Home() {
  const [lang, setLang] = useState('id');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const storedLang = localStorage.getItem('lang');
    if (storedLang === 'en' || storedLang === 'id') {
      setLang(storedLang);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
  }, [lang, mounted]);

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans antialiased selection:bg-blue-600 selection:text-white">
      <Navbar lang={lang} setLang={setLang} content={content} />
      <main className="flex-1">
        <Hero lang={lang} content={content} />
        <Metrics lang={lang} content={content} />
        <ProjectShowcase lang={lang} content={content} />
        <DocumentationLifecycle lang={lang} content={content} />
        <Experience lang={lang} content={content} />
        <SkillsMatrix lang={lang} content={content} />
      </main>
      <ContactFooter lang={lang} content={content} />
    </div>
  );
}
