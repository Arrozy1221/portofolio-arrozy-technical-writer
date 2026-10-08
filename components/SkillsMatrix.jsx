'use client';

import { Check, ShieldCheck, Terminal, BookOpen, Layers, Code2 } from 'lucide-react';

const categoryIcons = [BookOpen, Layers, Terminal, Code2];

export default function SkillsMatrix({ lang, content }) {
  const t = content[lang].skills;

  return (
    <section id="skills" className="py-16 md:py-24 border-b border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/30">
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

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {t.groups.map((group, idx) => {
            const Icon = categoryIcons[idx % categoryIcons.length];
            return (
              <div
                key={idx}
                className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm space-y-4"
              >
                <div className="flex items-center gap-3 pb-3 border-b border-zinc-200 dark:border-zinc-800/80">
                  <div className="p-2 rounded-lg bg-sky-50 dark:bg-sky-950/60 border border-sky-100 dark:border-sky-900/50 text-sky-600 dark:text-sky-400">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-base text-zinc-900 dark:text-white">
                    {group.category}
                  </h3>
                </div>

                <div className="grid sm:grid-cols-2 gap-2.5">
                  {group.items.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-2.5 rounded-lg border border-zinc-100 dark:border-zinc-800/60 bg-zinc-50/60 dark:bg-zinc-950/40 flex items-center justify-between text-xs font-mono"
                    >
                      <span className="font-sans text-xs text-zinc-800 dark:text-zinc-200 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-200/60 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
