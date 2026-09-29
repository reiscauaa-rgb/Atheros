'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const currentYear = new Date().getFullYear();

const SOCIAL_LINKS = {
  facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || 'https://www.facebook.com/atherosassessoria',
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://www.instagram.com/atherosassessoria',
};

const t = {
  pt: {
    tagline: 'Assessoria documental para brasileiros nos EUA há mais de 16 anos.',
    services: 'Serviços',
    servicesList: [
      { label: 'Documentação Consular & Passaporte', href: '/servicos/passaporte' },
      { label: 'Vistos & VITEM XI', href: '/servicos/vitem-xi' },
      { label: 'Apostilamento de Haia', href: '/servicos/apostilamento-de-haia' },
      { label: 'Traduções Certificadas & Juramentadas', href: '/servicos/traducoes' },
      { label: 'Procurações Públicas', href: '/servicos/procuracoes' },
      { label: 'e-Notariado', href: '/servicos/enotariado' },
    ],
    links: 'Links Úteis',
    linksList: [
      { label: 'Início', href: '/' },
      { label: 'Sobre Nós', href: '/sobre' },
      { label: 'Blog', href: '/blog' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Contato', href: '/contato' },
    ],
    contact: 'Contato',
    address: '2 Canton St, Unit B 115\nTrack Plaza • Stoughton, MA 02072',
    addressRef: 'Ao lado do rest. Sunshine e da linha do trem',
    phones: [
      { num: '(774) 707-0082', tel: '17747070082', isWhatsApp: false },
      { num: '(774) 801-8903', tel: '17748018903', isWhatsApp: false },
      { num: '(904) 651-5886', tel: '19046515886', isWhatsApp: true },
    ],
    walkinNotice: 'Presencial por ordem de chegada',
    onlineNotice: 'Online: Seg–Dom das 9h às 21h',
    rights: `© ${currentYear} Atheros. Todos os direitos reservados.`,
    privacy: 'Política de Privacidade',
    terms: 'Termos de Uso',
    cta: 'Análise Gratuita',
  },
  en: {
    tagline: 'Document services for Brazilians in the USA for over 16 years.',
    services: 'Services',
    servicesList: [
      { label: 'Consular Documentation & Passports', href: '/servicos/passaporte' },
      { label: 'Visas & VITEM XI', href: '/servicos/vitem-xi' },
      { label: 'Hague Apostille', href: '/servicos/apostilamento-de-haia' },
      { label: 'Certified & Sworn Translations', href: '/servicos/traducoes' },
      { label: 'Public Powers of Attorney', href: '/servicos/procuracoes' },
      { label: 'e-Notariado', href: '/servicos/enotariado' },
    ],
    links: 'Quick Links',
    linksList: [
      { label: 'Home', href: '/' },
      { label: 'About Us', href: '/sobre' },
      { label: 'Blog', href: '/blog' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Contact', href: '/contato' },
    ],
    contact: 'Contact',
    address: '2 Canton St, Unit B 115\nTrack Plaza • Stoughton, MA 02072',
    addressRef: 'Next to Sunshine Brazilian Rest. & Commuter Rail',
    phones: [
      { num: '(774) 707-0082', tel: '17747070082', isWhatsApp: false },
      { num: '(774) 801-8903', tel: '17748018903', isWhatsApp: false },
      { num: '(904) 651-5886', tel: '19046515886', isWhatsApp: true },
    ],
    walkinNotice: 'Walk-ins only (first-come, first-served)',
    onlineNotice: 'Online: Daily 9am – 9pm',
    rights: `© ${currentYear} Atheros. All rights reserved.`,
    privacy: 'Privacy Policy',
    terms: 'Terms of Use',
    cta: 'Free Consultation',
  },
};

export default function Footer() {
  const { language } = useLanguage();
  const copy = t[language];

  return (
    <footer className={styles.footer}>
      {/* ── CTA Banner ── */}
      <div className={styles.ctaBanner}>
        <div className={`container ${styles.ctaInner}`}>
          <div className={styles.ctaText}>
            <h2 className={styles.ctaTitle}>
              {language === 'pt'
                ? 'Pronto para resolver sua documentação?'
                : 'Ready to handle your documents?'}
            </h2>
            <p className={styles.ctaSub}>
              {language === 'pt'
                ? 'Entre em contato agora e receba uma análise gratuita do seu caso.'
                : 'Contact us now and get a free consultation.'}
            </p>
          </div>
          <a
            href={`https://api.whatsapp.com/send/?phone=19046515886&text=${encodeURIComponent(
              language === 'pt'
                ? 'Olá! Vim pelo site e gostaria de uma análise gratuita do meu caso.'
                : 'Hello! I came from the website and would like a free consultation.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaBtn}
          >
            {copy.cta}
          </a>
        </div>
      </div>

      {/* ── Main Footer ── */}
      <div className={styles.main}>
        <div className={`container ${styles.grid}`}>
          {/* Brand */}
          <div className={styles.brand}>
            <Link href="/">
              <Image
                src="/images/Logo.png"
                alt="Atheros"
                width={130}
                height={46}
                className={styles.logo}
              />
            </Link>
            <p className={styles.tagline}>{copy.tagline}</p>
            {/* Social */}
            <div className={styles.socials}>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className={styles.socialLink}
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className={styles.socialLink}
              >
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div className={styles.col}>
            <h3 className={styles.colTitle}>{copy.services}</h3>
            <ul className={styles.colList}>
              {copy.servicesList.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={styles.colLink}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div className={styles.col}>
            <h3 className={styles.colTitle}>{copy.links}</h3>
            <ul className={styles.colList}>
              {copy.linksList.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={styles.colLink}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.col}>
            <h3 className={styles.colTitle}>{copy.contact}</h3>
            <address className={styles.address}>
              <p>{copy.address.split('\n').map((line, i) => <span key={i}>{line}<br /></span>)}</p>
              <p className={styles.addressRefNote}>📍 {copy.addressRef}</p>
            </address>
            <div className={styles.phones}>
              {copy.phones.map((p, idx) => (
                <a
                  key={idx}
                  href={
                    p.isWhatsApp
                      ? 'https://api.whatsapp.com/send/?phone=19046515886'
                      : `tel:${p.tel}`
                  }
                  target={p.isWhatsApp ? '_blank' : undefined}
                  rel={p.isWhatsApp ? 'noopener noreferrer' : undefined}
                  className={styles.phone}
                >
                  {p.num}
                  {p.isWhatsApp && <span className={styles.waBadge}>WhatsApp</span>}
                </a>
              ))}
            </div>
            <div className={styles.footerHoursNote}>
              <p>⚡ {copy.walkinNotice}</p>
              <p>🌐 {copy.onlineNotice}</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className={styles.bottom}>
        <div className={`container ${styles.bottomInner}`}>
          <p className={styles.rights}>{copy.rights}</p>
          <div className={styles.legalLinks}>
            <Link href="/privacidade" className={styles.legalLink}>{copy.privacy}</Link>
            <span>·</span>
            <Link href="/termos" className={styles.legalLink}>{copy.terms}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
