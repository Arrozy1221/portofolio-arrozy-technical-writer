'use client';

import {
  Workflow,
  Search,
  Layers,
  FileEdit,
  CheckCircle2,
  Users,
  GitBranch,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

const stepIcons = [Search, Layers, FileEdit, CheckCircle2, Users, GitBranch];

const deliverables = [
  'Stakeholder & Process Matrix',
  'Approved TOC & IA Taxonomy',
  'Draft User Manual & Schemas',
  'Cross-Verified Staging QA Run',
  'Formal Sign-off Berita Acara',
  'Release Notes & Version Freeze',
];

export default function DocumentationLifecycle({ lang, content }) {
  const t = content[lang].lifecycle;

  return (
    <section id="lifecycle" className="py-16 md:py-24 border-b border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-950/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-semibold tracking-wider uppercase bg-sky-100/80 dark:bg-sky-950/80 text-sky-800 dark:text-sky-300 border border-sky-200 dark:border-sky-800 mb-2">
            <Workflow className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
            <span>{t.eyebrow}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            {t.title}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Interactive Connected Pipeline Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {t.steps.map((step, idx) => {
            const Icon = stepIcons[idx % stepIcons.length];
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm hover:border-sky-500/50 dark:hover:border-sky-500/50 transition-all space-y-4 relative group flex flex-col justify-between"
              >
                <div>
                  {/* Step Header with Circuit Node */}
                  <div className="flex items-center justify-between pb-3 border-b border-zinc-100 dark:border-zinc-800">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-sky-50 dark:bg-sky-950 text-sky-600 dark:text-sky-400 flex items-center justify-center border border-sky-100 dark:border-sky-900 font-mono font-bold text-sm">
                        {step.num}
                      </div>
                      <span className="text-xs font-mono font-semibold text-zinc-400">
                        {step.badge}
                      </span>
                    </div>

                    <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 group-hover:text-sky-500 group-hover:bg-sky-50 dark:group-hover:bg-sky-950 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-bold text-base text-zinc-900 dark:text-white leading-snug mt-3 mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Output Deliverable Badge */}
                <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800/80">
                  <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider block mb-1">
                    Output Deliverable:
                  </span>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700">
                    <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" />
                    <span>{deliverables[idx]}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
