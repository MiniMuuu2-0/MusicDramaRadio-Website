import { Link } from 'react-router-dom'
import { useState, useEffect, useMemo } from 'react'
import TypewriterText from '../components/TypewriterText'
import { useLanguage } from '../hooks/useLanguage'
import { translations } from '../utils/translations'
import { homeCards } from '../data/homeContent'
import { blogPosts } from '../data/blogPosts'
import { interviews } from '../data/interviews'

function Home() {
  const { language } = useLanguage()
  const t = translations[language]
  const [cardsVisible, setCardsVisible] = useState(false)

  const dateFormatter = useMemo(() => {
    const locale = language === 'it' ? 'it-IT' : 'en-US'
    return new Intl.DateTimeFormat(locale, { day: '2-digit', month: 'long', year: 'numeric' })
  }, [language])

  const timelineItems = useMemo(() => {
    const blogItems = blogPosts.map((post) => ({
      id: post.id,
      type: 'blog',
      title: post.title,
      description: post.excerpt,
      date: post.date,
      path: '/blog'
    }))

    const interviewItems = interviews.map((interview) => ({
      id: interview.id,
      type: 'interview',
      title: interview.title,
      description: interview.description,
      date: interview.date,
      path: '/interviews'
    }))

    return [...blogItems, ...interviewItems].sort((a, b) => new Date(b.date) - new Date(a.date))
  }, [])

  useEffect(() => {
    document.title = t.homeTitle
    document.documentElement.lang = language

    let meta = document.querySelector('meta[name="description"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'description')
      document.head.appendChild(meta)
    }
    meta.setAttribute('content', t.homeDescription)
  }, [t])

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
        label: 'BLOG'
      }
    }

    return {
      gradient: 'from-rose-50 to-pink-50 dark:from-pink-900/20 dark:to-rose-900/20',
      dot: 'bg-pink-500',
      text: 'text-pink-700 dark:text-pink-300',
      badge: 'bg-pink-600 text-white',
      label: 'INTERVISTA'
    }
  }

  const cardStyle = (cardId) => {
    if (cardId === 'card_artists') {
      return {
        overlay: 'from-fuchsia-500/15 to-purple-500/10',
        border: 'border-fuchsia-200/70 dark:border-fuchsia-800/50',
        tag: 'bg-fuchsia-600 text-white',
        cta: 'Esplora artisti'
      }
    }

    if (cardId === 'card_blog') {
      return {
        overlay: 'from-cyan-500/15 to-blue-500/10',
        border: 'border-cyan-200/70 dark:border-cyan-800/50',
        tag: 'bg-cyan-600 text-white',
        cta: 'Leggi articoli'
      }
    }

    return {
      overlay: 'from-rose-500/15 to-orange-500/10',
      border: 'border-rose-200/70 dark:border-rose-800/50',
      tag: 'bg-rose-600 text-white',
      cta: 'Guarda interviste'
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

      <section className="py-16 sm:py-20 bg-white dark:bg-gray-900" aria-label={t.latestUpdates}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-4xl font-semibold mb-2 sm:mb-4 text-black dark:text-white">{t.latestUpdates}</h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">{t.stayUpdated}</p>
          </div>

          <div className="relative">
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
    </div>
  )
}

export default Home
