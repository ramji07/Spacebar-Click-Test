import { Link } from 'react-router-dom'
import SEO from '../components/SEO/SEO'
import { blogPosts } from '../data/blogPosts'
import styles from './Guide.module.css'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'SpacebarClickTest.net Guide',
  url: 'https://spacebarclicktest.net/guide',
  description: 'SEO-friendly guides for spacebar speed, CPS testing, keyboard checking, and input performance.',
  publisher: {
    '@type': 'Organization',
    name: 'SpacebarClickTest.net',
    url: 'https://spacebarclicktest.net/',
  },
}

export default function Guide() {
  return (
    <>
      <SEO
        title="Guide - Spacebar, CPS and Keyboard Testing Tips"
        description="Read practical guides about spacebar speed, CPS testing, keyboard checking, and input performance. Learn how to test, train, and improve safely."
        canonical="https://spacebarclicktest.net/guide"
        keywords="spacebar guide, cps guide, keyboard test guide, click speed tips, spacebar speed tips"
        schema={schema}
      />
      <main className={styles.page}>
        <div className="container">
          <header className={styles.header}>
            <p className={styles.eyebrow}>Guides</p>
            <h1><span className="gradient-text">Spacebar and CPS Testing Guides</span></h1>
            <p>Practical, SEO-friendly articles for improving spacebar speed, checking keyboard health, and understanding click speed scores.</p>
          </header>

          <section className={styles.grid} aria-label="Guide articles">
            {blogPosts.map(post => (
              <article key={post.slug} className={`glass-card ${styles.card}`}>
                <Link to={`/guide/${post.slug}`} className={styles.cardImageLink} aria-label={post.title}>
                  <img
                    className={styles.cardImage}
                    src={post.image}
                    alt={post.imageAlt}
                    loading="lazy"
                    decoding="async"
                    width="960"
                    height="540"
                  />
                </Link>
                <div className={styles.cardBody}>
                  <p className={styles.category}>{post.category}</p>
                  <h2>
                    <Link to={`/guide/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p>{post.description}</p>
                  <footer className={styles.meta}>
                    <time dateTime={post.date}>{post.date}</time>
                    <span>{post.readTime}</span>
                    <span>{post.sections.length} sections</span>
                  </footer>
                  <Link to={`/guide/${post.slug}`} className={styles.readMore}>Read full guide</Link>
                </div>
              </article>
            ))}
          </section>
        </div>
      </main>
    </>
  )
}
