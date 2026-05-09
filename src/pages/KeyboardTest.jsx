import SEO from '../components/SEO/SEO'
import KeyboardTool from '../components/KeyboardTool/KeyboardTool'
import styles from './ToolPage.module.css'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Keyboard Test',
  url: 'https://spacebarclicktest.net/keyboard-test',
  description: 'Free online keyboard tester for checking keys, stuck buttons, and keyboard input in your browser.',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  publisher: {
    '@type': 'Organization',
    name: 'SpacebarClickTest.net',
    url: 'https://spacebarclicktest.net/',
  },
}

export default function KeyboardTest() {
  return (
    <>
      <SEO
        title="Keyboard Test - Free Online Keyboard Checker"
        description="Test your keyboard online for free. Press any key to see it light up and quickly check stuck keys, dead keys, and keyboard input in your browser."
        canonical="https://spacebarclicktest.net/keyboard-test"
        keywords="keyboard test, keyboard checker, test keyboard keys, keyboard tester online, key test, keyboard input test"
        schema={schema}
      />
      <main className={styles.page}>
        <div className="container">
          <article>
            <header className={styles.header}>
              <h1><span className="gradient-text">Keyboard Test</span></h1>
              <p>Press any key to see it light up on the virtual keyboard. Instantly check if every key on your keyboard is working correctly.</p>
            </header>
            <section aria-label="Online keyboard testing tool">
              <KeyboardTool />
            </section>
            <section style={{maxWidth:'700px',margin:'60px auto 0',color:'var(--text-secondary)',lineHeight:'1.8',fontSize:'0.95rem'}}>
              <h2 style={{marginBottom:'16px',fontFamily:'var(--font-display)',fontSize:'1.3rem',color:'var(--text-primary)'}}>How to Use the Keyboard Tester</h2>
              <p style={{marginBottom:'14px'}}>Simply focus on the page and press any key on your physical keyboard. The corresponding key on the virtual keyboard layout will highlight in blue, confirming it registered correctly. This is useful for diagnosing stuck keys, dead zones, or keys that stopped working after cleaning.</p>
              <p>Our keyboard tester supports all standard keys including modifiers (Shift, Ctrl, Alt), function keys, and the spacebar. It works on Windows, Mac, and Linux keyboards in any modern browser.</p>
            </section>
          </article>
        </div>
      </main>
    </>
  )
}
