import { useState } from 'react'
import SEO from '../components/SEO/SEO'
import styles from './StaticPage.module.css'

const BUSINESS_EMAIL = 'Anmolchaurasiya406@gmail.com'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <SEO
        title="Contact Us | SpacebarClickTest.net"
        description="Contact SpacebarClickTest.net for feedback, corrections, bug reports, business inquiries, and support."
        canonical="https://spacebarclicktest.net/contact"
      />
      <main className={styles.page}>
        <div className="container">
          <article className={styles.article}>
            <h1><span className="gradient-text">Contact Us</span></h1>
            <p className={styles.lead}>Have a question, suggestion, correction, or bug report? Contact SpacebarClickTest.net using the business email below or the quick message form.</p>

            <section className={styles.trustBox} aria-label="Business contact">
              <h2>Business Email</h2>
              <p><a href={`mailto:${BUSINESS_EMAIL}`}>{BUSINESS_EMAIL}</a></p>
              <p>Use this email for corrections, partnerships, technical issues, advertising questions, and general site feedback. We aim to review genuine messages within 24-48 hours.</p>
            </section>

            <h2>What to Include</h2>
            <ul>
              <li>The page URL where you noticed the issue.</li>
              <li>Your device and browser if you are reporting a bug.</li>
              <li>A short description of what happened and what you expected.</li>
              <li>Any correction request for article content or tool behavior.</li>
            </ul>

            {sent ? (
              <section role="status" aria-live="polite" className={styles.successBox}>
                <h2>Message Sent</h2>
                <p>Thank you for reaching out. You can also email us directly at <a href={`mailto:${BUSINESS_EMAIL}`}>{BUSINESS_EMAIL}</a>.</p>
              </section>
            ) : (
              <form className={styles.contactForm} onSubmit={handleSubmit} aria-label="Contact form">
                <div className={styles.formGroup}>
                  <label htmlFor="name">Your Name</label>
                  <input id="name" type="text" placeholder="Your name" required />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email Address</label>
                  <input id="email" type="email" placeholder="you@example.com" required />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="subject">Subject</label>
                  <input id="subject" type="text" placeholder="Feedback / Bug Report / Correction" required />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="message">Message</label>
                  <textarea id="message" placeholder="Tell us what you need help with..." required />
                </div>
                <button type="submit" className="btn-neon">Send Message</button>
              </form>
            )}
          </article>
        </div>
      </main>
    </>
  )
}
