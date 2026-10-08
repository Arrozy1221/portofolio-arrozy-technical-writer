'use client';

import { Building2, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export default function Experience({ lang, content }) {
  const t = content[lang].experience;

  return (
    <section id="experience" className="py-16 md:py-24 border-b border-zinc-200 dark:border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-mono font-semibold tracking-wider uppercase text-sky-600 dark:text-sky-400 mb-2">
            {t.eyebrow}
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            {t.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {t.items.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-zinc-200 dark:border-zinc-800/80">
                <div className="space-y-1">
                  <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white">
                    {item.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-medium text-sky-600 dark:text-sky-400">
                    <span>{item.company}</span>
                    <span className="text-zinc-400">•</span>
                    <span className="text-zinc-500 dark:text-zinc-400 font-normal">
                      {item.type}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.period}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    {item.location}
                  </span>
                </div>
              </div>

              <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {item.summary}
              </p>

              <div className="space-y-2 pt-1">
                {item.points.map((pt, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                    <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 pt-3 border-t border-zinc-100 dark:border-zinc-800/60">
                {item.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded text-xs font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
