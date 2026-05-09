import SEO from '../components/SEO/SEO'
import SpacebarTool from '../components/SpacebarTool/SpacebarTool'
import { Link } from 'react-router-dom'
import styles from './Home.module.css'

const schema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Spacebar Click Test",
  "url": "https://spacebarclicktest.net",
  "description": "Free online spacebar click test tool to measure your spacebar speed, CPS, and total hits.",
  "applicationCategory": "UtilityApplication",
  "operatingSystem": "Any",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "publisher": { "@type": "Organization", "name": "SpacebarClickTest.net", "url": "https://spacebarclicktest.net" }
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "What is a spacebar click test?", "acceptedAnswer": { "@type": "Answer", "text": "A spacebar click test is an online tool that measures how many times you can press the spacebar key within a set time limit. It tracks your total hits, CPS (clicks per second), and more." } },
    { "@type": "Question", "name": "How is CPS calculated?", "acceptedAnswer": { "@type": "Answer", "text": "CPS is calculated by dividing the total number of spacebar presses by the elapsed time in seconds. For example, 50 presses in 10 seconds = 5 CPS." } },
    { "@type": "Question", "name": "Is this tool free?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, SpacebarClickTest.net is completely free to use with no sign-up required." } },
    { "@type": "Question", "name": "Can I use it on mobile?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! Our tool is fully responsive and works on mobile devices by tapping the press area." } },
  ]
}

const FAQS = [
  { q: 'What is a spacebar click test?', a: 'A spacebar click test is an online tool that counts how many times you press the spacebar key within a chosen time limit. It shows your total hits, CPS (clicks per second), and performance rating to help you track and improve your speed.' },
  { q: 'How is CPS calculated?', a: 'CPS stands for Clicks Per Second. It\'s calculated by dividing the total spacebar presses by the elapsed time in seconds. For example, 60 presses in 10 seconds equals 6 CPS.' },
  { q: 'Is this tool free?', a: 'Yes! SpacebarClickTest.net is 100% free to use. No sign-up, no downloads — just visit and start testing.' },
  { q: 'Can I use it on mobile?', a: 'Absolutely. Our tool is fully mobile-responsive. On mobile devices, simply tap the large press area to register hits.' },
  { q: 'How can I improve my spacebar speed?', a: 'Practice with shorter intervals (1-5 seconds) first to build muscle memory. Focus on using your dominant thumb and develop a quick, rhythmic tapping technique. Regular daily practice shows significant improvement within a week.' },
  { q: 'Is my score saved?', a: 'Yes! Your best score is automatically saved in your browser\'s local storage, so it persists between sessions on the same device without any account needed.' },
  { q: 'Is this useful for gamers?', a: 'Definitely. Many games use the spacebar for jumps, attacks, or interactions. Improving your spacebar speed can enhance your reaction time and in-game performance in platformers, rhythm games, and more.' },
]

const SCORE_GUIDE = [
  { range: '0–2 CPS', level: 'Beginner', color: '#606880', tip: 'Just starting out. Focus on relaxing your thumb.' },
  { range: '2–4 CPS', level: 'Average', color: '#00d4ff', tip: 'Above casual use. With practice, you can do better.' },
  { range: '4–6 CPS', level: 'Fast', color: '#9b59ff', tip: 'Solid speed. You\'re in the top 40% of users.' },
  { range: '6–9 CPS', level: 'Pro', color: '#ff2d78', tip: 'Excellent control and speed. Gaming-grade reflexes.' },
  { range: '9+ CPS', level: 'Legend', color: '#00ff88', tip: 'Elite tier. Achieved by less than 5% of users.' },
]

const TIPS = [
  { emoji: '🎯', title: 'Use your dominant thumb', body: 'Your strongest thumb should lead. Focus on short, sharp movements directly on the spacebar center.' },
  { emoji: '⏱', title: 'Start with short intervals', body: 'Train in 1-second and 5-second bursts. Short sprints build faster twitch response than long sessions.' },
  { emoji: '🧘', title: 'Stay relaxed', body: 'Tension slows you down. Keep your wrist relaxed and let your thumb move freely without gripping the keyboard.' },
  { emoji: '🔄', title: 'Practice consistently', body: 'Daily 5-minute sessions outperform occasional long sessions. Your nervous system adapts through repetition.' },
  { emoji: '🖥', title: 'Use a mechanical keyboard', body: 'Keyboards with low actuation force spacebar keys allow faster, less fatiguing presses compared to membrane boards.' },
  { emoji: '📊', title: 'Track your progress', body: 'Use the built-in best score tracker to monitor improvement week over week. Seeing progress is highly motivating.' },
]

