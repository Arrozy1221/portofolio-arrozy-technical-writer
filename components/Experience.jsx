'use client';

import { Building2, Monitor, Users, Calendar } from 'lucide-react';

const expIcons = {
  building: Building2,
  monitor: Monitor,
  users: Users,
};

export default function Experience({ lang, content }) {
  const t = content[lang].experience;

  return (
    <section id="experience" className="py-20 bg-slate-50/50 border-b border-slate-100">
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
            href="#projects"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-200 hover:bg-blue-100 transition whitespace-nowrap self-start md:self-auto"
          >
            <span>{t.viewAll}</span>
          </a>
        </div>

        {/* 3 Experience Cards in a Row */}
        <div className="grid md:grid-cols-3 gap-6">
          {t.items.map((item, idx) => {
            const Icon = expIcons[item.icon] || Building2;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-slate-200/90 bg-white shadow-sm hover:shadow-lg hover:border-blue-300 transition-all space-y-4 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  {/* Card Header */}
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div>
                    <h3 className="font-bold text-base text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">
                      {item.role}
                    </h3>
                    <p className="text-xs font-semibold text-blue-600 mt-1">
                      {item.company}
                    </p>
                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400 mt-1">
                      <Calendar className="w-3 h-3" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  {/* Bullet Points */}
                  <ul className="space-y-2 pt-2 border-t border-slate-100">
                    {item.points.map((pt, pIdx) => (
                      <li
                        key={pIdx}
                        className="text-xs text-slate-600 leading-relaxed flex items-start gap-2"
                      >
                        <span className="text-blue-500 font-bold shrink-0">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
