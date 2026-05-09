import { Link } from 'react-router-dom'
import SEO from '../components/SEO/SEO'
import styles from './StaticPage.module.css'

export default function Disclaimer() {
  return (
    <>
      <SEO
        title="Disclaimer | SpacebarClickTest.net"
        description="Disclaimer for SpacebarClickTest.net. Information about accuracy, limitations, and appropriate use of our spacebar speed testing tool."
        canonical="https://spacebarclicktest.net/disclaimer"
      />
      <main className={styles.page}>
        <div className="container">
          <article className={styles.article}>
            <h1><span className="gradient-text">Disclaimer</span></h1>
            <p className={styles.lead}>Last updated: January 1, 2025. Please read this disclaimer carefully before relying on results from SpacebarClickTest.net.</p>

            <h2>General Disclaimer</h2>
            <p>The information and tools provided on SpacebarClickTest.net are for entertainment and general informational purposes only. Nothing on this website should be construed as professional advice of any kind.</p>

            <h2>Accuracy of Results</h2>
            <p>Spacebar speed and CPS measurements are based on browser event timing, which may vary depending on browser version, operating system, keyboard hardware, system load, and other environmental factors. Results are approximations and should not be used for any professional, medical, or competitive certification purposes without independent verification.</p>

            <h2>No Professional Advice</h2>
            <p>SpacebarClickTest.net does not provide medical, ergonomic, or occupational health advice. If you experience pain, discomfort, or repetitive strain symptoms while using keyboards or this tool, please consult a qualified healthcare professional.</p>

            <h2>Third-Party Content</h2>
            <p>Our site may display advertisements and links to third-party websites. SpacebarClickTest.net is not responsible for the content, accuracy, or practices of any third-party sites. Inclusion of any link does not constitute endorsement.</p>

            <h2>Fair Use</h2>
            <p>All content on SpacebarClickTest.net is created for educational and informational purposes. Any references to external tools, brands, or products are for comparative reference only and do not imply affiliation or endorsement.</p>

            <h2>Changes</h2>
            <p>This disclaimer may be updated at any time without prior notice. Continued use of the site following updates constitutes acceptance of the revised disclaimer.</p>

            <h2>Contact</h2>
            <p>For questions regarding this disclaimer, please use our <Link to="/contact">Contact page</Link>.</p>
          </article>
        </div>
      </main>
    </>
  )
}
