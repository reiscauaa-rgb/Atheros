'use client';

import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';
import styles from './AboutSection.module.css';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import Link from 'next/link';
import { LocationMap } from '@/components/ui/LocationMap/LocationMap';

const t = {
  pt: {
    eyebrow: 'Quem somos',
    title: 'Brasileiras que entendem\nsua história',
    p1: 'A Atheros nasceu da necessidade real vivida pelas próprias fundadoras: brasileiras que moram nos Estados Unidos há mais de 30 anos e conhecem de perto as dificuldades que nossa comunidade enfrenta com a burocracia dos consulados e com a distância do Brasil.',
    p2: 'Com mais de 20 anos de atuação no mercado, construímos uma reputação sólida baseada em três pilares: ética, agilidade e atendimento humanizado. Somos parceiras da comunidade brasileira — não apenas um serviço.',
    values: [
      { icon: '🛡️', title: 'Ética', desc: 'Transparência em cada etapa do processo, sem surpresas.' },
      { icon: '⚡', title: 'Agilidade', desc: 'Processos otimizados para o menor prazo possível.' },
      { icon: '🤝', title: 'Humanização', desc: 'Atendimento em português, com empatia e cuidado.' },
    ],
    cta: 'Nossa história completa',
  },
  en: {
    eyebrow: 'Who we are',
    title: 'Brazilian women who\nunderstand your story',
    p1: 'Atheros was born out of a real need experienced by the founders themselves: Brazilian women who have lived in the United States for over 30 years and know firsthand the difficulties our community faces with consular bureaucracy and the distance from Brazil.',
    p2: 'With over 20 years in the market, we have built a solid reputation based on three pillars: ethics, agility and humanized service. We are partners of the Brazilian community — not just a service.',
    values: [
      { icon: '🛡️', title: 'Ethics', desc: 'Transparency at every step, no surprises.' },
      { icon: '⚡', title: 'Agility', desc: 'Optimized processes for the shortest possible timeframe.' },
      { icon: '🤝', title: 'Humanized', desc: 'Service in Portuguese, with empathy and care.' },
    ],
    cta: 'Our full story',
  },
};

export default function AboutSection() {
  const { language } = useLanguage();
  const copy = t[language];

  return (
    <section className={styles.section} id="sobre">
      <div className="container">
        <div className={styles.inner}>
          {/* Left — Visual */}
          <ScrollReveal variant="fadeLeft" className={styles.visualWrap}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', minHeight: '400px' }}>
              <LocationMap 
                location="Stoughton, MA" 
                coordinates="42.1251° N, 71.1023° W" 
              />
            </div>
          </ScrollReveal>

          {/* Right — Content */}
          <ScrollReveal variant="fadeRight">
            <div className={styles.content}>
              <span className="section-label">{copy.eyebrow}</span>
              <h2 className={styles.title}>
                {copy.title.split('\n').map((line, i) => (
                  <span key={i}>
                    {i === 1 ? <em className={styles.titleAccent}>{line}</em> : line}
                    {i === 0 && <br />}
                  </span>
                ))}
              </h2>
              <p className={styles.text}>{copy.p1}</p>
              <p className={styles.text}>{copy.p2}</p>

              {/* Values */}
              <div className={styles.values}>
                {copy.values.map((v) => (
                  <div key={v.title} className={styles.value}>
                    <span className={styles.valueIcon}>{v.icon}</span>
                    <div>
                      <strong className={styles.valueTitle}>{v.title}</strong>
                      <p className={styles.valueDesc}>{v.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link href="/sobre" className={styles.cta}>
                {copy.cta}
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden>
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
