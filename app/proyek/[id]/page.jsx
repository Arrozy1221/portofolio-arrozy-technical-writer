import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  Building2,
  GraduationCap,
  Laptop,
  Database,
  Workflow,
  FileText,
  FileCheck2,
  ShieldCheck,
  Layers,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Info,
  Calendar,
  MessageSquare,
  ArrowRight,
  ExternalLink,
  BookOpen,
} from 'lucide-react';
import { featuredProjects } from '../../../data/content';
import ProjectDetailClient from './ProjectDetailClient';

const bannerIcons = {
  graduation: GraduationCap,
  building: Building2,
  laptop: Laptop,
  database: Database,
  workflow: Workflow,
};

export function generateStaticParams() {
  return featuredProjects.map((project) => ({
    id: project.id,
  }));
}

export function generateMetadata({ params }) {
  const project = featuredProjects.find((p) => p.id === params.id);
  if (!project) return { title: 'Proyek Tidak Ditemukan' };

  return {
    title: `${project.title.id} — Dokumentasi Teknis oleh Arrozy Adi Falaqi, S.Kom.`,
    description: project.description.id,
  };
}

export default function ProjectDetailPage({ params }) {
  const project = featuredProjects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  // Find next project for bottom navigation
  const currentIndex = featuredProjects.findIndex((p) => p.id === params.id);
  const nextProject =
    featuredProjects[(currentIndex + 1) % featuredProjects.length];
  const prevProject =
    featuredProjects[
      (currentIndex - 1 + featuredProjects.length) % featuredProjects.length
    ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans antialiased selection:bg-blue-600 selection:text-white">
      {/* Top Sticky Header */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 hover:text-blue-600 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Portofolio</span>
          </Link>

          <div className="hidden md:flex items-center gap-2 font-mono text-xs text-slate-400">
            <span>{project.documentMeta?.docCode}</span>
            <span>•</span>
            <span className="text-emerald-600 font-semibold">
              {project.documentMeta?.version || 'Approved'}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/6281298023537?text=Halo%20Arrozy,%20saya%20tertarik%20dengan%20proyek%20dokumentasi%20${encodeURIComponent(project.title.id)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-sm shadow-blue-500/20 transition"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Diskusi via WhatsApp</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Detail Content (Client Component with Tabs) */}
      <main className="flex-1">
        <ProjectDetailClient
          project={project}
          nextProject={nextProject}
          prevProject={prevProject}
        />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-10 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-xs text-slate-400">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              © 2026 Arrozy Adi Falaqi, S.Kom. • Technical Writer &amp; Systems Documentation Specialist
            </div>
            <div className="flex items-center gap-4">
              <Link href="/" className="hover:text-white transition">
                Beranda
              </Link>
              <Link href="/#projects" className="hover:text-white transition">
                Semua Dokumen
              </Link>
              <a
                href="https://www.linkedin.com/in/arrozy-adi-falaqi-6a25ba14a"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <p className="text-[11px] text-slate-500 text-center sm:text-left border-t border-slate-800/80 pt-3">
            Disclaimer: Seluruh cuplikan dokumen teknis dan artefak arsitektur pada situs ini disajikan secara tersanitasi (sanitized sample) semata untuk evaluasi kompetensi profesional Technical Writer. Hak kekayaan intelektual sistem tetap berada pada instansi/klien terkait.
          </p>
        </div>
      </footer>
    </div>
  );
}
