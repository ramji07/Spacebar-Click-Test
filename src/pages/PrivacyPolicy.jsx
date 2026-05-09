import { Link } from 'react-router-dom'
import SEO from '../components/SEO/SEO'
import styles from './StaticPage.module.css'

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy | SpacebarClickTest.net"
        description="SpacebarClickTest.net Privacy Policy. Learn how we collect, use, and protect your data."
        canonical="https://spacebarclicktest.net/privacy-policy"
      />
      <main className={styles.page}>
        <div className="container">
          <article className={styles.article}>
            <h1><span className="gradient-text">Privacy Policy</span></h1>
            <p className={styles.lead}>Last updated: January 1, 2025. This Privacy Policy describes how SpacebarClickTest.net collects, uses, and protects your information.</p>

            <h2>1. Information We Collect</h2>
            <p>SpacebarClickTest.net does not collect personally identifiable information directly. We may collect the following types of anonymous data through third-party services:</p>
            <ul>
              <li>Browser type and version</li>
              <li>Device type (desktop/mobile)</li>
              <li>Pages visited and time spent</li>
              <li>Geographic region (country level only)</li>
            </ul>
            <p>All tool scores and settings are stored exclusively in your browser's localStorage and never transmitted to our servers.</p>

            <h2>2. Cookies and Analytics</h2>
            <p>We may use Google Analytics to understand general traffic patterns. This service uses cookies to collect anonymous usage data. You can opt out via your browser settings or a browser extension. We also use Google AdSense to display advertisements, which may set cookies for personalization purposes.</p>

            <h2>3. Third-Party Advertising</h2>
            <p>We partner with Google AdSense to display ads. Google may use cookies to serve ads based on prior visits to our site or other websites. You can opt out of personalized advertising by visiting Google's Ads Settings. We do not control the content of third-party ads.</p>

            <h2>4. Data Security</h2>
            <p>We implement reasonable technical and organizational security measures to protect any data we process. Since no personal data is transmitted to our servers during tool use, data security risk is minimal.</p>

            <h2>5. Children's Privacy</h2>
            <p>SpacebarClickTest.net does not knowingly collect personal information from children under 13. If you believe your child has provided personal information, please contact us immediately.</p>

            <h2>6. Your Rights</h2>
            <p>You have the right to opt out of cookies via browser settings, request information about data we hold, and request deletion of any data we may have collected. Contact us using the form on our Contact page.</p>

            <h2>7. Changes to This Policy</h2>
            <p>We reserve the right to update this Privacy Policy at any time. Changes will be posted on this page with an updated date. Continued use of the site following any changes constitutes acceptance of the new terms.</p>

            <h2>8. Contact</h2>
            <p>For privacy-related inquiries, please use our <Link to="/contact">Contact page</Link>.</p>
          </article>
        </div>
      </main>
    </>
  )
}
