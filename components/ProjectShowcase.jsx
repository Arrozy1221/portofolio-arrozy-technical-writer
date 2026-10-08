'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  GraduationCap,
  Building2,
  Laptop,
  Database,
  Workflow,
  ArrowUpRight,
  FileText,
  BookOpen,
  Sparkles,
  ExternalLink,
  Layers,
  FileCheck2,
  FileDown,
  CheckCircle2,
} from 'lucide-react';
import { featuredProjects } from '../data/content';

const bannerIcons = {
  graduation: GraduationCap,
  building: Building2,
  laptop: Laptop,
  database: Database,
  workflow: Workflow,
};

export default function ProjectShowcase({ lang, content }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const t = content[lang].showcase;

  const filteredProjects =
    activeCategory === 'all'
      ? featuredProjects
      : featuredProjects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-slate-50/60 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200/80 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>{t.eyebrow}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {t.title}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl">
              {t.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500 font-medium">
              Menampilkan <strong>{filteredProjects.length} Paket Dokumen</strong> • Klik untuk buka di tab baru
            </span>
          </div>
        </div>

        {/* Filter Buttons By Institution */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {t.categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:text-slate-900'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const Icon = bannerIcons[project.bannerIcon] || FileText;
            const projectUrl = `/proyek/${project.id}`;

            return (
              <div
                key={project.id}
                className="rounded-3xl border border-slate-200/90 bg-white overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-300 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Visual Top Banner with Full Crisp Image */}
                  <Link
                    href={projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-56 sm:h-60 w-full relative overflow-hidden bg-slate-100 block group/banner"
                  >
                    {/* Full Image Display - 100% Brightness & Zero Obstructive Tint */}
                    <div className="absolute inset-0 z-0">
                      <Image
                        src={project.coverImage || '/images/hero-laptop.png'}
                        alt={project.title[lang]}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Subtle bottom shadow gradient strictly for readability of badges */}
                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/50 via-black/15 to-transparent pointer-events-none z-10"></div>

                    {/* Top Left: Client Pill Badge */}
                    <div className="absolute top-3.5 left-3.5 z-20">
                      <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-white/95 text-slate-900 shadow-md backdrop-blur-md border border-white/60">
                        {project.client}
                      </span>
                    </div>

                    {/* Top Right: Buka Tab Baru Action Pill */}
                    <div className="absolute top-3.5 right-3.5 z-20">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-md backdrop-blur-md transition-colors">
                        <span>Tab Baru</span>
                        <ExternalLink className="w-3 h-3" />
                      </span>
                    </div>

                    {/* Bottom Right: Page Volume Tag */}
                    <div className="absolute bottom-3 right-3.5 z-20">
                      <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-semibold bg-slate-900/85 text-white backdrop-blur-md border border-white/10 shadow-sm">
                        {project.pages}
                      </span>
                    </div>
                  </Link>

                  {/* Card Content */}
                  <div className="p-6 space-y-3.5">
                    {/* Badge & Code */}
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-blue-50 text-blue-700 border border-blue-200/80">
                        {project.badge}
                      </span>
                      {project.pdfUrl && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                          <FileDown className="w-3 h-3" />
                          <span>PDF Tersedia</span>
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <Link
                      href={projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block font-bold text-lg text-slate-900 group-hover:text-blue-600 transition-colors leading-snug"
                    >
                      {project.title[lang]}
                    </Link>

                    {/* Description */}
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                      {project.description[lang]}
                    </p>

                    {/* Structured Document Bundle Box */}
                    {project.documentBundle && (
                      <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                          Paket Dokumen Tersusun ({project.documentBundle.length} Berkas):
                        </span>
                        <ul className="space-y-1 text-[11px] text-slate-700 font-medium">
                          {project.documentBundle.map((doc, dIdx) => (
                            <li key={dIdx} className="flex items-start gap-1.5 truncate">
                              <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                              <span className="truncate">{doc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Footer with Tags & Button */}
                <div className="px-6 pb-6 pt-2 border-t border-slate-100 space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-slate-100 text-slate-600 truncate"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-blue-50 hover:bg-blue-600 text-blue-700 hover:text-white border border-blue-200/80 hover:border-transparent transition-all flex items-center justify-center gap-2 group-hover:shadow-md"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Buka Halaman Dokumen</span>
                    <ArrowUpRight className="w-3.5 h-3.5 ml-auto" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
