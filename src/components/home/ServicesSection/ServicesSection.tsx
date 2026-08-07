'use client';

import { useRef } from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';
import styles from './ServicesSection.module.css';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const t = {
  pt: {
    eyebrow: 'O que fazemos',
    title: 'Serviços completos para\nbrasileiros nos EUA',
    subtitle: 'Tudo que você precisa para manter sua documentação brasileira em dia, sem precisar se preocupar com a burocracia.',
    cta: 'Ver todos os serviços',
    stat1Label: 'clientes atendidos',
    stat2Label: 'anos de experiência',
    card1Title: 'Documentação Consular',
    card1Desc: 'Passaportes, certidões e registros junto aos consulados brasileiros nos EUA. Correto na primeira tentativa.',
    card2Title: 'Seguro por padrão',
    card2Desc: 'Toda a sua documentação tratada com sigilo e enviada com segurança. Sem erros, sem retrabalho.',
    card3Title: 'Processo ágil',
    card3Desc: 'Análise prévia e acompanhamento em cada etapa. Resultado mais rápido que fazer sozinho.',
    card4Title: 'Certificação Digital',
    card4Desc: 'e-CPF e e-CNPJ para brasileiros nos EUA. Acesso a sistemas governamentais com total segurança.',
    card5Title: 'Procurações',
    card5Desc: 'Cuide dos seus negócios e bens no Brasil sem precisar viajar. Procurações para qualquer finalidade.',
    card5Items: ['Procuração para imóvel', 'Procuração bancária', 'Procuração para INSS', 'Procuração pública'],
  },
  en: {
    eyebrow: 'What we do',
    title: 'Complete services for\nBrazilians in the USA',
    subtitle: 'Everything you need to keep your Brazilian documentation up to date, without worrying about bureaucracy.',
    cta: 'See all services',
    stat1Label: 'clients served',
    stat2Label: 'years of experience',
    card1Title: 'Consular Documentation',
    card1Desc: 'Passports, certificates and records with Brazilian consulates in the USA. Correct on the first attempt.',
    card2Title: 'Secure by default',
    card2Desc: 'Your documents handled with full confidentiality and sent securely. No errors, no rework.',
    card3Title: 'Agile process',
    card3Desc: 'Prior analysis and follow-up at every step. Faster results than doing it yourself.',
    card4Title: 'Digital Certificate',
    card4Desc: 'e-CPF and e-CNPJ for Brazilians in the USA. Access government systems with full security.',
    card5Title: 'Powers of Attorney',
    card5Desc: 'Manage your business and assets in Brazil without traveling. POAs for any purpose.',
    card5Items: ['Real estate POA', 'Banking POA', 'Social Security POA', 'Public POA'],
  },
};

