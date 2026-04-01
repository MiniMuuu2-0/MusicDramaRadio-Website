import { Link } from 'react-router-dom'
import { useState, useEffect, useMemo } from 'react'
import TypewriterText from '../components/TypewriterText'
import { useLanguage } from '../hooks/useLanguage'
import { useSeo } from '../hooks/useSeo'
import { translations } from '../utils/translations'
import { homeCards } from '../data/homeContent'
import { artists } from '../data/artists'
import { blogPosts } from '../data/blogPosts'
import { interviews } from '../data/interviews'
import { homeLandingContent } from '../content/homeLandingContent'

function Home() {
  const { language } = useLanguage()
  const t = translations[language]
  const landingContent = homeLandingContent[language]
  const [cardsVisible, setCardsVisible] = useState(false)

  const faqStructuredData = useMemo(
    () => [
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: landingContent.faqItems.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer
          }
        }))
      }
    ],
    [landingContent]
  )

  useSeo({
    title: t.homeTitle,
    description: t.homeDescription,
    language,
    pageName: t.siteName,
    pageType: 'WebSite',
    structuredData: faqStructuredData,
    type: 'website'
  })

  const dateFormatter = useMemo(() => {
    const locale = language === 'it' ? 'it-IT' : 'en-US'
    return new Intl.DateTimeFormat(locale, { day: '2-digit', month: 'long', year: 'numeric' })
  }, [language])

  const timelineItems = useMemo(() => {
    const blogItems = blogPosts.map((post) => ({
      id: post.id,
      type: 'blog',
      title: post.title[language],
      description: post.excerpt[language],
      date: post.date,
      path: `/blog/${post.slug}`
    }))

    const interviewItems = interviews.map((interview) => ({
      id: interview.id,
      type: 'interview',
      title: interview.title[language],
      description: interview.description[language],
      date: interview.date,
      path: `/interviews/${interview.slug}`
    }))

    return [...blogItems, ...interviewItems].sort((a, b) => new Date(b.date) - new Date(a.date))
  }, [language])

  const statusCounts = useMemo(
    () => ({
      artists: artists.length,
      interviews: interviews.length,
      blog: blogPosts.length
    }),
    []
  )

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mediaQuery.matches) {
      setCardsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCardsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    const cardsSection = document.querySelector('.cards-section')
    if (cardsSection) {
      observer.observe(cardsSection)
    }

    return () => {
      if (cardsSection) {
        observer.unobserve(cardsSection)
      }
    }
  }, [])

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    if (Number.isNaN(date.getTime())) return dateString
    return dateFormatter.format(date)
  }

  const timelineStyle = (type) => {
    if (type === 'blog') {
      return {
        gradient: 'from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20',
        dot: 'bg-blue-500',
        text: 'text-blue-700 dark:text-blue-300',
        badge: 'bg-blue-600 text-white',
        label: t.homeBlogBadge
      }
    }

    return {
      gradient: 'from-rose-50 to-pink-50 dark:from-pink-900/20 dark:to-rose-900/20',
      dot: 'bg-pink-500',
      text: 'text-pink-700 dark:text-pink-300',
      badge: 'bg-pink-600 text-white',
      label: t.homeInterviewBadge
    }
  }

  const cardStyle = (cardId) => {
    if (cardId === 'card_artists') {
      return {
        overlay: 'from-fuchsia-500/15 to-purple-500/10',
        border: 'border-fuchsia-200/70 dark:border-fuchsia-800/50',
        tag: 'bg-fuchsia-600 text-white',
        cta: t.homeArtistsCta
      }
    }

    if (cardId === 'card_blog') {
      return {
        overlay: 'from-cyan-500/15 to-blue-500/10',
        border: 'border-cyan-200/70 dark:border-cyan-800/50',
        tag: 'bg-cyan-600 text-white',
        cta: t.homeBlogCta
      }
    }

    return {
      overlay: 'from-rose-500/15 to-orange-500/10',
      border: 'border-rose-200/70 dark:border-rose-800/50',
      tag: 'bg-rose-600 text-white',
      cta: t.homeInterviewsCta
    }
  }

  return (
    <div className="bg-stone-50 dark:bg-gray-900">
      <section className="min-h-screen flex items-center justify-center relative w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20 animate-pulse"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-semibold text-black dark:text-white mb-6 sm:mb-12 tracking-tight leading-tight animate-fade-in">
            {t.siteName}
          </h1>
          <div className="text-lg sm:text-xl lg:text-3xl text-gray-600 dark:text-gray-400 mb-8 sm:mb-16 max-w-4xl mx-auto leading-relaxed font-light">
            <TypewriterText text={t.heroText} speed={30} delay={500} />
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
            <Link to="/interviews" aria-label={t.discoverInterviews} className="w-full sm:w-auto inline-block bg-black dark:bg-white text-white dark:text-black px-6 sm:px-12 py-3 sm:py-5 rounded-full text-base sm:text-xl font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-center">
              {t.discoverInterviews}
            </Link>
            <Link to="/blog" aria-label={t.readBlog} className="w-full sm:w-auto inline-block border-2 border-black dark:border-white text-black dark:text-white px-6 sm:px-12 py-3 sm:py-5 rounded-full text-base sm:text-xl font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-center">
              {t.readBlog}
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-700 dark:text-sky-400">
              {landingContent.focusEyebrow}
            </p>
            <h2 className="mt-4 text-3xl sm:text-5xl font-semibold tracking-tight text-black dark:text-white">
              {landingContent.focusTitle}
            </h2>
            <p className="mt-5 text-base sm:text-lg leading-8 text-gray-600 dark:text-gray-300">
              {landingContent.focusDescription}
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {landingContent.focusItems.map((item, index) => (
              <article
                key={item.title}
                className={`rounded-3xl border p-6 sm:p-8 shadow-sm ${
                  index % 2 === 0
                    ? 'border-sky-100 bg-sky-50/70 dark:border-sky-900/40 dark:bg-sky-900/10'
                    : 'border-rose-100 bg-rose-50/70 dark:border-rose-900/40 dark:bg-rose-900/10'
                }`}
              >
                <h3 className="text-xl font-semibold text-black dark:text-white">{item.title}</h3>
                <p className="mt-3 text-sm sm:text-base leading-7 text-gray-700 dark:text-gray-300">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-stone-100 dark:bg-gray-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-gray-400">
                {landingContent.statusEyebrow}
              </p>
              <h2 className="mt-4 text-3xl sm:text-5xl font-semibold tracking-tight text-black dark:text-white">
                {landingContent.statusTitle}
              </h2>
              <p className="mt-5 max-w-2xl text-base sm:text-lg leading-8 text-gray-600 dark:text-gray-300">
                {landingContent.statusDescription}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {landingContent.statusCards.map((card) => (
                <article
                  key={card.key}
                  className="rounded-[1.75rem] border border-gray-200 bg-white px-5 py-6 shadow-sm dark:border-gray-800 dark:bg-gray-900"
                >
                  <p className="text-sm font-medium uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">
                    {card.label}
                  </p>
                  <p className="mt-4 text-4xl font-semibold tracking-tight text-black dark:text-white">
                    {statusCounts[card.key]}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                    {card.key === 'blog'
                      ? language === 'it'
                        ? 'Struttura pronta per i primi articoli veri.'
                        : 'Structure ready for the first real articles.'
                      : language === 'it'
                        ? 'Contenuti gia online e pronti a crescere.'
                        : 'Content already online and ready to grow.'}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-10 rounded-[2rem] border border-gray-200 bg-white px-6 py-7 shadow-sm dark:border-gray-800 dark:bg-gray-900 sm:px-8">
            <h3 className="text-2xl font-semibold text-black dark:text-white">{landingContent.runwayTitle}</h3>
            <p className="mt-3 max-w-3xl text-base leading-7 text-gray-600 dark:text-gray-300">
              {landingContent.runwayDescription}
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {landingContent.runwayItems.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.5rem] bg-stone-50 px-5 py-5 text-sm leading-7 text-gray-700 dark:bg-gray-950 dark:text-gray-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white dark:bg-gray-900" aria-label={t.latestUpdates}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-4xl font-semibold mb-2 sm:mb-4 text-black dark:text-white">{t.latestUpdates}</h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">{t.stayUpdated}</p>
          </div>

          <div className="relative">
            {timelineItems.length > 0 ? (
              <>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 hidden md:block"></div>

                <div className="space-y-12">
                  {timelineItems.map((item) => {
                    const isBlog = item.type === 'blog'
                    const style = timelineStyle(item.type)

                    return (
                      <div key={item.id} className="flex flex-col md:flex-row items-center">
                        {isBlog ? (
                          <>
                            <div className="md:w-1/2 md:pr-8 mb-4 md:mb-0">
                              <Link to={item.path} className={`block bg-gradient-to-r ${style.gradient} rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}>
                                <div className="flex items-center justify-between mb-3 gap-3">
                                  <div className="flex items-center">
                                    <div className={`w-2 h-2 ${style.dot} rounded-full mr-3`}></div>
                                    <span className={`text-sm ${style.text} font-medium`}>{formatDate(item.date)}</span>
                                  </div>
                                  <span className={`text-xs font-semibold px-3 py-1 rounded-full tracking-wide ${style.badge}`}>{style.label}</span>
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">{item.title}</h3>
                                <p className="text-gray-700 dark:text-gray-300 text-sm">{item.description}</p>
                              </Link>
                            </div>
                            <div className={`hidden md:block w-4 h-4 ${style.dot} rounded-full border-4 border-white dark:border-gray-900 relative z-10`}></div>
                            <div className="md:w-1/2 md:pl-8"></div>
                          </>
                        ) : (
                          <>
                            <div className="md:w-1/2 md:pr-8"></div>
                            <div className={`hidden md:block w-4 h-4 ${style.dot} rounded-full border-4 border-white dark:border-gray-900 relative z-10`}></div>
                            <div className="md:w-1/2 md:pl-8 mb-4 md:mb-0">
                              <Link to={item.path} className={`block bg-gradient-to-r ${style.gradient} rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}>
                                <div className="flex items-center justify-between mb-3 gap-3">
                                  <div className="flex items-center">
                                    <div className={`w-2 h-2 ${style.dot} rounded-full mr-3`}></div>
                                    <span className={`text-sm ${style.text} font-medium`}>{formatDate(item.date)}</span>
                                  </div>
                                  <span className={`text-xs font-semibold px-3 py-1 rounded-full tracking-wide ${style.badge}`}>{style.label}</span>
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">{item.title}</h3>
                                <p className="text-gray-700 dark:text-gray-300 text-sm">{item.description}</p>
                              </Link>
                            </div>
                          </>
                        )}
                      </div>
                    )
                  })}
                </div>
              </>
            ) : (
              <div className="rounded-3xl border border-dashed border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/60 px-8 py-14 text-center">
                <h3 className="text-2xl font-semibold text-black dark:text-white">{t.homeEmptyTitle}</h3>
                <p className="mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-300 leading-7">
                  {t.homeEmptyDescription}
                </p>
              </div>
            )}
          </div>

          <div className="text-center mt-12">
            <Link to="/blog" className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 font-medium transition-colors duration-200">
              {t.viewAllUpdates}
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-24 bg-gray-50 dark:bg-gray-800 cards-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
            {homeCards.map((card) => {
              const titleKey = `${card.id}_title`
              const subtitleKey = `${card.id}_subtitle`
              const descKey = `${card.id}_desc`
              const style = cardStyle(card.id)

              return (
                <Link key={card.id} to={card.path} className="group" aria-label={t[titleKey]}>
                  <article
                    className={`bg-white/95 dark:bg-gray-900/90 border ${style.border} rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 h-full transform relative overflow-hidden ${
                      cardsVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}
                    style={{ transitionDelay: `${card.delay}ms` }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${style.overlay} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    <div className="relative z-10 flex items-start justify-between mb-5">
                      <span className={`text-[10px] font-bold px-3 py-1 rounded-full tracking-wider ${style.tag}`}>{t[subtitleKey]}</span>
                    </div>

                    <div className="relative z-10">
                      <h3 className="text-2xl font-semibold text-black dark:text-white mb-3 leading-tight">{t[titleKey]}</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-8">{t[descKey]}</p>

                      <div className="pt-4 border-t border-gray-200/70 dark:border-gray-700/80 flex items-center justify-between">
                        <span className="text-sm font-medium text-black dark:text-white">{style.cta}</span>
                        <div className="w-8 h-8 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center group-hover:scale-110 transition-transform">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7M3 12h18" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-gray-400">
              {landingContent.faqEyebrow}
            </p>
            <h2 className="mt-4 text-3xl sm:text-5xl font-semibold tracking-tight text-black dark:text-white">
              {landingContent.faqTitle}
            </h2>
            <p className="mt-5 text-base sm:text-lg leading-8 text-gray-600 dark:text-gray-300">
              {landingContent.faqDescription}
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {landingContent.faqItems.map((item) => (
              <article
                key={item.question}
                className="rounded-3xl border border-gray-200 bg-gray-50/90 p-6 sm:p-8 dark:border-gray-700 dark:bg-gray-800/80"
              >
                <h3 className="text-xl font-semibold text-black dark:text-white">{item.question}</h3>
                <p className="mt-4 text-sm sm:text-base leading-7 text-gray-700 dark:text-gray-300">
                  {item.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
