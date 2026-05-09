import { Link } from 'react-router-dom'
import SEO from '../components/SEO/SEO'
import styles from './StaticPage.module.css'

const BUSINESS_EMAIL = 'Anmolchaurasiya406@gmail.com'

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy | SpacebarClickTest.net"
        description="Read the SpacebarClickTest.net Privacy Policy, including local browser storage, analytics, advertising, cookies, and contact details."
        canonical="https://spacebarclicktest.net/privacy-policy"
      />
      <main className={styles.page}>
        <div className="container">
          <article className={styles.article}>
            <h1><span className="gradient-text">Privacy Policy</span></h1>
            <p className={styles.lead}>Last updated: May 9, 2026. This Privacy Policy explains how SpacebarClickTest.net handles information when you use our browser-based speed testing tools and guides.</p>

            <h2>1. Site Owner and Contact</h2>
            <p>SpacebarClickTest.net is maintained by Anmol Chaurasiya. For privacy questions, correction requests, or business inquiries, contact us at <a href={`mailto:${BUSINESS_EMAIL}`}>{BUSINESS_EMAIL}</a> or through the <Link to="/contact">Contact page</Link>.</p>

            <h2>2. Information We Collect</h2>
            <p>We do not require user accounts, names, passwords, or profile information to use the tools. The spacebar, CPS, and keyboard tests are designed to run in your browser. Your test interactions are used by the page to calculate visible results.</p>
            <p>We may receive limited non-personal usage information through analytics or advertising services, such as browser type, device type, approximate region, pages visited, and general interaction patterns.</p>

            <h2>3. Local Browser Storage</h2>
            <p>Best scores and selected preferences may be stored in your browser's local storage. This keeps your score available on the same device without creating an account. You can clear this data anytime by clearing your browser storage or site data.</p>

            <h2>4. Cookies, Analytics, and Ads</h2>
            <p>We may use analytics tools to understand traffic and improve the website. We may also display ads through third-party advertising partners such as Google AdSense. These services may use cookies or similar technologies according to their own policies.</p>

            <h2>5. How We Use Information</h2>
            <ul>
              <li>To operate and improve the website and tools.</li>
              <li>To understand which pages and features are useful.</li>
              <li>To troubleshoot performance, layout, or browser issues.</li>
              <li>To display ads where applicable.</li>
              <li>To respond to messages sent through email or the contact page.</li>
            </ul>

            <h2>6. Data Sharing</h2>
            <p>We do not sell personal information. Third-party services used for analytics, hosting, or advertising may process limited technical data under their own privacy practices. We do not control third-party websites or advertisements.</p>

            <h2>7. Children's Privacy</h2>
            <p>SpacebarClickTest.net is a general audience website and does not knowingly collect personal information from children under 13. If you believe a child has provided personal information, contact us so we can review the request.</p>

            <h2>8. Your Choices</h2>
            <p>You can disable cookies in your browser, clear local storage, use private browsing mode, or contact us with privacy questions. Some features, such as saved best scores, may reset when local storage is cleared.</p>

            <h2>9. Changes to This Policy</h2>
            <p>We may update this Privacy Policy when the site, tools, ads, or analytics setup changes. Updates will be posted on this page with a revised date.</p>
          </article>
        </div>
      </main>
    </>
  )
}
