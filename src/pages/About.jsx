import { Link } from 'react-router-dom'
import SEO from '../components/SEO/SEO'
import styles from './StaticPage.module.css'

export default function About() {
  return (
    <>
      <SEO
        title="About Us | SpacebarClickTest.net"
        description="Learn about SpacebarClickTest.net — a free online tool for testing spacebar speed, CPS, and keyboard performance. Built for gamers and typists."
        canonical="https://spacebarclicktest.net/about"
      />
      <main className={styles.page}>
        <div className="container">
          <article className={styles.article}>
            <h1><span className="gradient-text">About Us</span></h1>
            <p className={styles.lead}>SpacebarClickTest.net is a free, privacy-first online tool designed to help gamers, typists, and keyboard enthusiasts measure and improve their spacebar pressing speed.</p>

            <h2>Our Mission</h2>
            <p>We believe that performance tools should be fast, free, and accessible to everyone. That's why SpacebarClickTest.net requires no downloads, no accounts, and no fees — ever. Our goal is to give you the most accurate spacebar speed measurement possible, right in your browser.</p>

            <h2>Who We Built This For</h2>
            <p>This tool was built for competitive gamers who rely on fast spacebar responses in platformers, rhythm games, and action titles. It's also used by typists looking to improve their typing workflow, developers testing keyboard hardware responsiveness, and anyone who's simply curious about their reaction speed.</p>

            <h2>How the Tool Works</h2>
            <p>When you press the spacebar, our tool captures the exact browser event timestamp and counts each keydown event within the selected time window. CPS is calculated in real time by dividing total presses by elapsed seconds. Your best score is saved automatically to your browser's local storage — no server ever sees your data.</p>

            <h2>Our Commitment to Privacy</h2>
            <p>SpacebarClickTest.net does not collect personal data. There are no user accounts, no session tracking beyond standard analytics, and no sale of your information to third parties. Please review our Privacy Policy for full details.</p>

            <h2>Contact & Feedback</h2>
            <p>We love hearing from users. If you have suggestions, bug reports, or feature requests, please reach out through our <Link to="/contact">Contact page</Link>. Your feedback helps us make the tool better for everyone.</p>
          </article>
        </div>
      </main>
    </>
  )
}
