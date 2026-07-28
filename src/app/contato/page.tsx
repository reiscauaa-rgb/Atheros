import type { Metadata } from 'next';
import ContatoClientPage from './ContatoClientPage';

export const metadata: Metadata = {
  title: 'Contato — Atheros',
  description:
    'Entre em contato com a Atheros para resolver sua documentação brasileira nos EUA. Atendimento em português pelo WhatsApp e formulário.',
};

export default function ContatoPage() {
  return <ContatoClientPage />;
}
