'use client';

import { FileText, Wrench, Code2, Users, Check } from 'lucide-react';

const skillCategoryIcons = {
  file: FileText,
  tool: Wrench,
  code: Code2,
  users: Users,
};

export default function SkillsMatrix({ lang, content }) {
  const t = content[lang].skills;

  return (
    <section id="skills" className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
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

          <a
            href="#skills"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-200 hover:bg-blue-100 transition whitespace-nowrap self-start md:self-auto"
          >
            <span>{t.viewAll}</span>
          </a>
        </div>

        {/* 4 Cards in 2x2 Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {(t.groups || t.categories || []).map((group, idx) => {
            const Icon = skillCategoryIcons[group.icon] || FileText;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-slate-200/90 bg-white shadow-sm hover:shadow-md hover:border-blue-300 transition-all space-y-4 group"
              >
                {/* Header */}
                <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-base text-slate-900">
                    {group.title}
                  </h3>
                </div>

                {/* Items Checklist */}
                <ul className="space-y-2.5">
                  {group.items.map((item, iIdx) => (
                    <li
                      key={iIdx}
                      className="flex items-center gap-2.5 text-xs text-slate-700 font-medium"
                    >
                      <div className="w-4 h-4 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
