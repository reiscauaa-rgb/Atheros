'use client';

import { useState } from 'react';
import styles from './contato.module.css';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';

const t = {
  pt: {
    eyebrow: 'Fale conosco',
    title: 'Como podemos\nte ajudar?',
    subtitle: 'Preencha o formulário ou nos chame diretamente no WhatsApp. Respondemos em até 24 horas em português.',
    name: 'Nome completo',
    phone: 'Telefone (com DDD)',
    city: 'Cidade / Estado',
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
    whatsapp: 'Prefere o WhatsApp?',
    whatsappBtn: 'Abrir WhatsApp',
    infoTitle: 'Informações de contato',
    phones: 'Telefones',
    address: 'Endereço',
    hours: 'Horário de atendimento',
    hoursValue: 'Seg–Sex: 9h–18h (EST)\nSáb: 9h–13h (EST)',
  },
  en: {
    eyebrow: 'Get in touch',
    title: 'How can we\nhelp you?',
    subtitle: 'Fill out the form or reach us directly on WhatsApp. We respond within 24 hours in Portuguese.',
    name: 'Full name',
    phone: 'Phone number',
    city: 'City / State',
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
    whatsapp: 'Prefer WhatsApp?',
    whatsappBtn: 'Open WhatsApp',
    infoTitle: 'Contact information',
    phones: 'Phones',
    address: 'Address',
    hours: 'Business hours',
    hoursValue: 'Mon–Fri: 9am–6pm (EST)\nSat: 9am–1pm (EST)',
  },
};

export default function ContatoClientPage() {
  const { language } = useLanguage();
  const copy = t[language];
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    await new Promise((r) => setTimeout(r, 1200));
    setStatus('success');
  };

  return (
    <main>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden />
        <div className="container">
          <div className={styles.heroContent}>
            <span className={styles.heroEyebrow}>{copy.eyebrow}</span>
            <h1 className={styles.heroTitle}>
              {copy.title.split('\n').map((line, i) => (
                <span key={i}>{line}{i === 0 && <br />}</span>
              ))}
            </h1>
            <p className={styles.heroSubtitle}>{copy.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Main */}
      <section className={styles.main}>
        <div className="container">
          <div className={styles.grid}>
            {/* Form */}
            <ScrollReveal variant="fadeLeft">
              <div className={styles.formCard}>
                {status === 'success' ? (
                  <div className={styles.successMsg}>{copy.success}</div>
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
                    <div className={styles.formRow}>
                      <div className={styles.field}>
                        <label htmlFor="email" className={styles.label}>{copy.email} *</label>
                        <input id="email" type="email" className={styles.input} required placeholder="joao@email.com" />
                      </div>
                      <div className={styles.field}>
                        <label htmlFor="city" className={styles.label}>{copy.city}</label>
                        <input id="city" type="text" className={styles.input} placeholder="Boston, MA" />
                      </div>
                    </div>
                    <div className={styles.field}>
                      <label htmlFor="service" className={styles.label}>{copy.service}</label>
                      <select id="service" className={styles.input}>
                        <option value="">— Selecione —</option>
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
                    </button>
                  </form>
                )}

                {/* WhatsApp shortcut */}
                <div className={styles.whaWrap}>
                  <span>{copy.whatsapp}</span>
                  <a
                    href={`https://api.whatsapp.com/send/?phone=19046515886&text=${encodeURIComponent(language === 'pt' ? 'Olá! Gostaria de tirar uma dúvida.' : 'Hello! I have a question.')}`}
                    target="_blank" rel="noopener noreferrer"
                    className={styles.whaBtn}
                  >
                    {copy.whatsappBtn}
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Info */}
            <ScrollReveal variant="fadeRight">
              <div className={styles.info}>
                <h2 className={styles.infoTitle}>{copy.infoTitle}</h2>

                <div className={styles.infoItem}>
                  <span className={styles.infoIcon}>📞</span>
                  <div>
                    <strong>{copy.phones}</strong>
                    <p>(904) 651-5886</p>
                    <p>(508) 648-9143</p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <span className={styles.infoIcon}>📍</span>
                  <div>
                    <strong>{copy.address}</strong>
                    <p>2 Canton St, unit 115</p>
                    <p>Stoughton, MA 02072</p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <span className={styles.infoIcon}>🕐</span>
                  <div>
                    <strong>{copy.hours}</strong>
                    {copy.hoursValue.split('\n').map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                </div>

                {/* Social */}
                <div className={styles.socialWrap}>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.social}>
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                    Facebook
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.social}>
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <rect x="2" y="2" width="20" height="20" rx="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                    </svg>
                    Instagram
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
}
