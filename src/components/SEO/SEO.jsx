import { Helmet } from 'react-helmet-async'

const SEO = ({
  title = 'Spacebar Click Test - Test Your Spacebar Speed Online',
  description = 'Use our free Spacebar Click Test to check how fast you can press the spacebar. Measure your CPS, total hits, best score, and improve your keyboard speed online.',
  canonical = 'https://spacebarclicktest.net/',
  keywords = 'spacebar click test, spacebar speed test, spacebar counter, spacebar cps test',
  ogImage = 'https://spacebarclicktest.net/og-image.png',
  type = 'website',
  schema = null,
}) => {
  const jsonLd = schema ? (Array.isArray(schema) ? schema : [schema]) : null

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />
      <meta name="robots" content="index, follow" />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Spacebar Click Test" />
      <meta property="og:locale" content="en_US" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:url" content={canonical} />
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  )
}

export default SEO
