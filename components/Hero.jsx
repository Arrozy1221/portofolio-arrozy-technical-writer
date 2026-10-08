'use client';

import { FileText, ArrowRight, Download, Terminal, CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';
import Image from 'next/image';

export default function Hero({ lang, content }) {
  const t = content[lang].hero;
  const navT = content[lang].nav;

  return (
    <section id="hero" className="relative pt-12 pb-16 md:pt-20 md:pb-24 border-b border-zinc-200 dark:border-zinc-800/80 docs-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb path */}
        <div className="flex items-center gap-2 mb-6 font-mono text-xs text-zinc-500 dark:text-zinc-400">
          <span className="text-sky-600 dark:text-sky-400">~</span>
          <span>/</span>
          <span>portfolio</span>
          <span>/</span>
          <span className="text-zinc-800 dark:text-zinc-200 font-semibold">technical-writer.md</span>
          <span className="ml-auto inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-sans font-medium bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            {t.badge}
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Main Editorial Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <p className="text-xs font-mono font-semibold tracking-wider uppercase text-sky-600 dark:text-sky-400">
                {t.eyebrow}
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-[1.15]">
                {t.name}
              </h1>
              <p className="text-lg sm:text-xl font-medium text-zinc-700 dark:text-zinc-300">
                {t.role}
              </p>
            </div>

            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl">
              {t.summary}
            </p>

            {/* Quick badges */}
            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-mono text-zinc-600 dark:text-zinc-400">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/60">
                <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                {t.location}
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/60">
                <ShieldCheck className="w-3.5 h-3.5 text-sky-500" />
                IPK 3.73 / 4.00 (S.Kom.)
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/60">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                {t.statusAvailable}
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#docs"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-sky-600 hover:bg-sky-500 text-white shadow-sm transition"
              >
                <span>{t.ctaPrimary}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={navT.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 transition"
              >
                <Download className="w-4 h-4 text-zinc-500" />
                <span>{t.ctaSecondary}</span>
              </a>
            </div>
          </div>

          {/* Dossier Code Card / Terminal Showcase */}
          <div className="lg:col-span-5">
            <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xl overflow-hidden font-mono text-xs">
              {/* Terminal Window Header */}
              <div className="px-4 py-3 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/60 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
                  <span className="ml-2 text-zinc-500 dark:text-zinc-400 font-mono text-[11px]">
                    writer_manifest.json
                  </span>
                </div>
                <span className="text-[10px] text-zinc-400 dark:text-zinc-500">READONLY</span>
              </div>

              {/* Code Card Content */}
              <div className="p-5 space-y-3 bg-zinc-950 text-zinc-300 leading-relaxed overflow-x-auto selection:bg-sky-500/30">
                <div className="flex gap-2">
                  <span className="text-zinc-600">01</span>
                  <span>&#123;</span>
                </div>
                <div className="flex gap-2 pl-4">
                  <span className="text-zinc-600">02</span>
                  <span>
                    <span className="text-sky-400">&quot;author&quot;</span>: <span className="text-amber-300">&quot;Arrozy Adi Falaqi, S.Kom.&quot;</span>,
                  </span>
                </div>
                <div className="flex gap-2 pl-4">
                  <span className="text-zinc-600">03</span>
                  <span>
                    <span className="text-sky-400">&quot;role&quot;</span>: <span className="text-amber-300">&quot;Technical Writer &amp; Systems Analyst&quot;</span>,
                  </span>
                </div>
                <div className="flex gap-2 pl-4">
                  <span className="text-zinc-600">04</span>
                  <span>
                    <span className="text-sky-400">&quot;core_competencies&quot;</span>: [
                  </span>
                </div>
                <div className="flex gap-2 pl-8 text-emerald-400">
                  <span className="text-zinc-600">05</span>
                  <span>&quot;User Manuals (240+ pages)&quot;,</span>
                </div>
                <div className="flex gap-2 pl-8 text-emerald-400">
                  <span className="text-zinc-600">06</span>
                  <span>&quot;Relational Data Dictionaries &amp; ERD&quot;,</span>
                </div>
                <div className="flex gap-2 pl-8 text-emerald-400">
                  <span className="text-zinc-600">07</span>
                  <span>&quot;UAT Execution Suites &amp; Acceptance&quot;,</span>
                </div>
                <div className="flex gap-2 pl-8 text-emerald-400">
                  <span className="text-zinc-600">08</span>
                  <span>&quot;FSD / Digital SOP Frameworks&quot;</span>
                </div>
                <div className="flex gap-2 pl-4">
                  <span className="text-zinc-600">09</span>
                  <span>],</span>
                </div>
                <div className="flex gap-2 pl-4">
                  <span className="text-zinc-600">10</span>
                  <span>
                    <span className="text-sky-400">&quot;track_record&quot;</span>: &#123;
                  </span>
                </div>
                <div className="flex gap-2 pl-8">
                  <span className="text-zinc-600">11</span>
                  <span>
                    <span className="text-sky-300">&quot;ministries&quot;</span>: <span className="text-purple-400">[&quot;Komdigi&quot;, &quot;Kemendikbud&quot;, &quot;PUPR&quot;, &quot;UT&quot;]</span>,
                  </span>
                </div>
                <div className="flex gap-2 pl-8">
                  <span className="text-zinc-600">12</span>
                  <span>
                    <span className="text-sky-300">&quot;onboarding_drop&quot;</span>: <span className="text-emerald-400">&quot;-40% support inquiries&quot;</span>,
                  </span>
                </div>
                <div className="flex gap-2 pl-8">
                  <span className="text-zinc-600">13</span>
                  <span>
                    <span className="text-sky-300">&quot;education&quot;</span>: <span className="text-amber-300">&quot;Computer Science (GPA: 3.73)&quot;</span>
                  </span>
                </div>
                <div className="flex gap-2 pl-4">
                  <span className="text-zinc-600">14</span>
                  <span>&#125;,</span>
                </div>
                <div className="flex gap-2 pl-4">
                  <span className="text-zinc-600">15</span>
                  <span>
                    <span className="text-sky-400">&quot;status&quot;</span>: <span className="text-emerald-300">&quot;OPEN_FOR_OPPORTUNITIES&quot;</span>
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="text-zinc-600">16</span>
                  <span>&#125;</span>
                </div>
              </div>

              {/* Card Footer Info */}
              <div className="px-4 py-2.5 bg-zinc-100 dark:bg-zinc-950/80 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-[11px] text-zinc-500">
                <span className="flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-sky-500" />
                  JSON Schema 2026.1
                </span>
                <span className="font-mono text-zinc-400">UTF-8 • Validated</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
