'use client';

import { useState } from 'react';
import {
  FileText,
  ArrowRight,
  Download,
  Terminal,
  CheckCircle2,
  ShieldCheck,
  MapPin,
  Sparkles,
  Layers,
  FileSpreadsheet,
  Database,
  ExternalLink,
  BookOpen,
} from 'lucide-react';
import Image from 'next/image';

export default function Hero({ lang, content }) {
  const [activeDossierTab, setActiveDossierTab] = useState('manual');
  const t = content[lang].hero;
  const navT = content[lang].nav;

  return (
    <section id="hero" className="relative pt-12 pb-16 md:pt-20 md:pb-24 border-b border-zinc-200 dark:border-zinc-800/80 blueprint-grid overflow-hidden">
      {/* Decorative ambient blueprint elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb path */}
        <div className="flex items-center gap-2 mb-6 font-mono text-xs text-zinc-500 dark:text-zinc-400">
          <span className="text-sky-600 dark:text-sky-400 font-bold">~</span>
          <span>/</span>
          <span>dossier</span>
          <span>/</span>
          <span className="text-zinc-800 dark:text-zinc-200 font-semibold">technical-writer.md</span>
          <span className="ml-auto inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-sans font-medium bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            {t.badge}
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Main Editorial Text (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-semibold tracking-wider uppercase bg-sky-100/80 dark:bg-sky-950/80 text-sky-800 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
                <FileText className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                <span>{t.eyebrow}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-[1.15]">
                {t.name}
              </h1>
              <p className="text-lg sm:text-xl font-semibold text-sky-700 dark:text-sky-400">
                {t.role}
              </p>
            </div>

            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-2xl">
              {t.summary}
            </p>

            {/* Quick Badges with Visual Icons */}
            <div className="flex flex-wrap items-center gap-2.5 pt-2 text-xs font-mono text-zinc-700 dark:text-zinc-300">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm">
                <MapPin className="w-3.5 h-3.5 text-rose-500" />
                {t.location}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-sky-500" />
                IPK 3.73 / 4.00 (S.Kom.)
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                {t.statusAvailable}
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href="#docs"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-sky-600 hover:bg-sky-500 text-white shadow-md shadow-sky-600/20 transition-all hover:scale-[1.02]"
              >
                <span>{t.ctaPrimary}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={navT.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold border border-zinc-300 dark:border-zinc-700 hover:bg-white dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 bg-white/50 dark:bg-zinc-900/50 shadow-sm transition"
              >
                <Download className="w-4 h-4 text-zinc-500" />
                <span>{t.ctaSecondary}</span>
              </a>
            </div>
          </div>

          {/* Tangible Visual Technical Dossier Workbench (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Folder Binder Tabs */}
              <div className="flex items-center gap-1 pl-3 font-mono text-[11px] overflow-x-auto no-scrollbar">
                <button
                  onClick={() => setActiveDossierTab('manual')}
                  className={`px-3 py-2 rounded-t-lg border-t border-l border-r transition-all flex items-center gap-1.5 ${
                    activeDossierTab === 'manual'
                      ? 'bg-white dark:bg-zinc-900 text-sky-600 dark:text-sky-400 border-zinc-300 dark:border-zinc-700 font-semibold shadow-sm -mb-px z-20'
                      : 'bg-zinc-200/80 dark:bg-zinc-800/60 text-zinc-600 dark:text-zinc-400 border-transparent hover:bg-zinc-200 dark:hover:bg-zinc-800'
                  }`}
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Manual_UT_3.0.pdf</span>
                </button>

                <button
                  onClick={() => setActiveDossierTab('schema')}
                  className={`px-3 py-2 rounded-t-lg border-t border-l border-r transition-all flex items-center gap-1.5 ${
                    activeDossierTab === 'schema'
                      ? 'bg-white dark:bg-zinc-900 text-emerald-600 dark:text-emerald-400 border-zinc-300 dark:border-zinc-700 font-semibold shadow-sm -mb-px z-20'
                      : 'bg-zinc-200/80 dark:bg-zinc-800/60 text-zinc-600 dark:text-zinc-400 border-transparent hover:bg-zinc-200 dark:hover:bg-zinc-800'
                  }`}
                >
                  <Database className="w-3.5 h-3.5" />
                  <span>Komdigi_ERD.sql</span>
                </button>

                <button
                  onClick={() => setActiveDossierTab('uat')}
                  className={`px-3 py-2 rounded-t-lg border-t border-l border-r transition-all flex items-center gap-1.5 ${
                    activeDossierTab === 'uat'
                      ? 'bg-white dark:bg-zinc-900 text-purple-600 dark:text-purple-400 border-zinc-300 dark:border-zinc-700 font-semibold shadow-sm -mb-px z-20'
                      : 'bg-zinc-200/80 dark:bg-zinc-800/60 text-zinc-600 dark:text-zinc-400 border-transparent hover:bg-zinc-200 dark:hover:bg-zinc-800'
                  }`}
                >
                  <FileSpreadsheet className="w-3.5 h-3.5" />
                  <span>UAT_SIMPONI.xlsx</span>
                </button>
              </div>

              {/* Realistic A4 Document Paper Canvas */}
              <div className="paper-sheet rounded-xl border border-zinc-300 dark:border-zinc-700/80 p-6 relative overflow-hidden font-sans">
                {/* Official Formal Header Ribbon */}
                <div className="flex items-center justify-between pb-4 border-b-2 border-zinc-900 dark:border-zinc-200 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white p-1 shrink-0 flex items-center justify-center">
                      <Image
                        src={
                          activeDossierTab === 'manual'
                            ? '/logos/ut.png'
                            : activeDossierTab === 'schema'
                            ? '/logos/kominfo.svg'
                            : '/logos/mst.svg'
                        }
                        alt="Institution Seal"
                        width={30}
                        height={30}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-zinc-400 block">
                        OFFICIAL TECHNICAL ARTIFACT
                      </span>
                      <h3 className="font-bold text-xs sm:text-sm text-zinc-900 dark:text-white leading-tight">
                        {activeDossierTab === 'manual'
                          ? 'UNIVERSITAS TERBUKA — PUSAT KURIKULUM'
                          : activeDossierTab === 'schema'
                          ? 'KOMDIGI — BBPPT BALAI PENGUJIAN'
                          : 'KEMENKEU & MST — GATEWAY BILLING V2'}
                      </h3>
                    </div>
                  </div>

                  {/* Stamp Badge */}
                  <div className="hidden sm:inline-block stamp-badge px-2 py-0.5 rounded text-[10px] text-emerald-600 dark:text-emerald-400 border-emerald-500/80">
                    APPROVED
                  </div>
                </div>

                {/* TAB 1: User Manual Visual Preview */}
                {activeDossierTab === 'manual' && (
                  <div className="space-y-4 text-xs">
                    <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500">
                      <span>DOC ID: UT/MAN/KAPRODI-3.0</span>
                      <span>REV: FINAL 240+ PGS</span>
                    </div>

                    <div className="p-3.5 rounded-lg border border-sky-200 dark:border-sky-900/60 bg-sky-50/50 dark:bg-sky-950/30">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="w-4 h-4 rounded-full bg-sky-600 text-white flex items-center justify-center text-[10px] font-bold">
                          1
                        </span>
                        <span className="font-bold text-zinc-900 dark:text-zinc-100">
                          Visual Procedure &amp; Verification
                        </span>
                      </div>
                      <p className="text-[11px] text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        &quot;Validasi matriks bobot CPL $\ge$ 100% dan penandaan indikator SDGs PBB pada seluruh matakuliah inti fakultas.&quot;
                      </p>
                    </div>

                    {/* Miniature UI Screen Mockup with annotation pins */}
                    <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-950 p-3 relative font-mono text-[10px]">
                      <div className="flex items-center justify-between pb-2 border-b border-zinc-200 dark:border-zinc-800 mb-2">
                        <span className="text-zinc-400">portal-kurikulum.ut.ac.id/mapping</span>
                        <span className="text-emerald-500">● LIVE</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-center text-zinc-500">
                        <div className="p-1.5 rounded bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                          MK-01 • 3 SKS
                        </div>
                        <div className="p-1.5 rounded bg-sky-100 dark:bg-sky-950 border border-sky-400 text-sky-800 dark:text-sky-300 font-bold relative">
                          SDGs Target
                          <span className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 rounded-full bg-rose-500 text-white text-[9px] flex items-center justify-center">
                            !
                          </span>
                        </div>
                        <div className="p-1.5 rounded bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                          Ekuivalensi OK
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 2: Schema Visual Preview */}
                {activeDossierTab === 'schema' && (
                  <div className="space-y-4 text-xs font-mono">
                    <div className="flex items-center justify-between text-[11px] text-zinc-500">
                      <span>SCHEMA: bbppt_telecom_v2</span>
                      <span>ENTITIES: 35+ TABLES</span>
                    </div>

                    <div className="p-3 rounded-lg bg-zinc-950 text-zinc-300 border border-zinc-800 text-[11px] leading-relaxed overflow-x-auto">
                      <div className="text-purple-400 font-bold">CREATE TABLE t_permohonan_uji (</div>
                      <div className="pl-3 text-sky-300">id_permohonan <span className="text-amber-300">UUID PRIMARY KEY</span>,</div>
                      <div className="pl-3 text-sky-300">nomor_agenda <span className="text-amber-300">VARCHAR(32) UNIQUE</span>,</div>
                      <div className="pl-3 text-sky-300">id_perusahaan <span className="text-amber-300">UUID REFERENCES m_vendor(id)</span>,</div>
                      <div className="pl-3 text-sky-300">kategori_alat <span className="text-emerald-400">&apos;RF&apos; | &apos;EMC&apos; | &apos;SAFETY&apos;</span></div>
                      <div className="text-purple-400 font-bold">);</div>
                    </div>

                    <p className="text-[11px] font-sans text-zinc-600 dark:text-zinc-400">
                      Standardized foreign key integrity constraints &amp; audit trails for 15+ microservices.
                    </p>
                  </div>
                )}

                {/* TAB 3: UAT Visual Preview */}
                {activeDossierTab === 'uat' && (
                  <div className="space-y-4 text-xs font-mono">
                    <div className="flex items-center justify-between text-[11px] text-zinc-500">
                      <span>SUITE: SIMPONI-PNBP-V2</span>
                      <span className="text-emerald-500 font-bold">100% PASS RATE</span>
                    </div>

                    <div className="space-y-2">
                      <div className="p-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/60 flex items-center justify-between text-[11px]">
                        <span>TC-01: Issue 15-Digit Billing Code</span>
                        <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 font-bold">
                          PASS
                        </span>
                      </div>
                      <div className="p-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/60 flex items-center justify-between text-[11px]">
                        <span>TC-02: Void Unpaid Zero-Tariff Bill</span>
                        <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 font-bold">
                          PASS
                        </span>
                      </div>
                      <div className="p-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/60 flex items-center justify-between text-[11px]">
                        <span>TC-03: Gateway Latency Graceful Rollback</span>
                        <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 font-bold">
                          PASS
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Author Accreditation Footer */}
                <div className="pt-4 mt-4 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-sky-600 text-white flex items-center justify-center text-[10px] font-bold">
                      ✓
                    </div>
                    <span>Authored by Arrozy Adi Falaqi, S.Kom.</span>
                  </div>
                  <span className="text-sky-600 dark:text-sky-400 font-bold">
                    VERIFIED ARTIFACT
                  </span>
                </div>

                {/* Redline Post-it Note Effect */}
                <div className="absolute -bottom-2 -right-2 bg-amber-200 text-zinc-900 p-2.5 rounded shadow-lg transform rotate-2 max-w-[170px] text-[10px] font-sans leading-tight border border-amber-300 hidden sm:block">
                  <span className="font-bold block mb-0.5">📌 Key Metric:</span>
                  -40% helpdesk tickets after manual deployment!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
