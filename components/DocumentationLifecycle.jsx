'use client';

import { Workflow, CheckCircle, ArrowRight } from 'lucide-react';

export default function DocumentationLifecycle({ lang, content }) {
  const t = content[lang].lifecycle;

  return (
    <section id="lifecycle" className="py-16 md:py-24 border-b border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/40 dark:bg-zinc-950/40">
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

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.steps.map((step, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm hover:border-zinc-300 dark:hover:border-zinc-700 transition space-y-3 relative group"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-2xl font-black text-sky-600 dark:text-sky-400">
                  {step.num}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700/60">
                  {step.badge}
                </span>
              </div>

              <h3 className="font-bold text-sm sm:text-base text-zinc-900 dark:text-zinc-100 leading-snug">
                {step.title}
              </h3>

              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
