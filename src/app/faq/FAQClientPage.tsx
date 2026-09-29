'use client';

import { useState } from 'react';
import styles from './faq.module.css';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';
import CTASection from '@/components/home/CTASection/CTASection';

const categories = {
  pt: ['Geral', 'Passaporte', 'Procurações Públicas', 'e-Notariado'],
  en: ['General', 'Passport', 'Public Powers of Attorney', 'e-Notariado'],
};

const faqs = {
  pt: [
    { cat: 'Geral', q: 'A Atheros é uma empresa registrada?', a: 'Sim. A Atheros é uma empresa legalmente registrada nos Estados Unidos, com sede em Stoughton, MA. Operamos dentro das normas e regulamentações vigentes para serviços de assessoria documental.' },
    { cat: 'Geral', q: 'Vocês têm atendimento presencial? Onde fica o escritório e quais os horários?', a: 'Sim! Nosso escritório fica em Stoughton, MA: 2 Canton St, Unit B 115 (no Track Plaza, ao lado do restaurante brasileiro Sunshine e da linha do trem, CEP 02072). O atendimento presencial é por ORDEM DE CHEGADA: Seg, Qua e Sex das 16h às 21h (4pm–9pm); Ter das 9h às 13h45 (9am–1:45pm); Qui das 9h às 13h45 e das 16h às 21h. Atendimento online todos os dias das 9h às 21h.' },
    { cat: 'Geral', q: 'Preciso agendar horário para ir ao escritório presencialmente?', a: 'Não! NÃO trabalhamos com agendamento prévio. O atendimento no escritório é realizado por ORDEM DE CHEGADA dentro dos nossos horários presenciais.' },
    { cat: 'Geral', q: 'Vocês atendem brasileiros de todo o país?', a: 'Sim! Além do escritório presencial em Massachusetts, oferecemos atendimento digital para brasileiros em todos os 50 estados americanos. Não é obrigatório comparecer pessoalmente.' },
    { cat: 'Geral', q: 'Qual o prazo de resposta e canais de contato?', a: 'Respondemos rapidamente pelo WhatsApp (904) 651-5886 e pelos telefones (774) 707-0082 e (774) 801-8903. Nosso suporte online funciona diariamente das 9h às 21h (EST).' },
    { cat: 'Geral', q: 'Como vocês garantem a segurança dos meus documentos?', a: 'Usamos plataformas seguras e criptografadas para receber documentos. Seus dados são tratados com total confidencialidade e não compartilhamos nenhuma informação com terceiros.' },
    { cat: 'Passaporte', q: 'Vocês renovam o passaporte pelo consulado?', a: 'Não emitimos passaportes isso é exclusividade do governo brasileiro. O que fazemos é toda a preparação: revisamos seus documentos, preenchemos formulários, verificamos fotos e orientamos cada etapa, garantindo que sua solicitação seja aceita na primeira vez.' },
    { cat: 'Passaporte', q: 'Minha foto precisa de algum requisito especial?', a: 'Sim. As fotos para passaporte consular têm requisitos rígidos (tamanho, fundo, expressão, óculos, etc.). Orientamos você sobre todos os requisitos e revisamos a foto antes do envio.' },
    { cat: 'Procurações Públicas', q: 'Qual a diferença entre procuração pública e particular?', a: 'A procuração pública é lavrada por tabelião e tem maior valor probatório. Para uso nos EUA com validade no Brasil, geralmente utilizamos procurações com reconhecimento consular, que equivalem ao reconhecimento de firma brasileiro.' },
    { cat: 'Procurações Públicas', q: 'Posso dar procuração para qualquer pessoa?', a: 'Sim, você pode outorgar procuração para qualquer pessoa maior de 18 anos e capaz. Não precisa ser familiar. Importante definir claramente os poderes concedidos para evitar problemas futuros.' },
    { cat: 'Procurações Públicas', q: 'A procuração tem prazo de validade?', a: 'A procuração pode ser feita por prazo determinado ou indeterminado. Para segurança, recomendamos estabelecer um prazo compatível com a finalidade. Procurações para venda de imóvel, por exemplo, costumam ter prazo de 1 ano.' },
    { cat: 'Procurações Públicas', q: 'A Atheros faz procuração particular?', a: 'Não. Trabalhamos com procurações públicas, realizadas via Consulado Brasileiro ou via cartório no Brasil, de acordo com a finalidade e a necessidade de cada processo.' },
    { cat: 'e-Notariado', q: 'O que é o e-Notariado?', a: 'O e-Notariado é uma plataforma utilizada pelos cartórios de notas brasileiros para possibilitar a realização de determinados atos notariais de forma eletrônica. A Atheros auxilia na orientação e no processo de utilização da plataforma.' },
  ],
  en: [
    { cat: 'General', q: 'Is Atheros a registered company?', a: 'Yes. Atheros is a legally registered company in the United States, headquartered in Stoughton, MA. We operate within the current rules and regulations for document advisory services.' },
    { cat: 'General', q: 'Do you offer in-person service? Where is the office located and what are the hours?', a: 'Yes! Our office is located in Stoughton, MA: 2 Canton St, Unit B 115 (in Track Plaza, next to Sunshine Brazilian Restaurant and the commuter rail line, ZIP 02072). In-person service is WALK-IN ONLY: Mon, Wed, Fri 4:00 PM – 9:00 PM; Tue 9:00 AM – 1:45 PM; Thu 9:00 AM – 1:45 PM & 4:00 PM – 9:00 PM. Online support is active daily from 9:00 AM to 9:00 PM.' },
    { cat: 'General', q: 'Do I need an appointment for in-person service?', a: 'No! We do NOT take appointments. In-person service is provided strictly on a FIRST-COME, FIRST-SERVED (walk-in) basis during office hours.' },
    { cat: 'General', q: 'Do you serve Brazilians from all over the country?', a: 'Yes! In addition to our physical office in Stoughton, MA, we provide digital service to Brazilians across all 50 US states. You can handle everything remotely with total convenience.' },
    { cat: 'General', q: 'What is your response time and contact info?', a: 'We respond promptly via WhatsApp (904) 651-5886 and phone numbers (774) 707-0082 and (774) 801-8903. Online support is available daily from 9:00 AM to 9:00 PM (EST).' },
    { cat: 'General', q: 'How do you ensure the security of my documents?', a: 'We use secure, encrypted platforms to receive documents. Your data is treated with complete confidentiality and we do not share any information with third parties.' },
    { cat: 'Passport', q: 'Do you renew passports through the consulate?', a: 'We do not issue passports that is exclusively the Brazilian government\'s role. What we do is all the preparation: we review your documents, fill out forms, verify photos and guide each step, ensuring your request is accepted the first time.' },
    { cat: 'Passport', q: 'Does my photo need any special requirements?', a: 'Yes. Consular passport photos have strict requirements (size, background, expression, glasses, etc.). We guide you on all requirements and review the photo before submission.' },
    { cat: 'Public Powers of Attorney', q: 'What is the difference between a public and private power of attorney?', a: 'A public POA is drawn up by a notary and has greater evidentiary value. For use in the USA with validity in Brazil, we generally use POAs with consular recognition, which is equivalent to Brazilian notarization.' },
    { cat: 'Public Powers of Attorney', q: 'Can I give POA to anyone?', a: 'Yes, you can grant a power of attorney to any person over 18 years old and capable. It does not need to be a family member. It is important to clearly define the powers granted to avoid future problems.' },
    { cat: 'Public Powers of Attorney', q: 'Does the power of attorney have an expiry date?', a: 'A POA can be made for a fixed or indefinite term. For security, we recommend establishing a term compatible with the purpose. POAs for property sales, for example, usually have a 1-year term.' },
    { cat: 'Public Powers of Attorney', q: 'Does Atheros do private powers of attorney?', a: 'No. We work with public powers of attorney, carried out via the Brazilian Consulate or via a registry office in Brazil, according to the purpose and needs of each process.' },
    { cat: 'e-Notariado', q: 'What is e-Notariado?', a: 'e-Notariado is a platform used by Brazilian notary offices to enable certain notarial acts to be performed electronically. Atheros assists with guidance and the process of using the platform.' },
  ],
};

