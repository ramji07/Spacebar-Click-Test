import { Link } from 'react-router-dom'
import SEO from '../components/SEO/SEO'
import styles from './StaticPage.module.css'

const BUSINESS_EMAIL = 'Anmolchaurasiya406@gmail.com'

export default function Disclaimer() {
  return (
    <>
      <SEO
        title="Disclaimer | SpacebarClickTest.net"
        description="Read the SpacebarClickTest.net disclaimer about result accuracy, professional advice, third-party content, and safe use."
        canonical="https://spacebarclicktest.net/disclaimer"
      />
      <main className={styles.page}>
        <div className="container">
          <article className={styles.article}>
            <h1><span className="gradient-text">Disclaimer</span></h1>
            <p className={styles.lead}>Last updated: May 9, 2026. This disclaimer explains the limitations of our tools, guides, and website content.</p>

            <h2>General Disclaimer</h2>
            <p>SpacebarClickTest.net provides browser-based tools and educational content for general informational and entertainment purposes. The site is maintained by Anmol Chaurasiya, a full-stack developer, but the content is not professional medical, legal, ergonomic, or occupational advice.</p>

            <h2>Accuracy of Results</h2>
            <p>Spacebar speed and CPS measurements are based on browser event timing. Results can vary depending on keyboard hardware, mouse hardware, browser version, operating system, device performance, system load, and test conditions. Use scores as helpful estimates, not official certification.</p>

            <h2>No Medical or Ergonomic Advice</h2>
            <p>If you experience pain, numbness, discomfort, or repetitive strain symptoms while using a keyboard, mouse, or this website, stop the activity and consult a qualified healthcare professional. Our guides encourage safe practice, but they do not replace professional advice.</p>

            <h2>Developer and Editorial Experience</h2>
            <p>Our explanations are informed by web development knowledge of browser input events, frontend performance, local storage, and user interface behavior. We aim to make technical limitations clear so users understand what the tools can and cannot measure.</p>

            <h2>Third-Party Content and Ads</h2>
            <p>The website may display advertisements or links to third-party websites. SpacebarClickTest.net is not responsible for third-party content, claims, privacy practices, or offers. A link or ad does not mean we endorse that website or product.</p>

            <h2>Corrections and Updates</h2>
            <p>We review correction requests and may update pages when information becomes clearer or tool behavior changes. To report an issue, email <a href={`mailto:${BUSINESS_EMAIL}`}>{BUSINESS_EMAIL}</a> or use the <Link to="/contact">Contact page</Link>.</p>

            <h2>Contact</h2>
            <p>For questions about this disclaimer, contact <a href={`mailto:${BUSINESS_EMAIL}`}>{BUSINESS_EMAIL}</a>.</p>
          </article>
        </div>
      </main>
    </>
  )
}