export default function ServicesSection() {
  const { language } = useLanguage();
  const copy = t[language];
  const titleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    if (!titleRef.current) return;
    const chars = titleRef.current.querySelectorAll('.char');
    if (!chars.length) return;

    // Start hidden
    gsap.set(chars, { x: 150, opacity: 0 });

    function playAnim() {
      gsap.fromTo(
        chars,
        { x: 150, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power4.out',
          stagger: 0.04,
        }
      );
    }

    function hideChars() {
      gsap.set(chars, { x: 150, opacity: 0 });
    }

    ScrollTrigger.create({
      trigger: titleRef.current,
      start: 'top 85%',
      end: 'bottom 15%',
      onEnter: playAnim,
      onEnterBack: playAnim,
      onLeave: hideChars,
      onLeaveBack: hideChars,
    });
  }, { dependencies: [copy.title] });

  // Split title into char spans
  const titleWords = copy.title.split('\n').map((line) =>
    line.split(' ').map((word) =>
      word.split('').map((char, i) => (
        <span key={i} className={`char ${styles.char}`}>{char}</span>
      ))
    )
  );

  return (
    <section className={styles.section}>
      <div className="container">
        {/* Header */}
        <ScrollReveal variant="fadeUp">
          <div className={styles.header}>
            <span className="section-label">{copy.eyebrow}</span>
            <h2 className={styles.title} ref={titleRef}>
              {titleWords.map((line, li) => (
                <span key={li} className={styles.titleLine}>
                  {line.map((wordChars, wi) => (
                    <span key={wi} className={styles.titleWord}>
                      {wordChars}
                    </span>
                  ))}
                </span>
              ))}
            </h2>
            <p className={styles.subtitle}>{copy.subtitle}</p>
          </div>
        </ScrollReveal>

        {/* Bento Grid */}
        <div className={styles.bentoGrid}>

          {/* Card 1 — Stat: clientes */}
          <ScrollReveal variant="fadeUp" delay={0} className={`${styles.bentoCard} ${styles.cardStat}`}>
            <div className={styles.statCircle}>
              {/* Oval SVG background */}
              <svg className={styles.statOval} viewBox="0 0 254 104" fill="none">
                <path d="M112.891 97.7022C140.366 97.0802 171.004 94.6715 201.087 87.5116C210.43 85.2881 219.615 82.6412 228.284 78.2473C232.198 76.3179 235.905 73.9942 239.348 71.3124C241.85 69.2557 243.954 66.7571 245.555 63.9408C249.34 57.3235 248.281 50.5341 242.498 45.6109C239.033 42.7237 235.228 40.2703 231.169 38.3054C219.443 32.7209 207.141 28.4382 194.482 25.534C184.013 23.1927 173.358 21.7755 162.64 21.2989C161.376 21.3512 160.113 21.181 158.908 20.796C158.034 20.399 156.857 19.1682 156.962 18.4535C157.115 17.8927 157.381 17.3689 157.743 16.9139C158.104 16.4588 158.555 16.0821 159.067 15.8066C160.14 15.4683 161.274 15.3733 162.389 15.5286C179.805 15.3566 196.626 18.8373 212.998 24.462C220.978 27.2494 228.798 30.4747 236.423 34.1232C240.476 36.1159 244.202 38.7131 247.474 41.8258C254.342 48.2578 255.745 56.9397 251.841 65.4892C249.793 69.8582 246.736 73.6777 242.921 76.6327C236.224 82.0192 228.522 85.4602 220.502 88.2924C205.017 93.7847 188.964 96.9081 172.738 99.2109C153.442 101.949 133.993 103.478 114.506 103.79C91.1468 104.161 67.9334 102.97 45.1169 97.5831C36.0094 95.5616 27.2626 92.1655 19.1771 87.5116C13.839 84.5746 9.1557 80.5802 5.41318 75.7725C-0.54238 67.7259 -1.13794 59.1763 3.25594 50.2827C5.82447 45.3918 9.29572 41.0315 13.4863 37.4319C24.2989 27.5721 37.0438 20.9681 50.5431 15.7272C68.1451 8.8849 86.4883 5.1395 105.175 2.83669C129.045 0.0992292 153.151 0.134761 177.013 2.94256C197.672 5.23215 218.04 9.01724 237.588 16.3889C240.089 17.3418 242.498 18.5197 244.933 19.6446C246.627 20.4387 247.725 21.6695 246.997 23.615C246.455 25.1105 244.814 25.5605 242.63 24.5811C230.322 18.9961 217.233 16.1904 204.117 13.4376C188.761 10.3438 173.2 8.36665 157.558 7.52174C129.914 5.70776 102.154 8.06792 75.2124 14.5228C60.6177 17.8788 46.5758 23.2977 33.5102 30.6161C26.6595 34.3329 20.4123 39.0673 14.9818 44.658C12.9433 46.8071 11.1336 49.1622 9.58207 51.6855C4.87056 59.5336 5.61172 67.2494 11.9246 73.7608C15.2064 77.0494 18.8775 79.925 22.8564 82.3236C31.6176 87.7101 41.3848 90.5291 51.3902 92.5804C70.6068 96.5773 90.0219 97.7419 112.891 97.7022Z" fill="currentColor"/>
              </svg>
              <span className={styles.statNumber}>+2.000</span>
            </div>
            <h3 className={styles.statLabel}>{copy.stat1Label}</h3>
          </ScrollReveal>

          {/* Card 2 — Seguro por padrão */}
          <ScrollReveal variant="fadeUp" delay={80} className={`${styles.bentoCard} ${styles.cardSecure}`}>
            <div className={styles.cardIconRing}>
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            </div>
            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>{copy.card2Title}</h3>
              <p className={styles.cardDesc}>{copy.card2Desc}</p>
            </div>
          </ScrollReveal>

          {/* Card 3 — Processo ágil */}
          <ScrollReveal variant="fadeUp" delay={160} className={`${styles.bentoCard} ${styles.cardFast}`}>
            <div className={styles.cardIconRing}>
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>{copy.card3Title}</h3>
              <p className={styles.cardDesc}>{copy.card3Desc}</p>
            </div>
          </ScrollReveal>

          {/* Card 4 — Certificação Digital (wide, with chart) */}
          <ScrollReveal variant="fadeUp" delay={60} className={`${styles.bentoCard} ${styles.cardDigital}`}>
            <div className={styles.cardInner2col}>
              <div className={styles.cardBodyLeft}>
                <div className={styles.cardIconRing}>
                  <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                  </svg>
                </div>
                <h3 className={styles.cardTitle}>{copy.card4Title}</h3>
                <p className={styles.cardDesc}>{copy.card4Desc}</p>
              </div>
              {/* Mini chart SVG */}
              <div className={styles.chartWrap}>
                <svg className={styles.chartSvg} viewBox="0 0 200 80" fill="none">
                  <defs>
                    <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.35"/>
                      <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                  <path d="M0 60 C30 60 40 20 70 25 S110 50 140 30 S170 10 200 15 L200 80 L0 80 Z" fill="url(#chartGrad)"/>
                  <path d="M0 60 C30 60 40 20 70 25 S110 50 140 30 S170 10 200 15" stroke="var(--color-accent)" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 5 — Procurações (wide, with items list) */}
          <ScrollReveal variant="fadeUp" delay={140} className={`${styles.bentoCard} ${styles.cardPoa}`}>
            <div className={styles.cardInner2col}>
              <div className={styles.cardBodyLeft}>
                <div className={styles.cardIconRing}>
                  <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                </div>
                <h3 className={styles.cardTitle}>{copy.card5Title}</h3>
                <p className={styles.cardDesc}>{copy.card5Desc}</p>
              </div>
              {/* Items list panel */}
              <div className={styles.poaPanel}>
                <div className={styles.poaDots}>
                  <span className={styles.dot}/>
                  <span className={styles.dot}/>
                  <span className={styles.dot}/>
                </div>
                <ul className={styles.poaList}>
                  {copy.card5Items.map((item) => (
                    <li key={item} className={styles.poaItem}>
                      <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 6 — Stat: anos */}
          <ScrollReveal variant="fadeUp" delay={220} className={`${styles.bentoCard} ${styles.cardStatYears}`}>
            <div className={styles.statCircle}>
              <svg className={styles.statOval} viewBox="0 0 254 104" fill="none">
                <path d="M112.891 97.7022C140.366 97.0802 171.004 94.6715 201.087 87.5116C210.43 85.2881 219.615 82.6412 228.284 78.2473C232.198 76.3179 235.905 73.9942 239.348 71.3124C241.85 69.2557 243.954 66.7571 245.555 63.9408C249.34 57.3235 248.281 50.5341 242.498 45.6109C239.033 42.7237 235.228 40.2703 231.169 38.3054C219.443 32.7209 207.141 28.4382 194.482 25.534C184.013 23.1927 173.358 21.7755 162.64 21.2989C161.376 21.3512 160.113 21.181 158.908 20.796C158.034 20.399 156.857 19.1682 156.962 18.4535C157.115 17.8927 157.381 17.3689 157.743 16.9139C158.104 16.4588 158.555 16.0821 159.067 15.8066C160.14 15.4683 161.274 15.3733 162.389 15.5286C179.805 15.3566 196.626 18.8373 212.998 24.462C220.978 27.2494 228.798 30.4747 236.423 34.1232C240.476 36.1159 244.202 38.7131 247.474 41.8258C254.342 48.2578 255.745 56.9397 251.841 65.4892C249.793 69.8582 246.736 73.6777 242.921 76.6327C236.224 82.0192 228.522 85.4602 220.502 88.2924C205.017 93.7847 188.964 96.9081 172.738 99.2109C153.442 101.949 133.993 103.478 114.506 103.79C91.1468 104.161 67.9334 102.97 45.1169 97.5831C36.0094 95.5616 27.2626 92.1655 19.1771 87.5116C13.839 84.5746 9.1557 80.5802 5.41318 75.7725C-0.54238 67.7259 -1.13794 59.1763 3.25594 50.2827C5.82447 45.3918 9.29572 41.0315 13.4863 37.4319C24.2989 27.5721 37.0438 20.9681 50.5431 15.7272C68.1451 8.8849 86.4883 5.1395 105.175 2.83669C129.045 0.0992292 153.151 0.134761 177.013 2.94256C197.672 5.23215 218.04 9.01724 237.588 16.3889C240.089 17.3418 242.498 18.5197 244.933 19.6446C246.627 20.4387 247.725 21.6695 246.997 23.615C246.455 25.1105 244.814 25.5605 242.63 24.5811C230.322 18.9961 217.233 16.1904 204.117 13.4376C188.761 10.3438 173.2 8.36665 157.558 7.52174C129.914 5.70776 102.154 8.06792 75.2124 14.5228C60.6177 17.8788 46.5758 23.2977 33.5102 30.6161C26.6595 34.3329 20.4123 39.0673 14.9818 44.658C12.9433 46.8071 11.1336 49.1622 9.58207 51.6855C4.87056 59.5336 5.61172 67.2494 11.9246 73.7608C15.2064 77.0494 18.8775 79.925 22.8564 82.3236C31.6176 87.7101 41.3848 90.5291 51.3902 92.5804C70.6068 96.5773 90.0219 97.7419 112.891 97.7022Z" fill="currentColor"/>
              </svg>
              <span className={styles.statNumber}>20+</span>
            </div>
            <h3 className={styles.statLabel}>{copy.stat2Label}</h3>
          </ScrollReveal>

        </div>

        {/* CTA */}
        <ScrollReveal variant="fadeUp" delay={100}>
          <div className={styles.ctaWrap}>
            <Link href="/servicos" className={styles.cta}>
              {copy.cta}
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
