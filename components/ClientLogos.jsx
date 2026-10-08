'use client';

import Image from 'next/image';
import { ShieldCheck } from 'lucide-react';

const clients = [
  {
    name: 'Kementerian Komunikasi dan Digital',
    abbr: 'KOMDIGI / KOMINFO',
    role: 'Sertifikasi Perangkat, Non-SIMS & CAT',
    logo: '/logos/kominfo.svg',
  },
  {
    name: 'Universitas Terbuka',
    abbr: 'UNIVERSITAS TERBUKA',
    role: 'User Manual Kurikulum 3.0 & Web SDGs',
    logo: '/logos/ut.png',
  },
  {
    name: 'Kementerian PUPR',
    abbr: 'KEMENTERIAN PUPR',
    role: 'FSD & SOP Monitoring Proyek BRAVO',
    logo: '/logos/pupr.jpg',
  },
  {
    name: 'Kemendikbudristek',
    abbr: 'KEMENDIKBUD',
    role: 'Dashboard SIMONTILA & Spesifikasi Data',
    logo: '/logos/kemendikbud.png',
  },
  {
    name: 'PT Mitra Sinerji Teknoindo',
    abbr: 'MST ENTERPRISE',
    role: 'Lead Technical Writing & Systems Analysis',
    logo: '/logos/mst.svg',
  },
];

export default function ClientLogos({ lang }) {
  return (
    <section className="py-10 border-b border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-950/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold text-zinc-500 uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-sky-600 dark:text-sky-400" />
            <span>
              {lang === 'id'
                ? 'Lembaga Publik & Kementerian yang Didokumentasikan'
                : 'Public Institutions & Ministries Documented'}
            </span>
          </div>
          <span className="text-[11px] font-mono text-zinc-400">
            {lang === 'id' ? '10+ Sistem Produksi Skala Nasional' : '10+ Nationwide Production Platforms'}
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {clients.map((client, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/60 dark:bg-zinc-900/40 hover:bg-white dark:hover:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 transition flex flex-col justify-between group"
            >
              <div className="h-10 flex items-center justify-start mb-3">
                <div className="relative w-8 h-8 rounded-lg overflow-hidden shrink-0 bg-white p-1 border border-zinc-200 dark:border-zinc-700">
                  <Image
                    src={client.logo}
                    alt={client.abbr}
                    fill
                    className="object-contain p-0.5"
                  />
                </div>
              </div>
              <div>
                <h4 className="font-bold text-xs text-zinc-900 dark:text-zinc-100 font-mono tracking-tight group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                  {client.abbr}
                </h4>
                <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-1 line-clamp-2 leading-relaxed">
                  {client.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
