import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

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
            <Link to="/" className={styles.logo}>⌨ <span>SpacebarClickTest.net</span></Link>
            <p>The fastest way to measure your spacebar speed. Free, fun, and accurate. Challenge yourself and beat your best score.</p>
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
          <p>© {currentYear} SpacebarClickTest.net — All rights reserved.</p>
          <p>Built for gamers, typists & speed enthusiasts worldwide.</p>
        </div>
      </div>
    </footer>
  )
}
