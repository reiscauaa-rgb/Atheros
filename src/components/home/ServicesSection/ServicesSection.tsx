'use client';

import { useRef } from 'react';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';
import styles from './ServicesSection.module.css';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const services = {
  pt: [
    {
      id: 'consular',
      icon: '🛂',
      title: 'Documentação Consular',
      description:
        'Renovação de passaporte, registro de nascimento, casamento e outros documentos junto aos consulados brasileiros nos EUA. Análise prévia e envio correto na primeira tentativa.',
      items: ['Passaporte', 'Registro de nascimento', 'Registro de casamento', 'Certidão de óbito'],
    },
    {
      id: 'procuracoes',
      icon: '📋',
      title: 'Procurações',
      description:
        'Elaboração e reconhecimento de procurações para uso no Brasil. Cuide dos seus negócios e propriedades no Brasil sem precisar viajar.',
      items: ['Procuração pública', 'Procuração para imóvel', 'Procuração bancária', 'Procuração para INSS'],
    },
    {
      id: 'certificado',
      icon: '🔐',
      title: 'Certificação Digital',
      description:
        'Emissão do certificado digital e-CPF e e-CNPJ para brasileiros residentes nos EUA. Acesse sistemas governamentais brasileiros com segurança.',
      items: ['e-CPF (A1 e A3)', 'e-CNPJ', 'Renovação de certificado', 'Suporte no uso'],
    },
  ],
  en: [
    {
      id: 'consular',
      icon: '🛂',
      title: 'Consular Documentation',
      description:
        'Passport renewal, birth registration, marriage and other documents with Brazilian consulates in the USA. Prior analysis and correct submission on the first try.',
      items: ['Passport', 'Birth certificate', 'Marriage certificate', 'Death certificate'],
    },
    {
      id: 'procuracoes',
      icon: '📋',
      title: 'Powers of Attorney',
      description:
        'Drafting and notarization of powers of attorney for use in Brazil. Manage your business and properties in Brazil without traveling.',
      items: ['Public POA', 'Real estate POA', 'Banking POA', 'Social Security POA'],
    },
    {
      id: 'certificado',
      icon: '🔐',
      title: 'Digital Certificate',
      description:
        'Issuance of e-CPF and e-CNPJ digital certificates for Brazilians living in the USA. Access Brazilian government systems securely.',
      items: ['e-CPF (A1 and A3)', 'e-CNPJ', 'Certificate renewal', 'Usage support'],
    },
  ],
};

const t = {
  pt: {
    eyebrow: 'O que fazemos',
    title: 'Serviços completos para\nbrasileiros nos EUA',
    subtitle:
      'Tudo que você precisa para manter sua documentação brasileira em dia, sem precisar se preocupar com a burocracia.',
    cta: 'Ver todos os serviços',
    learnMore: 'Saiba mais',
  },
  en: {
    eyebrow: 'What we do',
    title: 'Complete services for\nBrazilians in the USA',
    subtitle:
      'Everything you need to keep your Brazilian documentation up to date, without worrying about bureaucracy.',
    cta: 'See all services',
    learnMore: 'Learn more',
  },
};

export default function ServicesSection() {
  const { language } = useLanguage();
  const copy = t[language];
  const items = services[language];
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    gsap.from('.anim-line', {
      scrollTrigger: {
        trigger: titleRef.current,
        start: 'top 85%',
        toggleActions: 'restart none none reset',
      },
      rotationX: -100,
      transformOrigin: '50% 50% -160px',
      opacity: 0,
      duration: 0.8,
      ease: 'power3',
      stagger: 0.25,
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className={styles.section} id="servicos">
      <div className="container">
        {/* Header */}
        <ScrollReveal variant="fadeUp">
          <div className={styles.header}>
            <span className="section-label">{copy.eyebrow}</span>
            <h2 ref={titleRef} className={styles.title}>
              {copy.title.split('\n').map((line, i) => (
                <div key={i} className="anim-line" style={{ display: 'inline-block', width: '100%' }}>
                  {i === 1 ? <em className={styles.titleAccent}>{line}</em> : line}
                </div>
              ))}
            </h2>
            <p className={styles.subtitle}>{copy.subtitle}</p>
          </div>
        </ScrollReveal>

        {/* Cards grid */}
        <div className={styles.grid}>
          {items.map((service, i) => (
            <ScrollReveal key={service.id} variant="fadeUp" delay={i * 120} className={styles.cardWrapper}>
              <div className={styles.card} style={{ animationDelay: `${i * 0.2}s` }}>
                <div className={styles.cardIcon}>{service.icon}</div>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDesc}>{service.description}</p>
                <ul className={styles.cardList}>
                  {service.items.map((item) => (
                    <li key={item} className={styles.cardItem}>
                      <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden>
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/servicos#${service.id}`}
                  className={styles.cardLink}
                >
                  {copy.learnMore}
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden>
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal variant="fadeUp" delay={300}>
          <div className={styles.ctaWrap}>
            <Link href="/servicos" className={styles.cta}>
              {copy.cta}
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
