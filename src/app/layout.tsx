import type { Metadata } from 'next';
import { Inter, Oswald } from 'next/font/google';
import './globals.css';
import ConditionalLayout from '@/components/ConditionalLayout/ConditionalLayout';
import { LanguageProvider } from '@/lib/i18n/LanguageContext';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Atheros Assessoria Documental para Brasileiros nos EUA',
    template: '%s | Atheros',
  },
  description:
    'Há mais de 16 anos ajudando brasileiros nos EUA com documentação consular, procurações públicas e e-Notariado. Atendimento humanizado em português.',
  keywords:
    'despachante brasileiros EUA, documentação consular, passaporte brasileiro EUA, procuração, e-notariado, Stoughton MA',
  openGraph: {
    title: 'Atheros Assessoria Documental para Brasileiros nos EUA',
    description:
      'Há mais de 16 anos ajudando brasileiros nos EUA com documentação consular, procurações públicas e e-Notariado.',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Atheros',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Atheros Assessoria Documental para Brasileiros nos EUA',
    description:
      'Há mais de 16 anos ajudando brasileiros nos EUA com documentação consular, procurações públicas e e-Notariado.',
  },
  icons: {
    icon: [
      { url: '/icon.png', sizes: '512x512', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${oswald.variable}`}>
      <body>
        <LanguageProvider>
          <ConditionalLayout>{children}</ConditionalLayout>
        </LanguageProvider>
      </body>
    </html>
  );
}
