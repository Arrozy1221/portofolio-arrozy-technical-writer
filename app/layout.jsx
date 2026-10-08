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
  title: 'Arrozy Adi Falaqi, S.Kom. — Technical Writer & Systems Documentation Specialist',
  description:
    'Portofolio Technical Writer profesional: spesialis User Manual, Kamus Data, Database ERD, Skenario UAT, dan SOP Digital untuk sistem kementerian & enterprise.',
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
  authors: [{ name: 'Arrozy Adi Falaqi' }],
  creator: 'Arrozy Adi Falaqi',
  openGraph: {
    title: 'Arrozy Adi Falaqi, S.Kom. — Technical Writer & Systems Documentation Specialist',
    description:
      'Spesialis User Manual 240+ hlm, Kamus Data relasional, Skenario UAT, dan SOP Digital untuk 10+ platform kementerian dan enterprise.',
    type: 'website',
    locale: 'id_ID',
    siteName: 'Arrozy Technical Writer Portfolio',
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
