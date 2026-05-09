import { Link } from 'react-router-dom'
import SEO from '../components/SEO/SEO'
import styles from './StaticPage.module.css'

export default function TermsAndConditions() {
  return (
    <>
      <SEO
        title="Terms and Conditions | SpacebarClickTest.net"
        description="Read the Terms and Conditions for using SpacebarClickTest.net."
        canonical="https://spacebarclicktest.net/terms-and-conditions"
      />
      <main className={styles.page}>
        <div className="container">
          <article className={styles.article}>
            <h1><span className="gradient-text">Terms and Conditions</span></h1>
            <p className={styles.lead}>Last updated: January 1, 2025. Please read these Terms and Conditions carefully before using SpacebarClickTest.net.</p>

            <h2>1. Acceptance of Terms</h2>
            <p>By accessing or using SpacebarClickTest.net, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you may not access the website.</p>

            <h2>2. Use of the Service</h2>
            <p>SpacebarClickTest.net provides free online tools for personal, non-commercial use. You agree to use the service only for lawful purposes and in a manner consistent with all applicable local, national, and international laws.</p>

            <h2>3. Intellectual Property</h2>
            <p>All content on SpacebarClickTest.net, including text, graphics, code, and tool design, is the property of SpacebarClickTest.net and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without express written permission.</p>

            <h2>4. Accuracy of Information</h2>
            <p>While we strive to provide accurate speed measurements, SpacebarClickTest.net is provided for entertainment and informational purposes. Browser performance, hardware variations, and network conditions may affect results. We make no warranty regarding the accuracy or completeness of results.</p>

            <h2>5. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, SpacebarClickTest.net shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the service. The service is provided "as is" without warranties of any kind.</p>

            <h2>6. Third-Party Links and Ads</h2>
            <p>Our website may contain links to third-party websites and display advertisements from third-party networks including Google AdSense. We are not responsible for the content, privacy practices, or accuracy of any third-party sites.</p>

            <h2>7. Modifications</h2>
            <p>We reserve the right to modify or discontinue the service at any time without notice. We may also update these Terms at any time. Continued use of the site following changes constitutes your acceptance of the revised Terms.</p>

            <h2>8. Governing Law</h2>
            <p>These Terms shall be governed by and construed in accordance with applicable laws. Any disputes arising from these Terms shall be resolved through good-faith negotiation, or if necessary, through appropriate legal proceedings.</p>

            <h2>9. Contact</h2>
            <p>Questions about these Terms may be directed to us via the <Link to="/contact">Contact page</Link>.</p>
          </article>
        </div>
      </main>
    </>
  )
}
