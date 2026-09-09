import type { Metadata } from 'next';
import FAQClientPage from './FAQClientPage';

export const metadata: Metadata = {
  title: 'FAQ Atheros',
  description:
    'Perguntas frequentes sobre documentação consular brasileira nos EUA, passaporte, procurações públicas e e-Notariado.',
};

export default function FAQPage() {
  return <FAQClientPage />;
}
