'use client';

import { useRef, useMemo } from 'react';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';
import styles from './TestimonialsSection.module.css';
import { useLanguage } from '@/lib/i18n/LanguageContext';

/* ─── Data ─────────────────────────────────────────────── */
const testimonials = {
  pt: [
    {
      name: 'Mariana Costa',
      city: 'Boston, MA',
      initials: 'MC',
      rating: 5,
      text: 'Renovei meu passaporte sem precisar sair de casa e o processo foi muito mais simples do que eu imaginava. A Atheros cuidou de tudo com muita profissionalidade.',
    },
    {
      name: 'Rafael Mendes',
      city: 'Miami, FL',
      initials: 'RM',
      rating: 5,
      text: 'Fiz uma procuração para vender meu apartamento no Brasil sem precisar viajar. A equipe me orientou em cada passo e o processo foi aprovado sem problemas.',
    },
    {
      name: 'Fernanda Oliveira',
      city: 'New York, NY',
      initials: 'FO',
      rating: 5,
      text: 'Tentei utilizar o e-Notariado sozinha por meses e não conseguia. Em menos de uma semana com a Atheros, tudo resolvido. Atendimento em português faz toda a diferença!',
    },
    {
      name: 'Carlos Souza',
      city: 'Orlando, FL',
      initials: 'CS',
      rating: 5,
      text: 'Precisei urgentemente de uma certidão de nascimento e a Atheros conseguiu resolver no menor prazo possível. Recomendo a todos os brasileiros nos EUA.',
    },
    {
      name: 'Ana Paula Lima',
      city: 'Stoughton, MA',
      initials: 'AL',
      rating: 5,
      text: 'Clientes há mais de 5 anos. Já renovei passaporte, fiz procurações e utilizei o e-Notariado. Sempre com excelência, rapidez e muita atenção.',
    },
    {
      name: 'João Batista',
      city: 'Los Angeles, CA',
      initials: 'JB',
      rating: 5,
      text: 'Morei por anos com medo da burocracia consular. Desde que descobri a Atheros, resolvo tudo com tranquilidade. Serviço impecável e preço justo.',
    },
  ],
  en: [
    {
      name: 'Mariana Costa',
      city: 'Boston, MA',
      initials: 'MC',
      rating: 5,
      text: 'I renewed my passport without leaving home and the process was much simpler than I imagined. Atheros took care of everything very professionally.',
    },
    {
      name: 'Rafael Mendes',
      city: 'Miami, FL',
      initials: 'RM',
      rating: 5,
      text: 'I made a power of attorney to sell my apartment in Brazil without traveling. The team guided me every step of the way and the process was approved without issues.',
    },
    {
      name: 'Fernanda Oliveira',
      city: 'New York, NY',
      initials: 'FO',
      rating: 5,
      text: 'I tried to use e-Notariado on my own for months and couldn\'t. In less than a week with Atheros, everything was resolved. Service in Portuguese makes all the difference!',
    },
    {
      name: 'Carlos Souza',
      city: 'Orlando, FL',
      initials: 'CS',
      rating: 5,
      text: 'I urgently needed a birth certificate and Atheros managed to resolve it in the shortest time possible. I recommend it to all Brazilians in the USA.',
    },
    {
      name: 'Ana Paula Lima',
      city: 'Stoughton, MA',
      initials: 'AL',
      rating: 5,
      text: 'Clients for over 5 years. I\'ve renewed my passport, made powers of attorney and used e-Notariado. Always with excellence, speed and great care.',
    },
    {
      name: 'João Batista',
      city: 'Los Angeles, CA',
      initials: 'JB',
      rating: 5,
      text: 'I lived for years afraid of consular bureaucracy. Since I found Atheros, I handle everything with peace of mind. Impeccable service and fair prices.',
    },
  ],
};

const t = {
  pt: {
    eyebrow: 'Depoimentos',
    title: 'O que nossos clientes\nfalam sobre nós',
    subtitle: 'Mais de 2.000 clientes satisfeitos ao longo de mais de 16 anos de história.',
  },
  en: {
    eyebrow: 'Testimonials',
    title: 'What our clients\nsay about us',
    subtitle: 'Over 2,000 satisfied clients throughout more than 16 years of history.',
  },
};

