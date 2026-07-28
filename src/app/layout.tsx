import type { Metadata } from 'next';
import './globals.css';
import ConditionalLayout from '@/components/ConditionalLayout/ConditionalLayout';
import { LanguageProvider } from '@/lib/i18n/LanguageContext';

export const metadata: Metadata = {
  title: {
    default: 'Atheros — Assessoria Documental para Brasileiros nos EUA',
    template: '%s | Atheros',
  },
  description:
    'Há mais de 20 anos ajudando brasileiros nos EUA com documentação consular, procurações e certificação digital. Atendimento humanizado em português.',
  keywords:
    'despachante brasileiros EUA, documentação consular, passaporte brasileiro EUA, procuração, certificado digital, Stoughton MA',
  openGraph: {
    title: 'Atheros — Assessoria Documental para Brasileiros nos EUA',
    description:
      'Há mais de 20 anos ajudando brasileiros nos EUA com documentação consular, procurações e certificação digital.',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Atheros',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Atheros — Assessoria Documental para Brasileiros nos EUA',
    description:
      'Há mais de 20 anos ajudando brasileiros nos EUA com documentação consular, procurações e certificação digital.',
  },
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <LanguageProvider>
          <ConditionalLayout>{children}</ConditionalLayout>
        </LanguageProvider>
      </body>
    </html>
  );
}
