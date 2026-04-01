import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { SITE_URL } from '../utils/siteConfig'

const SITE_NAME = 'Music Drama Radio'
const SOCIAL_LINKS = [
  'https://www.instagram.com/musicdramaradio?igsh=MmVjOTZpeGZxMzJw',
  'https://www.threads.com/@musicdramaradio?xmt=AQF0aaRE900YQp-BPX8Zmc1ltazQN0LJ9HuFvsJMQX9e6w0',
  'https://mixcloud.com/musicdrama',
  'https://radiopanda.it'
]

function setMeta(selector, attribute, value) {
  let meta = document.head.querySelector(selector)

  if (!value) {
    if (meta) {
      meta.remove()
    }
    return
  }

  if (!meta) {
    meta = document.createElement('meta')
    meta.setAttribute(attribute, selector.includes('property=') ? selector.match(/property="([^"]+)"/)[1] : selector.match(/name="([^"]+)"/)[1])
    document.head.appendChild(meta)
  }

  meta.setAttribute('content', value)
}

function setLink(rel, href) {
  let link = document.head.querySelector(`link[rel="${rel}"]`)

  if (!href) {
    if (link) {
      link.remove()
    }
    return
  }

  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', rel)
    document.head.appendChild(link)
  }

  link.setAttribute('href', href)
}

function normalizeUrl(url) {
  return url.split('?')[0]
}

export function useSeo({
  description,
  language,
  pageName,
  pageType = 'WebPage',
  structuredData = [],
  title,
  type = 'website'
}) {
  const location = useLocation()

  useEffect(() => {
    const currentUrl = normalizeUrl(`${SITE_URL}${location.pathname}`)
    const locale = language === 'it' ? 'it_IT' : 'en_US'

    document.title = title

    setMeta('meta[name="description"]', 'name', description)
    setMeta('meta[name="robots"]', 'name', 'index,follow')
    setMeta('meta[name="twitter:card"]', 'name', 'summary')
    setMeta('meta[name="twitter:title"]', 'name', title)
    setMeta('meta[name="twitter:description"]', 'name', description)
    setMeta('meta[property="og:title"]', 'property', title)
    setMeta('meta[property="og:description"]', 'property', description)
    setMeta('meta[property="og:type"]', 'property', type)
    setMeta('meta[property="og:url"]', 'property', currentUrl)
    setMeta('meta[property="og:site_name"]', 'property', SITE_NAME)
    setMeta('meta[property="og:locale"]', 'property', locale)
    setLink('canonical', currentUrl)

    const defaultStructuredData = [
      {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        '@id': `${SITE_URL}#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        sameAs: SOCIAL_LINKS
      },
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': `${SITE_URL}#website`,
        name: SITE_NAME,
        url: SITE_URL,
        description
      },
      {
        '@context': 'https://schema.org',
        '@type': pageType,
        name: pageName,
        description,
        inLanguage: language,
        isPartOf: {
          '@id': `${SITE_URL}#website`
        },
        url: currentUrl
      }
    ]

    let script = document.head.querySelector('script[data-seo="structured-data"]')

    if (!script) {
      script = document.createElement('script')
      script.setAttribute('type', 'application/ld+json')
      script.setAttribute('data-seo', 'structured-data')
      document.head.appendChild(script)
    }

    script.textContent = JSON.stringify([...defaultStructuredData, ...structuredData])
  }, [description, language, location.pathname, pageName, pageType, structuredData, title, type])
}
