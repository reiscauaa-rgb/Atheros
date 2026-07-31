'use client';

// Removed unused hooks
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';
import styles from './StatsSection.module.css';
import { useLanguage } from '@/lib/i18n/LanguageContext';

function StatPill({ num, suffix, label }: { num: number; suffix: string; label: string }) {
  return (
    <div className={styles.brandPill}>
      <span className={styles.pillNum}>{num}{suffix}</span> {label}
    </div>
  );
}

const stats = {
  pt: [
    { num: 20, suffix: '+', label: 'Anos de experiência' },
    { num: 2000, suffix: '+', label: 'Clientes atendidos' },
    { num: 3, suffix: '', label: 'Tipos de serviço' },
    { num: 100, suffix: '%', label: 'Atendimento em português' },
  ],
  en: [
    { num: 20, suffix: '+', label: 'Years of experience' },
    { num: 2000, suffix: '+', label: 'Clients served' },
    { num: 3, suffix: '', label: 'Service types' },
    { num: 100, suffix: '%', label: 'Service in Portuguese' },
  ],
};

const t = {
  pt: {
    eyebrow: 'Nossos números',
    title: 'Décadas de confiança,\nmilhares de histórias',
    subtitle: 'Cada número representa uma família que pôde manter suas conexões com o Brasil sem burocracia.',
  },
  en: {
    eyebrow: 'Our numbers',
    title: 'Decades of trust,\nthousands of stories',
    subtitle: 'Each number represents a family that was able to maintain their connections with Brazil without bureaucracy.',
  },
};

export default function StatsSection() {
  const { language } = useLanguage();
  const copy = t[language];
  const items = stats[language];

  const marqueeItems = [...items, ...items, ...items, ...items];

  return (
    <section className={styles.section}>
      <div className={styles.bgPattern} aria-hidden />
      <div className="container">
        <ScrollReveal variant="fadeUp">
          <div className={styles.header}>
            <span className={styles.eyebrow}>{copy.eyebrow}</span>
            <h2 className={styles.title}>
              {copy.title.split('\n').map((line, i) => (
                <span key={i}>{line}{i === 0 && <br />}</span>
              ))}
            </h2>
            <p className={styles.subtitle}>{copy.subtitle}</p>
          </div>
        </ScrollReveal>

        <div className={styles.marqueeContainer}>
          {/* Row 1 */}
          <div className={styles.marquee}>
            <div className={styles.marqueeTrack}>
              {marqueeItems.map((item, i) => (
                <StatPill key={`r1-${i}`} num={item.num} suffix={item.suffix} label={item.label} />
              ))}
            </div>
            <div className={styles.marqueeTrack} aria-hidden="true">
              {marqueeItems.map((item, i) => (
                <StatPill key={`r1-hidden-${i}`} num={item.num} suffix={item.suffix} label={item.label} />
              ))}
            </div>
          </div>
          {/* Row 2 */}
          <div className={styles.marquee}>
            <div className={styles.marqueeTrackReverse}>
              {marqueeItems.map((item, i) => (
                <StatPill key={`r2-${i}`} num={item.num} suffix={item.suffix} label={item.label} />
              ))}
            </div>
            <div className={styles.marqueeTrackReverse} aria-hidden="true">
              {marqueeItems.map((item, i) => (
                <StatPill key={`r2-hidden-${i}`} num={item.num} suffix={item.suffix} label={item.label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
