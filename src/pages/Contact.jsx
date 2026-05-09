import { useState } from 'react'
import SEO from '../components/SEO/SEO'
import styles from './StaticPage.module.css'

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
        description="Get in touch with SpacebarClickTest.net. Send us your feedback, bug reports, or feature requests."
        canonical="https://spacebarclicktest.net/contact"
      />
      <main className={styles.page}>
        <div className="container">
          <article className={styles.article}>
            <h1><span className="gradient-text">Contact Us</span></h1>
            <p className={styles.lead}>Have a question, suggestion, or found a bug? We'd love to hear from you. Use the form below to send us a message.</p>
            {sent ? (
              <section role="status" aria-live="polite" style={{padding:'32px',background:'rgba(0,255,136,0.08)',border:'1px solid rgba(0,255,136,0.3)',borderRadius:'16px',textAlign:'center'}}>
                <div style={{fontSize:'2.5rem',marginBottom:'16px'}}>✅</div>
                <h2 style={{color:'var(--neon-green)',marginTop:0}}>Message Sent!</h2>
                <p>Thank you for reaching out. We typically respond within 24–48 hours.</p>
              </section>
            ) : (
              <form className={styles.contactForm} onSubmit={handleSubmit} aria-label="Contact form">
                <div className={styles.formGroup}>
                  <label htmlFor="name">Your Name</label>
                  <input id="name" type="text" placeholder="John Doe" required />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email Address</label>
                  <input id="email" type="email" placeholder="john@example.com" required />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="subject">Subject</label>
                  <input id="subject" type="text" placeholder="Feedback / Bug Report / Feature Request" required />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="message">Message</label>
                  <textarea id="message" placeholder="Tell us what's on your mind..." required />
                </div>
                <button type="submit" className="btn-neon" style={{width:'100%',padding:'14px'}}>Send Message</button>
              </form>
            )}
          </article>
        </div>
      </main>
    </>
  )
}
