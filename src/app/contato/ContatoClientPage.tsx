'use client';

import { useState } from 'react';
import styles from './contato.module.css';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const t = {
  pt: {
    eyebrow: 'Fale conosco',
    title: 'Entre em contato',
    description:
      'Tem dúvidas sobre nossos serviços ou precisa de ajuda com sua documentação? Preencha o formulário e respondemos em até 1 dia útil em português.',
    name: 'Nome completo',
    phone: 'Telefone (com DDD)',
    email: 'E-mail',
    service: 'Serviço de interesse',
    serviceOptions: [
      'Documentação Consular',
      'Procuração',
      'Certificado Digital (e-CPF/e-CNPJ)',
      'Outro',
    ],
    message: 'Mensagem (opcional)',
    submit: 'Enviar mensagem',
    sending: 'Enviando...',
    success: '✅ Mensagem enviada com sucesso! Retornaremos em até 24h.',
    error: '❌ Erro ao enviar. Tente pelo WhatsApp.',
    phonesLabel: 'Telefones',
    addressLabel: 'Endereço',
    hoursLabel: 'Horário de atendimento',
    hoursValue: 'Seg–Sex: 9h–18h (EST)\nSáb: 9h–13h (EST)',
    whatsappLabel: 'WhatsApp',
    emailLabel: 'E-mail',
    whatsapp: 'Prefere o WhatsApp?',
    whatsappBtn: 'Abrir WhatsApp',
  },
  en: {
    eyebrow: 'Get in touch',
    title: 'Contact us',
    description:
      'Have questions about our services or need help with your documents? Fill out the form and we\'ll respond within 1 business day in Portuguese.',
    name: 'Full name',
    phone: 'Phone number',
    email: 'Email',
    service: 'Service of interest',
    serviceOptions: [
      'Consular Documentation',
      'Power of Attorney',
      'Digital Certificate (e-CPF/e-CNPJ)',
      'Other',
    ],
    message: 'Message (optional)',
    submit: 'Send message',
    sending: 'Sending...',
    success: '✅ Message sent successfully! We\'ll get back to you within 24h.',
    error: '❌ Error sending. Please try WhatsApp.',
    phonesLabel: 'Phones',
    addressLabel: 'Address',
    hoursLabel: 'Business hours',
    hoursValue: 'Mon–Fri: 9am–6pm (EST)\nSat: 9am–1pm (EST)',
    whatsappLabel: 'WhatsApp',
    emailLabel: 'Email',
    whatsapp: 'Prefer WhatsApp?',
    whatsappBtn: 'Open WhatsApp',
  },
};

