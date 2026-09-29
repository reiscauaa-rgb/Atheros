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
    title: 'Portfólio completo para\nbrasileiros nos EUA',
    subtitle: 'Tudo que você precisa para manter sua documentação brasileira em dia, sem enfrentar filas e sem burocracia.',
    cta: 'Ver todos os serviços',
    learnMore: 'Conhecer serviço',
    services: [
      {
        slug: 'passaporte',
        badge: 'Consular',
        icon: (
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
          </svg>
        ),
        title: 'Documentação Consular & Passaporte',
        desc: 'Passaportes novos e renovação, certidões de nascimento e casamento, CPF, regularização eleitoral e militar junto aos consulados nos EUA.',
        items: ['Passaporte adulto e menor', 'Certidões de nascimento e casamento', 'CPF e quitação eleitoral', 'Alistamento e dispensa militar'],
      },
      {
        slug: 'vitem-xi',
        badge: 'Vistos & Imigração',
        icon: (
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
          </svg>
        ),
        title: 'Vistos & VITEM XI (Reunificação Familiar)',
        desc: 'Assessoria para vistos de entrada no Brasil (e-Visa para americanos e canadenses) e processo de VITEM XI para cônjuges e dependentes no Brasil.',
        items: ['VITEM XI (Reunificação Familiar)', 'e-Visa para cidadãos americanos', 'Vistos de visitante (VIVIS)', 'Assessoria para dupla nacionalidade'],
      },
      {
        slug: 'apostilamento-de-haia',
        badge: 'Validade Internacional',
        icon: (
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
          </svg>
        ),
        title: 'Apostilamento de Haia nos EUA',
        desc: 'Validação oficial de certidões americanas, diplomas, históricos e sentenças para que tenham pleno valor legal em cartórios e órgãos no Brasil.',
        items: ['Certidões civis americanas', 'Diplomas e históricos (transcripts)', 'Sentenças judiciais e divórcios', 'Antecedentes criminais do FBI'],
      },
      {
        slug: 'traducoes',
        badge: 'Traduções Oficiais',
        icon: (
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
          </svg>
        ),
        title: 'Traduções Certificadas & Juramentadas',
        desc: 'Traduções certificadas para USCIS, escolas e tribunais nos EUA, e traduções juramentadas com fé pública para cartórios e processos no Brasil.',
        items: ['Padrão oficial aceito pelo USCIS', 'Tradução juramentada para o Brasil', 'Certidões de nascimento e casamento', 'Diplomas e declarações de renda'],
      },
      {
        slug: 'procuracoes',
        badge: 'Poder Legal a Distância',
        icon: (
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
          </svg>
        ),
        title: 'Procurações Públicas',
        desc: 'Elaboração com redação jurídica exata para venda de imóveis, transações bancárias, representação perante o INSS e inventários.',
        items: ['Venda e compra de imóveis', 'Contas bancárias e operações financeiras', 'Representação perante o INSS', 'Inventários judiciais e extrajudiciais'],
      },
      {
        slug: 'enotariado',
        badge: '100% Digital',
        icon: (
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
          </svg>
        ),
        title: 'e-Notariado no Exterior',
        desc: 'Atos notariais eletrônicos por videoconferência diretamente com cartórios brasileiros, com certificado digital gratuito e sem sair de casa.',
        items: ['Atos notariais por videoconferência', 'Certificado digital gratuito', 'Assinatura remota de procurações', 'Sem comparecer ao consulado'],
      },
    ],
  },
  en: {
    eyebrow: 'What we do',
    title: 'Complete portfolio for\nBrazilians in the USA',
    subtitle: 'Everything you need to keep your Brazilian documentation up to date, without waiting in lines and without bureaucracy.',
    cta: 'See all services',
    learnMore: 'Learn more',
    services: [
      {
        slug: 'passaporte',
        badge: 'Consular',
        icon: (
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
          </svg>
        ),
        title: 'Consular Documentation & Passports',
        desc: 'New passports and renewals, birth and marriage certificates, CPF, voter and military status with Brazilian consulates in the USA.',
        items: ['Adult & minor passports', 'Birth and marriage certificates', 'CPF and voter status updates', 'Military draft & exemption'],
      },
      {
        slug: 'vitem-xi',
        badge: 'Visas & Immigration',
        icon: (
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
          </svg>
        ),
        title: 'Visas & VITEM XI (Family Reunification)',
        desc: 'Assistance for entry visas to Brazil (e-Visa for Americans and Canadians) and full VITEM XI processing for foreign spouses and dependents.',
        items: ['VITEM XI (Family Reunification)', 'e-Visa for US & Canadian citizens', 'Visitor visas (VIVIS)', 'Dual nationality for children'],
      },
      {
        slug: 'apostilamento-de-haia',
        badge: 'International Legalization',
        icon: (
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
          </svg>
        ),
        title: 'Hague Apostille in the USA',
        desc: 'Official validation of US certificates, diplomas, transcripts and court orders for full legal force before Brazilian registries.',
        items: ['US civil certificates', 'Diplomas and school transcripts', 'Divorce decrees and custody orders', 'FBI background check apostilles'],
      },
      {
        slug: 'traducoes',
        badge: 'Official Translations',
        icon: (
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
          </svg>
        ),
        title: 'Certified & Sworn Translations',
        desc: 'Certified translations for USCIS, universities and courts in the USA, and sworn translations for Brazilian registries and public bodies.',
        items: ['Official USCIS compliant format', 'Sworn translations for Brazil', 'Birth and marriage certificates', 'Diplomas and tax returns'],
      },
      {
        slug: 'procuracoes',
        badge: 'Remote Legal Power',
        icon: (
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
          </svg>
        ),
        title: 'Public Powers of Attorney',
        desc: 'Drafted with exact legal clauses for real estate sales, banking transactions, Social Security (INSS) representation and probate.',
        items: ['Real estate purchase and sale', 'Bank accounts and wire transactions', 'Social Security (INSS) representation', 'Probate and inheritance matters'],
      },
      {
        slug: 'enotariado',
        badge: '100% Digital',
        icon: (
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
          </svg>
        ),
        title: 'e-Notariado for Brazilians Abroad',
        desc: 'Execute digital notarial acts via videoconference directly with Brazilian registries, with free digital certificate and zero travel.',
        items: ['Acts via videoconference', 'Free notarized digital certificate', 'Remote signing of powers of attorney', 'No consular visit required'],
      },
    ],
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

        {/* Bento Grid - Full Portfolio of 6 Core Services */}
        <div className={styles.bentoGrid}>
          {copy.services.map((svc, idx) => (
            <ScrollReveal
              key={svc.slug}
              variant="fadeUp"
              delay={idx * 60}
              className={`${styles.bentoCard} ${styles.cardService}`}
            >
              <div className={styles.cardHeader}>
                <div className={styles.cardIconRing}>
                  {svc.icon}
                </div>
                <span className={styles.cardBadge}>{svc.badge}</span>
              </div>

              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{svc.title}</h3>
                <p className={styles.cardDesc}>{svc.desc}</p>

                <ul className={styles.cardList}>
                  {svc.items.map((item) => (
                    <li key={item} className={styles.cardListItem}>
                      <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.cardFooter}>
                <Link href={`/servicos/${svc.slug}`} className={styles.cardLink}>
                  <span>{copy.learnMore}</span>
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal variant="fadeUp" delay={100}>
          <div className={styles.ctaWrap}>
            <Link href="/servicos" className={styles.cta}>
              {copy.cta}
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
