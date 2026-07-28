import type { Metadata } from 'next';
import FAQClientPage from './FAQClientPage';

export const metadata: Metadata = {
  title: 'FAQ — Atheros',
  description:
    'Perguntas frequentes sobre documentação consular brasileira nos EUA, passaporte, procurações e certificado digital.',
};

export default function FAQPage() {
  return <FAQClientPage />;
}
