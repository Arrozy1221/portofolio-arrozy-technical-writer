'use client';

import { useState } from 'react';
import {
  GraduationCap,
  Building2,
  Laptop,
  Database,
  Workflow,
  ArrowUpRight,
  FileText,
  X,
  CheckCircle2,
  Layers,
  ChevronRight,
} from 'lucide-react';
import Image from 'next/image';
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
  const [modalProject, setModalProject] = useState(null);

  const t = content[lang].showcase;

  const filteredProjects =
    activeCategory === 'all'
      ? featuredProjects
      : featuredProjects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-slate-50/50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-2">
              {t.eyebrow}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {t.title}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl">
              {t.subtitle}
            </p>
          </div>

          <a
            href="#projects"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-200 hover:bg-blue-100 transition whitespace-nowrap self-start md:self-auto"
          >
            <span>{t.viewAll}</span>
          </a>
        </div>

        {/* Filter Buttons */}
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
            return (
              <div
                key={project.id}
                onClick={() => setModalProject(project)}
                className="rounded-2xl border border-slate-200/90 bg-white overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-300 transition-all cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  {/* Visual Top Banner with High-End Illustration */}
                  <div
                    className={`h-48 bg-gradient-to-br ${project.bannerGradient} relative p-6 flex items-center justify-center overflow-hidden`}
                  >
                    {/* Background subtle geometry */}
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>

                    {/* Floating Center Icon */}
                    <div className="relative z-10 w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-10 h-10" />
                    </div>

                    {/* Bottom banner label */}
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-white/80">
                      <span>{project.client}</span>
                      <span>{project.pages}</span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 space-y-3">
                    {/* Badge */}
                    <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-blue-50 text-blue-600 border border-blue-200/60">
                      {project.badge}
                    </span>

                    {/* Title */}
                    <h3 className="font-bold text-lg text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                      {project.title[lang]}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {project.description[lang]}
                    </p>
                  </div>
                </div>

                {/* Card Footer with Tags & Action Arrow */}
                <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-100 text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Detail Modal Dialog */}
      {modalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
            {/* Modal Header */}
            <div
              className={`p-6 bg-gradient-to-r ${modalProject.bannerGradient} text-white flex items-center justify-between`}
            >
              <div>
                <span className="text-[10px] font-mono tracking-widest uppercase bg-white/20 px-2 py-0.5 rounded">
                  {modalProject.badge}
                </span>
                <h3 className="text-xl font-bold mt-1.5">
                  {modalProject.title[lang]}
                </h3>
                <p className="text-xs text-white/80 mt-0.5">
                  {modalProject.client} • {modalProject.pages}
                </p>
              </div>

              <button
                onClick={() => setModalProject(null)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-5 text-sm text-slate-700">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Deskripsi Proyek
                </h4>
                <p className="leading-relaxed">
                  {modalProject.description[lang]}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <h4 className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1">
                  Target Pengguna &amp; Stakeholder
                </h4>
                <p className="text-xs text-slate-800 font-medium">
                  {modalProject.detail.scope}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Sorotan Dokumentasi Teknis
                </h4>
                <ul className="space-y-2">
                  {modalProject.detail.highlights.map((hl, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 flex flex-wrap gap-2">
                {modalProject.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setModalProject(null)}
                className="px-5 py-2 rounded-xl text-xs font-semibold bg-slate-900 text-white hover:bg-slate-800 transition"
              >
                Tutup Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
