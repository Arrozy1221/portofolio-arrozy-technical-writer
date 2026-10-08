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
  BookOpen,
  AlertTriangle,
  Info,
  Lightbulb,
  Layers,
  Sparkles,
  ShieldCheck,
  Calendar,
  Eye,
  FileCheck2,
  MessageSquare,
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
  const [modalProject, setModalProject] = useState(null);
  const [activeTab, setActiveTab] = useState('sample'); // 'sample' | 'case_study' | 'toc'

  const t = content[lang].showcase;

  const filteredProjects =
    activeCategory === 'all'
      ? featuredProjects
      : featuredProjects.filter((p) => p.category === activeCategory);

  const openProjectModal = (project, tab = 'sample') => {
    setModalProject(project);
    setActiveTab(tab);
  };

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
            <span className="text-xs text-slate-500 font-medium hidden sm:inline">
              Klik kartu untuk membuka <strong>Pratinjau Lembar Dokumen</strong>
            </span>
          </div>
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
                className="rounded-2xl border border-slate-200/90 bg-white overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-300 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Visual Top Banner with Icon & Metadata */}
                  <div
                    onClick={() => openProjectModal(project, 'sample')}
                    className={`h-48 bg-gradient-to-br ${project.bannerGradient} relative p-6 flex items-center justify-center overflow-hidden cursor-pointer`}
                  >
                    {/* Background subtle geometry */}
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>

                    {/* Floating Center Icon */}
                    <div className="relative z-10 w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-10 h-10" />
                    </div>

                    {/* Top right quick preview pill */}
                    <div className="absolute top-3 right-3 z-10">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-semibold bg-white/20 backdrop-blur-md text-white border border-white/20">
                        <Eye className="w-3 h-3" />
                        <span>Pratinjau A4</span>
                      </span>
                    </div>

                    {/* Bottom banner label */}
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-white/90">
                      <span className="font-medium truncate max-w-[60%]">{project.client}</span>
                      <span className="bg-black/20 px-2 py-0.5 rounded text-[10px]">{project.pages}</span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 space-y-3">
                    {/* Badge & Code */}
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-blue-50 text-blue-600 border border-blue-200/60">
                        {project.badge}
                      </span>
                      {project.documentMeta && (
                        <span className="text-[10px] font-mono text-slate-400 truncate">
                          {project.documentMeta.docCode.split('/')[1] || project.documentMeta.docCode}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3
                      onClick={() => openProjectModal(project, 'sample')}
                      className="font-bold text-lg text-slate-900 group-hover:text-blue-600 transition-colors leading-snug cursor-pointer"
                    >
                      {project.title[lang]}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {project.description[lang]}
                    </p>

                    {/* Key Highlight snippet */}
                    {project.caseStudy && (
                      <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-[11px] text-slate-600 space-y-1">
                        <span className="font-semibold text-slate-800 block text-[10px] uppercase tracking-wider text-blue-600">
                          Dampak Kunci:
                        </span>
                        <p className="line-clamp-2 italic">
                          "{project.caseStudy.impact}"
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Footer with Buttons */}
                <div className="px-6 pb-6 pt-3 border-t border-slate-100 space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-slate-100 text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => openProjectModal(project, 'sample')}
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-blue-50 hover:bg-blue-600 text-blue-700 hover:text-white border border-blue-200/80 hover:border-transparent transition-all flex items-center justify-center gap-2 group-hover:shadow-md"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Buka Pratinjau Dokumen</span>
                    <ArrowUpRight className="w-3.5 h-3.5 ml-auto" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Document Inspection Modal Dialog */}
      {modalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/70 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
          <div className="w-full max-w-4xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-slate-100 my-auto flex flex-col max-h-[92vh]">
            {/* Modal Top Header */}
            <div
              className={`p-5 sm:p-6 bg-gradient-to-r ${modalProject.bannerGradient} text-white flex items-center justify-between shrink-0`}
            >
              <div className="space-y-1 pr-4">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[10px] font-mono tracking-widest uppercase bg-white/20 px-2 py-0.5 rounded font-bold">
                    {modalProject.badge}
                  </span>
                  {modalProject.documentMeta && (
                    <span className="text-[10px] font-mono bg-black/20 px-2 py-0.5 rounded text-white/90">
                      {modalProject.documentMeta.docCode}
                    </span>
                  )}
                  <span className="text-[10px] font-medium bg-emerald-500/20 text-emerald-200 border border-emerald-400/30 px-2 py-0.5 rounded">
                    {modalProject.documentMeta?.version || 'Final Version'}
                  </span>
                </div>
                <h3 className="text-lg sm:text-2xl font-bold leading-tight">
                  {modalProject.title[lang]}
                </h3>
                <p className="text-xs text-white/80">
                  {modalProject.client} • {modalProject.pages} • {modalProject.documentMeta?.classification}
                </p>
              </div>

              <button
                onClick={() => setModalProject(null)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition shrink-0"
                aria-label="Tutup Preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Tabs Navigation */}
            <div className="flex items-center gap-2 px-5 sm:px-6 pt-3 bg-slate-100/80 border-b border-slate-200 shrink-0 overflow-x-auto no-scrollbar">
              <button
                onClick={() => setActiveTab('sample')}
                className={`flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-t-xl transition-all border-b-2 ${
                  activeTab === 'sample'
                    ? 'bg-white text-blue-600 border-blue-600 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 border-transparent'
                }`}
              >
                <FileCheck2 className="w-4 h-4" />
                <span>Lembar Sampel Dokumen (A4)</span>
              </button>

              <button
                onClick={() => setActiveTab('case_study')}
                className={`flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-t-xl transition-all border-b-2 ${
                  activeTab === 'case_study'
                    ? 'bg-white text-blue-600 border-blue-600 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 border-transparent'
                }`}
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Studi Kasus &amp; Dampak</span>
              </button>

              <button
                onClick={() => setActiveTab('toc')}
                className={`flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-t-xl transition-all border-b-2 ${
                  activeTab === 'toc'
                    ? 'bg-white text-blue-600 border-blue-600 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 border-transparent'
                }`}
              >
                <Layers className="w-4 h-4" />
                <span>Daftar Isi Lengkap (TOC)</span>
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-5 sm:p-8 overflow-y-auto space-y-6 flex-1 bg-slate-50">
              {/* TAB 1: REALISTIC A4 DOCUMENT EXCERPT */}
              {activeTab === 'sample' && modalProject.samplePage && (
                <div className="space-y-4">
                  <div className="text-xs text-slate-500 flex items-center justify-between">
                    <span>Format Standar Dokumen Teknis (Ekstrak Halaman Resmi)</span>
                    <span className="font-mono bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-[11px] font-semibold">
                      {modalProject.samplePage.pageNumber}
                    </span>
                  </div>

                  {/* Simulated A4 Paper */}
                  <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-lg space-y-6 relative overflow-hidden">
                    {/* Top Watermark / Status */}
                    <div className="absolute top-4 right-4 text-[10px] font-mono text-slate-400 uppercase tracking-widest border border-slate-200 px-2 py-0.5 rounded">
                      Standard Quality Audit • PASSED
                    </div>

                    {/* Official Document Header */}
                    <div className="border-b-2 border-slate-900 pb-4">
                      <div className="flex items-center justify-between text-xs text-slate-500 mb-1 font-mono">
                        <span>{modalProject.documentMeta?.docCode}</span>
                        <span>{modalProject.documentMeta?.effectiveDate}</span>
                      </div>
                      <p className="text-xs font-bold text-blue-600 tracking-wider uppercase">
                        {modalProject.samplePage.chapterNum}
                      </p>
                      <h4 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
                        {modalProject.samplePage.sectionCode} {modalProject.samplePage.sectionTitle}
                      </h4>
                    </div>

                    {/* Intro Paragraph */}
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {modalProject.samplePage.intro}
                    </p>

                    {/* Prerequisites Box */}
                    {modalProject.samplePage.prerequisites && (
                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                          <ShieldCheck className="w-4 h-4 text-blue-600" />
                          <span>Prasyarat &amp; Hak Akses Sistem:</span>
                        </span>
                        <ul className="grid sm:grid-cols-2 gap-2 text-xs text-slate-600">
                          {modalProject.samplePage.prerequisites.map((req, rIdx) => (
                            <li key={rIdx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Procedural Steps */}
                    <div className="space-y-4">
                      <h5 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                        <span>Langkah-Langkah Operasional Berurutan:</span>
                      </h5>

                      <div className="space-y-3">
                        {modalProject.samplePage.steps.map((st) => (
                          <div
                            key={st.step}
                            className="p-3.5 rounded-xl border border-slate-100 hover:border-blue-200 bg-white transition flex items-start gap-3.5 group"
                          >
                            <span className="w-7 h-7 rounded-lg bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-sm shadow-blue-500/20">
                              {st.step}
                            </span>
                            <div className="space-y-1">
                              <h6 className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                                {st.action}
                              </h6>
                              <p className="text-xs text-slate-600 leading-relaxed">
                                {st.detail}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Callout Notice */}
                    {modalProject.samplePage.callout && (
                      <div
                        className={`p-4 rounded-xl border flex items-start gap-3 ${
                          modalProject.samplePage.callout.type === 'warning'
                            ? 'bg-amber-50/80 border-amber-300 text-amber-900'
                            : modalProject.samplePage.callout.type === 'tip'
                            ? 'bg-emerald-50/80 border-emerald-300 text-emerald-900'
                            : 'bg-blue-50/80 border-blue-300 text-blue-900'
                        }`}
                      >
                        {modalProject.samplePage.callout.type === 'warning' ? (
                          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                        ) : modalProject.samplePage.callout.type === 'tip' ? (
                          <Lightbulb className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                        ) : (
                          <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                        )}
                        <div className="space-y-1">
                          <span className="text-xs font-bold uppercase tracking-wider block">
                            {modalProject.samplePage.callout.title}
                          </span>
                          <p className="text-xs leading-relaxed">
                            {modalProject.samplePage.callout.content}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Troubleshooting Matrix */}
                    {modalProject.samplePage.troubleshooting && (
                      <div className="space-y-3 pt-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block">
                          Matriks Penanganan Galat &amp; Kendala (Troubleshooting):
                        </span>
                        <div className="border border-slate-200 rounded-xl overflow-hidden">
                          <table className="w-full text-left text-xs">
                            <thead className="bg-slate-100 text-slate-700 font-semibold border-b border-slate-200">
                              <tr>
                                <th className="p-3 w-1/3">Gejala / Kode Error</th>
                                <th className="p-3 w-1/3">Kemungkinan Penyebab</th>
                                <th className="p-3 w-1/3">Tindakan Solusi</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 bg-white">
                              {modalProject.samplePage.troubleshooting.map((tb, tIdx) => (
                                <tr key={tIdx} className="hover:bg-slate-50">
                                  <td className="p-3 font-semibold text-rose-600 align-top">
                                    {tb.issue}
                                  </td>
                                  <td className="p-3 text-slate-600 align-top">
                                    {tb.cause}
                                  </td>
                                  <td className="p-3 text-slate-800 font-medium align-top">
                                    {tb.action}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}

                    {/* Document Signoff Footer */}
                    <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-2">
                      <span>
                        Penyusun Dokumentasi: <strong>Arrozy Adi Falaqi, S.Kom.</strong>
                      </span>
                      <span className="font-mono text-emerald-600 font-semibold">
                        ✓ Verifikasi QA &amp; Stakeholder Selesai
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: CASE STUDY & MEASURABLE IMPACT */}
              {activeTab === 'case_study' && modalProject.caseStudy && (
                <div className="space-y-6">
                  <div>
                    <h4 className="text-base font-bold text-slate-900 mb-1">
                      Studi Kasus: Dari Kerumitan Sistem ke Dokumentasi Terstandarisasi
                    </h4>
                    <p className="text-xs text-slate-600">
                      Bagaimana dokumentasi yang terstruktur menyelesaikan hambatan nyata operasional dan teknis.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4">
                    {/* Problem */}
                    <div className="p-5 rounded-2xl bg-white border border-rose-200 shadow-sm space-y-2">
                      <div className="w-8 h-8 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold text-xs">
                        1
                      </div>
                      <h5 className="text-xs font-bold uppercase tracking-wider text-rose-600">
                        Tantangan Awal
                      </h5>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        {modalProject.caseStudy.problem}
                      </p>
                    </div>

                    {/* Solution */}
                    <div className="p-5 rounded-2xl bg-white border border-blue-200 shadow-sm space-y-2">
                      <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs">
                        2
                      </div>
                      <h5 className="text-xs font-bold uppercase tracking-wider text-blue-600">
                        Solusi Technical Writer
                      </h5>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        {modalProject.caseStudy.solution}
                      </p>
                    </div>

                    {/* Impact */}
                    <div className="p-5 rounded-2xl bg-white border border-emerald-200 shadow-sm space-y-2">
                      <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xs">
                        3
                      </div>
                      <h5 className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                        Dampak Terukur
                      </h5>
                      <p className="text-xs text-slate-700 leading-relaxed font-medium">
                        {modalProject.caseStudy.impact}
                      </p>
                    </div>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3">
                    <h5 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                      Ruang Lingkup &amp; Penerima Manfaat
                    </h5>
                    <p className="text-xs text-slate-600 font-medium">
                      Sasaran Pengguna: <strong>{modalProject.detail.scope}</strong>
                    </p>

                    <div className="pt-2 space-y-2">
                      {modalProject.detail.highlights.map((hl, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 3: TABLE OF CONTENTS (TOC) */}
              {activeTab === 'toc' && modalProject.tableOfContents && (
                <div className="space-y-4">
                  <div>
                    <h4 className="text-base font-bold text-slate-900 mb-1">
                      Struktur Taksonomi &amp; Daftar Isi Dokumen
                    </h4>
                    <p className="text-xs text-slate-600">
                      Rencana bab dan alokasi halaman dokumen {modalProject.pages}.
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl border border-slate-200 divide-y divide-slate-100 overflow-hidden shadow-sm">
                    {modalProject.tableOfContents.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-4 flex items-center justify-between hover:bg-slate-50 transition text-xs"
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-600 font-mono text-[10px] flex items-center justify-center font-bold">
                            {idx + 1}
                          </span>
                          <span className="font-semibold text-slate-800">
                            {item.chapter}
                          </span>
                        </div>
                        <span className="font-mono text-[11px] text-slate-400 font-medium">
                          {item.pages}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Bottom Actions */}
            <div className="p-4 sm:p-5 bg-white border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
              <div className="text-xs text-slate-500 text-center sm:text-left">
                Butuh sampel dokumen versi lengkap atau NDA-redacted PDF?
              </div>

              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <a
                  href={`https://wa.me/6281298023537?text=Halo%20Arrozy,%20saya%20tertarik%20melihat%20sampel%20lengkap%20dokumen%20${encodeURIComponent(modalProject.title[lang])}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white transition shadow-sm shadow-blue-500/20"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Minta Sampel Dokumen</span>
                </a>

                <button
                  onClick={() => setModalProject(null)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 transition"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
