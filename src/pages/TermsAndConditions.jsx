import { Link } from 'react-router-dom'
import SEO from '../components/SEO/SEO'
import styles from './StaticPage.module.css'

const BUSINESS_EMAIL = 'Anmolchaurasiya406@gmail.com'

export default function TermsAndConditions() {
  return (
    <>
      <SEO
        title="Terms and Conditions | SpacebarClickTest.net"
        description="Read the Terms and Conditions for using SpacebarClickTest.net tools, guides, and website content."
        canonical="https://spacebarclicktest.net/terms-and-conditions"
      />
      <main className={styles.page}>
        <div className="container">
          <article className={styles.article}>
            <h1><span className="gradient-text">Terms and Conditions</span></h1>
            <p className={styles.lead}>Last updated: May 9, 2026. Please read these Terms and Conditions before using SpacebarClickTest.net.</p>

            <h2>1. Acceptance of Terms</h2>
            <p>By accessing or using SpacebarClickTest.net, you agree to these Terms. If you do not agree, please stop using the website.</p>

            <h2>2. About the Service</h2>
            <p>SpacebarClickTest.net provides free browser-based tools and informational guides for spacebar speed, CPS testing, keyboard checking, and input performance. The site is maintained by Anmol Chaurasiya, a full-stack developer.</p>

            <h2>3. Use of the Website</h2>
            <p>You agree to use the website only for lawful purposes. You must not attempt to disrupt the site, abuse automated requests, copy the site design for misleading purposes, or use the tools in a way that harms other users or the service.</p>

            <h2>4. Accuracy of Results</h2>
            <p>We aim to make the tools fast and useful, but browser performance, keyboard hardware, operating system behavior, and device settings can affect results. Scores are provided for general informational and entertainment purposes.</p>

            <h2>5. Content and Intellectual Property</h2>
            <p>Text, code, graphics, tool design, and website content belong to SpacebarClickTest.net unless otherwise stated. You may link to our pages, but you may not copy, republish, or present our content as your own without permission.</p>

            <h2>6. User Feedback</h2>
            <p>If you send feedback, corrections, or feature ideas, you allow us to use that feedback to improve the site without obligation to compensate you. We appreciate correction reports and review them in good faith.</p>

            <h2>7. Third-Party Services</h2>
            <p>The site may include third-party advertisements, analytics, hosting, or external links. We are not responsible for third-party websites, policies, products, or claims.</p>

            <h2>8. Limitation of Liability</h2>
            <p>SpacebarClickTest.net is provided as is and as available. To the maximum extent allowed by law, we are not liable for indirect, incidental, consequential, or special damages related to your use of the website.</p>

            <h2>9. Changes to These Terms</h2>
            <p>We may update these Terms from time to time. Continued use of the site after updates means you accept the revised Terms.</p>

            <h2>10. Contact</h2>
            <p>Questions about these Terms may be sent to <a href={`mailto:${BUSINESS_EMAIL}`}>{BUSINESS_EMAIL}</a> or through our <Link to="/contact">Contact page</Link>.</p>
          </article>
        </div>
      </main>
    </>
  )
}
