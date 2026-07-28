import type { Metadata } from 'next';
import SobreClientPage from './SobreClientPage';

export const metadata: Metadata = {
  title: 'Sobre Nós — Atheros',
  description:
    'Conheça a história da Atheros: brasileiras com mais de 30 anos nos EUA ajudando nossa comunidade com documentação consular há mais de 20 anos.',
};

export default function SobrePage() {
  return <SobreClientPage />;
}
