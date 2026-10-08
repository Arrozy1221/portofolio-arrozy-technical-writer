'use client';

import { MessageSquare, Linkedin, Mail, MapPin, Quote, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

export default function ContactFooter({ lang, content }) {
  const t = content[lang].cta;
  const f = content[lang].footer;
  const nav = content[lang].nav;

  return (
    <footer id="contact" className="bg-white">
      {/* Dark Navy Blue Collaboration Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-3xl bg-gradient-to-r from-[#031838] via-[#08244c] to-[#051c3d] p-8 sm:p-12 lg:p-16 text-white shadow-2xl relative overflow-hidden">
          {/* Subtle ambient light behind card */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Left Column (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-300 border border-blue-400/30">
                <span>{t.badge}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                {t.title}
              </h2>

              <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
                {t.desc}
              </p>

              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <a
                  href={t.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30 transition-all hover:scale-[1.02]"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{t.whatsappBtn}</span>
                </a>

                <a
                  href={t.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold border border-slate-600 hover:border-slate-400 bg-white/5 hover:bg-white/10 text-white transition-all shadow-sm"
                >
                  <Linkedin className="w-4 h-4 text-blue-400" />
                  <span>{t.linkedinBtn}</span>
                </a>
              </div>
            </div>

            {/* Right Column: Profile Card with Quote (5 Cols) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm rounded-2xl bg-white p-6 text-slate-900 shadow-2xl space-y-4">
                {/* Profile Header */}
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-blue-500 shrink-0">
                    <Image
                      src="/photo.png"
                      alt="Arrozy Adi Falaqi"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-slate-900 leading-tight">
                      Arrozy Adi Falaqi, S.Kom.
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Technical Writer &amp; Documentation Specialist
                    </p>
                    <div className="flex items-center gap-1 text-[11px] text-slate-400 mt-1">
                      <MapPin className="w-3 h-3 text-rose-500" />
                      <span>Bandung, Indonesia</span>
                    </div>
                  </div>
                </div>

                {/* Green/Teal Soft Quote Box */}
                <div className="p-4 rounded-xl bg-emerald-50/80 border border-emerald-200/60 text-xs text-emerald-900 leading-relaxed font-medium flex items-start gap-2.5">
                  <Quote className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5 rotate-180" />
                  <span>{t.quote}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Navigation Bar */}
      <div className="border-t border-slate-100 py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-xs shadow-sm">
              AF
            </div>
            <div>
              <span className="font-bold text-sm text-slate-900 block leading-tight">
                {nav.brand}
              </span>
              <span className="text-[11px] text-slate-500">
                {nav.brandSub}
              </span>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-medium text-slate-600">
            <a href="#hero" className="hover:text-blue-600 transition">
              {nav.home}
            </a>
            <a href="#lifecycle" className="hover:text-blue-600 transition">
              {nav.methodology}
            </a>
            <a href="#projects" className="hover:text-blue-600 transition">
              {nav.projects}
            </a>
            <a href="#skills" className="hover:text-blue-600 transition">
              {nav.skills}
            </a>
            <a href="#experience" className="hover:text-blue-600 transition">
              {content[lang].experience.title}
            </a>
            <a href="#contact" className="hover:text-blue-600 transition">
              {nav.contact}
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/arrozy-adi-falaqi-6a25ba14a"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-blue-50 text-slate-600 hover:text-blue-600 flex items-center justify-center transition"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:arrozyadifalaqioi@gmail.com"
              className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-blue-50 text-slate-600 hover:text-blue-600 flex items-center justify-center transition"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Sub-Footer Copyright */}
      <div className="border-t border-slate-100 py-6 text-center text-xs text-slate-400 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>{f.rights}</span>
          <span>{f.tagline}</span>
        </div>
      </div>
    </footer>
  );
}
