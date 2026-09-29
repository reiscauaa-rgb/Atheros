'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { servicesData, ServiceDetail } from '@/lib/servicesData';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';
import CTASection from '@/components/home/CTASection/CTASection';
import styles from './serviceDetail.module.css';

interface ServiceDetailClientProps {
  slug: string;
}

export default function ServiceDetailClient({ slug }: ServiceDetailClientProps) {
  const { language } = useLanguage();
  const service: ServiceDetail | undefined = servicesData[language][slug] || servicesData.pt[slug];

  if (!service) {
    return (
      <main className="container" style={{ padding: '8rem 1rem', textAlign: 'center' }}>
        <h1>Serviço não encontrado</h1>
        <p>O serviço solicitado não está disponível ou foi movido.</p>
        <Link href="/servicos" className={styles.btnPrimary} style={{ marginTop: '1.5rem' }}>
          Voltar para Serviços
        </Link>
      </main>
    );
  }

  const allServices = Object.values(servicesData[language]);
  const otherServices = allServices.filter((s) => s.slug !== slug);

  const phone = '19046515886';
  const whatsappUrl = `https://api.whatsapp.com/send/?phone=${phone}&text=${encodeURIComponent(
    service.whatsappMessage
  )}`;

  // JSON-LD Structured Data
  const schemaBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: language === 'pt' ? 'Início' : 'Home',
        item: 'https://atherosdigital.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: language === 'pt' ? 'Serviços' : 'Services',
        item: 'https://atherosdigital.com/servicos',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: service.title,
        item: `https://atherosdigital.com/servicos/${service.slug}`,
      },
    ],
  };

  const schemaService = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.metaDescription,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Atheros Assessoria Documental',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '2 Canton St, Unit B 115, Track Plaza',
        addressLocality: 'Stoughton',
        addressRegion: 'MA',
        postalCode: '02072',
        addressCountry: 'US',
      },
      telephone: '+1-904-651-5886',
    },
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
  };

  const schemaFAQ = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <main className={styles.page}>
      {/* Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }}
      />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden />
        <div className="container">
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            <Link href="/" className={styles.breadcrumbLink}>
              {language === 'pt' ? 'Início' : 'Home'}
            </Link>
            <span className={styles.breadcrumbSep}>/</span>
            <Link href="/servicos" className={styles.breadcrumbLink}>
              {language === 'pt' ? 'Serviços' : 'Services'}
            </Link>
            <span className={styles.breadcrumbSep}>/</span>
            <span className={styles.breadcrumbCurrent}>{service.title}</span>
          </nav>

          <div className={styles.heroHeader}>
            <div className={styles.badgeWrap}>
              <span>{service.icon}</span>
              <span>{service.badge}</span>
            </div>
            <h1 className={styles.heroTitle}>{service.title}</h1>
            <p className={styles.heroSubtitle}>{service.subtitle}</p>

            <div className={styles.heroCtas}>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnPrimary}
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                {language === 'pt' ? 'Solicitar Análise Gratuita' : 'Request Free Consultation'}
              </a>
              <Link href="/contato" className={styles.btnSecondary}>
                {language === 'pt' ? 'Falar com um Assessor' : 'Speak to an Advisor'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className={styles.contentSection}>
        <div className="container">
          <div className={styles.gridContainer}>
            {/* Main Column */}
            <div className={styles.mainColumn}>
              {/* Introduction Card */}
              <ScrollReveal variant="fadeUp">
                <div className={styles.introCard}>
                  <p>{service.intro}</p>
                </div>
              </ScrollReveal>

              {/* Why Needed */}
              <ScrollReveal variant="fadeUp">
                <div>
                  <h2 className={styles.sectionTitle}>{service.whyNeeded.title}</h2>
                  <p className={styles.sectionLead}>{service.whyNeeded.description}</p>
                  <ul className={styles.pointsList}>
                    {service.whyNeeded.points.map((pt, i) => (
                      <li key={i} className={styles.pointItem}>
                        <svg className={styles.pointIcon} width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              {/* Use Cases */}
              <ScrollReveal variant="fadeUp">
                <div>
                  <h2 className={styles.sectionTitle}>{service.useCases.title}</h2>
                  <ul className={styles.casesGrid}>
                    {service.useCases.items.map((item, i) => (
                      <li key={i} className={styles.caseCard}>
                        <svg className={styles.checkIcon} width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              {/* Required Documents */}
              <ScrollReveal variant="fadeUp">
                <div>
                  <h2 className={styles.sectionTitle}>{service.requiredDocs.title}</h2>
                  <ul className={styles.pointsList}>
                    {service.requiredDocs.items.map((doc, i) => (
                      <li key={i} className={styles.pointItem}>
                        <svg className={styles.pointIcon} width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                          <polyline points="14 2 14 8 20 8" />
                          <line x1="16" y1="13" x2="8" y2="13" />
                          <line x1="16" y1="17" x2="8" y2="17" />
                          <polyline points="10 9 9 9 8 9" />
                        </svg>
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              {/* Step by Step */}
              <ScrollReveal variant="fadeUp">
                <div>
                  <h2 className={styles.sectionTitle}>
                    {language === 'pt' ? 'Como funciona com a Atheros' : 'How it works with Atheros'}
                  </h2>
                  <p className={styles.sectionLead}>
                    {language === 'pt'
                      ? 'Processo simplificado, 100% acompanhado por especialistas para evitar retrabalho e recusa consular.'
                      : 'Streamlined process, 100% guided by specialists to prevent delays and consular rejections.'}
                  </p>
                  <div className={styles.stepsContainer}>
                    {service.steps.map((st) => (
                      <div key={st.number} className={styles.stepRow}>
                        <div className={styles.stepBadge}>{st.number}</div>
                        <div className={styles.stepContent}>
                          <h3 className={styles.stepHeading}>{st.title}</h3>
                          <p className={styles.stepDesc}>{st.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Warning box if available */}
              {service.warning && (
                <ScrollReveal variant="fadeUp">
                  <div className={styles.warningBox}>
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <div>
                      <strong>{language === 'pt' ? 'Atenção aos Requisitos:' : 'Important Requirement:'}</strong>
                      <p style={{ marginTop: '0.25rem' }}>{service.warning}</p>
                    </div>
                  </div>
                </ScrollReveal>
              )}

              {/* FAQs */}
              <ScrollReveal variant="fadeUp">
                <div>
                  <h2 className={styles.sectionTitle}>
                    {language === 'pt' ? 'Dúvidas Frequentes' : 'Frequently Asked Questions'}
                  </h2>
                  <div className={styles.faqContainer}>
                    {service.faqs.map((faq, i) => (
                      <details key={i} className={styles.faqItem}>
                        <summary className={styles.faqSummary}>
                          <span>{faq.question}</span>
                          <svg className={styles.faqArrow} width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </summary>
                        <p className={styles.faqAnswer}>{faq.answer}</p>
                      </details>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Sticky Sidebar */}
            <aside className={styles.sidebar}>
              {/* WhatsApp Card */}
              <div className={styles.sidebarCard}>
                <h3 className={styles.sidebarTitle}>
                  <span>💬</span>
                  <span>{language === 'pt' ? 'Precisa de ajuda?' : 'Need guidance?'}</span>
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '1rem', lineHeight: '1.6' }}>
                  {language === 'pt'
                    ? 'Envie seus documentos para análise preliminar gratuita. Respondemos rapidamente em português.'
                    : 'Send your documents for a free preliminary review. We respond promptly in Portuguese and English.'}
                </p>

                <div className={styles.contactBenefit}>
                  <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <span>{language === 'pt' ? 'Análise sem compromisso' : 'No obligation review'}</span>
                </div>
                <div className={styles.contactBenefit}>
                  <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <span>{language === 'pt' ? 'Atendimento 100% em português' : 'Bilingual Portuguese/English'}</span>
                </div>
                <div className={styles.contactBenefit}>
                  <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <span>{language === 'pt' ? '+16 anos de experiência nos EUA' : '16+ years US experience'}</span>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.sidebarBtn}
                >
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span>{language === 'pt' ? 'Conversar no WhatsApp' : 'Chat on WhatsApp'}</span>
                </a>
              </div>

              {/* Other Services */}
              <div className={styles.sidebarCard}>
                <h3 className={styles.sidebarTitle}>
                  <span>📂</span>
                  <span>{language === 'pt' ? 'Outros Serviços' : 'Other Services'}</span>
                </h3>
                <ul className={styles.relatedList}>
                  {otherServices.map((item) => (
                    <li key={item.slug}>
                      <Link href={`/servicos/${item.slug}`} className={styles.relatedItemLink}>
                        <span>{item.icon} {item.title}</span>
                        <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <polyline points="9 18 15 12 9 6" />
                        </svg>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Conversion Banner */}
      <CTASection />
    </main>
  );
}