const RELATED_TOOLS = [
  { to: '/cps-test', title: 'CPS Test', desc: 'Measure your mouse clicking speed in clicks per second.', icon: '🖱' },
  { to: '/keyboard-test', title: 'Keyboard Test', desc: 'Check which keys work and visualize every keystroke.', icon: '⌨' },
  { to: '/spacebar-click-test', title: 'Spacebar Counter', desc: 'Count spacebar presses with no time limit.', icon: '📊' },
]

export default function Home() {
  return (
    <>
      <SEO
        title="Spacebar Click Test - Test Your Spacebar Speed Online"
        description="Use our free Spacebar Click Test to check how fast you can press the spacebar. Measure your CPS, total hits, best score, and improve your keyboard speed online."
        canonical="https://spacebarclicktest.net/"
        keywords="spacebar click test, spacebar speed test, spacebar counter, spacebar cps test, keyboard spacebar test, how fast can you press spacebar"
        schema={[schema, faqSchema]}
      />

      <main>
        {/* Hero + Tool Section */}
        <section className={styles.hero}>
          <div className={styles.heroBg} aria-hidden="true">
            <div className={styles.orb1} />
            <div className={styles.orb2} />
          </div>
          <div className="container">
            <header className={styles.heroHeader}>
              <h1>
                <span className="gradient-text">Spacebar Click Test</span>
              </h1>
              <p className={styles.heroSub}>
                How fast can you press the spacebar? Test your speed, track your CPS, and beat your best score.
              </p>
            </header>
            <SpacebarTool />
          </div>
        </section>

        {/* Ad slot below hero */}
        <aside className="container" aria-label="Advertisement">
          <div className="ad-slot" style={{height:'90px',margin:'0 0 60px'}}>Advertisement</div>
        </aside>

      {/* How to Use */}
        <section className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle}>How to Use <span className="gradient-text">Spacebar Click Test</span></h2>
          <div className={styles.stepsGrid}>
            {[
              { num: '01', title: 'Choose Your Time', body: 'Select from 1, 5, 10, 15, 30, or 60 seconds — or enter a custom time limit that suits your training style.' },
              { num: '02', title: 'Start the Test', body: 'Press the Spacebar on your keyboard or click the Start button. The timer begins on your first press.' },
              { num: '03', title: 'Tap Away', body: 'Press the spacebar as fast as you can. Watch your live CPS, total hits, and time remaining update in real time.' },
              { num: '04', title: 'See Your Results', body: 'When the timer ends, view your total clicks, CPS, performance level, and how you stack against average scores.' },
            ].map(step => (
              <article key={step.num} className={`glass-card ${styles.stepCard}`}>
                <div className={styles.stepNum}>{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
        </div>
        </section>

      {/* What is it */}
        <section className={styles.sectionAlt}>
        <div className="container">
          <div className={styles.twoCol}>
            <div className={styles.textBlock}>
              <h2>What is a <span className="gradient-text">Spacebar Click Test?</span></h2>
              <p>A Spacebar Click Test is a free online tool that measures how many times you can press the spacebar key within a specific time period. It calculates your total hits, your CPS (Clicks Per Second) score, and compares your performance against standard benchmarks.</p>
              <p>Whether you're a gamer training your reaction time, a developer testing keyboard responsiveness, or simply curious about your typing speed, the spacebar click test provides instant, accurate feedback with zero setup required.</p>
              <p>Our tool tracks your best score automatically, shows live statistics during the test, and gives you a performance rating from Beginner to Legend — making self-improvement both measurable and fun.</p>
            </div>
            <aside className={styles.asideCard}>
              <div className="glass-card" style={{padding:'28px'}}>
                <h3 style={{marginBottom:'16px', fontSize:'1rem', color:'var(--neon-blue)'}}>Quick Facts</h3>
                {[
                  ['Average CPS', '4–6'],
                  ['Pro Gamer CPS', '8–12'],
                  ['World Record', '~16+ CPS'],
                  ['Best Time Limit', '10 seconds'],
                  ['Saves Your Best', '✓ Automatic'],
                ].map(([k, v]) => (
                  <div key={k} className={styles.factRow}>
                    <span>{k}</span><strong style={{color:'var(--neon-purple)'}}>{v}</strong>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
        </section>

      {/* Why Use */}
        <section className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Why Use <span className="gradient-text">This Tool?</span></h2>
          <p className={styles.sectionSub}>SpacebarClickTest.net is designed with speed, accuracy, and simplicity at its core.</p>
          <div className={styles.benefitsGrid}>
            {[
              { icon: '⚡', title: 'Real-time Stats', body: 'See your CPS, total hits, and time left update live with every press.' },
              { icon: '💾', title: 'Auto-save Best Score', body: 'Your personal best is saved locally — no account needed, ever.' },
              { icon: '🎮', title: 'Gamer-Optimized', body: 'Built for competitive gamers who need precise spacebar timing and speed metrics.' },
              { icon: '📱', title: 'Mobile Friendly', body: 'Works on phones, tablets, and desktops with a responsive touch-friendly UI.' },
              { icon: '🔒', title: 'Privacy First', body: 'No data is sent to any server. Everything runs locally in your browser.' },
              { icon: '🆓', title: 'Completely Free', body: 'No sign-ups, no paywalls, no limits. Use as many times as you want.' },
            ].map(item => (
              <article key={item.title} className={`glass-card ${styles.benefitCard}`}>
                <div className={styles.benefitIcon}>{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
        </section>

        {/* Ad slot middle */}
        <aside className="container" aria-label="Advertisement">
          <div className="ad-slot" style={{height:'250px',margin:'0 0 60px'}}>Advertisement</div>
        </aside>

      {/* Score Guide */}
        <section className={styles.sectionAlt}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Spacebar CPS <span className="gradient-text">Score Guide</span></h2>
          <p className={styles.sectionSub}>Where do you rank? Use this guide to understand your current level and what to aim for next.</p>
          <div className={styles.scoreTable}>
            {SCORE_GUIDE.map(row => (
              <div key={row.level} className={`glass-card ${styles.scoreRow}`}>
                <div className={styles.scoreRange}>{row.range}</div>
                <div className={styles.scoreLevel} style={{color: row.color}}>{row.level}</div>
                <div className={styles.scoreTip}>{row.tip}</div>
              </div>
            ))}
          </div>
        </div>
        </section>

      {/* Tips */}
        <section className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Tips to <span className="gradient-text">Improve Speed</span></h2>
          <div className={styles.tipsGrid}>
            {TIPS.map(tip => (
              <article key={tip.title} className={`glass-card ${styles.tipCard}`}>
                <div className={styles.tipEmoji}>{tip.emoji}</div>
                <h3>{tip.title}</h3>
                <p>{tip.body}</p>
              </article>
            ))}
          </div>
        </div>
        </section>

      {/* FAQ */}
        <section className={styles.sectionAlt}>
        <div className="container" style={{maxWidth:'800px'}}>
          <h2 className={styles.sectionTitle}>Frequently Asked <span className="gradient-text">Questions</span></h2>
          <div className={styles.faqList}>
            {FAQS.map(({ q, a }) => (
              <details key={q} className={`glass-card ${styles.faqItem}`}>
                <summary className={styles.faqQ}>{q}</summary>
                <p className={styles.faqA}>{a}</p>
              </details>
            ))}
          </div>
        </div>
        </section>

      {/* Related Tools */}
        <section className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Related <span className="gradient-text">Tools</span></h2>
          <div className={styles.relatedGrid}>
            {RELATED_TOOLS.map(tool => (
              <Link key={tool.to} to={tool.to} className={`glass-card ${styles.relatedCard}`}>
                <div className={styles.relatedIcon}>{tool.icon}</div>
                <h3>{tool.title}</h3>
                <p>{tool.desc}</p>
                <span className={styles.relatedLink}>Try Now →</span>
              </Link>
            ))}
          </div>
        </div>
        </section>
      </main>
    </>
  )
}
