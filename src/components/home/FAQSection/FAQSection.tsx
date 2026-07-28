'use client';

import { useState } from 'react';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';
import styles from './FAQSection.module.css';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import Link from 'next/link';

const faqs = {
  pt: [
    {
      q: 'O despachante pode renovar meu passaporte pelo consulado?',
      a: 'O despachante não emite passaportes — isso é exclusividade do governo brasileiro. O que fazemos é toda a preparação: revisamos seus documentos, preenchemos formulários, verificamos se as fotos estão dentro do padrão consular e orientamos cada etapa, garantindo que sua solicitação seja aceita de primeira.',
    },
    {
      q: 'Qual a vantagem de contratar a Atheros em vez de fazer sozinho?',
      a: 'O sistema e-consular tem requisitos técnicos rígidos (fotos, documentos, prazos) e qualquer erro pode causar a recusa do processo, gerando a perda das taxas pagas. Nossa equipe conhece cada detalhe e garante que tudo esteja correto antes do envio, economizando seu tempo e dinheiro.',
    },
    {
      q: 'Quanto tempo leva o processo de renovação de passaporte?',
      a: 'O prazo depende do consulado responsável pela sua área de residência. Em média, após o envio correto dos documentos, o processo leva entre 6 e 12 semanas. Com nossa assessoria, garantimos que o processo não seja atrasado por erros documentais.',
    },
    {
      q: 'Posso fazer uma procuração nos EUA para uso no Brasil?',
      a: 'Sim! Elaboramos procurações aqui nos EUA com reconhecimento consular, válidas para uso no Brasil. Você pode dar poderes para vender um imóvel, fazer transações bancárias, representação no INSS e muito mais, sem precisar viajar ao Brasil.',
    },
    {
      q: 'O certificado digital e-CPF serve para o quê?',
      a: 'O e-CPF (certificado digital de pessoa física) permite que você acesse o portal do gov.br, assine documentos digitalmente, emita declarações de imposto de renda, acesse o FGTS e outros serviços governamentais brasileiros com a mesma validade legal de uma assinatura física.',
    },
    {
      q: 'Vocês atendem em quais estados dos EUA?',
      a: 'Nosso atendimento é 100% online, por isso atendemos brasileiros em todos os estados dos EUA. Estamos sediados em Stoughton, MA, mas nossos clientes estão espalhados por todo o país.',
    },
  ],
  en: [
    {
      q: 'Can an agent renew my passport through the consulate?',
      a: 'An agent cannot issue passports — that is exclusively the Brazilian government\'s role. What we do is all the preparation: we review your documents, fill out forms, verify that photos meet consular standards and guide you through each step, ensuring your request is accepted on the first try.',
    },
    {
      q: 'What is the advantage of hiring Atheros instead of doing it myself?',
      a: 'The e-consular system has strict technical requirements (photos, documents, deadlines) and any error can cause the process to be rejected, resulting in the loss of fees paid. Our team knows every detail and ensures everything is correct before submission, saving you time and money.',
    },
    {
      q: 'How long does the passport renewal process take?',
      a: 'The timeline depends on the consulate responsible for your area of residence. On average, after correct document submission, the process takes between 6 and 12 weeks. With our assistance, we ensure the process is not delayed by document errors.',
    },
    {
      q: 'Can I make a power of attorney in the USA for use in Brazil?',
      a: 'Yes! We draft powers of attorney here in the USA with consular recognition, valid for use in Brazil. You can grant powers to sell real estate, conduct banking transactions, Social Security representation and much more, without needing to travel to Brazil.',
    },
    {
      q: 'What is the e-CPF digital certificate used for?',
      a: 'The e-CPF (individual digital certificate) allows you to access the gov.br portal, sign documents digitally, file income tax returns, access FGTS and other Brazilian government services with the same legal validity as a physical signature.',
    },
    {
      q: 'Which US states do you serve?',
      a: 'Our service is 100% online, so we serve Brazilians in all US states. We are headquartered in Stoughton, MA, but our clients are spread throughout the country.',
    },
  ],
};

const t = {
  pt: {
    eyebrow: 'Dúvidas frequentes',
    title: 'Perguntas que recebemos\ntodo dia',
    subtitle: 'Não encontrou sua dúvida? Entre em contato.',
    ctaText: 'Ver todas as perguntas',
  },
  en: {
    eyebrow: 'Frequently asked questions',
    title: 'Questions we receive\nevery day',
    subtitle: "Didn't find your question? Get in touch.",
    ctaText: 'See all questions',
  },
};

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`${styles.item} ${open ? styles.open : ''}`}>
      <button
        className={styles.question}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        id={`faq-q-${index}`}
      >
        <span className={styles.questionNum}>0{index + 1}</span>
        <span className={styles.questionText}>{question}</span>
        <span className={styles.icon} aria-hidden>
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <polyline points={open ? '18 15 12 9 6 15' : '6 9 12 15 18 9'} />
          </svg>
        </span>
      </button>
      <div
        className={styles.answer}
        role="region"
        aria-labelledby={`faq-q-${index}`}
      >
        <p className={styles.answerText}>{answer}</p>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const { language } = useLanguage();
  const copy = t[language];
  const items = faqs[language];

  return (
    <section className={styles.section} id="faq">
      <div className="container">
        <div className={styles.inner}>
          {/* Left — Header */}
          <ScrollReveal variant="fadeLeft" className={styles.headerWrap}>
            <div className={styles.header}>
              <span className="section-label">{copy.eyebrow}</span>
              <h2 className={styles.title}>
                {copy.title.split('\n').map((line, i) => (
                  <span key={i}>{line}{i === 0 && <br />}</span>
                ))}
              </h2>
              <p className={styles.subtitle}>{copy.subtitle}</p>
              <Link href="/faq" className={styles.cta}>
                {copy.ctaText}
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden>
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>

          {/* Right — FAQ List */}
          <ScrollReveal variant="fadeRight" className={styles.listWrap}>
            <div className={styles.list}>
              {items.map((item, i) => (
                <FAQItem key={i} question={item.q} answer={item.a} index={i} />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
