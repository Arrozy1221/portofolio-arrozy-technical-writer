'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  GraduationCap,
  Building2,
  Laptop,
  Database,
  Workflow,
  FileText,
  FileCheck2,
  ShieldCheck,
  Layers,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Info,
  Calendar,
  MessageSquare,
  ArrowRight,
  ArrowLeft,
  BookOpen,
  Sparkles,
} from 'lucide-react';

const bannerIcons = {
  graduation: GraduationCap,
  building: Building2,
  laptop: Laptop,
  database: Database,
  workflow: Workflow,
};

export default function ProjectDetailClient({ project, nextProject, prevProject }) {
  const [activeTab, setActiveTab] = useState('sample'); // 'sample' | 'case_study' | 'toc'
  const Icon = bannerIcons[project.bannerIcon] || FileText;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Breadcrumb */}
      <nav className="text-xs text-slate-500 flex items-center gap-2">
        <Link href="/" className="hover:text-blue-600 transition">
          Beranda
        </Link>
        <span>/</span>
        <Link href="/#projects" className="hover:text-blue-600 transition">
          Proyek Dokumentasi
        </Link>
        <span>/</span>
        <span className="text-slate-900 font-semibold">{project.title.id}</span>
      </nav>

      {/* Hero Banner Card */}
      <div
        className={`rounded-3xl bg-gradient-to-br ${project.bannerGradient} text-white p-6 sm:p-12 shadow-xl relative overflow-hidden`}
      >
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-4 max-w-3xl">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-mono tracking-widest uppercase bg-white/20 backdrop-blur-md px-3 py-1 rounded-full font-bold">
                {project.badge}
              </span>
              <span className="text-xs font-mono bg-black/25 backdrop-blur-md px-3 py-1 rounded-full text-white/90">
                {project.documentMeta?.docCode}
              </span>
              <span className="text-xs font-medium bg-emerald-500/25 border border-emerald-300/40 text-emerald-100 px-3 py-1 rounded-full">
                {project.documentMeta?.version || 'Verified Production'}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              {project.title.id}
            </h1>

            <p className="text-sm sm:text-base text-white/90 leading-relaxed">
              {project.description.id}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-semibold bg-white/10 backdrop-blur-md text-white border border-white/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center shrink-0 shadow-2xl self-center md:self-auto">
            <Icon className="w-12 h-12 sm:w-16 sm:h-16" />
          </div>
        </div>

        {/* Bottom Quick Specs Grid */}
        <div className="mt-8 pt-6 border-t border-white/20 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono text-white/90">
          <div>
            <span className="text-white/60 block text-[10px] uppercase">Klien / Lembaga</span>
            <span className="font-semibold">{project.client}</span>
          </div>
          <div>
            <span className="text-white/60 block text-[10px] uppercase">Volume Dokumen</span>
            <span className="font-semibold">{project.pages}</span>
          </div>
          <div>
            <span className="text-white/60 block text-[10px] uppercase">Klasifikasi</span>
            <span className="font-semibold">{project.documentMeta?.classification}</span>
          </div>
          <div>
            <span className="text-white/60 block text-[10px] uppercase">Masa Efektif</span>
            <span className="font-semibold">{project.documentMeta?.effectiveDate}</span>
          </div>
        </div>

        {/* Action Buttons: PDF Download + WhatsApp */}
        <div className="mt-6 pt-6 border-t border-white/20 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-white/80">
            {project.documentBundle && (
              <span>Paket Terdiri dari: <strong>{project.documentBundle.length} Berkas Dokumen Resmi</strong></span>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => {
                setActiveTab('sample');
                const el = document.getElementById('tab-content-area');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-white text-slate-900 hover:bg-blue-50 transition shadow-lg cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-blue-600" />
              <span>Inspeksi Cuplikan Sampel Tersanitasi</span>
            </button>

            <a
              href={`https://wa.me/6281298023537?text=Halo%20Arrozy,%20saya%20tertarik%20dengan%20studi%20kasus%20dokumentasi%20${encodeURIComponent(project.title.id)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-white/20 hover:bg-white/30 text-white backdrop-blur-md border border-white/30 transition"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Diskusi Teknis via WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Document Bundle List Banner */}
      {project.documentBundle && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block">
                STRUKTUR DELIVERABLE LENGKAP
              </span>
              <h3 className="text-lg font-bold text-slate-900 mt-0.5">
                Paket Dokumen Tersusun dalam Proyek Ini
              </h3>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
              {project.documentBundle.length} Dokumen Resmi
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
            {project.documentBundle.map((doc, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3 hover:border-blue-300 transition"
              >
                <span className="w-7 h-7 rounded-lg bg-blue-600 text-white font-mono font-bold text-xs flex items-center justify-center shrink-0">
                  {idx + 1}
                </span>
                <span className="text-xs font-semibold text-slate-800 leading-snug">
                  {doc}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Interactive Tabs Header */}
      <div className="bg-white rounded-2xl p-2 border border-slate-200 shadow-sm flex items-center gap-2 overflow-x-auto no-scrollbar">
        <button
          onClick={() => setActiveTab('sample')}
          className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
            activeTab === 'sample'
              ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
          }`}
        >
          <FileCheck2 className="w-4 h-4" />
          <span>Lembar Sampel Dokumen (A4)</span>
        </button>

        <button
          onClick={() => setActiveTab('case_study')}
          className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
            activeTab === 'case_study'
              ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
          }`}
        >
          <ShieldCheck className="w-4 h-4" />
          <span>Studi Kasus &amp; Dampak</span>
        </button>

        <button
          onClick={() => setActiveTab('toc')}
          className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
            activeTab === 'toc'
              ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>Daftar Isi Lengkap ({project.tableOfContents?.length || 0} Bab)</span>
        </button>
      </div>

      {/* TAB 1: LEMBAR SAMPEL DOKUMEN (A4 FORMAT) */}
      {activeTab === 'sample' && project.samplePage && (
        <div id="tab-content-area" className="space-y-6 scroll-mt-24">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span className="font-semibold text-slate-700">
              Pratinjau Format Penulisan Teknis (Studi Kasus Tersanitasi)
            </span>
            <span className="font-mono bg-blue-50 text-blue-700 border border-blue-200 px-3 py-1 rounded-full font-bold">
              {project.samplePage.pageNumber}
            </span>
          </div>

          {/* Genuine A4 Sheet Styling */}
          <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-14 shadow-xl space-y-8 relative max-w-5xl mx-auto">
            {/* Top Audit Watermark */}
            <div className="flex items-center justify-between border-b-2 border-slate-900 pb-4">
              <div>
                <span className="text-[11px] font-mono font-bold text-slate-400 block">
                  {project.documentMeta?.docCode}
                </span>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                  {project.samplePage.chapterNum}
                </span>
              </div>
              <div className="text-right">
                <span className="text-[10px] font-mono uppercase bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded font-bold">
                  Audit Mutu: PASSED • Case Study Tersanitasi
                </span>
                <span className="text-[11px] font-mono text-slate-400 block mt-0.5">
                  {project.documentMeta?.effectiveDate}
                </span>
              </div>
            </div>

            {/* Sanitization Notice Banner */}
            <div className="p-4 rounded-2xl bg-amber-50/90 border border-amber-200/80 text-amber-900 text-xs flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <span className="font-bold block uppercase tracking-wider text-[11px] text-amber-800">
                  Transparansi &amp; Kepatuhan Kerahasiaan Informasi (Sanitized Case Study)
                </span>
                <p className="text-amber-800/90 leading-relaxed text-[11px]">
                  Seluruh data sensitif, konfigurasi server, kredensial, serta nama skema dan tabel basis data internal pada dokumen ini telah disanitasi (redacted &amp; pseudonymized) semata untuk keperluan pembuktian kompetensi teknis penulisan dokumen (Technical Writing) dan mematuhi etika kerahasiaan institusi klien.
                </p>
              </div>
            </div>

            {/* Section Title */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {project.samplePage.sectionCode} {project.samplePage.sectionTitle}
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-700 leading-relaxed">
                {project.samplePage.intro}
              </p>
            </div>

            {/* Prerequisites */}
            {project.samplePage.prerequisites && (
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-blue-600" />
                  <span>Prasyarat &amp; Matriks Hak Akses Sistem:</span>
                </span>
                <ul className="grid sm:grid-cols-2 gap-2.5 text-xs text-slate-700">
                  {project.samplePage.prerequisites.map((req, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Procedural Steps / Schema Definition */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                {project.samplePage.stepsTitle || 'Prosedur Pelaksanaan Bertahap:'}
              </h3>

              <div className="space-y-3">
                {project.samplePage.steps.map((st) => (
                  <div
                    key={st.step}
                    className="p-4 sm:p-5 rounded-2xl border border-slate-200 bg-white hover:border-blue-400 hover:shadow-md transition flex items-start gap-4"
                  >
                    <span className="w-8 h-8 rounded-xl bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-sm shadow-blue-500/20">
                      {st.step}
                    </span>
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-slate-900">
                        {st.action}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {st.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Callout Notice */}
            {project.samplePage.callout && (
              <div
                className={`p-5 rounded-2xl border flex items-start gap-4 ${
                  project.samplePage.callout.type === 'warning'
                    ? 'bg-amber-50/90 border-amber-300 text-amber-950'
                    : project.samplePage.callout.type === 'tip'
                    ? 'bg-emerald-50/90 border-emerald-300 text-emerald-950'
                    : 'bg-blue-50/90 border-blue-300 text-blue-950'
                }`}
              >
                {project.samplePage.callout.type === 'warning' ? (
                  <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
                ) : project.samplePage.callout.type === 'tip' ? (
                  <Lightbulb className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                ) : (
                  <Info className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
                )}
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider block">
                    {project.samplePage.callout.title}
                  </span>
                  <p className="text-xs sm:text-sm leading-relaxed">
                    {project.samplePage.callout.content}
                  </p>
                </div>
              </div>
            )}

            {/* Troubleshooting Table */}
            {project.samplePage.troubleshooting && (
              <div className="space-y-3 pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block">
                  Matriks Penanganan Kendala &amp; Galat (Troubleshooting):
                </span>
                <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-100 text-slate-700 font-semibold border-b border-slate-200">
                      <tr>
                        <th className="p-3.5 w-1/3">Gejala / Error Code</th>
                        <th className="p-3.5 w-1/3">Kemungkinan Penyebab</th>
                        <th className="p-3.5 w-1/3">Tindakan Solusi</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 bg-white">
                      {project.samplePage.troubleshooting.map((tb, tIdx) => (
                        <tr key={tIdx} className="hover:bg-slate-50">
                          <td className="p-3.5 font-semibold text-rose-600 align-top">
                            {tb.issue}
                          </td>
                          <td className="p-3.5 text-slate-600 align-top">
                            {tb.cause}
                          </td>
                          <td className="p-3.5 text-slate-800 font-medium align-top">
                            {tb.action}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Document Signature Signoff */}
            <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
              <div>
                Penyusun Dokumentasi: <strong>Arrozy Adi Falaqi, S.Kom.</strong>
              </div>
              <div className="font-mono text-emerald-600 font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Status Dokumen: Resmi &amp; Disetujui (Approved)</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: STUDI KASUS & DAMPAK */}
      {activeTab === 'case_study' && project.caseStudy && (
        <div className="space-y-8 max-w-5xl mx-auto">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
              Studi Kasus: Dari Kompleksitas Sistem Menjadi Panduan Siap Pakai
            </h2>
            <p className="text-sm text-slate-600">
              Bagaimana penyusunan dokumentasi teknis ini secara nyata menyelesaikan kendala operasional dan mempercepat adaptasi pengguna.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Problem */}
            <div className="p-6 rounded-3xl bg-white border border-rose-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold text-sm">
                1
              </div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-rose-600">
                Tantangan Awal
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {project.caseStudy.problem}
              </p>
            </div>

            {/* Solution */}
            <div className="p-6 rounded-3xl bg-white border border-blue-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm">
                2
              </div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-blue-600">
                Solusi Technical Writer
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {project.caseStudy.solution}
              </p>
            </div>

            {/* Impact */}
            <div className="p-6 rounded-3xl bg-white border border-emerald-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-sm">
                3
              </div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                Dampak Terukur
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-semibold">
                {project.caseStudy.impact}
              </p>
            </div>
          </div>

          {/* Highlights & Stakeholders */}
          <div className="p-8 rounded-3xl bg-white border border-slate-200 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Ruang Lingkup &amp; Sasaran Pengguna
            </h3>
            <p className="text-xs sm:text-sm text-slate-700">
              Target Pengguna: <strong>{project.detail.scope}</strong>
            </p>

            <div className="pt-2 space-y-3">
              {project.detail.highlights.map((hl, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: DAFTAR ISI LENGKAP */}
      {activeTab === 'toc' && project.tableOfContents && (
        <div className="space-y-6 max-w-5xl mx-auto">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
              Struktur Taksonomi &amp; Daftar Isi Dokumen
            </h2>
            <p className="text-sm text-slate-600">
              Rincian bab terstruktur yang membentuk dokumen {project.pages}.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 divide-y divide-slate-100 overflow-hidden shadow-sm">
            {project.tableOfContents.map((item, idx) => (
              <div
                key={idx}
                className="p-5 flex items-center justify-between hover:bg-slate-50 transition text-xs sm:text-sm"
              >
                <div className="flex items-center gap-4">
                  <span className="w-8 h-8 rounded-xl bg-slate-100 text-slate-700 font-mono text-xs flex items-center justify-center font-bold shrink-0">
                    {idx + 1}
                  </span>
                  <span className="font-semibold text-slate-900">
                    {item.chapter}
                  </span>
                </div>
                <span className="font-mono text-xs text-slate-400 font-medium shrink-0">
                  {item.pages}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Bottom CTA & Navigation to Other Projects */}
      <div className="pt-10 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
        <Link
          href={`/proyek/${prevProject.id}`}
          className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-white border border-slate-200 text-xs sm:text-sm font-semibold text-slate-700 hover:text-blue-600 hover:border-blue-300 transition shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Proyek Sebelumnya: {prevProject.title.id}</span>
        </Link>

        <Link
          href={`/proyek/${nextProject.id}`}
          className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-blue-600 text-white text-xs sm:text-sm font-semibold hover:bg-blue-700 transition shadow-md shadow-blue-500/20"
        >
          <span>Proyek Selanjutnya: {nextProject.title.id}</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
