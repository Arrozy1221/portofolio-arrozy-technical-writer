'use client';

import { useState } from 'react';
import {
  FileText,
  Table,
  CheckCircle2,
  BookOpen,
  Database,
  ShieldCheck,
  Workflow,
  ExternalLink,
  ChevronRight,
  ListTree,
  Code2,
  Building2,
  Layers,
  Sparkles,
} from 'lucide-react';
import Image from 'next/image';
import { technicalDocuments } from '../data/content';

export default function DocsShowcase({ lang, content }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedDocId, setSelectedDocId] = useState(technicalDocuments[0].id);
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'structure' | 'excerpt' | 'impact'

  const t = content[lang].showcase;

  const filteredDocs =
    activeCategory === 'all'
      ? technicalDocuments
      : technicalDocuments.filter((doc) => doc.category === activeCategory);

  const selectedDoc =
    technicalDocuments.find((doc) => doc.id === selectedDocId) || technicalDocuments[0];

  return (
    <section id="docs" className="py-16 md:py-24 border-b border-zinc-200 dark:border-zinc-800/80">
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

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {t.categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  const firstOfCat =
                    cat.id === 'all'
                      ? technicalDocuments[0]
                      : technicalDocuments.find((d) => d.category === cat.id);
                  if (firstOfCat) setSelectedDocId(firstOfCat.id);
                }}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono whitespace-nowrap transition-all border ${
                  isActive
                    ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-950 border-zinc-900 dark:border-zinc-100 shadow-sm'
                    : 'bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Interactive Workspace Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Document Directory / Sidebar Selector (5 Cols) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-1 flex items-center justify-between">
              <span>Directory ({filteredDocs.length} Documents)</span>
              <span>Select to inspect</span>
            </div>

            <div className="space-y-2.5">
              {filteredDocs.map((doc) => {
                const isSelected = doc.id === selectedDoc.id;
                return (
                  <button
                    key={doc.id}
                    onClick={() => {
                      setSelectedDocId(doc.id);
                      setActiveTab('overview');
                    }}
                    className={`w-full text-left p-4 rounded-xl border transition-all text-xs font-sans ${
                      isSelected
                        ? 'bg-white dark:bg-zinc-900 border-sky-500/80 shadow-md ring-1 ring-sky-500/30'
                        : 'bg-white/60 dark:bg-zinc-900/40 border-zinc-200 dark:border-zinc-800/80 hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-white dark:hover:bg-zinc-900'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono font-semibold border ${doc.badgeColor}`}
                      >
                        {doc.badge}
                      </span>
                      <span className="text-[11px] font-mono text-zinc-500">{doc.pages}</span>
                    </div>

                    <h3 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100 line-clamp-2 mb-1.5">
                      {doc.titles[lang]}
                    </h3>

                    <div className="flex items-center justify-between text-[11px] text-zinc-500 dark:text-zinc-400 font-mono pt-1">
                      <span className="flex items-center gap-1.5 truncate max-w-[220px]">
                        <Building2 className="w-3 h-3 text-zinc-400 shrink-0" />
                        <span className="truncate">{doc.client}</span>
                      </span>
                      <span className="shrink-0">{doc.year}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Interactive Document Inspector Pane (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-lg overflow-hidden">
              {/* Document Header Bar */}
              <div className="p-5 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-950/40">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-mono font-semibold border ${selectedDoc.badgeColor}`}
                    >
                      {selectedDoc.badge}
                    </span>
                    <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                      ID: {selectedDoc.id}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{selectedDoc.status}</span>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white leading-snug mb-2">
                  {selectedDoc.titles[lang]}
                </h3>

                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-500 dark:text-zinc-400 pt-1">
                  <span className="flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-zinc-400" />
                    {selectedDoc.client}
                  </span>
                  <span>•</span>
                  <span>{selectedDoc.year}</span>
                  <span>•</span>
                  <span className="text-zinc-700 dark:text-zinc-300 font-semibold">
                    {selectedDoc.pages}
                  </span>
                </div>
              </div>

              {/* Inspector Tab Bar */}
              <div className="flex items-center border-b border-zinc-200 dark:border-zinc-800 bg-zinc-100/60 dark:bg-zinc-950/80 px-2 overflow-x-auto no-scrollbar font-mono text-xs">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`px-4 py-3 border-b-2 font-medium flex items-center gap-2 transition-colors whitespace-nowrap ${
                    activeTab === 'overview'
                      ? 'border-sky-600 text-sky-700 dark:text-sky-400 bg-white dark:bg-zinc-900'
                      : 'border-transparent text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
                  }`}
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>{t.tabs.overview}</span>
                </button>
                <button
                  onClick={() => setActiveTab('structure')}
                  className={`px-4 py-3 border-b-2 font-medium flex items-center gap-2 transition-colors whitespace-nowrap ${
                    activeTab === 'structure'
                      ? 'border-sky-600 text-sky-700 dark:text-sky-400 bg-white dark:bg-zinc-900'
                      : 'border-transparent text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
                  }`}
                >
                  <ListTree className="w-3.5 h-3.5" />
                  <span>{t.tabs.structure}</span>
                </button>
                <button
                  onClick={() => setActiveTab('excerpt')}
                  className={`px-4 py-3 border-b-2 font-medium flex items-center gap-2 transition-colors whitespace-nowrap ${
                    activeTab === 'excerpt'
                      ? 'border-sky-600 text-sky-700 dark:text-sky-400 bg-white dark:bg-zinc-900'
                      : 'border-transparent text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
                  }`}
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>{t.tabs.excerpt}</span>
                </button>
                <button
                  onClick={() => setActiveTab('impact')}
                  className={`px-4 py-3 border-b-2 font-medium flex items-center gap-2 transition-colors whitespace-nowrap ${
                    activeTab === 'impact'
                      ? 'border-sky-600 text-sky-700 dark:text-sky-400 bg-white dark:bg-zinc-900'
                      : 'border-transparent text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{t.tabs.impact}</span>
                </button>
              </div>

              {/* Inspector Content Panel */}
              <div className="p-6">
                {/* TAB 1: OVERVIEW */}
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                        {lang === 'id' ? 'Deskripsi Deliverable' : 'Deliverable Scope & Summary'}
                      </h4>
                      <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                        {selectedDoc.descriptions[lang]}
                      </p>
                    </div>

                    <div className="p-4 rounded-lg bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200 dark:border-zinc-800">
                      <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-2">
                        {lang === 'id' ? 'Target Pembaca & Stakeholder' : 'Target Audience & Stakeholders'}
                      </h4>
                      <p className="text-xs sm:text-sm font-medium text-zinc-800 dark:text-zinc-200">
                        {selectedDoc.audience[lang]}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400 mb-3">
                        {lang === 'id' ? 'Sorotan Spesifikasi' : 'Key Documentation Highlights'}
                      </h4>
                      <ul className="space-y-2">
                        {selectedDoc.highlights[lang].map((highlight, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300"
                          >
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                        {lang === 'id' ? 'Standar & Perangkat Kerja' : 'Tools & Standards Applied'}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedDoc.tools.map((tool, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 rounded text-xs font-mono bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700/60"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 2: STRUCTURE (TOC) */}
                {activeTab === 'structure' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-2 border-b border-zinc-200 dark:border-zinc-800 text-xs font-mono text-zinc-500">
                      <span>DAFTAR ISI & STRUKTUR BAB</span>
                      <span>TOTAL: {selectedDoc.pages}</span>
                    </div>

                    <div className="space-y-3">
                      {selectedDoc.toc.map((item, idx) => (
                        <div
                          key={idx}
                          className="rounded-lg border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-950/40 p-4"
                        >
                          <div className="flex items-start justify-between gap-3 mb-2">
                            <div className="flex items-center gap-2">
                              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-sky-100 dark:bg-sky-950 text-sky-800 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
                                {item.chapter}
                              </span>
                              <h5 className="font-semibold text-xs sm:text-sm text-zinc-900 dark:text-zinc-100">
                                {item.title[lang]}
                              </h5>
                            </div>
                            <span className="text-[11px] font-mono text-zinc-400 shrink-0">
                              {item.pages}
                            </span>
                          </div>

                          <div className="pl-6 space-y-1.5 border-l-2 border-zinc-200 dark:border-zinc-800 ml-3 mt-2">
                            {item.subsections.map((sub, sIdx) => (
                              <p
                                key={sIdx}
                                className="text-xs font-mono text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition"
                              >
                                {sub[lang]}
                              </p>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* TAB 3: TECHNICAL EXCERPT / SCHEMA VIEWER */}
                {activeTab === 'excerpt' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-2 border-b border-zinc-200 dark:border-zinc-800 text-xs font-mono text-zinc-500">
                      <span>{selectedDoc.technicalSample.heading[lang]}</span>
                      <span className="text-sky-600 dark:text-sky-400">AUTHENTIC EXCERPT</span>
                    </div>

                    {/* Step-by-Step Viewer (User Manual) */}
                    {selectedDoc.technicalSample.type === 'step_by_step' && (
                      <div className="space-y-3">
                        {selectedDoc.technicalSample.steps.map((st, idx) => (
                          <div
                            key={idx}
                            className="p-3.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/60 font-mono text-xs flex gap-3.5 items-start"
                          >
                            <span className="w-6 h-6 rounded bg-sky-600 text-white flex items-center justify-center font-bold text-xs shrink-0">
                              {st.no}
                            </span>
                            <div className="space-y-1.5 flex-1 min-w-0">
                              <p className="font-sans text-xs sm:text-sm text-zinc-800 dark:text-zinc-200 font-medium">
                                {st.instruction[lang]}
                              </p>
                              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                                <span>Path:</span>
                                <span className="text-sky-600 dark:text-sky-400 font-semibold">
                                  {st.action}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Database Schema Table Viewer (Data Dictionary) */}
                    {selectedDoc.technicalSample.type === 'database_schema' && (
                      <div className="overflow-x-auto rounded-lg border border-zinc-200 dark:border-zinc-800">
                        <table className="w-full text-left font-mono text-xs">
                          <thead className="bg-zinc-100 dark:bg-zinc-950 text-zinc-600 dark:text-zinc-400 border-b border-zinc-200 dark:border-zinc-800">
                            <tr>
                              <th className="p-3">Column Name</th>
                              <th className="p-3">Type</th>
                              <th className="p-3">Constraint</th>
                              <th className="p-3">Null</th>
                              <th className="p-3">Field Purpose</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800 bg-white dark:bg-zinc-900">
                            {selectedDoc.technicalSample.fields.map((f, idx) => (
                              <tr key={idx} className="hover:bg-zinc-50/80 dark:hover:bg-zinc-800/40">
                                <td className="p-3 font-semibold text-sky-600 dark:text-sky-400 whitespace-nowrap">
                                  {f.column}
                                </td>
                                <td className="p-3 text-amber-600 dark:text-amber-400 whitespace-nowrap">
                                  {f.type}
                                </td>
                                <td className="p-3 text-purple-600 dark:text-purple-400 whitespace-nowrap">
                                  {f.constraint}
                                </td>
                                <td className="p-3 text-zinc-500 whitespace-nowrap">{f.nullable}</td>
                                <td className="p-3 font-sans text-xs text-zinc-700 dark:text-zinc-300 min-w-[200px]">
                                  {f.description[lang]}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}

                    {/* UAT Test Case Matrix Viewer */}
                    {selectedDoc.technicalSample.type === 'uat_table' && (
                      <div className="space-y-3 font-mono text-xs">
                        {selectedDoc.technicalSample.testCases.map((tc, idx) => (
                          <div
                            key={idx}
                            className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/60 space-y-2.5"
                          >
                            <div className="flex items-center justify-between gap-2 border-b border-zinc-200 dark:border-zinc-800/80 pb-2">
                              <div className="flex items-center gap-2">
                                <span className="font-bold text-sky-600 dark:text-sky-400">
                                  {tc.id}
                                </span>
                                <span className="text-zinc-400">•</span>
                                <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                                  {tc.feature}
                                </span>
                              </div>
                              <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                                {tc.status}
                              </span>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-3 text-[11px]">
                              <div>
                                <span className="text-zinc-400 block mb-0.5">PRECONDITION:</span>
                                <span className="text-zinc-700 dark:text-zinc-300 font-sans">
                                  {tc.precondition[lang]}
                                </span>
                              </div>
                              <div>
                                <span className="text-zinc-400 block mb-0.5">ACTION:</span>
                                <span className="text-zinc-700 dark:text-zinc-300 font-sans">
                                  {tc.action[lang]}
                                </span>
                              </div>
                            </div>

                            <div className="pt-1 border-t border-zinc-200 dark:border-zinc-800/60 grid sm:grid-cols-2 gap-3 text-[11px]">
                              <div>
                                <span className="text-zinc-400 block mb-0.5">EXPECTED:</span>
                                <span className="text-zinc-700 dark:text-zinc-300 font-sans">
                                  {tc.expected[lang]}
                                </span>
                              </div>
                              <div>
                                <span className="text-emerald-600 dark:text-emerald-400 block mb-0.5">
                                  ACTUAL VERIFICATION:
                                </span>
                                <span className="text-zinc-800 dark:text-zinc-200 font-sans font-medium">
                                  {tc.actual[lang]}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* SOP Escalation Protocol Viewer */}
                    {selectedDoc.technicalSample.type === 'sop_flow' && (
                      <div className="space-y-3 font-mono text-xs">
                        {selectedDoc.technicalSample.sopSteps.map((step, idx) => (
                          <div
                            key={idx}
                            className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/60"
                          >
                            <div className="flex items-center justify-between gap-2 mb-2">
                              <span className="font-bold text-amber-600 dark:text-amber-400">
                                {step.code}
                              </span>
                              <span className="px-2 py-0.5 rounded text-[10px] bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                                Actor: {step.actor}
                              </span>
                            </div>
                            <h5 className="font-bold text-zinc-900 dark:text-white font-sans text-xs sm:text-sm mb-1.5">
                              {step.title[lang]}
                            </h5>
                            <p className="font-sans text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                              {step.desc[lang]}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* TAB 4: IMPACT & RESULTS */}
                {activeTab === 'impact' && (
                  <div className="space-y-6">
                    <div className="p-5 rounded-xl border border-emerald-500/20 bg-emerald-500/5 space-y-3">
                      <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-mono text-xs font-bold">
                        <Sparkles className="w-4 h-4" />
                        <span>{lang === 'id' ? 'Dampak Operasional Sistem' : 'Measurable Impact'}</span>
                      </div>
                      <p className="text-sm text-zinc-800 dark:text-zinc-200 leading-relaxed font-medium">
                        {selectedDoc.impact[lang]}
                      </p>
                    </div>

                    <div className="border-t border-zinc-200 dark:border-zinc-800 pt-5 space-y-3">
                      <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400">
                        {lang === 'id' ? 'Status Verifikasi & Audit' : 'Audit & Verification Status'}
                      </h4>
                      <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                        <div className="p-3 rounded-lg bg-zinc-50 dark:bg-zinc-950/50 border border-zinc-200 dark:border-zinc-800">
                          <span className="text-zinc-400 block mb-1">COMPLIANCE:</span>
                          <span className="text-zinc-800 dark:text-zinc-200 font-semibold">
                            Enterprise QA &amp; UAT
                          </span>
                        </div>
                        <div className="p-3 rounded-lg bg-zinc-50 dark:bg-zinc-950/50 border border-zinc-200 dark:border-zinc-800">
                          <span className="text-zinc-400 block mb-1">DELIVERABLE:</span>
                          <span className="text-zinc-800 dark:text-zinc-200 font-semibold">
                            Official Archive
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
