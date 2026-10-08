'use client';

import { useState } from 'react';
import {
  FileText,
  Table,
  CheckCircle2,
  BookOpen,
  Database,
  ShieldCheck,
  Workflow,
  ExternalLink,
  ChevronRight,
  ListTree,
  Code2,
  Building2,
  Layers,
  Sparkles,
  ArrowRight,
  Copy,
  Check,
  Activity,
  Sliders,
  FolderOpen,
} from 'lucide-react';
import Image from 'next/image';
import { technicalDocuments } from '../data/content';

export default function DocsShowcase({ lang, content }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedDocId, setSelectedDocId] = useState(technicalDocuments[0].id);
  const [activeTab, setActiveTab] = useState('excerpt'); // Default to excerpt so visual diagram/simulator is immediately visible!
  const [copiedStep, setCopiedStep] = useState(null);
  const [activeHotspot, setActiveHotspot] = useState(1);
  const [erdViewMode, setErdViewMode] = useState('visual'); // 'visual' | 'table'

  const t = content[lang].showcase;

  const filteredDocs =
    activeCategory === 'all'
      ? technicalDocuments
      : technicalDocuments.filter((doc) => doc.category === activeCategory);

  const selectedDoc =
    technicalDocuments.find((doc) => doc.id === selectedDocId) || technicalDocuments[0];

  const handleCopy = (text, idx) => {
    navigator.clipboard.writeText(text);
    setCopiedStep(idx);
    setTimeout(() => setCopiedStep(null), 2000);
  };

  return (
    <section id="docs" className="py-16 md:py-24 border-b border-zinc-200 dark:border-zinc-800/80 blueprint-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-semibold tracking-wider uppercase bg-sky-100/80 dark:bg-sky-950/80 text-sky-800 dark:text-sky-300 border border-sky-200 dark:border-sky-800 mb-2">
            <FolderOpen className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
            <span>{t.eyebrow}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            {t.title}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Visual Folder Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar">
          {t.categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  const firstOfCat =
                    cat.id === 'all'
                      ? technicalDocuments[0]
                      : technicalDocuments.find((d) => d.category === cat.id);
                  if (firstOfCat) setSelectedDocId(firstOfCat.id);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-mono whitespace-nowrap transition-all border flex items-center gap-2 ${
                  isActive
                    ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-950 border-zinc-900 dark:border-zinc-100 shadow-sm font-semibold'
                    : 'bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700'
                }`}
              >
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Main Workspace Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Document Selector Column (4 Cols) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-1 flex items-center justify-between">
              <span>Artifacts ({filteredDocs.length})</span>
              <span>Pilih Dokumen</span>
            </div>

            <div className="space-y-3">
              {filteredDocs.map((doc) => {
                const isSelected = doc.id === selectedDoc.id;
                return (
                  <button
                    key={doc.id}
                    onClick={() => {
                      setSelectedDocId(doc.id);
                      setActiveTab('excerpt');
                    }}
                    className={`w-full text-left p-4 rounded-xl border transition-all text-xs font-sans relative overflow-hidden group ${
                      isSelected
                        ? 'bg-white dark:bg-zinc-900 border-sky-500 shadow-md ring-1 ring-sky-500/40'
                        : 'bg-white/70 dark:bg-zinc-900/40 border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-white dark:hover:bg-zinc-900'
                    }`}
                  >
                    {/* Active Accent Bar */}
                    {isSelected && (
                      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-sky-500"></div>
                    )}

                    <div className="flex items-center justify-between gap-2 mb-2 pl-1">
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono font-bold border ${doc.badgeColor}`}
                      >
                        {doc.badge}
                      </span>
                      <span className="text-[11px] font-mono text-zinc-400">{doc.pages}</span>
                    </div>

                    <h3 className="font-bold text-sm text-zinc-900 dark:text-zinc-100 line-clamp-2 mb-2 pl-1 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                      {doc.titles[lang]}
                    </h3>

                    <div className="flex items-center justify-between text-[11px] text-zinc-500 dark:text-zinc-400 font-mono pt-1 border-t border-zinc-100 dark:border-zinc-800/80 pl-1">
                      <span className="truncate max-w-[170px]">{doc.client}</span>
                      <span className="font-semibold text-zinc-400">{doc.year}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Interactive Document Paper Studio (8 Cols) */}
          <div className="lg:col-span-8">
            <div className="paper-sheet rounded-2xl border border-zinc-300 dark:border-zinc-700/80 overflow-hidden shadow-xl">
              {/* Document Header Bar */}
              <div className="p-6 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/90 dark:bg-zinc-950/70">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 p-1 flex items-center justify-center shadow-sm">
                      <Image
                        src={selectedDoc.clientLogo}
                        alt={selectedDoc.client}
                        width={28}
                        height={28}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span
                          className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono font-bold border ${selectedDoc.badgeColor}`}
                        >
                          {selectedDoc.badge}
                        </span>
                        <span className="text-xs font-mono text-zinc-400 font-medium">
                          REF: {selectedDoc.id}
                        </span>
                      </div>
                      <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                        {selectedDoc.client}
                      </span>
                    </div>
                  </div>

                  <div className="stamp-badge px-2.5 py-1 rounded text-[11px] text-emerald-600 dark:text-emerald-400 border-emerald-500/80 bg-emerald-500/5">
                    VERIFIED ARTIFACT
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white leading-snug">
                  {selectedDoc.titles[lang]}
                </h3>

                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-500 dark:text-zinc-400 mt-3 pt-3 border-t border-zinc-200/80 dark:border-zinc-800/80">
                  <span>STATUS: <strong className="text-emerald-600 dark:text-emerald-400">{selectedDoc.status}</strong></span>
                  <span>•</span>
                  <span>PAGES: <strong className="text-zinc-900 dark:text-zinc-200">{selectedDoc.pages}</strong></span>
                  <span>•</span>
                  <span>YEAR: <strong className="text-zinc-900 dark:text-zinc-200">{selectedDoc.year}</strong></span>
                </div>
              </div>

              {/* Navigation Tabs */}
              <div className="flex items-center border-b border-zinc-200 dark:border-zinc-800 bg-zinc-100/70 dark:bg-zinc-950/90 px-3 font-mono text-xs overflow-x-auto no-scrollbar">
                <button
                  onClick={() => setActiveTab('excerpt')}
                  className={`px-4 py-3 border-b-2 font-medium flex items-center gap-2 transition-colors whitespace-nowrap ${
                    activeTab === 'excerpt'
                      ? 'border-sky-600 text-sky-700 dark:text-sky-400 bg-white dark:bg-zinc-900 font-bold'
                      : 'border-transparent text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
                  }`}
                >
                  <Code2 className="w-4 h-4 text-sky-500" />
                  <span>{t.tabs.excerpt} (Interactive Canvas)</span>
                </button>

                <button
                  onClick={() => setActiveTab('structure')}
                  className={`px-4 py-3 border-b-2 font-medium flex items-center gap-2 transition-colors whitespace-nowrap ${
                    activeTab === 'structure'
                      ? 'border-sky-600 text-sky-700 dark:text-sky-400 bg-white dark:bg-zinc-900 font-bold'
                      : 'border-transparent text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
                  }`}
                >
                  <ListTree className="w-4 h-4" />
                  <span>{t.tabs.structure}</span>
                </button>

                <button
                  onClick={() => setActiveTab('overview')}
                  className={`px-4 py-3 border-b-2 font-medium flex items-center gap-2 transition-colors whitespace-nowrap ${
                    activeTab === 'overview'
                      ? 'border-sky-600 text-sky-700 dark:text-sky-400 bg-white dark:bg-zinc-900 font-bold'
                      : 'border-transparent text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
                  }`}
                >
                  <FileText className="w-4 h-4" />
                  <span>{t.tabs.overview}</span>
                </button>

                <button
                  onClick={() => setActiveTab('impact')}
                  className={`px-4 py-3 border-b-2 font-medium flex items-center gap-2 transition-colors whitespace-nowrap ${
                    activeTab === 'impact'
                      ? 'border-sky-600 text-sky-700 dark:text-sky-400 bg-white dark:bg-zinc-900 font-bold'
                      : 'border-transparent text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
                  }`}
                >
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  <span>{t.tabs.impact}</span>
                </button>
              </div>

              {/* Dynamic Canvas Body */}
              <div className="p-6">
                {/* 1. VISUAL INTERACTIVE EXCERPT CANVAS */}
                {activeTab === 'excerpt' && (
                  <div className="space-y-6">
                    {/* A. USER MANUAL: VISUAL UI-TO-DOCS SPLIT SIMULATOR */}
                    {selectedDoc.technicalSample.type === 'step_by_step' && (
                      <div className="space-y-4">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-zinc-200 dark:border-zinc-800">
                          <div>
                            <span className="text-xs font-mono font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                              VISUAL UI-TO-DOCS WALKTHROUGH SIMULATOR
                            </span>
                            <h4 className="font-bold text-sm text-zinc-900 dark:text-zinc-100">
                              {selectedDoc.technicalSample.heading[lang]}
                            </h4>
                          </div>
                          <span className="text-[11px] font-mono text-zinc-500">
                            Klik nomor hotspot (①, ②, ③, ④) untuk menguji instruksi
                          </span>
                        </div>

                        <div className="grid md:grid-cols-12 gap-4 items-stretch">
                          {/* Simulated Application Window (7 Cols) */}
                          <div className="md:col-span-7 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-950 p-4 space-y-3 font-sans">
                            {/* Browser Bar */}
                            <div className="flex items-center justify-between pb-2 border-b border-zinc-200 dark:border-zinc-800">
                              <div className="flex items-center gap-1.5">
                                <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                                <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                              </div>
                              <span className="font-mono text-[11px] text-zinc-500">
                                kaprodi3.ut.ac.id/kurikulum/sdgs-mapping
                              </span>
                              <span className="text-[10px] text-emerald-500 font-mono">200 OK</span>
                            </div>

                            {/* App Interface Canvas with Hotspots */}
                            <div className="space-y-3 text-xs">
                              {/* Hotspot 1: Navigation Menu */}
                              <div
                                onClick={() => setActiveHotspot(1)}
                                className={`p-2.5 rounded-lg border transition-all cursor-pointer flex items-center justify-between ${
                                  activeHotspot === 1
                                    ? 'bg-sky-50 dark:bg-sky-950/60 border-sky-500 shadow-sm'
                                    : 'bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 hover:border-zinc-300'
                                }`}
                              >
                                <div className="flex items-center gap-2">
                                  <span className="w-5 h-5 rounded-full bg-sky-600 text-white font-mono text-xs font-bold flex items-center justify-center shrink-0">
                                    1
                                  </span>
                                  <span className="font-medium text-zinc-800 dark:text-zinc-200">
                                    Menu: Kurikulum &gt; Daftar Matakuliah Wajib
                                  </span>
                                </div>
                                <span className="text-[10px] font-mono text-zinc-400">Sidebar Nav</span>
                              </div>

                              {/* Hotspot 2: Action Button */}
                              <div
                                onClick={() => setActiveHotspot(2)}
                                className={`p-2.5 rounded-lg border transition-all cursor-pointer flex items-center justify-between ${
                                  activeHotspot === 2
                                    ? 'bg-sky-50 dark:bg-sky-950/60 border-sky-500 shadow-sm'
                                    : 'bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 hover:border-zinc-300'
                                }`}
                              >
                                <div className="flex items-center gap-2">
                                  <span className="w-5 h-5 rounded-full bg-sky-600 text-white font-mono text-xs font-bold flex items-center justify-center shrink-0">
                                    2
                                  </span>
                                  <span className="font-medium text-zinc-800 dark:text-zinc-200">
                                    Tombol Aksi: [Kelola Indikator SDGs 🌐]
                                  </span>
                                </div>
                                <span className="text-[10px] font-mono text-zinc-400">Modal Trigger</span>
                              </div>

                              {/* Hotspot 3: Form Input & Validation */}
                              <div
                                onClick={() => setActiveHotspot(3)}
                                className={`p-2.5 rounded-lg border transition-all cursor-pointer flex items-center justify-between ${
                                  activeHotspot === 3
                                    ? 'bg-sky-50 dark:bg-sky-950/60 border-sky-500 shadow-sm'
                                    : 'bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 hover:border-zinc-300'
                                }`}
                              >
                                <div className="flex items-center gap-2">
                                  <span className="w-5 h-5 rounded-full bg-sky-600 text-white font-mono text-xs font-bold flex items-center justify-center shrink-0">
                                    3
                                  </span>
                                  <span className="font-medium text-zinc-800 dark:text-zinc-200">
                                    Input: Centang 17 Target SDGs &amp; Uraian Capaian
                                  </span>
                                </div>
                                <span className="text-[10px] font-mono text-amber-500 font-semibold">
                                  Validasi Wajib
                                </span>
                              </div>

                              {/* Hotspot 4: Final Event */}
                              <div
                                onClick={() => setActiveHotspot(4)}
                                className={`p-2.5 rounded-lg border transition-all cursor-pointer flex items-center justify-between ${
                                  activeHotspot === 4
                                    ? 'bg-sky-50 dark:bg-sky-950/60 border-sky-500 shadow-sm'
                                    : 'bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 hover:border-zinc-300'
                                }`}
                              >
                                <div className="flex items-center gap-2">
                                  <span className="w-5 h-5 rounded-full bg-sky-600 text-white font-mono text-xs font-bold flex items-center justify-center shrink-0">
                                    4
                                  </span>
                                  <span className="font-medium text-zinc-800 dark:text-zinc-200">
                                    Aksi: Simpan &amp; Generate Berita Acara PDF
                                  </span>
                                </div>
                                <span className="text-[10px] font-mono text-emerald-500 font-semibold">
                                  Output Resmi
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Technical Writer Doc Output Card (5 Cols) */}
                          <div className="md:col-span-5 rounded-xl border border-sky-200 dark:border-sky-900 bg-sky-50/50 dark:bg-sky-950/30 p-4 flex flex-col justify-between">
                            <div className="space-y-3">
                              <div className="flex items-center justify-between pb-2 border-b border-sky-200 dark:border-sky-800">
                                <span className="text-xs font-mono font-bold text-sky-800 dark:text-sky-300">
                                  LANGKAH DOKUMENTASI #{activeHotspot}
                                </span>
                                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-200 dark:bg-sky-800 text-sky-900 dark:text-sky-100 font-bold">
                                  USER MANUAL
                                </span>
                              </div>

                              <p className="text-xs sm:text-sm text-zinc-800 dark:text-zinc-200 font-medium leading-relaxed">
                                {selectedDoc.technicalSample.steps[activeHotspot - 1]?.instruction[lang]}
                              </p>

                              <div className="p-2.5 rounded-lg bg-white dark:bg-zinc-900 border border-sky-200 dark:border-sky-800 font-mono text-[11px] space-y-1">
                                <div className="text-zinc-400">Path Sistem:</div>
                                <div className="text-sky-600 dark:text-sky-400 font-bold">
                                  {selectedDoc.technicalSample.steps[activeHotspot - 1]?.action}
                                </div>
                              </div>
                            </div>

                            <div className="pt-3 border-t border-sky-200 dark:border-sky-800/80 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                              <span>Buku Panduan Hal: 74</span>
                              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                                Ambiguity: Zero
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* B. KAMUS DATA & ERD: VISUAL INTERACTIVE ERD RELATIONAL DIAGRAM */}
                    {selectedDoc.technicalSample.type === 'database_schema' && (
                      <div className="space-y-4">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-zinc-200 dark:border-zinc-800">
                          <div>
                            <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                              DIAGRAM RELASI ERD &amp; SPESIFIKASI SKEMA
                            </span>
                            <h4 className="font-bold text-sm text-zinc-900 dark:text-zinc-100">
                              Arsitektur Basis Data Relasional BBPPT Komdigi
                            </h4>
                          </div>

                          {/* Toggle between Visual ERD and Table */}
                          <div className="flex items-center gap-1 p-1 rounded-lg bg-zinc-100 dark:bg-zinc-800 font-mono text-xs">
                            <button
                              onClick={() => setErdViewMode('visual')}
                              className={`px-3 py-1 rounded-md transition ${
                                erdViewMode === 'visual'
                                  ? 'bg-white dark:bg-zinc-900 font-bold text-sky-600 dark:text-sky-400 shadow-sm'
                                  : 'text-zinc-500'
                              }`}
                            >
                              Visual ERD Diagram
                            </button>
                            <button
                              onClick={() => setErdViewMode('table')}
                              className={`px-3 py-1 rounded-md transition ${
                                erdViewMode === 'table'
                                  ? 'bg-white dark:bg-zinc-900 font-bold text-sky-600 dark:text-sky-400 shadow-sm'
                                  : 'text-zinc-500'
                              }`}
                            >
                              Kamus Data Table
                            </button>
                          </div>
                        </div>

                        {/* Visual ERD Node Canvas */}
                        {erdViewMode === 'visual' ? (
                          <div className="rounded-xl border border-zinc-300 dark:border-zinc-700 bg-zinc-950 p-6 relative overflow-x-auto text-xs font-mono text-zinc-300">
                            <div className="min-w-[620px] flex items-center justify-between gap-6 relative">
                              {/* Entity 1: m_perusahaan */}
                              <div className="w-56 rounded-lg border border-purple-500/60 bg-zinc-900/90 p-3 shadow-lg space-y-2">
                                <div className="flex items-center justify-between border-b border-zinc-800 pb-1.5">
                                  <span className="font-bold text-purple-400">m_perusahaan</span>
                                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-purple-950 text-purple-300">
                                    MASTER
                                  </span>
                                </div>
                                <div className="space-y-1 text-[11px]">
                                  <div className="flex items-center justify-between text-amber-300">
                                    <span>🔑 id (UUID)</span>
                                    <span className="text-zinc-500">PK</span>
                                  </div>
                                  <div className="text-zinc-400">nama_perusahaan</div>
                                  <div className="text-zinc-400">npwp_resmi</div>
                                  <div className="text-zinc-400">email_kontak</div>
                                </div>
                              </div>

                              {/* Relational Connector 1: 1 to N */}
                              <div className="flex flex-col items-center justify-center shrink-0">
                                <span className="text-[10px] text-zinc-500 mb-1">1 : N</span>
                                <div className="w-16 h-0.5 bg-sky-500 relative">
                                  <span className="absolute -top-1.5 -right-1 text-sky-400 text-xs">▶</span>
                                </div>
                                <span className="text-[9px] text-sky-400 mt-1">FOREIGN KEY</span>
                              </div>

                              {/* Entity 2: t_permohonan_uji */}
                              <div className="w-64 rounded-lg border-2 border-sky-500 bg-zinc-900 p-3 shadow-xl space-y-2">
                                <div className="flex items-center justify-between border-b border-zinc-800 pb-1.5">
                                  <span className="font-bold text-sky-400">t_permohonan_uji</span>
                                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-sky-950 text-sky-300 font-bold">
                                    CORE TRANS
                                  </span>
                                </div>
                                <div className="space-y-1 text-[11px]">
                                  <div className="flex items-center justify-between text-amber-300">
                                    <span>🔑 id_permohonan</span>
                                    <span className="text-zinc-500">PK</span>
                                  </div>
                                  <div className="text-zinc-300 font-semibold">nomor_agenda (UQ)</div>
                                  <div className="text-purple-400">🔗 id_perusahaan (FK)</div>
                                  <div className="text-emerald-400">kategori_uji (ENUM)</div>
                                  <div className="text-zinc-400">status_tahap</div>
                                </div>
                              </div>

                              {/* Relational Connector 2: 1 to 1 */}
                              <div className="flex flex-col items-center justify-center shrink-0">
                                <span className="text-[10px] text-zinc-500 mb-1">1 : 1</span>
                                <div className="w-16 h-0.5 bg-emerald-500 relative">
                                  <span className="absolute -top-1.5 -right-1 text-emerald-400 text-xs">▶</span>
                                </div>
                                <span className="text-[9px] text-emerald-400 mt-1">OUTPUT SUKET</span>
                              </div>

                              {/* Entity 3: t_suket_hasil_uji */}
                              <div className="w-56 rounded-lg border border-emerald-500/60 bg-zinc-900/90 p-3 shadow-lg space-y-2">
                                <div className="flex items-center justify-between border-b border-zinc-800 pb-1.5">
                                  <span className="font-bold text-emerald-400">t_suket_hasil_uji</span>
                                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-300">
                                    CERT
                                  </span>
                                </div>
                                <div className="space-y-1 text-[11px]">
                                  <div className="flex items-center justify-between text-amber-300">
                                    <span>🔑 id_suket (UUID)</span>
                                    <span className="text-zinc-500">PK</span>
                                  </div>
                                  <div className="text-sky-300">🔗 id_permohonan (FK)</div>
                                  <div className="text-zinc-400">nomor_suket (UQ)</div>
                                  <div className="text-emerald-300">hash_signature</div>
                                </div>
                              </div>
                            </div>

                            <div className="mt-4 pt-3 border-t border-zinc-800 text-[11px] text-zinc-400 flex items-center justify-between">
                              <span>✓ Menghilangkan redudansi data dan inkonsistensi API</span>
                              <span className="text-emerald-400 font-bold">Referential Integrity Enforced</span>
                            </div>
                          </div>
                        ) : (
                          /* Data Dictionary Table */
                          <div className="overflow-x-auto rounded-lg border border-zinc-200 dark:border-zinc-800 font-mono text-xs">
                            <table className="w-full text-left">
                              <thead className="bg-zinc-100 dark:bg-zinc-950 text-zinc-600 dark:text-zinc-400 border-b border-zinc-200 dark:border-zinc-800">
                                <tr>
                                  <th className="p-3">Field Name</th>
                                  <th className="p-3">Data Type</th>
                                  <th className="p-3">Constraint</th>
                                  <th className="p-3">Nullable</th>
                                  <th className="p-3 font-sans">Business Meaning</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800 bg-white dark:bg-zinc-900">
                                {selectedDoc.technicalSample.fields.map((f, idx) => (
                                  <tr key={idx} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50">
                                    <td className="p-3 font-bold text-sky-600 dark:text-sky-400">
                                      {f.column}
                                    </td>
                                    <td className="p-3 text-amber-600 dark:text-amber-400">{f.type}</td>
                                    <td className="p-3 text-purple-600 dark:text-purple-400">{f.constraint}</td>
                                    <td className="p-3 text-zinc-500">{f.nullable}</td>
                                    <td className="p-3 font-sans text-xs text-zinc-700 dark:text-zinc-300">
                                      {f.description[lang]}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        )}
                      </div>
                    )}

                    {/* C. UAT MATRIX: VISUAL QA EXECUTION DASHBOARD */}
                    {selectedDoc.technicalSample.type === 'uat_table' && (
                      <div className="space-y-4">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-zinc-200 dark:border-zinc-800">
                          <div>
                            <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
                              UAT TEST SUITE &amp; VERIFICATION MATRIX
                            </span>
                            <h4 className="font-bold text-sm text-zinc-900 dark:text-zinc-100">
                              Modul Billing PNBP SIMPONI V2 &amp; Void Tarif Nol
                            </h4>
                          </div>

                          {/* 100% Pass Gauge */}
                          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 font-mono text-xs">
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                            <span className="text-emerald-700 dark:text-emerald-400 font-bold">
                              PASS RATE: 100% (48/48 SCENARIOS)
                            </span>
                          </div>
                        </div>

                        <div className="grid gap-3">
                          {selectedDoc.technicalSample.testCases.map((tc, idx) => (
                            <div
                              key={idx}
                              className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-950/60 font-mono text-xs space-y-3"
                            >
                              <div className="flex items-center justify-between gap-2 border-b border-zinc-200 dark:border-zinc-800/80 pb-2">
                                <div className="flex items-center gap-2">
                                  <span className="px-2 py-0.5 rounded bg-sky-100 dark:bg-sky-950 text-sky-800 dark:text-sky-300 font-bold">
                                    {tc.id}
                                  </span>
                                  <span className="font-bold text-zinc-900 dark:text-zinc-100 font-sans">
                                    {tc.feature}
                                  </span>
                                </div>
                                <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-emerald-500 text-white shadow-sm">
                                  VERIFIED PASS
                                </span>
                              </div>

                              <div className="grid sm:grid-cols-2 gap-3 text-[11px]">
                                <div className="p-2.5 rounded bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                                  <span className="text-zinc-400 block mb-1 font-bold">PRASYARAT (PRECONDITION):</span>
                                  <span className="text-zinc-700 dark:text-zinc-300 font-sans">
                                    {tc.precondition[lang]}
                                  </span>
                                </div>
                                <div className="p-2.5 rounded bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                                  <span className="text-zinc-400 block mb-1 font-bold">LANGKAH PENGUJIAN (ACTION):</span>
                                  <span className="text-zinc-700 dark:text-zinc-300 font-sans">
                                    {tc.action[lang]}
                                  </span>
                                </div>
                              </div>

                              <div className="p-2.5 rounded bg-emerald-500/5 border border-emerald-500/20 text-[11px] space-y-1">
                                <span className="text-emerald-700 dark:text-emerald-400 block font-bold">
                                  HASIL VERIFIKASI AKTUAL (ACTUAL RESULT):
                                </span>
                                <span className="text-zinc-800 dark:text-zinc-200 font-sans font-medium">
                                  {tc.actual[lang]}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* D. FSD & SOP: VISUAL BPMN FLOWCHART CANVAS */}
                    {selectedDoc.technicalSample.type === 'sop_flow' && (
                      <div className="space-y-4">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-zinc-200 dark:border-zinc-800">
                          <div>
                            <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                              VISUAL BPMN PROCESS FLOW &amp; ESCALATION PROTOCOL
                            </span>
                            <h4 className="font-bold text-sm text-zinc-900 dark:text-zinc-100">
                              Alur Penanganan Deviasi Kritis Proyek Infrastruktur (PUPR BRAVO)
                            </h4>
                          </div>
                          <span className="text-[11px] font-mono text-zinc-500">
                            Standar BPMN 2.0 Operasional Balai
                          </span>
                        </div>

                        {/* Visual Connected Process Nodes */}
                        <div className="rounded-xl border border-zinc-300 dark:border-zinc-700 bg-zinc-950 p-6 space-y-4 font-mono text-xs text-zinc-300">
                          <div className="grid md:grid-cols-3 gap-4 relative">
                            {/* Step 1 */}
                            <div className="p-4 rounded-xl border border-sky-500/50 bg-zinc-900/90 relative space-y-2">
                              <div className="flex items-center justify-between">
                                <span className="px-2 py-0.5 rounded bg-sky-950 text-sky-400 font-bold text-[10px]">
                                  STAGE 01
                                </span>
                                <span className="w-2.5 h-2.5 rounded-full bg-sky-400 animate-ping"></span>
                              </div>
                              <h5 className="font-bold text-white font-sans text-xs sm:text-sm">
                                Telemetri &amp; Deteksi Deviasi
                              </h5>
                              <p className="text-[11px] font-sans text-zinc-400 leading-relaxed">
                                Delta kurva-S dihitung otomatis. Jika deviasi &gt; -10%, status otomatis terpicu: MERAH (Kritis).
                              </p>
                              <div className="pt-2 border-t border-zinc-800 text-[10px] text-zinc-500">
                                Actor: BRAVO Core Engine
                              </div>
                            </div>

                            {/* Step 2 */}
                            <div className="p-4 rounded-xl border border-amber-500/50 bg-zinc-900/90 relative space-y-2">
                              <div className="flex items-center justify-between">
                                <span className="px-2 py-0.5 rounded bg-amber-950 text-amber-400 font-bold text-[10px]">
                                  STAGE 02
                                </span>
                                <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                              </div>
                              <h5 className="font-bold text-white font-sans text-xs sm:text-sm">
                                Notifikasi PPK &amp; SP Kontraktor
                              </h5>
                              <p className="text-[11px] font-sans text-zinc-400 leading-relaxed">
                                Notifikasi wajib direspon dalam 1x24 jam. PPK mengunggah Surat Peringatan Keterlambatan resmi.
                              </p>
                              <div className="pt-2 border-t border-zinc-800 text-[10px] text-zinc-500">
                                Actor: Pejabat Pembuat Komitmen
                              </div>
                            </div>

                            {/* Step 3 */}
                            <div className="p-4 rounded-xl border border-rose-500/50 bg-zinc-900/90 relative space-y-2">
                              <div className="flex items-center justify-between">
                                <span className="px-2 py-0.5 rounded bg-rose-950 text-rose-400 font-bold text-[10px]">
                                  STAGE 03
                                </span>
                                <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                              </div>
                              <h5 className="font-bold text-white font-sans text-xs sm:text-sm">
                                Show Cause Meeting (SCM-1)
                              </h5>
                              <p className="text-[11px] font-sans text-zinc-400 leading-relaxed">
                                Sidang pembuktian jadwal bersama Kepala Balai &amp; kontraktor dengan masa uji coba kurva baru 14 hari.
                              </p>
                              <div className="pt-2 border-t border-zinc-800 text-[10px] text-zinc-500">
                                Actor: Kepala Balai Besar &amp; Direksi
                              </div>
                            </div>
                          </div>

                          <div className="pt-3 border-t border-zinc-800 text-[11px] text-zinc-400 flex items-center justify-between">
                            <span>BPMN Ref: SOP-BRAVO-01-ESCALATION</span>
                            <span className="text-amber-400 font-bold">Standardized National SOP</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* 2. STRUCTURE (TOC) TAB */}
                {activeTab === 'structure' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-2 border-b border-zinc-200 dark:border-zinc-800 text-xs font-mono text-zinc-500">
                      <span>DAFTAR ISI & STRUKTUR BAB RESMI</span>
                      <span>TOTAL: {selectedDoc.pages}</span>
                    </div>

                    <div className="space-y-3">
                      {selectedDoc.toc.map((item, idx) => (
                        <div
                          key={idx}
                          className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/60 dark:bg-zinc-950/40 p-4 space-y-2.5"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex items-center gap-2">
                              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-sky-100 dark:bg-sky-950 text-sky-800 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
                                {item.chapter}
                              </span>
                              <h5 className="font-bold text-xs sm:text-sm text-zinc-900 dark:text-zinc-100">
                                {item.title[lang]}
                              </h5>
                            </div>
                            <span className="text-[11px] font-mono text-zinc-400 shrink-0">
                              {item.pages}
                            </span>
                          </div>

                          <div className="pl-6 space-y-1.5 border-l-2 border-zinc-200 dark:border-zinc-800 ml-3">
                            {item.subsections.map((sub, sIdx) => (
                              <p
                                key={sIdx}
                                className="text-xs font-mono text-zinc-600 dark:text-zinc-400"
                              >
                                {sub[lang]}
                              </p>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 3. OVERVIEW TAB */}
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                        {lang === 'id' ? 'Deskripsi Deliverable' : 'Deliverable Scope'}
                      </h4>
                      <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                        {selectedDoc.descriptions[lang]}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200 dark:border-zinc-800">
                      <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-2">
                        {lang === 'id' ? 'Target Pembaca & Stakeholder' : 'Target Audience'}
                      </h4>
                      <p className="text-xs sm:text-sm font-medium text-zinc-800 dark:text-zinc-200">
                        {selectedDoc.audience[lang]}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400 mb-3">
                        {lang === 'id' ? 'Sorotan Spesifikasi' : 'Key Documentation Highlights'}
                      </h4>
                      <ul className="space-y-2">
                        {selectedDoc.highlights[lang].map((highlight, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300"
                          >
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                        {lang === 'id' ? 'Standar & Perangkat Kerja' : 'Tools & Standards'}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedDoc.tools.map((tool, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 rounded text-xs font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700/60"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* 4. IMPACT TAB */}
                {activeTab === 'impact' && (
                  <div className="space-y-6">
                    <div className="p-6 rounded-2xl border border-emerald-500/30 bg-emerald-500/5 space-y-3">
                      <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-mono text-xs font-bold">
                        <Sparkles className="w-4 h-4" />
                        <span>{lang === 'id' ? 'Dampak Terukur & Nilai Tambah' : 'Measurable Business Impact'}</span>
                      </div>
                      <p className="text-base text-zinc-900 dark:text-zinc-100 font-medium leading-relaxed">
                        {selectedDoc.impact[lang]}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                      <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950/50 border border-zinc-200 dark:border-zinc-800">
                        <span className="text-zinc-400 block mb-1">AUDIT SIGN-OFF:</span>
                        <span className="text-emerald-600 dark:text-emerald-400 font-bold text-sm">
                          100% Accepted
                        </span>
                      </div>
                      <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950/50 border border-zinc-200 dark:border-zinc-800">
                        <span className="text-zinc-400 block mb-1">ARCHIVE COMPLIANCE:</span>
                        <span className="text-zinc-900 dark:text-zinc-100 font-bold text-sm">
                          Official Institutional Archive
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
