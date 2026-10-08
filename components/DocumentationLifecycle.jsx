'use client';

import {
  Search,
  FileText,
  FileEdit,
  Settings,
  Users,
  TrendingUp,
} from 'lucide-react';

const icons = [Search, FileText, FileEdit, Settings, Users, TrendingUp];

export default function DocumentationLifecycle({ lang, content }) {
  const t = content[lang].lifecycle;

  return (
    <section id="lifecycle" className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-2">
            {t.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.title}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            {t.subtitle}
          </p>
        </div>

        {/* 6 Cards (3x2 Grid) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.steps.map((step, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-md hover:border-blue-200 transition-all flex items-start gap-4 group"
              >
                {/* Blue Icon Box */}
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Icon className="w-5 h-5" />
                </div>

                {/* Content */}
                <div className="space-y-1.5 flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-sm text-blue-600">
                      {step.num}
                    </span>
                    <h3 className="font-bold text-base text-slate-900 leading-snug">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
