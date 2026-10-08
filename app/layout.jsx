import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://portofolio-technical-writer.vercel.app'),
  title: 'Arrozy Adi Falaqi, S.Kom. — Technical Writer & Systems Documentation Specialist',
  description:
    'Portofolio Technical Writer profesional: spesialis User Manual, Kamus Data Relasional, Skenario UAT, dan SOP Digital untuk sistem kementerian & enterprise IT.',
  keywords: [
    'Technical Writer',
    'User Manual',
    'Data Dictionary',
    'Kamus Data',
    'UAT Scenario',
    'SOP Digital',
    'ERD',
    'Arrozy Adi Falaqi',
    'Bandung',
    'Software Documentation',
  ],
  authors: [{ name: 'Arrozy Adi Falaqi, S.Kom.' }],
  creator: 'Arrozy Adi Falaqi, S.Kom.',
  openGraph: {
    title: 'Arrozy Adi Falaqi, S.Kom. — Technical Writer & Systems Documentation Specialist',
    description:
      'Portofolio Technical Writer profesional: spesialis User Manual 240+ hlm, Kamus Data relasional, Skenario UAT, dan SOP Digital untuk 10+ platform kementerian dan enterprise.',
    url: 'https://portofolio-technical-writer.vercel.app',
    siteName: 'Arrozy Technical Writer Portfolio',
    locale: 'id_ID',
    type: 'website',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Arrozy Adi Falaqi, S.Kom. — Technical Writer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arrozy Adi Falaqi, S.Kom. — Technical Writer & Systems Documentation Specialist',
    description:
      'Portofolio Technical Writer profesional: spesialis User Manual, Kamus Data, Skenario UAT, dan SOP Digital sistem kementerian.',
    images: ['/images/og-image.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`scroll-smooth ${plusJakarta.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen font-sans selection:bg-blue-600 selection:text-white antialiased">
        {children}
      </body>
    </html>
  );
}
