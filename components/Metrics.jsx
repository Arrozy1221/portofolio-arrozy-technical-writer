'use client';

import { Users, FileText, TrendingUp, ThumbsUp } from 'lucide-react';

const metricIcons = [Users, FileText, TrendingUp, ThumbsUp];

export default function Metrics({ lang, content }) {
  const metrics = content[lang].metrics;

  return (
    <section className="py-10 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((item, index) => {
            const Icon = metricIcons[index % metricIcons.length];
            return (
              <div
                key={index}
                className="p-6 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-md hover:border-blue-200 transition-all space-y-2 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-3xl font-extrabold text-slate-900 tracking-tight">
                    {item.value}
                  </span>
                </div>

                <div className="pt-1">
                  <h3 className="font-bold text-sm text-slate-900">
                    {item.label}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                    {item.desc}
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
