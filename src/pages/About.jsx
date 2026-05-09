import { Link } from 'react-router-dom'
import SEO from '../components/SEO/SEO'
import styles from './StaticPage.module.css'

const BUSINESS_EMAIL = 'Anmolchaurasiya406@gmail.com'

export default function About() {
  return (
    <>
      <SEO
        title="About Us | SpacebarClickTest.net"
        description="Learn about SpacebarClickTest.net, who maintains it, how our browser-based testing tools work, and how we review content for accuracy."
        canonical="https://spacebarclicktest.net/about"
      />
      <main className={styles.page}>
        <div className="container">
          <article className={styles.article}>
            <h1><span className="gradient-text">About Us</span></h1>
            <p className={styles.lead}>SpacebarClickTest.net is a free, privacy-first online tool designed to help gamers, typists, and keyboard users measure spacebar speed, CPS, and keyboard responsiveness directly in the browser.</p>

            <section className={styles.trustBox} aria-label="Site ownership and expertise">
              <h2>Built and Maintained by a Full-Stack Developer</h2>
              <p>SpacebarClickTest.net is maintained by Anmol Chaurasiya, a full-stack developer who builds browser-based tools, frontend interfaces, and performance-focused web applications. This developer background helps us keep the testing experience fast, lightweight, accessible, and technically transparent.</p>
              <p>Business email: <a href={`mailto:${BUSINESS_EMAIL}`}>{BUSINESS_EMAIL}</a></p>
            </section>

            <h2>Our Mission</h2>
            <p>We believe performance tools should be fast, free, and accessible to everyone. SpacebarClickTest.net requires no downloads, no accounts, and no fees. Our goal is to provide a simple way to measure keyboard and click speed while explaining how the results are calculated.</p>

            <h2>Who We Built This For</h2>
            <p>This site is built for gamers who rely on quick keyboard input, typists who want to understand their spacebar rhythm, developers testing keyboard responsiveness, and users who want a quick online keyboard or CPS check.</p>

            <h2>How the Tool Works</h2>
            <p>When you press the spacebar, the tool captures browser keyboard events inside the selected time window. CPS is calculated by dividing total presses by elapsed seconds. Your best score is stored in your browser's local storage, which means the score stays on your device rather than being sent to a user account.</p>

            <h2>Editorial and Testing Process</h2>
            <p>Our guides are written from practical testing and web development experience. We explain browser events, keyboard input, CPS calculations, and local storage in plain language so users can understand both the score and its limitations. When we update a tool or article, we check that the page remains usable on desktop and mobile devices.</p>

            <h2>Why You Can Trust This Site</h2>
            <ul>
              <li>Tool logic runs directly in your browser for fast feedback.</li>
              <li>Scores are calculated from visible inputs such as total presses and elapsed time.</li>
              <li>Best scores are stored locally in your browser, not in a user account.</li>
              <li>We clearly separate informational guidance from medical or professional advice.</li>
              <li>Every important page includes a direct contact path for corrections, feedback, and business inquiries.</li>
            </ul>

            <h2>Our Commitment to Privacy</h2>
            <p>SpacebarClickTest.net is designed to work without collecting personal account data. Please review our <Link to="/privacy-policy">Privacy Policy</Link> for details about analytics, ads, cookies, and local browser storage.</p>

            <h2>Contact and Feedback</h2>
            <p>If you have suggestions, bug reports, corrections, or feature requests, please reach out through our <Link to="/contact">Contact page</Link> or email <a href={`mailto:${BUSINESS_EMAIL}`}>{BUSINESS_EMAIL}</a>.</p>
          </article>
        </div>
      </main>
    </>
  )
}
