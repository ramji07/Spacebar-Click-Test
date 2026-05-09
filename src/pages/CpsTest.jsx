import SEO from '../components/SEO/SEO'
import CpsTool from '../components/CpsTool/CpsTool'
import styles from './ToolPage.module.css'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'CPS Test',
  url: 'https://spacebarclicktest.net/cps-test',
  description: 'Free online CPS test that measures mouse clicks per second across multiple time limits.',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  publisher: {
    '@type': 'Organization',
    name: 'SpacebarClickTest.net',
    url: 'https://spacebarclicktest.net/',
  },
}

export default function CpsTest() {
  return (
    <>
      <SEO
        title="CPS Test - Free Mouse Click Speed Test Online"
        description="Test your mouse clicking speed with a free CPS Test. Measure clicks per second across 1, 5, 10, 15, and 30 second intervals and track your best score."
        canonical="https://spacebarclicktest.net/cps-test"
        keywords="cps test, click speed test, clicks per second, mouse click test, cps checker, click test online"
        schema={schema}
      />
      <main className={styles.page}>
        <div className="container">
          <article>
            <header className={styles.header}>
              <h1><span className="gradient-text">CPS Test</span></h1>
              <p>Click as fast as possible and measure your CPS. Choose a time limit and challenge yourself to break your record.</p>
            </header>
            <section aria-label="Mouse click speed test tool">
              <CpsTool />
            </section>
            <section style={{maxWidth:'700px',margin:'60px auto 0',color:'var(--text-secondary)',lineHeight:'1.8',fontSize:'0.95rem'}}>
              <h2 style={{marginBottom:'16px',fontFamily:'var(--font-display)',fontSize:'1.3rem',color:'var(--text-primary)'}}>What is a CPS Test?</h2>
              <p style={{marginBottom:'14px'}}>A CPS test measures how many times you can click your mouse in a given time period. It is commonly used by gamers to improve clicking speed for competitive games where rapid clicking can matter.</p>
              <p>The average person clicks at about 6 to 8 CPS. Professional gamers using advanced techniques can reach higher scores, but accuracy and comfort are more important than raw speed alone.</p>
            </section>
          </article>
        </div>
      </main>
    </>
  )
}
