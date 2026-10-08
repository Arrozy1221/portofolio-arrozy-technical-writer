'use client';

import {
  Download,
  Eye,
  MapPin,
  Briefcase,
  Building2,
  BookOpen,
  FileText,
  Settings,
  Terminal,
} from 'lucide-react';
import Image from 'next/image';

export default function Hero({ lang, content }) {
  const t = content[lang].hero;
  const navT = content[lang].nav;

  return (
    <section id="hero" className="relative pt-12 pb-20 md:pt-16 md:pb-24 bg-gradient-to-b from-blue-50/40 via-white to-slate-50/50 overflow-hidden">
      {/* Soft ambient blur circle */}
      <div className="absolute top-10 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-600 border border-blue-200/80 shadow-sm">
              <span>{t.badge}</span>
            </div>

            {/* Title & Role */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
                {t.name}
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-blue-600">
                {t.role}
              </p>
            </div>

            {/* Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              {t.summary}
            </p>

            {/* Metadata Pills */}
            <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-slate-600 font-medium">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100/80 border border-slate-200">
                <MapPin className="w-3.5 h-3.5 text-blue-600" />
                {t.location}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100/80 border border-slate-200">
                <Briefcase className="w-3.5 h-3.5 text-blue-600" />
                {t.experience}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100/80 border border-slate-200">
                <Building2 className="w-3.5 h-3.5 text-blue-600" />
                {t.industry}
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-3">
              <a
                href={navT.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/25 transition-all hover:scale-[1.02]"
              >
                <Download className="w-4 h-4" />
                <span>{t.ctaPrimary}</span>
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold border border-slate-300 hover:border-blue-600 bg-white hover:bg-blue-50/50 text-slate-800 transition-all shadow-sm"
              >
                <Eye className="w-4 h-4 text-blue-600" />
                <span>{t.ctaSecondary}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Sleek Laptop Display with 3D Floating Glass Icons (5 Cols) */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Floating 3D Icon 1 (Top Left): Book / Manual */}
            <div className="absolute -top-3 left-4 z-20 w-12 h-12 rounded-2xl bg-blue-600/90 text-white flex items-center justify-center shadow-lg shadow-blue-600/30 backdrop-blur-md transform -rotate-6 animate-bounce duration-1000">
              <BookOpen className="w-6 h-6" />
            </div>

            {/* Floating 3D Icon 2 (Middle Left): Document */}
            <div className="absolute top-24 -left-3 z-20 w-12 h-12 rounded-2xl bg-white border border-blue-200 text-blue-600 flex items-center justify-center shadow-xl backdrop-blur-md transform rotate-3">
              <FileText className="w-6 h-6" />
            </div>

            {/* Floating 3D Icon 3 (Bottom Left): Settings / Engineering */}
            <div className="absolute bottom-10 left-2 z-20 w-12 h-12 rounded-2xl bg-blue-500 text-white flex items-center justify-center shadow-lg shadow-blue-500/30 transform -rotate-3">
              <Settings className="w-6 h-6" />
            </div>

            {/* Laptop Mockup Device */}
            <div className="relative w-full max-w-[460px] perspective-1000">
              {/* Laptop Screen Body */}
              <div className="rounded-2xl border-4 border-slate-800 bg-slate-900 p-2 shadow-2xl">
                {/* Screen Top Bezel with Camera */}
                <div className="h-4 bg-slate-900 flex items-center justify-center mb-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-700"></div>
                </div>

                {/* Inside Screen: Live Technical Docs / Code Editor */}
                <div className="rounded-lg bg-slate-950 p-4 font-mono text-xs text-slate-300 space-y-2.5 overflow-hidden shadow-inner">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-[10px] text-slate-400">
                    <span className="text-blue-400">Technical-Documentation.ts</span>
                    <span className="text-emerald-400">● Verified</span>
                  </div>

                  <div className="space-y-1 text-[11px] leading-relaxed">
                    <div className="text-slate-500">// Technical Documentation Specialist</div>
                    <div>
                      <span className="text-purple-400">interface</span>{' '}
                      <span className="text-yellow-300">CleanDocumentation</span> &#123;
                    </div>
                    <div className="pl-4 text-blue-300">
                      userManual: <span className="text-emerald-400">boolean</span>;
                    </div>
                    <div className="pl-4 text-blue-300">
                      sopStandard: <span className="text-emerald-400">boolean</span>;
                    </div>
                    <div className="pl-4 text-blue-300">
                      trainingModule: <span className="text-emerald-400">boolean</span>;
                    </div>
                    <div className="pl-4 text-blue-300">
                      systemArchitecture: <span className="text-emerald-400">boolean</span>;
                    </div>
                    <div>&#125;</div>

                    <div className="pt-2 text-slate-500">// Better User Experience</div>
                    <div>
                      <span className="text-purple-400">function</span>{' '}
                      <span className="text-blue-400">createDocumentation</span>():{' '}
                      <span className="text-yellow-300">CleanDocumentation</span> &#123;
                    </div>
                    <div className="pl-4 text-purple-400">
                      return &#123;
                    </div>
                    <div className="pl-8 text-blue-300">
                      clear: <span className="text-yellow-400">true</span>,
                    </div>
                    <div className="pl-8 text-blue-300">
                      easyToRead: <span className="text-yellow-400">true</span>,
                    </div>
                    <div className="pl-8 text-blue-300">
                      stepByStep: <span className="text-yellow-400">true</span>,
                    </div>
                    <div className="pl-4">&#125;;</div>
                    <div>&#125;</div>
                  </div>
                </div>
              </div>

              {/* Laptop Keyboard Base */}
              <div className="h-4 bg-slate-700 rounded-b-xl border-t border-slate-600 shadow-md flex justify-center">
                <div className="w-16 h-1 bg-slate-500 rounded-full mt-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
