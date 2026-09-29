'use client';

import { useState } from 'react';
import styles from './contato.module.css';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const t = {
  pt: {
    eyebrow: 'Fale conosco',
    title: 'Entre em contato',
    description:
      'Tem dúvidas sobre nossos serviços ou precisa de ajuda com sua documentação? Atendemos presencialmente em Stoughton, MA e também online para todos os EUA.',
    name: 'Nome completo',
    phone: 'Telefone (com DDD)',
    email: 'E-mail',
    service: 'Serviço de interesse',
    serviceOptions: [
      'Documentação Consular & Passaporte',
      'Vistos & VITEM XI',
      'Apostilamento de Haia',
      'Traduções Certificadas & Juramentadas',
      'Procurações Públicas',
      'e-Notariado',
      'Outro',
    ],
    message: 'Mensagem (opcional)',
    submit: 'Enviar mensagem',
    sending: 'Enviando...',
    success: '✅ Mensagem enviada com sucesso! Retornaremos em até 24h.',
    error: '❌ Erro ao enviar. Tente pelo WhatsApp.',
    phonesLabel: 'Telefones de Atendimento',
    addressLabel: 'Endereço do Escritório',
    addressValue: '2 Canton St, Unit B 115',
    addressCity: 'Stoughton, MA 02072',
    addressRef: 'Track Plaza • Ao lado do restaurante brasileiro Sunshine e da linha do trem',
    mapsLink: 'Abrir no Google Maps',
    walkinNoticeTitle: 'ATENDIMENTO POR ORDEM DE CHEGADA',
    walkinNoticeDesc: 'Não trabalhamos com agendamento prévio. Compareça diretamente ao escritório nos horários presenciais!',
    hoursSectionTitle: 'Horários de Atendimento Presencial',
    schedule: [
      { day: 'Segunda-feira', time: '4:00 PM às 9:00 PM (16h às 21h)' },
      { day: 'Terça-feira', time: '9:00 AM às 1:45 PM (09h às 13h45)' },
      { day: 'Quarta-feira', time: '4:00 PM às 9:00 PM (16h às 21h)' },
      { day: 'Quinta-feira', time: '9:00 AM às 1:45 PM  e  4:00 PM às 9:00 PM' },
      { day: 'Sexta-feira', time: '4:00 PM às 9:00 PM (16h às 21h)' },
      { day: 'Sábado e Domingo', time: 'Fechado presencial (Online ativo)' },
    ],
    onlineHoursTitle: 'Atendimento Online:',
    onlineHoursValue: 'Todos os dias das 9:00 AM às 9:00 PM (9h às 21h)',
    communityPartnerLabel: 'Portal Parceiro Comunitário',
    communityPartnerUrlText: 'www.newenglandcommunitycenter.com',
    whatsapp: 'Prefere falar no WhatsApp?',
    whatsappBtn: 'Abrir WhatsApp',
  },
  en: {
    eyebrow: 'Get in touch',
    title: 'Contact us',
    description:
      'Questions about our services or need assistance with your Brazilian paperwork? Visit us in person in Stoughton, MA or connect online from anywhere in the US.',
    name: 'Full name',
    phone: 'Phone number',
    email: 'Email',
    service: 'Service of interest',
    serviceOptions: [
      'Consular Documentation & Passport',
      'Visas & VITEM XI',
      'Hague Apostille',
      'Certified & Sworn Translations',
      'Public Powers of Attorney',
      'e-Notariado',
      'Other',
    ],
    message: 'Message (optional)',
    submit: 'Send message',
    sending: 'Sending...',
    success: '✅ Message sent successfully! We\'ll get back to you within 24h.',
    error: '❌ Error sending. Please try WhatsApp.',
    phonesLabel: 'Phone Numbers',
    addressLabel: 'Office Location',
    addressValue: '2 Canton St, Unit B 115',
    addressCity: 'Stoughton, MA 02072',
    addressRef: 'Track Plaza • Next to Sunshine Brazilian Restaurant and the Commuter Rail line',
    mapsLink: 'Open in Google Maps',
    walkinNoticeTitle: 'WALK-INS ONLY • FIRST-COME, FIRST-SERVED',
    walkinNoticeDesc: 'No appointments needed. Visit us directly during our in-person office hours!',
    hoursSectionTitle: 'In-Person Office Hours',
    schedule: [
      { day: 'Monday', time: '4:00 PM – 9:00 PM' },
      { day: 'Tuesday', time: '9:00 AM – 1:45 PM' },
      { day: 'Wednesday', time: '4:00 PM – 9:00 PM' },
      { day: 'Thursday', time: '9:00 AM – 1:45 PM  &  4:00 PM – 9:00 PM' },
      { day: 'Friday', time: '4:00 PM – 9:00 PM' },
      { day: 'Saturday & Sunday', time: 'Closed in-person (Online active)' },
    ],
    onlineHoursTitle: 'Online Support:',
    onlineHoursValue: 'Daily from 9:00 AM to 9:00 PM (EST)',
    communityPartnerLabel: 'Community Partner Portal',
    communityPartnerUrlText: 'www.newenglandcommunitycenter.com',
    whatsapp: 'Prefer WhatsApp?',
    whatsappBtn: 'Open WhatsApp',
  },
};

