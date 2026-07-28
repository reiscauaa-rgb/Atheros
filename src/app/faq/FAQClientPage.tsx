'use client';

import { useState } from 'react';
import styles from './faq.module.css';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';
import CTASection from '@/components/home/CTASection/CTASection';

const categories = {
  pt: ['Geral', 'Passaporte', 'Procuração', 'Certificado Digital'],
  en: ['General', 'Passport', 'Power of Attorney', 'Digital Certificate'],
};

const faqs = {
  pt: [
    { cat: 'Geral', q: 'A Atheros é uma empresa registrada?', a: 'Sim. A Atheros é uma empresa legalmente registrada nos Estados Unidos, com sede em Stoughton, MA. Operamos dentro das normas e regulamentações vigentes para serviços de assessoria documental.' },
    { cat: 'Geral', q: 'Vocês atendem brasileiros de todo o país?', a: 'Sim! Nosso atendimento é 100% remoto e digital, então atendemos brasileiros em todos os 50 estados americanos. Não é necessário comparecer pessoalmente.' },
    { cat: 'Geral', q: 'Qual o prazo de resposta de vocês?', a: 'Respondemos todas as mensagens em até 24 horas úteis. Pelo WhatsApp, geralmente respondemos muito mais rápido, dentro do horário comercial.' },
    { cat: 'Geral', q: 'Como vocês garantem a segurança dos meus documentos?', a: 'Usamos plataformas seguras e criptografadas para receber documentos. Seus dados são tratados com total confidencialidade e não compartilhamos nenhuma informação com terceiros.' },
    { cat: 'Passaporte', q: 'Vocês renovam o passaporte pelo consulado?', a: 'Não emitimos passaportes — isso é exclusividade do governo brasileiro. O que fazemos é toda a preparação: revisamos seus documentos, preenchemos formulários, verificamos fotos e orientamos cada etapa, garantindo que sua solicitação seja aceita na primeira vez.' },
    { cat: 'Passaporte', q: 'Quanto tempo leva a renovação do passaporte?', a: 'O prazo varia por consulado. Em média, após o envio correto dos documentos, o processo leva entre 6 e 12 semanas. Esse prazo pode ser menor em casos de urgência documentada.' },
    { cat: 'Passaporte', q: 'Posso solicitar passaporte de emergência?', a: 'Sim, em casos de urgência comprovada (viagem em menos de 30 dias). O processo é diferente e tem taxas distintas. Entre em contato para analisarmos seu caso.' },
    { cat: 'Passaporte', q: 'Minha foto precisa de algum requisito especial?', a: 'Sim. As fotos para passaporte consular têm requisitos rígidos (tamanho, fundo, expressão, óculos, etc.). Orientamos você sobre todos os requisitos e revisamos a foto antes do envio.' },
    { cat: 'Procuração', q: 'Qual a diferença entre procuração pública e particular?', a: 'A procuração pública é lavrada por tabelião e tem maior valor probatório. Para uso nos EUA com validade no Brasil, geralmente utilizamos procurações com reconhecimento consular, que equivalem ao reconhecimento de firma brasileiro.' },
    { cat: 'Procuração', q: 'Posso dar procuração para qualquer pessoa?', a: 'Sim, você pode outorgar procuração para qualquer pessoa maior de 18 anos e capaz. Não precisa ser familiar. Importante definir claramente os poderes concedidos para evitar problemas futuros.' },
    { cat: 'Procuração', q: 'A procuração tem prazo de validade?', a: 'A procuração pode ser feita por prazo determinado ou indeterminado. Para segurança, recomendamos estabelecer um prazo compatível com a finalidade. Procurações para venda de imóvel, por exemplo, costumam ter prazo de 1 ano.' },
    { cat: 'Certificado Digital', q: 'Qual a diferença entre e-CPF A1 e A3?', a: 'O A1 é armazenado em nuvem ou no próprio computador, mais prático para uso diário. O A3 é armazenado em token físico (pen drive especial), mais seguro. Ambos têm a mesma validade jurídica; a diferença é onde a chave é armazenada.' },
    { cat: 'Certificado Digital', q: 'Por quanto tempo o certificado digital é válido?', a: 'Em geral, os certificados têm validade de 1, 2 ou 3 anos, dependendo do plano escolhido. Enviamos lembretes antes do vencimento para que você não perca o acesso.' },
    { cat: 'Certificado Digital', q: 'Posso usar meu e-CPF para declarar imposto de renda?', a: 'Sim! O e-CPF permite acessar o portal da Receita Federal, assinar sua declaração de IR digitalmente e utilizar diversas outras funcionalidades do gov.br com total segurança.' },
  ],
  en: [
    { cat: 'General', q: 'Is Atheros a registered company?', a: 'Yes. Atheros is a legally registered company in the United States, headquartered in Stoughton, MA. We operate within the current rules and regulations for document advisory services.' },
    { cat: 'General', q: 'Do you serve Brazilians from all over the country?', a: 'Yes! Our service is 100% remote and digital, so we serve Brazilians in all 50 US states. No in-person visit is required.' },
    { cat: 'General', q: 'What is your response time?', a: 'We respond to all messages within 24 business hours. On WhatsApp, we generally respond much faster, during business hours.' },
    { cat: 'General', q: 'How do you ensure the security of my documents?', a: 'We use secure, encrypted platforms to receive documents. Your data is treated with complete confidentiality and we do not share any information with third parties.' },
    { cat: 'Passport', q: 'Do you renew passports through the consulate?', a: 'We do not issue passports — that is exclusively the Brazilian government\'s role. What we do is all the preparation: we review your documents, fill out forms, verify photos and guide each step, ensuring your request is accepted the first time.' },
    { cat: 'Passport', q: 'How long does passport renewal take?', a: 'The timeline varies by consulate. On average, after correct document submission, the process takes between 6 and 12 weeks. This timeline may be shorter in cases of documented urgency.' },
    { cat: 'Passport', q: 'Can I apply for an emergency passport?', a: 'Yes, in cases of proven urgency (travel within less than 30 days). The process is different and has distinct fees. Contact us to analyze your case.' },
    { cat: 'Passport', q: 'Does my photo need any special requirements?', a: 'Yes. Consular passport photos have strict requirements (size, background, expression, glasses, etc.). We guide you on all requirements and review the photo before submission.' },
    { cat: 'Power of Attorney', q: 'What is the difference between a public and private power of attorney?', a: 'A public POA is drawn up by a notary and has greater evidentiary value. For use in the USA with validity in Brazil, we generally use POAs with consular recognition, which is equivalent to Brazilian notarization.' },
    { cat: 'Power of Attorney', q: 'Can I give POA to anyone?', a: 'Yes, you can grant a power of attorney to any person over 18 years old and capable. It does not need to be a family member. It is important to clearly define the powers granted to avoid future problems.' },
    { cat: 'Power of Attorney', q: 'Does the power of attorney have an expiry date?', a: 'A POA can be made for a fixed or indefinite term. For security, we recommend establishing a term compatible with the purpose. POAs for property sales, for example, usually have a 1-year term.' },
    { cat: 'Digital Certificate', q: 'What is the difference between e-CPF A1 and A3?', a: 'A1 is stored in the cloud or on the computer itself, more convenient for daily use. A3 is stored on a physical token (special USB drive), more secure. Both have the same legal validity; the difference is where the key is stored.' },
    { cat: 'Digital Certificate', q: 'How long is the digital certificate valid?', a: 'Generally, certificates are valid for 1, 2 or 3 years, depending on the chosen plan. We send reminders before expiry so you don\'t lose access.' },
    { cat: 'Digital Certificate', q: 'Can I use my e-CPF to file income tax?', a: 'Yes! The e-CPF allows you to access the Federal Revenue portal, sign your tax return digitally and use various other gov.br features with complete security.' },
  ],
};

const t = {
  pt: { eyebrow: 'FAQ', heroTitle: 'Perguntas\nfrequentes', heroSub: 'Tudo que você precisa saber sobre documentação consular, procurações e certificado digital.', all: 'Todas', notFound: 'Não encontrou sua resposta?', ctaBtn: 'Perguntar no WhatsApp' },
  en: { eyebrow: 'FAQ', heroTitle: 'Frequently\nasked questions', heroSub: 'Everything you need to know about consular documentation, powers of attorney and digital certificates.', all: 'All', notFound: "Didn't find your answer?", ctaBtn: 'Ask on WhatsApp' },
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