const contactInfo = {
  pt: [
    {
      icon: (
        <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
      label: 'Telefones',
      value: '(904) 651-5886 / (508) 648-9143',
    },
    {
      icon: (
        <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      label: 'Endereço',
      value: '2 Canton St, unit 115 — Stoughton, MA 02072',
    },
    {
      icon: (
        <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      label: 'Horário de atendimento',
      value: 'Seg–Sex: 9h–18h (EST) | Sáb: 9h–13h',
    },
    {
      icon: (
        <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      ),
      label: 'WhatsApp',
      value: '(904) 651-5886',
      href: 'https://api.whatsapp.com/send/?phone=19046515886&text=Ol%C3%A1%21+Vim+pelo+site+e+gostaria+de+uma+an%C3%A1lise+gratuita.',
    },
  ],
  en: [
    {
      icon: (
        <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
      label: 'Phones',
      value: '(904) 651-5886 / (508) 648-9143',
    },
    {
      icon: (
        <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      label: 'Address',
      value: '2 Canton St, unit 115 — Stoughton, MA 02072',
    },
    {
      icon: (
        <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      label: 'Business hours',
      value: 'Mon–Fri: 9am–6pm (EST) | Sat: 9am–1pm',
    },
    {
      icon: (
        <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      ),
      label: 'WhatsApp',
      value: '(904) 651-5886',
      href: 'https://api.whatsapp.com/send/?phone=19046515886&text=Hello%21+I+came+from+the+website+and+would+like+a+free+consultation.',
    },
  ],
};

export default function ContatoClientPage() {
  const { language } = useLanguage();
  const copy = t[language];
  const info = contactInfo[language];
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    await new Promise((r) => setTimeout(r, 1200));
    setStatus('success');
  };

  return (
    <main className={styles.page}>
      {/* Page hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden />
        <div className="container">
          <div className={styles.heroContent}>
            <span className={styles.heroEyebrow}>{copy.eyebrow}</span>
            <h1 className={styles.heroTitle}>{copy.title}</h1>
          </div>
        </div>
      </section>

      {/* Contact Card */}
      <section className={styles.cardSection}>
        <div className="container">
          <div className={styles.contactCard}>
            {/* Corner plus signs */}
            <span className={`${styles.plus} ${styles.plusTL}`}>+</span>
            <span className={`${styles.plus} ${styles.plusTR}`}>+</span>
            <span className={`${styles.plus} ${styles.plusBL}`}>+</span>
            <span className={`${styles.plus} ${styles.plusBR}`}>+</span>

            {/* Left panel — info */}
            <div className={styles.infoPanel}>
              <p className={styles.infoDescription}>{copy.description}</p>

              <div className={styles.infoGrid}>
                {info.map((item, i) =>
                  item.href ? (
                    <a
                      key={i}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.infoItem} ${styles.infoItemLink}`}
                    >
                      <div className={styles.infoIconWrap}>{item.icon}</div>
                      <div>
                        <p className={styles.infoLabel}>{item.label}</p>
                        <p className={styles.infoValue}>{item.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div key={i} className={styles.infoItem}>
                      <div className={styles.infoIconWrap}>{item.icon}</div>
                      <div>
                        <p className={styles.infoLabel}>{item.label}</p>
                        <p className={styles.infoValue}>{item.value}</p>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Right panel — form */}
            <div className={styles.formPanel}>
              {status === 'success' ? (
                <div className={styles.successMsg}>
                  <svg width="48" height="48" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p>{copy.success}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form} noValidate>
                  <div className={styles.formRow}>
                    <div className={styles.field}>
                      <label htmlFor="nome" className={styles.label}>{copy.name} *</label>
                      <input id="nome" type="text" className={styles.input} required placeholder="João da Silva" />
                    </div>
                    <div className={styles.field}>
                      <label htmlFor="phone" className={styles.label}>{copy.phone} *</label>
                      <input id="phone" type="tel" className={styles.input} required placeholder="(555) 000-0000" />
                    </div>
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="email" className={styles.label}>{copy.email} *</label>
                    <input id="email" type="email" className={styles.input} required placeholder="joao@email.com" />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="service" className={styles.label}>{copy.service}</label>
                    <select id="service" className={styles.input}>
                      <option value="">{language === 'pt' ? 'Selecione' : 'Select'}</option>
                      {copy.serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="message" className={styles.label}>{copy.message}</label>
                    <textarea
                      id="message"
                      className={`${styles.input} ${styles.textarea}`}
                      rows={4}
                      placeholder={language === 'pt' ? 'Conte um pouco sobre o que precisa...' : 'Tell us a bit about what you need...'}
                    />
                  </div>
                  {status === 'error' && <p className={styles.errorMsg}>{copy.error}</p>}
                  <button type="submit" className={styles.submitBtn} disabled={status === 'loading'}>
                    {status === 'loading' ? copy.sending : copy.submit}
                    {status !== 'loading' && (
                      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    )}
                  </button>

                  {/* WhatsApp shortcut */}
                  <div className={styles.whaWrap}>
                    <span className={styles.whaText}>{copy.whatsapp}</span>
                    <a
                      href={`https://api.whatsapp.com/send/?phone=19046515886&text=${encodeURIComponent(
                        language === 'pt'
                          ? 'Olá! Vim pelo site e gostaria de uma análise gratuita do meu caso.'
                          : 'Hello! I came from the website and would like a free consultation.'
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.whaBtn}
                    >
                      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      {copy.whatsappBtn}
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