/* ─── Card ─────────────────────────────────────────────── */
function TestimonialCard({ name, city, initials, rating, text }: (typeof testimonials.pt)[number]) {
  return (
    <div className={styles.card}>
      <div className={styles.stars} aria-label={`${rating} estrelas`}>
        {Array.from({ length: rating }).map((_, s) => (
          <svg key={s} width="14" height="14" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>
      <p className={styles.text}>"{text}"</p>
      <div className={styles.author}>
        <div className={styles.avatar}>{initials}</div>
        <div>
          <p className={styles.name}>{name}</p>
          <p className={styles.city}>{city}</p>
        </div>
      </div>
    </div>
  );
}

/* ─── Vertical Marquee column ───────────────────────────── */
function VerticalMarquee({
  items,
  reverse = false,
  pauseOnHover = true,
  isAriaHidden = false,
}: {
  items: (typeof testimonials.pt);
  reverse?: boolean;
  pauseOnHover?: boolean;
  isAriaHidden?: boolean;
}) {
  return (
    <div
      className={`${styles.vMarqueeWrap} ${pauseOnHover ? styles.pauseOnHover : ''}`}
      aria-hidden={isAriaHidden ? 'true' : undefined}
    >
      <div
        className={`${styles.vMarqueeTrack} ${reverse ? styles.vReverse : ''}`}
      >
        {items.map((item, i) => (
          <TestimonialCard key={`orig-${i}`} {...item} />
        ))}
        {/* Visual clone tracks for seamless infinite scroll - hidden from crawlers & screen readers */}
        <div className={styles.cloneGroup} aria-hidden="true">
          {items.map((item, i) => (
            <TestimonialCard key={`clone1-${i}`} {...item} />
          ))}
        </div>
        <div className={styles.cloneGroup} aria-hidden="true">
          {items.map((item, i) => (
            <TestimonialCard key={`clone2-${i}`} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Section ───────────────────────────────────────────── */
export default function TestimonialsSection() {
  const { language } = useLanguage();
  const copy = t[language];
  const items = testimonials[language];

  // Distribute items so visual columns look diverse rather than identical
  const col1 = items;
  const col2 = [...items.slice(2), ...items.slice(0, 2)];
  const col3 = [...items.slice(4), ...items.slice(0, 4)];
  const col4 = [...items.slice(1), ...items.slice(0, 1)];

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Atheros Assessoria Documental',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '2000',
    },
    review: items.map((review) => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: review.name,
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.rating.toString(),
      },
      reviewBody: review.text,
    })),
  };

  return (
    <section className={styles.section}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <div className="container">
        <ScrollReveal variant="fadeUp">
          <div className={styles.header}>
            <span className="section-label">{copy.eyebrow}</span>
            <h2 className={styles.title}>
              {copy.title.split('\n').map((line, i) => (
                <span key={i}>{line}{i === 0 && <br />}</span>
              ))}
            </h2>
            <p className={styles.subtitle}>{copy.subtitle}</p>
          </div>
        </ScrollReveal>
      </div>

      {/* 3-D vertical marquee: primary column is readable, decorative columns are aria-hidden to eliminate HTML duplication */}
      <div className={styles.marquee3dWrapper}>
        <div className={styles.marquee3dInner}>
          <VerticalMarquee items={col1} />
          <VerticalMarquee items={col2} reverse isAriaHidden />
          <VerticalMarquee items={col3} isAriaHidden />
          <VerticalMarquee items={col4} reverse isAriaHidden />

          {/* Fade-out gradients */}
          <div className={`${styles.fadeEdge} ${styles.fadeTop}`} />
          <div className={`${styles.fadeEdge} ${styles.fadeBottom}`} />
          <div className={`${styles.fadeEdge} ${styles.fadeLeft}`} />
          <div className={`${styles.fadeEdge} ${styles.fadeRight}`} />
        </div>
      </div>
    </section>
  );
}
