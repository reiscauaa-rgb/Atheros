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

      {/* Mission / Vision / Values */}
      <section className={styles.mvv}>
        <div className="container">
          <ScrollReveal variant="fadeUp">
            <h2 className={styles.mvvTitle}>{copy.missionTitle}</h2>
          </ScrollReveal>
          <div className={styles.mvvGrid}>
            {[copy.mission, copy.vision].map((item) => (
              <ScrollReveal key={item.title} variant="fadeUp">
                <div className={styles.mvvCard}>
                  <span className={styles.mvvIcon}>{item.icon}</span>
                  <h3 className={styles.mvvCardTitle}>{item.title}</h3>
                  <p className={styles.mvvText}>{item.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className={styles.valuesGrid}>
            {copy.values.map((v, i) => (
              <ScrollReveal key={v.title} variant="fadeUp" delay={i * 80}>
                <div className={styles.valueCard}>
                  <span className={styles.valueIcon}>{v.icon}</span>
                  <strong className={styles.valueTitle}>{v.title}</strong>
                  <p className={styles.valueText}>{v.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
