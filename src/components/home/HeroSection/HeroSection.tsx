'use client';

import { useRef } from 'react';
import Link from 'next/link';
import styles from './HeroSection.module.css';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const t = {
  pt: {
    eyebrow: 'Assessoria Documental • Stoughton, MA',
    title1: 'Sua documentação',
    title2: 'brasileira nos EUA,',
    title3: 'sem burocracia.',
    subtitle:
      'Há mais de 20 anos resolvendo a vida de brasileiros nos Estados Unidos. Passaportes, procurações, certidões e certificação digital com agilidade e segurança.',
    cta1: 'Análise Gratuita',
    cta2: 'Nossos Serviços',
    badge1: '+2.000 clientes atendidos',
    badge2: '20 anos de experiência',
    badge3: 'Atendimento 100% em português',
  },
  en: {
    eyebrow: 'Document Services • Stoughton, MA',
    title1: 'Your Brazilian',
    title2: 'documents in the USA,',
    title3: 'hassle-free.',
    subtitle:
      'For over 20 years helping Brazilians in the United States. Passports, powers of attorney, certificates and digital certificates with speed and security.',
    cta1: 'Free Consultation',
    cta2: 'Our Services',
    badge1: '+2,000 clients served',
    badge2: '20 years of experience',
    badge3: '100% service in Portuguese',
  },
};

export default function HeroSection() {
  const { language } = useLanguage();
  const copy = t[language];
  const heroRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: heroRef.current,
      start: 'bottom bottom',
      pin: true,
      pinSpacing: false,
      markers: false,
    });
  }, { scope: heroRef });

  return (
    <section ref={heroRef} className={styles.hero} aria-label="Hero">
      {/* Background image */}
      <div className={styles.bg} aria-hidden>
        <div className={styles.bgGradient} />
      </div>

      <div className={`container ${styles.inner}`}>
        {/* Left — Content */}
        <div className={styles.content}>
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            {copy.eyebrow}
          </span>

          <h1 className={styles.title}>
            <span className={styles.titleLine1}>{copy.title1}</span>
            <span className={styles.titleLine2}>{copy.title2}</span>
            <span className={styles.titleAccent}>{copy.title3}</span>
          </h1>

          <p className={styles.subtitle}>{copy.subtitle}</p>

          <div className={styles.actions}>
            <a
              href={`https://api.whatsapp.com/send/?phone=19046515886&text=${encodeURIComponent(
                language === 'pt'
                  ? 'Olá! Vim pelo site e gostaria de uma análise gratuita do meu caso.'
                  : 'Hello! I came from the website and would like a free consultation.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.btn} ${styles.btnPrimary}`}
            >
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {copy.cta1}
            </a>
            <Link href="/servicos" className={`${styles.btn} ${styles.btnOutline}`}>
              {copy.cta2}
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden>
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </Link>
          </div>

          {/* Trust Badges */}
          <div className={styles.badges}>
            {[copy.badge1, copy.badge2, copy.badge3].map((badge) => (
              <div key={badge} className={styles.badge}>
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden>
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {badge}
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator} aria-hidden>
        <div className={styles.scrollMouse}>
          <div className={styles.scrollWheel} />
        </div>
      </div>
    </section>
  );
}
