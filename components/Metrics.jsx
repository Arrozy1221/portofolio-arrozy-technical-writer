'use client';

import { Layers, FileCode, CheckCircle, TrendingDown } from 'lucide-react';

const icons = [Layers, FileCode, TrendingDown, CheckCircle];

export default function Metrics({ lang, content }) {
  const metrics = content[lang].metrics;

  return (
    <section className="py-12 border-b border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((item, index) => {
            const IconComponent = icons[index % icons.length];
            return (
              <div
                key={index}
                className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/80 shadow-sm hover:border-zinc-300 dark:hover:border-zinc-700 transition"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-3xl lg:text-4xl font-extrabold font-mono text-zinc-900 dark:text-white tracking-tight">
                    {item.value}
                  </span>
                  <div className="p-2 rounded-lg bg-sky-50 dark:bg-sky-950/60 border border-sky-100 dark:border-sky-900/50 text-sky-600 dark:text-sky-400">
                    <IconComponent className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 mb-1">
                  {item.label}
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
