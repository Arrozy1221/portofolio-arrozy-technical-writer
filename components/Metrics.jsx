'use client';

import { Layers, FileCode, CheckCircle, TrendingDown, Sparkles } from 'lucide-react';

export default function Metrics({ lang, content }) {
  const metrics = content[lang].metrics;

  return (
    <section className="py-14 border-b border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/60 dark:bg-zinc-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Metric 1: 10+ Platforms */}
          <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm hover:border-sky-500/50 transition-all space-y-3 relative overflow-hidden group">
            <div className="flex items-center justify-between">
              <span className="text-4xl lg:text-5xl font-black font-mono text-zinc-900 dark:text-white tracking-tight">
                {metrics[0].value}
              </span>
              <div className="w-10 h-10 rounded-xl bg-sky-50 dark:bg-sky-950/80 text-sky-600 dark:text-sky-400 flex items-center justify-center border border-sky-100 dark:border-sky-900">
                <Layers className="w-5 h-5" />
              </div>
            </div>
            <h3 className="font-bold text-sm text-zinc-900 dark:text-zinc-100">
              {metrics[0].label}
            </h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
              {metrics[0].desc}
            </p>
            {/* Visual Micro Badge */}
            <div className="pt-2 flex items-center gap-1.5 text-[10px] font-mono text-sky-600 dark:text-sky-400 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
              <span>Komdigi, UT, PUPR, Kemendikbud</span>
            </div>
          </div>

          {/* Metric 2: 240+ Pages */}
          <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm hover:border-emerald-500/50 transition-all space-y-3 relative overflow-hidden group">
            <div className="flex items-center justify-between">
              <span className="text-4xl lg:text-5xl font-black font-mono text-zinc-900 dark:text-white tracking-tight">
                {metrics[1].value}
              </span>
              <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center border border-emerald-100 dark:border-emerald-900">
                <FileCode className="w-5 h-5" />
              </div>
            </div>
            <h3 className="font-bold text-sm text-zinc-900 dark:text-zinc-100">
              {metrics[1].label}
            </h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
              {metrics[1].desc}
            </p>
            {/* Visual Page Stack Progress Bar */}
            <div className="pt-2 space-y-1">
              <div className="w-full h-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
                <div className="w-full h-full bg-emerald-500 rounded-full"></div>
              </div>
              <span className="text-[10px] font-mono text-zinc-400">Complete Walkthrough &amp; Troubleshooting</span>
            </div>
          </div>

          {/* Metric 3: -40% Inquiries */}
          <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm hover:border-purple-500/50 transition-all space-y-3 relative overflow-hidden group">
            <div className="flex items-center justify-between">
              <span className="text-4xl lg:text-5xl font-black font-mono text-emerald-600 dark:text-emerald-400 tracking-tight">
                -40%
              </span>
              <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/80 text-purple-600 dark:text-purple-400 flex items-center justify-center border border-purple-100 dark:border-purple-900">
                <TrendingDown className="w-5 h-5" />
              </div>
            </div>
            <h3 className="font-bold text-sm text-zinc-900 dark:text-zinc-100">
              {metrics[2].label}
            </h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
              {metrics[2].desc}
            </p>
            {/* Visual Sparkline Trend Indicator */}
            <div className="pt-2 flex items-center gap-1.5 text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
              <span>▼ Tiket Helpdesk Terpangkas Nyata</span>
            </div>
          </div>

          {/* Metric 4: 100% UAT */}
          <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm hover:border-amber-500/50 transition-all space-y-3 relative overflow-hidden group">
            <div className="flex items-center justify-between">
              <span className="text-4xl lg:text-5xl font-black font-mono text-zinc-900 dark:text-white tracking-tight">
                100%
              </span>
              <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/80 text-amber-600 dark:text-amber-400 flex items-center justify-center border border-amber-100 dark:border-amber-900">
                <CheckCircle className="w-5 h-5" />
              </div>
            </div>
            <h3 className="font-bold text-sm text-zinc-900 dark:text-zinc-100">
              {metrics[3].label}
            </h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
              {metrics[3].desc}
            </p>
            {/* Verified Badge */}
            <div className="pt-2 flex items-center gap-1.5 text-[10px] font-mono text-amber-600 dark:text-amber-400 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
              <span>Zero Critical Defect Sign-Off</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
