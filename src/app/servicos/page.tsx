import type { Metadata } from 'next';
import ServicosClientPage from './ServicosClientPage';

export const metadata: Metadata = {
  title: 'Serviços — Atheros',
  description:
    'Documentação consular, procurações e certificação digital (e-CPF/e-CNPJ) para brasileiros nos EUA. Saiba como funciona cada serviço.',
};

export default function ServicosPage() {
  return <ServicosClientPage />;
}
