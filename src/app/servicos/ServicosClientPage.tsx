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
      description: 'Auxiliamos na preparação, conferência e orientação da documentação necessária para procedimentos junto aos consulados brasileiros nos Estados Unidos, reduzindo erros, recusas e retrabalho.',
      docsTitle: 'Serviços consulares',
      howTitle: 'Como funciona',
      steps: [
        'Você nos envia seus documentos para análise gratuita',
        'Verificamos tudo de acordo com os requisitos do consulado',
        'Preparamos e orientamos cada etapa do processo',
        'Acompanhamos sua solicitação até a conclusão',
      ],
      docs: [
        'Passaporte / renovação de passaporte',
        'Atestado de residência e de vida',
        'CPF e Título eleitoral',
        'Autorização de viagem para menores',
        'Certidões de nascimento e casamento',
        'Alistamento e dispensa militar',
        'Matrícula consular',
        'Reconhecimento de assinatura e cópias',
        'Escrituras públicas',
        'Declaração',
        'Documentos para traslado de corpo e cinzas',
        '2ª via de certidões consulares e no Brasil',
      ],
      warning: 'O consulado pode recusar documentos por erros mínimos. Nossa análise prévia evita esse problema.',
    },
    {
      id: 'vistos',
      icon: '✈️',
      title: 'Vistos',
      subtitle: 'Autorização de entrada',
      description: 'Assessoria para diferentes modalidades de visto de entrada e permanência no Brasil, de acordo com a nacionalidade e a situação de cada solicitante. O VITEM XI é destinado aos casos de estrangeiros que precisam realizar processo de reunificação familiar no Brasil.',
      docsTitle: 'Principais vistos',
      howTitle: 'Como funciona',
      steps: [
        'Analisamos sua nacionalidade e finalidade da viagem',
        'Orientamos a organização da documentação necessária',
        'Realizamos o preenchimento dos formulários exigidos',
        'Acompanhamos o processo até a emissão do visto',
      ],
      docs: ['e-Visa para cidadãos americanos', 'e-Visa para cidadãos canadenses', 'VIVIS / visto de visitante', 'Assessoria para dupla nacionalidade', 'VITEM XI (reunificação familiar)'],
      warning: null,
    },
    {
      id: 'legalizacao',
      icon: '⚖️',
      title: 'Legalização e Traduções',
      subtitle: 'Validade de Documentos',
      description: 'Auxiliamos na preparação de documentos emitidos nos Estados Unidos para que possam ser utilizados no Brasil, além de serviços de tradução conforme a necessidade de cada processo.',
      docsTitle: 'Serviços de legalização',
      howTitle: 'Como funciona',
      steps: [
        'Avaliamos os documentos emitidos nos EUA',
        'Orientamos sobre a necessidade de apostilamento',
        'Auxiliamos no processo de tradução se necessário',
        'Preparamos os documentos para envio ao Brasil',
      ],
      docs: ['Legalização de documentos americanos para uso no Brasil', 'Apostilamento de Haia', 'Traduções certificadas nos EUA', 'Traduções juramentadas no Brasil'],
      warning: null,
    },
    {
      id: 'procuracoes',
      icon: '📋',
      title: 'Procurações Públicas',
      subtitle: 'Poder Legal a Distância',
      description: 'Fazemos procurações públicas para diferentes finalidades, com elaboração e orientação de todo o processo. O procedimento pode ser realizado via Consulado Brasileiro ou via cartório no Brasil, conforme a necessidade de cada caso.',
      docsTitle: 'Tipos de procurações',
      howTitle: 'Como funciona',
      steps: [
        'Você nos informa a finalidade da procuração',
        'Elaboramos a procuração pública de acordo com a necessidade do processo',
        'Orientamos o procedimento de reconhecimento de assinatura via Consulado ou Notário Público, conforme o caso',
      ],
      docs: ['Venda de imóvel', 'Transações bancárias', 'Representação perante o INSS', 'Inventário', 'Matrícula escolar', 'Procurações para outras finalidades'],
      warning: 'Procurações mal redigidas podem ser recusadas no cartório brasileiro. Garantimos a redação correta.',
    },
    {
      id: 'enotariado',
      icon: '🔐',
      title: 'e-Notariado',
      subtitle: 'Atos Notariais Eletrônicos',
      description: 'O e-Notariado é a plataforma utilizada pelos cartórios de notas brasileiros para a realização de atos notariais eletrônicos. Ela permite que determinados procedimentos sejam realizados digitalmente e à distância, facilitando o acesso a serviços cartorários para brasileiros que vivem no exterior. A Atheros auxilia e orienta o cliente durante o processo de utilização do e-Notariado, de acordo com o ato notarial necessário.',
      docsTitle: 'Para que serve?',
      howTitle: 'Passo a passo',
      steps: [
        'Avaliamos a sua necessidade para serviços notariais',
        'Orientamos como acessar e utilizar o e-Notariado',
        'Acompanhamos a realização do procedimento à distância',
      ],
      docs: ['Realização de atos notariais eletrônicos', 'Assinaturas relacionadas a atos notariais', 'Procedimentos digitais com cartórios brasileiros', 'Atendimento remoto em procedimentos compatíveis com a plataforma'],
      warning: null,
    },
  ],
  en: [
    {
      id: 'consular',
      icon: '🛂',
      title: 'Consular Documentation',
      subtitle: 'Passports, Certificates and Registrations',
      description: 'We assist in the preparation, conference and guidance of the documentation required for procedures with Brazilian consulates in the United States, reducing errors, rejections and rework.',
      docsTitle: 'Consular services',
      howTitle: 'How it works',
      steps: [
        'You send us your documents for free analysis',
        'We verify everything according to consulate requirements',
        'We prepare and guide each step of the process',
        'We monitor your request until completion',
      ],
      docs: [
        'Passport / passport renewal',
        'Residence and life certificate',
        'CPF and Voter registration',
        'Travel authorization for minors',
        'Birth and marriage certificates',
        'Military enlistment and dismissal',
        'Consular registration',
        'Signature recognition and copies',
        'Public deeds',
        'Declarations',
        'Documents for transportation of body and ashes',
        '2nd copy of consular and Brazilian certificates',
      ],
      warning: 'The consulate can reject documents for minor errors. Our prior analysis prevents this problem.',
    },
    {
      id: 'vistos',
      icon: '✈️',
      title: 'Visas',
      subtitle: 'Entry Authorization',
      description: 'Advisory for different types of entry and stay visas in Brazil, according to the nationality and situation of each applicant. VITEM XI is intended for cases of foreigners who need to carry out family reunification procedures in Brazil.',
      docsTitle: 'Main visas',
      howTitle: 'How it works',
      steps: [
        'We analyze your nationality and purpose of travel',
        'We guide the organization of the necessary documentation',
        'We complete the required forms',
        'We monitor the process until the visa is issued',
      ],
      docs: ['e-Visa for American citizens', 'e-Visa for Canadian citizens', 'VIVIS / visitor visa', 'Visa assistance for dual nationality', 'VITEM XI (family reunification)'],
      warning: null,
    },
    {
      id: 'legalizacao',
      icon: '⚖️',
      title: 'Legalization and Translations',
      subtitle: 'Document Validity',
      description: 'We assist in preparing documents issued in the United States so they can be used in Brazil, in addition to translation services according to the needs of each process.',
      docsTitle: 'Legalization services',
      howTitle: 'How it works',
      steps: [
        'We evaluate documents issued in the USA',
        'We provide guidance on the need for apostilles',
        'We assist with the translation process if necessary',
        'We prepare documents to be sent to Brazil',
      ],
      docs: ['Legalization of American documents for use in Brazil', 'Hague Apostille', 'Certified translations in the USA', 'Sworn translations in Brazil'],
      warning: null,
    },
    {
      id: 'procuracoes',
      icon: '📋',
      title: 'Public Powers of Attorney',
      subtitle: 'Legal Power at a Distance',
      description: 'We prepare public powers of attorney for different purposes, with elaboration and guidance throughout the process. The procedure can be carried out via the Brazilian Consulate or via a registry office in Brazil, according to the needs of each case.',
      docsTitle: 'Types of POAs',
      howTitle: 'How it works',
      steps: [
        'You tell us the purpose of the power of attorney.',
        'We draft the public power of attorney according to your needs.',
        'We guide the signature recognition procedure via Consulate or Notary Public, as appropriate.',
      ],
      docs: ['Real estate sale', 'Banking transactions', 'Social Security representation', 'Estate proceedings', 'School enrollment', 'POAs for other purposes'],
      warning: 'Poorly drafted powers of attorney may be rejected at Brazilian notary offices. We guarantee correct drafting.',
    },
    {
      id: 'enotariado',
      icon: '🔐',
      title: 'e-Notariado',
      subtitle: 'Electronic Notarial Acts',
      description: 'e-Notariado is the platform used by Brazilian notary offices to perform electronic notarial acts. It allows certain procedures to be carried out digitally and remotely, facilitating access to notary services for Brazilians living abroad. Atheros guides and assists clients during the process of using e-Notariado, according to the required notarial act.',
      docsTitle: 'What is it for?',
      howTitle: 'Step by step',
      steps: [
        'We assess your need for notarial services',
        'We guide you on how to access and use e-Notariado',
        'We assist with the remote execution of the procedure',
      ],
      docs: ['Performance of electronic notarial acts', 'Signatures related to notarial acts', 'Digital procedures with Brazilian registries', 'Remote service in compatible procedures'],
      warning: null,
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
                    <h4 className={styles.serviceDocsTitle}>{service.docsTitle || copy.docsTitle}</h4>
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

                  <h3 className={styles.stepsTitle}>{service.howTitle || copy.stepsTitle}</h3>
                  <ol className={styles.stepsList}>
                    {service.steps.map((step, i) => (
                      <li key={i} className={styles.stepItem}>
                        <span className={styles.stepNum}>{i + 1}</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>

                  {service.warning && (
                    <div className={styles.warningBox}>
                      <strong>{copy.warningLabel}</strong>
                      <p>{service.warning}</p>
                    </div>
                  )}

                  {/* Dedicated subpage links for high-search topics */}
                  <div className={styles.dedicatedLinks}>
                    {service.id === 'consular' && (
                      <Link href="/servicos/passaporte" className={styles.dedicatedLink}>
                        <span>{language === 'pt' ? '📄 Guia Completo: Passaportes & Documentação Consular' : '📄 Full Guide: Passports & Consular Services'}</span>
                        <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6" /></svg>
                      </Link>
                    )}
                    {service.id === 'vistos' && (
                      <>
                        <Link href="/servicos/vitem-xi" className={styles.dedicatedLink}>
                          <span>{language === 'pt' ? '👨‍👩‍👧‍👦 Guia Completo: Visto VITEM XI (Reunificação Familiar)' : '👨‍👩‍👧‍👦 Full Guide: VITEM XI Visa (Family Reunification)'}</span>
                          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6" /></svg>
                        </Link>
                        <Link href="/servicos/vistos" className={styles.dedicatedLink}>
                          <span>{language === 'pt' ? '✈️ Guia Completo: e-Visa e Vistos para o Brasil' : '✈️ Full Guide: Brazil e-Visa & Visitor Visas'}</span>
                          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6" /></svg>
                        </Link>
                      </>
                    )}
                    {service.id === 'legalizacao' && (
                      <>
                        <Link href="/servicos/apostilamento-de-haia" className={styles.dedicatedLink}>
                          <span>{language === 'pt' ? '📜 Guia Completo: Apostilamento de Haia nos EUA' : '📜 Full Guide: Hague Apostille in the USA'}</span>
                          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6" /></svg>
                        </Link>
                        <Link href="/servicos/traducoes" className={styles.dedicatedLink}>
                          <span>{language === 'pt' ? '🌐 Guia Completo: Traduções Certificadas & Juramentadas' : '🌐 Full Guide: Certified & Sworn Translations'}</span>
                          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6" /></svg>
                        </Link>
                      </>
                    )}
                    {service.id === 'procuracoes' && (
                      <Link href="/servicos/procuracoes" className={styles.dedicatedLink}>
                        <span>{language === 'pt' ? '📋 Guia Completo: Procurações Públicas para o Brasil' : '📋 Full Guide: Public Powers of Attorney for Brazil'}</span>
                        <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6" /></svg>
                      </Link>
                    )}
                    {service.id === 'enotariado' && (
                      <Link href="/servicos/enotariado" className={styles.dedicatedLink}>
                        <span>{language === 'pt' ? '🔐 Guia Completo: e-Notariado para Brasileiros nos EUA' : '🔐 Full Guide: e-Notariado for Brazilians Abroad'}</span>
                        <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6" /></svg>
                      </Link>
                    )}
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
