import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

const BUSINESS_EMAIL = 'Anmolchaurasiya406@gmail.com'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
      <aside className={styles.adSlot} aria-label="Advertisement">
        <div className="ad-slot" style={{height:'90px',maxWidth:'728px',margin:'0 auto',width:'100%'}}>
          Advertisement
        </div>
      </aside>
      <div className={styles.container}>
        <div className={styles.grid}>
          <section className={styles.brand} aria-label="Site summary">
            <Link to="/" className={styles.logo}>SpacebarClickTest.net</Link>
            <p>Free browser-based speed testing tools maintained by Anmol Chaurasiya, full-stack developer.</p>
            <p><a href={`mailto:${BUSINESS_EMAIL}`}>{BUSINESS_EMAIL}</a></p>
          </section>
          <nav className={styles.links} aria-label="Company links">
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </nav>
          <nav className={styles.links} aria-label="Legal links">
            <h4>Legal</h4>
            <ul>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
              <li><Link to="/disclaimer">Disclaimer</Link></li>
            </ul>
          </nav>
        </div>
        <div className={styles.bottom}>
          <p>Copyright {currentYear} SpacebarClickTest.net. All rights reserved.</p>
          <p>Built for gamers, typists, and speed enthusiasts worldwide.</p>
        </div>
      </div>
    </footer>
  )
}
