import { Link, Navigate, useParams } from 'react-router-dom'
import SEO from '../components/SEO/SEO'
import { blogPosts, getBlogPost } from '../data/blogPosts'
import styles from './Guide.module.css'

export default function BlogPost() {
  const { slug } = useParams()
  const post = getBlogPost(slug)

  if (!post) return <Navigate to="/guide" replace />

  const relatedPosts = blogPosts.filter(item => item.slug !== post.slug).slice(0, 3)
  const sectionId = (heading) => heading.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
  const canonical = `https://spacebarclicktest.net/guide/${post.slug}`
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: canonical,
    url: canonical,
    author: {
      '@type': 'Organization',
      name: 'SpacebarClickTest.net',
      url: 'https://spacebarclicktest.net/',
    },
    publisher: {
      '@type': 'Organization',
      name: 'SpacebarClickTest.net',
      url: 'https://spacebarclicktest.net/',
    },
    image: `https://spacebarclicktest.net${post.image}`,
  }

  return (
    <>
      <SEO
        title={`${post.title} | SpacebarClickTest.net`}
        description={post.description}
        canonical={canonical}
        keywords={post.keywords}
        type="article"
        schema={schema}
      />
      <main className={styles.articlePage}>
        <div className="container">
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/guide">Guide</Link>
            <span>/</span>
            <span>{post.category}</span>
          </nav>

          <article>
            <header className={styles.articleHeader}>
              <p className={styles.eyebrow}>{post.category}</p>
              <h1><span className="gradient-text">{post.title}</span></h1>
              <p>{post.intro}</p>
              <div className={styles.articleMeta}>
                <time dateTime={post.date}>Updated {post.date}</time>
                <span>{post.readTime}</span>
              </div>
              <img
                className={styles.articleImage}
                src={post.image}
                alt={post.imageAlt}
                loading="eager"
                decoding="async"
                fetchPriority="high"
                width="960"
                height="540"
              />
            </header>

            <div className={styles.layout}>
              <div className={styles.content}>
                {post.sections.map(section => (
                  <section key={section.heading} id={sectionId(section.heading)}>
                    <h2>{section.heading}</h2>
                    {section.paragraphs.map(paragraph => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </section>
                ))}
              </div>

              <aside className={styles.sidebar} aria-label="Article navigation">
                <h2>In This Guide</h2>
                <ol className={styles.toc}>
                  {post.sections.map(section => (
                    <li key={section.heading}>
                      <a href={`#${sectionId(section.heading)}`}>{section.heading}</a>
                    </li>
                  ))}
                </ol>

                <h2 className={styles.relatedTitle}>Related Guides</h2>
                <ul>
                  {relatedPosts.map(item => (
                    <li key={item.slug}>
                      <Link to={`/guide/${item.slug}`}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </aside>
            </div>
          </article>
        </div>
      </main>
    </>
  )
}
