'use client';

import { useEffect, useRef, useState } from 'react';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';
import styles from './StatsSection.module.css';
import { useLanguage } from '@/lib/i18n/LanguageContext';

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function StatItem({ num, suffix, label, delay }: { num: number; suffix: string; label: string; delay: number }) {
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const count = useCountUp(num, 2000, started);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setStarted(true); observer.disconnect(); } }, { threshold: 0.5 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={styles.stat} style={{ animationDelay: `${delay}ms` }}>
      <div className={styles.statNum}>
        {count}{suffix}
      </div>
      <div className={styles.statLabel}>{label}</div>
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

        <div className={styles.grid}>
          {items.map((item, i) => (
            <ScrollReveal key={item.label} variant="zoomIn" delay={i * 100}>
              <StatItem num={item.num} suffix={item.suffix} label={item.label} delay={i * 100} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
