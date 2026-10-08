'use client';

import { Mail, MessageSquare, Linkedin, ArrowUpRight, ShieldCheck, Terminal, MapPin } from 'lucide-react';
import Image from 'next/image';

export default function ContactFooter({ lang, content }) {
  const t = content[lang].contact;
  const f = content[lang].footer;

  return (
    <footer id="contact" className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              {t.availabilityBadge}
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-tight">
              {t.title}
            </h2>

            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-xl">
              {t.desc}
            </p>

            {/* Direct Action Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={t.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm transition"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{t.whatsappBtn}</span>
                <ArrowUpRight className="w-4 h-4 opacity-70" />
              </a>

              <a
                href={`mailto:${t.email}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 transition"
              >
                <Mail className="w-4 h-4 text-zinc-500" />
                <span>{t.emailBtn}</span>
              </a>

              <a
                href={t.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 transition"
              >
                <Linkedin className="w-4 h-4 text-sky-600" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-4 h-4 opacity-70" />
              </a>
            </div>
          </div>

          {/* Profile Dossier Card */}
          <div className="lg:col-span-5">
            <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 shadow-md space-y-4 font-mono text-xs">
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-700 shrink-0">
                  <Image
                    src="/photo.png"
                    alt="Arrozy Adi Falaqi"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-zinc-900 dark:text-white font-sans">
                    Arrozy Adi Falaqi, S.Kom.
                  </h4>
                  <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
                    Technical Writer &amp; Systems Analyst
                  </p>
                  <p className="text-[11px] text-sky-600 dark:text-sky-400 mt-0.5">
                    Universitas Pendidikan Indonesia
                  </p>
                </div>
              </div>

              <div className="space-y-2 pt-3 border-t border-zinc-200 dark:border-zinc-800/80 text-zinc-600 dark:text-zinc-400">
                <div className="flex items-center justify-between">
                  <span>EMAIL:</span>
                  <a href={`mailto:${t.email}`} className="text-zinc-900 dark:text-zinc-100 hover:underline">
                    {t.email}
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span>WHATSAPP:</span>
                  <span className="text-zinc-900 dark:text-zinc-100">{t.phone}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>BASE:</span>
                  <span className="text-zinc-900 dark:text-zinc-100">Bandung, Jawa Barat, ID</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>COMMENCEMENT:</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">Immediate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-Footer / Copyright */}
      <div className="border-t border-zinc-200 dark:border-zinc-800/80 py-6 bg-zinc-50/50 dark:bg-zinc-950/80 font-mono text-xs text-zinc-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>{f.rights}</div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>{f.builtWith}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