const phones = [
  { display: '(774) 707-0082', tel: '+17747070082', isWhatsApp: false },
  { display: '(774) 801-8903', tel: '+17748018903', isWhatsApp: false },
  { display: '(904) 651-5886', tel: '+19046515886', isWhatsApp: true },
];

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

            {/* Left panel info */}
            <div className={styles.infoPanel}>
              <p className={styles.infoDescription}>{copy.description}</p>

              {/* Primary Contact Details Grid */}
              <div className={styles.infoGrid}>
                {/* Phones */}
                <div className={styles.infoItem}>
                  <div className={styles.infoIconWrap}>
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div className={styles.infoItemContent}>
                    <p className={styles.infoLabel}>{copy.phonesLabel}</p>
                    <div className={styles.phoneList}>
                      {phones.map((p, idx) => (
                        <a
                          key={idx}
                          href={
                            p.isWhatsApp
                              ? `https://api.whatsapp.com/send/?phone=19046515886&text=${encodeURIComponent(
                                  language === 'pt'
                                    ? 'Olá! Vim pelo site e gostaria de uma análise gratuita.'
                                    : 'Hello! I came from the website and would like a free consultation.'
                                )}`
                              : `tel:${p.tel}`
                          }
                          target={p.isWhatsApp ? '_blank' : undefined}
                          rel={p.isWhatsApp ? 'noopener noreferrer' : undefined}
                          className={styles.phoneLink}
                        >
                          {p.isWhatsApp && (
                            <span className={styles.waTag}>WhatsApp</span>
                          )}
                          <span>{p.display}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className={styles.infoItem}>
                  <div className={styles.infoIconWrap}>
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div className={styles.infoItemContent}>
                    <p className={styles.infoLabel}>{copy.addressLabel}</p>
                    <p className={styles.addressPrimary}>
                      <strong>{copy.addressValue}</strong>
                    </p>
                    <p className={styles.addressSecondary}>{copy.addressCity}</p>
                    <p className={styles.addressRefNote}>
                      📍 {copy.addressRef}
                    </p>
                    <a
                      href="https://maps.google.com/?q=2+Canton+St+Unit+B+115+Stoughton+MA+02072"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.mapsBtn}
                    >
                      <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <polygon points="3 11 22 2 13 21 11 13 3 11" />
                      </svg>
                      {copy.mapsLink}
                    </a>
                  </div>
                </div>
              </div>

              {/* Walk-in Alert Notice */}
              <div className={styles.walkinAlert}>
                <div className={styles.walkinHeader}>
                  <span className={styles.walkinBadge}>
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                    </svg>
                    {copy.walkinNoticeTitle}
                  </span>
                </div>
                <p className={styles.walkinText}>{copy.walkinNoticeDesc}</p>
              </div>

              {/* Detailed Business Hours Box */}
              <div className={styles.hoursBox}>
                <div className={styles.hoursHeader}>
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <h3 className={styles.hoursTitle}>{copy.hoursSectionTitle}</h3>
                </div>

                <div className={styles.scheduleList}>
                  {copy.schedule.map((item, idx) => (
                    <div key={idx} className={styles.scheduleRow}>
                      <span className={styles.scheduleDay}>{item.day}</span>
                      <span className={styles.scheduleTime}>{item.time}</span>
                    </div>
                  ))}
                </div>

                {/* Online Support Box */}
                <div className={styles.onlineSupportBox}>
                  <div className={styles.onlineDot} />
                  <div>
                    <strong className={styles.onlineLabel}>{copy.onlineHoursTitle}</strong>{' '}
                    <span className={styles.onlineTime}>{copy.onlineHoursValue}</span>
                  </div>
                </div>
              </div>

              {/* Community Partner */}
              <div className={styles.partnerBox}>
                <span className={styles.partnerLabel}>🤝 {copy.communityPartnerLabel}:</span>
                <a
                  href="https://www.newenglandcommunitycenter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.partnerLink}
                >
                  {copy.communityPartnerUrlText}
                  <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right panel form */}
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
                      <input id="phone" type="tel" className={styles.input} required placeholder="(774) 000-0000" />
                    </div>
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="email" className={styles.label}>{copy.email} *</label>
                    <input id="email" type="email" className={styles.input} required placeholder="joao@email.com" />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="service" className={styles.label}>{copy.service}</label>
                    <select id="service" className={styles.input}>
                      <option value="">{language === 'pt' ? 'Selecione o serviço desejado' : 'Select a service'}</option>
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
                      placeholder={language === 'pt' ? 'Conte um pouco sobre o que você precisa...' : 'Tell us a bit about what you need...'}
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
                      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
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
