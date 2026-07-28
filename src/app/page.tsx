import type { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection/HeroSection';
import ServicesSection from '@/components/home/ServicesSection/ServicesSection';
import AboutSection from '@/components/home/AboutSection/AboutSection';
import StatsSection from '@/components/home/StatsSection/StatsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection/TestimonialsSection';
import FAQSection from '@/components/home/FAQSection/FAQSection';
import CTASection from '@/components/home/CTASection/CTASection';

export const metadata: Metadata = {
  title: 'Atheros — Assessoria Documental para Brasileiros nos EUA',
  description:
    'Há mais de 20 anos resolvendo passaportes, procurações e certificados digitais para brasileiros nos EUA. Atendimento 100% em português.',
};

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <StatsSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
