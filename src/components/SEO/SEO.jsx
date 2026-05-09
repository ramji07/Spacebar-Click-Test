import { useEffect } from 'react'

const SEO = ({
  title = 'Spacebar Click Test - Test Your Spacebar Speed Online',
  description = 'Use our free Spacebar Click Test to check how fast you can press the spacebar. Measure your CPS, total hits, best score, and improve your keyboard speed online.',
  canonical = 'https://spacebarclicktest.net/',
  keywords = 'spacebar click test, spacebar speed test, spacebar counter, spacebar cps test',
  ogImage = 'https://spacebarclicktest.net/og-image.png',
  type = 'website',
  schema = null,
}) => {
  useEffect(() => {
    const jsonLd = schema ? (Array.isArray(schema) ? schema : [schema]) : null
    const managedNodes = []

    const upsertMeta = (attribute, key, content) => {
      let tag = document.head.querySelector(`meta[${attribute}="${key}"]`)
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute(attribute, key)
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', content)
      managedNodes.push(tag)
    }

    document.title = title
    upsertMeta('name', 'description', description)
    upsertMeta('name', 'keywords', keywords)
    upsertMeta('name', 'robots', 'index, follow')
    upsertMeta('property', 'og:type', type)
    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:url', canonical)
    upsertMeta('property', 'og:image', ogImage)
    upsertMeta('property', 'og:site_name', 'Spacebar Click Test')
    upsertMeta('property', 'og:locale', 'en_US')
    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', title)
    upsertMeta('name', 'twitter:description', description)
    upsertMeta('name', 'twitter:image', ogImage)
    upsertMeta('name', 'twitter:url', canonical)

    let canonicalTag = document.head.querySelector('link[rel="canonical"]')
    if (!canonicalTag) {
      canonicalTag = document.createElement('link')
      canonicalTag.setAttribute('rel', 'canonical')
      document.head.appendChild(canonicalTag)
    }
    canonicalTag.setAttribute('href', canonical)
    managedNodes.push(canonicalTag)

    document.head.querySelectorAll('script[data-seo-schema="true"]').forEach(node => node.remove())
    if (jsonLd) {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.dataset.seoSchema = 'true'
      script.textContent = JSON.stringify(jsonLd)
      document.head.appendChild(script)
      managedNodes.push(script)
    }

    return () => {
      managedNodes.forEach(node => {
        if (node.dataset?.seoSchema === 'true') node.remove()
      })
    }
  }, [canonical, description, keywords, ogImage, schema, title, type])

  return null
}

export default SEO
