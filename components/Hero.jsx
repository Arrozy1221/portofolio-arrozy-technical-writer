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

          {/* Right Column: High-End 3D Laptop Workspace with Floating 3D Glass Icons (5 Cols) */}
          <div className="lg:col-span-5 relative flex justify-center items-center pt-6 lg:pt-0">
            {/* Ambient Back Glow */}
            <div className="absolute inset-0 bg-blue-500/10 rounded-3xl blur-2xl transform scale-95 pointer-events-none"></div>

            {/* Floating 3D Icon 1 (Top Left): Manual Handbook */}
            <div className="absolute -top-6 -left-4 sm:-top-8 sm:-left-6 z-20 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/95 p-1.5 shadow-2xl border border-blue-100/80 backdrop-blur-md transform -rotate-6 hover:rotate-0 hover:scale-110 transition-all duration-300">
              <div className="relative w-full h-full rounded-xl overflow-hidden shadow-inner">
                <Image
                  src="/images/floating-book.png"
                  alt="3D Buku Panduan"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Floating 3D Icon 2 (Top Right): Glowing Verified Document */}
            <div className="absolute -top-4 -right-3 sm:-top-6 sm:-right-5 z-20 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/95 p-1.5 shadow-2xl border border-blue-100/80 backdrop-blur-md transform rotate-6 hover:rotate-0 hover:scale-110 transition-all duration-300">
              <div className="relative w-full h-full rounded-xl overflow-hidden shadow-inner">
                <Image
                  src="/images/floating-document.png"
                  alt="3D Dokumen Terverifikasi"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Floating 3D Icon 3 (Bottom Left): Glossy Tech Gear */}
            <div className="absolute -bottom-5 -left-3 sm:-bottom-7 sm:-left-5 z-20 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/95 p-1.5 shadow-2xl border border-blue-100/80 backdrop-blur-md transform rotate-3 hover:rotate-0 hover:scale-110 transition-all duration-300">
              <div className="relative w-full h-full rounded-xl overflow-hidden shadow-inner">
                <Image
                  src="/images/floating-gear.png"
                  alt="3D Konfigurasi Sistem"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Main Visual: 3D Laptop Workspace Illustration */}
            <div className="relative w-full rounded-3xl overflow-hidden border border-slate-200/90 bg-white shadow-2xl p-2 sm:p-3 group">
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-slate-950 shadow-inner">
                <Image
                  src="/images/hero-laptop.png"
                  alt="Modern Documentation Workspace"
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
