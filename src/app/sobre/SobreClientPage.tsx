'use client';

import styles from './sobre.module.css';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';
import CTASection from '@/components/home/CTASection/CTASection';

const t = {
  pt: {
    eyebrow: 'Nossa história',
    heroTitle: 'Brasileiras que\nentendem você',
    heroSub: 'Com mais de 20 anos de experiência e 30 anos morando nos EUA, somos a parceira que a comunidade brasileira merece.',
    storyTitle: 'Como tudo começou',
    story: [
      'A Atheros nasceu da necessidade real vivida pelas próprias fundadoras: mulheres brasileiras que chegaram aos Estados Unidos há mais de 30 anos e que, como tantos outros compatriotas, se depararam com as dificuldades da burocracia consular — sem ter quem as orientasse de forma correta e acessível.',
      'Depois de anos ajudando informalmente amigos e conhecidos, formalizaram o negócio com um propósito claro: ser a assessora documental que elas gostariam de ter encontrado quando chegaram ao país.',
      'Hoje, com mais de 2.000 clientes atendidos e uma reputação construída sobre confiança, ética e excelência, a Atheros é referência para brasileiros em todo o território americano.',
    ],
    missionTitle: 'Missão, Visão e Valores',
    mission: { icon: '🎯', title: 'Missão', text: 'Facilitar a vida documental de brasileiros nos EUA com agilidade, ética e atendimento humanizado.' },
    vision: { icon: '🔭', title: 'Visão', text: 'Ser a assessoria documental mais respeitada e acessível para a comunidade brasileira nos Estados Unidos.' },
    values: [
      { icon: '🛡️', title: 'Ética', text: 'Transparência absoluta em cada etapa.' },
      { icon: '⚡', title: 'Agilidade', text: 'Processos otimizados para o menor prazo.' },
      { icon: '🤝', title: 'Humanização', text: 'Atendimento em português, com empatia.' },
      { icon: '🔒', title: 'Segurança', text: 'Dados e processos 100% protegidos.' },
    ],
  },
  en: {
    eyebrow: 'Our story',
    heroTitle: 'Brazilian women who\nunderstand you',
    heroSub: 'With over 20 years of experience and 30 years living in the USA, we are the partner the Brazilian community deserves.',
    storyTitle: 'How it all started',
    story: [
      'Atheros was born out of the real need experienced by the founders themselves: Brazilian women who arrived in the United States over 30 years ago and, like so many other compatriots, faced the difficulties of consular bureaucracy — without anyone to guide them correctly and accessibly.',
      'After years of informally helping friends and acquaintances, they formalized the business with a clear purpose: to be the document advisory they wished they had found when they arrived in the country.',
      'Today, with over 2,000 clients served and a reputation built on trust, ethics and excellence, Atheros is the reference for Brazilians throughout the United States.',
    ],
    missionTitle: 'Mission, Vision and Values',
    mission: { icon: '🎯', title: 'Mission', text: 'To facilitate the documentary life of Brazilians in the USA with agility, ethics and humanized service.' },
    vision: { icon: '🔭', title: 'Vision', text: 'To be the most respected and accessible document advisory for the Brazilian community in the United States.' },
    values: [
      { icon: '🛡️', title: 'Ethics', text: 'Absolute transparency at every step.' },
      { icon: '⚡', title: 'Agility', text: 'Optimized processes for the shortest timeline.' },
      { icon: '🤝', title: 'Humanized', text: 'Service in Portuguese, with empathy.' },
      { icon: '🔒', title: 'Security', text: '100% protected data and processes.' },
    ],
  },
};

