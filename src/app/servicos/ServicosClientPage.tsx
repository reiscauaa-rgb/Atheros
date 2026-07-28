'use client';

import styles from './servicos.module.css';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';
import CTASection from '@/components/home/CTASection/CTASection';
import Link from 'next/link';

const services = {
  pt: [
    {
      id: 'consular',
      icon: '🛂',
      title: 'Documentação Consular',
      subtitle: 'Passaportes, Certidões e Registros',
      description: 'Auxiliamos na organização e envio de toda a documentação necessária para os consulados brasileiros nos EUA, garantindo que seus documentos estejam corretos na primeira solicitação — evitando recusas e desperdício de taxas.',
      howTitle: 'Como funciona',
      steps: [
        'Você nos envia seus documentos para análise gratuita',
        'Verificamos tudo de acordo com os requisitos do consulado',
        'Preparamos e orientamos cada etapa do processo',
        'Acompanhamos sua solicitação até a conclusão',
      ],
      docs: ['Renovação de passaporte', 'Passaporte de emergência', 'Registro de nascimento no exterior', 'Registro de casamento', 'Certidão de óbito', 'Autorização de viagem para menores'],
      warning: 'O consulado pode recusar documentos por erros mínimos. Nossa análise prévia evita esse problema.',
    },
    {
      id: 'procuracoes',
      icon: '📋',
      title: 'Procurações',
      subtitle: 'Poder Legal a Distância',
      description: 'Você não precisa ir ao Brasil para resolver seus assuntos legais. Elaboramos procurações reconhecidas consularmente, com validade jurídica plena no Brasil, para os mais diversos fins.',
      howTitle: 'Como funciona',
      steps: [
        'Você nos informa o tipo e finalidade da procuração',
        'Elaboramos o documento com todos os termos necessários',
        'Agendamos o reconhecimento consular',
        'Enviamos o documento original para o Brasil',
      ],
      docs: ['Procuração para venda de imóvel', 'Procuração para transações bancárias', 'Procuração para representação no INSS', 'Procuração para inventário', 'Procuração para matrícula escolar', 'Procuração geral'],
      warning: 'Procurações mal redigidas podem ser recusadas no cartório brasileiro. Garantimos a redação correta.',
    },
    {
      id: 'certificado',
      icon: '🔐',
      title: 'Certificação Digital',
      subtitle: 'e-CPF e e-CNPJ',
      description: 'O certificado digital é sua identidade eletrônica no Brasil. Com ele você acessa portais governamentais, assina documentos digitalmente e declara imposto de renda — tudo sem precisar viajar.',
      howTitle: 'Como funciona',
      steps: [
        'Realizamos a validação da sua identidade de forma remota',
        'Emitimos seu certificado e-CPF ou e-CNPJ',
        'Instalamos e configuramos no seu computador',
        'Damos suporte no primeiro uso',
      ],
      docs: ['e-CPF A1 (armazenado em nuvem)', 'e-CPF A3 (token físico)', 'e-CNPJ para empresas', 'Renovação de certificado vencido'],
      warning: 'O e-CPF tem prazo de validade. Cuide da renovação antes do vencimento para não perder acesso.',
    },
  ],
  en: [
    {
      id: 'consular',
      icon: '🛂',
      title: 'Consular Documentation',
      subtitle: 'Passports, Certificates and Registrations',
      description: 'We assist in organizing and submitting all documentation required by Brazilian consulates in the USA, ensuring your documents are correct on the first request — avoiding rejections and wasted fees.',
      howTitle: 'How it works',
      steps: [
        'You send us your documents for free analysis',
        'We verify everything according to consulate requirements',
        'We prepare and guide each step of the process',
        'We monitor your request until completion',
      ],
      docs: ['Passport renewal', 'Emergency passport', 'Birth registration abroad', 'Marriage registration', 'Death certificate', 'Minor travel authorization'],
      warning: 'The consulate can reject documents for minor errors. Our prior analysis prevents this problem.',
    },
    {
      id: 'procuracoes',
      icon: '📋',
      title: 'Powers of Attorney',
      subtitle: 'Legal Power at a Distance',
      description: 'You don\'t need to go to Brazil to handle your legal matters. We draft consularly recognized powers of attorney, with full legal validity in Brazil, for various purposes.',
      howTitle: 'How it works',
      steps: [
        'You tell us the type and purpose of the power of attorney',
        'We draft the document with all necessary terms',
        'We schedule consular recognition',
        'We send the original document to Brazil',
      ],
      docs: ['POA for real estate sale', 'POA for banking transactions', 'POA for Social Security representation', 'POA for estate proceedings', 'POA for school enrollment', 'General POA'],
      warning: 'Poorly drafted powers of attorney may be rejected at Brazilian notary offices. We guarantee correct drafting.',
    },
    {
      id: 'certificado',
      icon: '🔐',
      title: 'Digital Certificate',
      subtitle: 'e-CPF and e-CNPJ',
      description: 'The digital certificate is your electronic identity in Brazil. With it you access government portals, sign documents digitally and file taxes — all without traveling.',
      howTitle: 'How it works',
      steps: [
        'We perform remote identity validation',
        'We issue your e-CPF or e-CNPJ certificate',
        'We install and configure it on your computer',
        'We provide first-use support',
      ],
      docs: ['e-CPF A1 (cloud-stored)', 'e-CPF A3 (physical token)', 'e-CNPJ for companies', 'Expired certificate renewal'],
      warning: 'The e-CPF has an expiry date. Take care of renewal before it expires to avoid losing access.',
    },
  ],
};

