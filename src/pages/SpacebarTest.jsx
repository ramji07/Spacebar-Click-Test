import SEO from '../components/SEO/SEO'
import SpacebarTool from '../components/SpacebarTool/SpacebarTool'
import styles from './ToolPage.module.css'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Spacebar Click Test',
  url: 'https://spacebarclicktest.net/spacebar-click-test',
  description: 'Free online spacebar speed test that measures spacebar CPS, total hits, and best score.',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  publisher: {
    '@type': 'Organization',
    name: 'SpacebarClickTest.net',
    url: 'https://spacebarclicktest.net/',
  },
}

export default function SpacebarTest() {
  return (
    <>
      <SEO
        title="Spacebar Click Test - Free Spacebar Speed Test Online"
        description="Press the spacebar as fast as you can and measure your CPS, total hits, best score, and performance level with this free online spacebar speed test."
        canonical="https://spacebarclicktest.net/spacebar-click-test"
        keywords="spacebar click test, spacebar speed test, spacebar counter, spacebar cps test, spacebar challenge, spacebar test online"
        schema={schema}
      />
      <main className={styles.page}>
        <div className="container">
          <article>
            <header className={styles.header}>
              <h1><span className="gradient-text">Spacebar Click Test</span></h1>
              <p>Press the spacebar as fast as possible within the time limit. Track your CPS, total hits, and beat your personal best.</p>
            </header>
            <section aria-label="Spacebar speed test tool">
              <SpacebarTool />
            </section>
          </article>
        </div>
      </main>
    </>
  )
}
