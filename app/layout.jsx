import './globals.css';

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
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen font-sans selection:bg-sky-500/20 selection:text-sky-800 dark:selection:text-sky-200">
        {children}
      </body>
    </html>
  );
}