const t = {
  pt: { eyebrow: 'FAQ', heroTitle: 'Perguntas\nfrequentes', heroSub: 'Tudo que você precisa saber sobre documentação consular, procurações públicas e e-Notariado.', all: 'Todas', notFound: 'Não encontrou sua resposta?', ctaBtn: 'Perguntar no WhatsApp' },
  en: { eyebrow: 'FAQ', heroTitle: 'Frequently\nasked questions', heroSub: 'Everything you need to know about consular documentation, public powers of attorney and e-Notariado.', all: 'All', notFound: "Didn't find your answer?", ctaBtn: 'Ask on WhatsApp' },
};

function FAQItem({ q, a, i }: { q: string; a: string; i: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`${styles.item} ${open ? styles.open : ''}`}>
      <button className={styles.question} onClick={() => setOpen(v => !v)} aria-expanded={open}>
        <span className={styles.questionText}>{q}</span>
        <span className={styles.icon} aria-hidden>
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <polyline points={open ? '18 15 12 9 6 15' : '6 9 12 15 18 9'} />
          </svg>
        </span>
      </button>
      <div className={styles.answer}>
        <p className={styles.answerText}>{a}</p>
      </div>
    </div>
  );
}

export default function FAQClientPage() {
  const { language } = useLanguage();
  const copy = t[language];
  const cats = categories[language];
  const allFaqs = faqs[language];
  const [activeCategory, setActiveCategory] = useState(copy.all);

  const filtered = activeCategory === copy.all
    ? allFaqs
    : allFaqs.filter(f => f.cat === activeCategory);

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

      {/* Main */}
      <section className={styles.main}>
        <div className="container">
          {/* Category filter */}
          <div className={styles.catFilter}>
            <button
              className={`${styles.catBtn} ${activeCategory === copy.all ? styles.catBtnActive : ''}`}
              onClick={() => setActiveCategory(copy.all)}
            >
              {copy.all}
            </button>
            {cats.map(cat => (
              <button
                key={cat}
                className={`${styles.catBtn} ${activeCategory === cat ? styles.catBtnActive : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* FAQs */}
          <div className={styles.faqList}>
            {filtered.map((faq, i) => (
              <ScrollReveal key={`${faq.cat}-${i}`} variant="fadeUp" delay={(i % 5) * 60}>
                <FAQItem q={faq.q} a={faq.a} i={i} />
              </ScrollReveal>
            ))}
          </div>

          {/* Not found */}
          <div className={styles.notFound}>
            <p>{copy.notFound}</p>
            <a
              href={`https://api.whatsapp.com/send/?phone=19046515886&text=${encodeURIComponent(language === 'pt' ? 'Olá! Tenho uma dúvida que não encontrei no FAQ.' : 'Hello! I have a question I didn\'t find in the FAQ.')}`}
              target="_blank" rel="noopener noreferrer"
              className={styles.notFoundBtn}
            >
              {copy.ctaBtn}
            </a>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