const t = {
  pt: { eyebrow: 'O que fazemos', heroTitle: 'Nossos\nserviços', heroSub: 'Tudo que você precisa para manter sua documentação brasileira em dia nos EUA.', docsTitle: 'Documentos que atendemos', stepsTitle: 'Passo a passo', warningLabel: '⚠️ Atenção', ctaLabel: 'Solicitar agora' },
  en: { eyebrow: 'What we do', heroTitle: 'Our\nservices', heroSub: 'Everything you need to keep your Brazilian documentation up to date in the USA.', docsTitle: 'Documents we handle', stepsTitle: 'Step by step', warningLabel: '⚠️ Important', ctaLabel: 'Request now' },
};

export default function ServicosClientPage() {
  const { language } = useLanguage();
  const copy = t[language];
  const items = services[language];

  return (
    <main>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden />
        <div className="container">
          <div className={styles.heroContent}>
            <span className={styles.heroEyebrow}>{copy.eyebrow}</span>
            <h1 className={styles.heroTitle}>
              {copy.heroTitle.split('\n').map((l, i) => <span key={i}>{l}{i === 0 && <br />}</span>)}
            </h1>
            <p className={styles.heroSub}>{copy.heroSub}</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className={styles.servicesSection}>
        <div className="container">
          {items.map((service, idx) => (
            <ScrollReveal key={service.id} variant="fadeUp">
              <div id={service.id} className={`${styles.serviceBlock} ${idx % 2 === 1 ? styles.serviceBlockReverse : ''}`}>
                {/* Visual side */}
                <div className={styles.serviceVisual}>
                  <div className={styles.serviceIconWrap}>
                    <span className={styles.serviceIcon}>{service.icon}</span>
                  </div>
                  <div className={styles.serviceQuickDocs}>
                    <h4 className={styles.serviceDocsTitle}>{copy.docsTitle}</h4>
                    <ul className={styles.serviceDocsList}>
                      {service.docs.map((doc) => (
                        <li key={doc} className={styles.serviceDocItem}>
                          <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden>
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          {doc}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={`https://api.whatsapp.com/send/?phone=19046515886&text=${encodeURIComponent(language === 'pt' ? `Olá! Gostaria de saber mais sobre ${service.title}.` : `Hello! I'd like to know more about ${service.title}.`)}`}
                      target="_blank" rel="noopener noreferrer"
                      className={styles.serviceCtaBtn}
                    >
                      {copy.ctaLabel}
                    </a>
                  </div>
                </div>

                {/* Content side */}
                <div className={styles.serviceContent}>
                  <span className={styles.serviceNum}>0{idx + 1}</span>
                  <h2 className={styles.serviceTitle}>{service.title}</h2>
                  <p className={styles.serviceSubtitle}>{service.subtitle}</p>
                  <p className={styles.serviceDesc}>{service.description}</p>

                  <h3 className={styles.stepsTitle}>{copy.stepsTitle}</h3>
                  <ol className={styles.stepsList}>
                    {service.steps.map((step, i) => (
                      <li key={i} className={styles.stepItem}>
                        <span className={styles.stepNum}>{i + 1}</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>

                  <div className={styles.warningBox}>
                    <strong>{copy.warningLabel}</strong>
                    <p>{service.warning}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <CTASection />
    </main>
  );
}