export default function SobreClientPage() {
  const { language } = useLanguage();
  const copy = t[language];

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

      {/* Stats bar */}
      <div className={styles.statsBar}>
        <div className="container">
          <div className={styles.statsGrid}>
            {[
              { num: '20+', label: language === 'pt' ? 'anos de mercado' : 'years in business' },
              { num: '30+', label: language === 'pt' ? 'anos nos EUA' : 'years in the USA' },
              { num: '2k+', label: language === 'pt' ? 'clientes atendidos' : 'clients served' },
              { num: '100%', label: language === 'pt' ? 'online' : 'online' },
            ].map((s) => (
              <div key={s.label} className={styles.statItem}>
                <span className={styles.statNum}>{s.num}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Story */}
      <section className={styles.story}>
        <div className="container">
          <div className={styles.storyGrid}>
            <ScrollReveal variant="fadeLeft">
              <div className={styles.storyVisual}>
                <div className={styles.storyCircle}>
                  <span className={styles.storyYear}>2004</span>
                  <span className={styles.storyYearLabel}>{language === 'pt' ? 'Fundação' : 'Founded'}</span>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal variant="fadeRight">
              <div className={styles.storyContent}>
                <h2 className={styles.storyTitle}>{copy.storyTitle}</h2>
                {copy.story.map((p, i) => <p key={i} className={styles.storyText}>{p}</p>)}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values — Bento Grid */}
      <section className={styles.mvv}>
        <div className="container">
          <ScrollReveal variant="fadeUp">
            <h2 className={styles.mvvTitle}>{copy.missionTitle}</h2>
          </ScrollReveal>

          <div className={styles.bentoGrid}>

            {/* Missão — card largo com highlight */}
            <ScrollReveal variant="fadeUp" delay={0} className={`${styles.bentoCard} ${styles.cardMission}`}>
              <div className={styles.cardMissionBg}>
                <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="200" cy="200" r="150" stroke="currentColor" strokeWidth="2" strokeDasharray="10 10" opacity="0.1" />
                  <circle cx="200" cy="200" r="100" stroke="currentColor" strokeWidth="2" opacity="0.1" />
                  <circle cx="200" cy="200" r="50" stroke="currentColor" strokeWidth="2" strokeDasharray="5 5" opacity="0.2" />
                  <circle cx="200" cy="200" r="10" fill="currentColor" opacity="0.3" />
                </svg>
              </div>
              <div className={styles.cardContentWrap}>
                <div className={styles.cardIconRingMission}>
                  <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  </svg>
                </div>
                <div className={styles.cardBodyMission}>
                  <h3 className={styles.cardTitleMission}>{copy.mission.title}</h3>
                  <p className={styles.cardDescMission}>{copy.mission.text}</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Visão — card alto em destaque */}
            <ScrollReveal variant="fadeUp" delay={80} className={`${styles.bentoCard} ${styles.cardVision}`}>
              <div className={styles.cardVisionBg}>
                <svg viewBox="0 0 200 200" fill="none">
                  <path d="M10 100 C 50 10, 150 10, 190 100 C 150 190, 50 190, 10 100 Z" stroke="currentColor" strokeWidth="2" opacity="0.2"/>
                  <circle cx="100" cy="100" r="30" stroke="currentColor" strokeWidth="2" opacity="0.3"/>
                  <circle cx="100" cy="100" r="10" fill="currentColor" opacity="0.4"/>
                </svg>
              </div>
              <div className={styles.cardContentWrap}>
                <div className={styles.cardIconRingVision}>
                  <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className={styles.cardBodyMission}>
                  <h3 className={styles.cardTitleVision}>{copy.vision.title}</h3>
                  <p className={styles.cardDescVision}>{copy.vision.text}</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Valores */}
            {copy.values.map((v, i) => {
              const icons = [
                // Ética
                <svg key="ethics" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>,
                // Agilidade
                <svg key="agility" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>,
                // Humanização
                <svg key="human" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>,
                // Segurança
                <svg key="security" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>,
              ];
              // Ética & Agilidade = span 2, Humanização & Segurança = span 3 or span 4 etc.
              // We have 6 columns. Mission=4, Vision=2.
              // Row 2: Ethics=2, Agility=2, Human=2
              // Row 3: Security=6 (or span 3 + span 3 etc)
              // Actually, let's map them dynamically:
              const spanClass = i < 3 ? styles.cardValueSmall : styles.cardValueLarge;
              
              return (
                <ScrollReveal key={v.title} variant="fadeUp" delay={160 + i * 60} className={`${styles.bentoCard} ${spanClass}`}>
                  <div className={styles.cardInner2colValue}>
                    <div className={styles.cardIconRing}>{icons[i]}</div>
                    <div className={styles.cardBody}>
                      <h3 className={styles.cardTitle}>{v.title}</h3>
                      <p className={styles.cardDesc}>{v.text}</p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
