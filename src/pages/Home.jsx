import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import TypewriterText from '../components/TypewriterText'
import ScrollIndicator from '../components/ScrollIndicator'

function Home() {
  const [cardsVisible, setCardsVisible] = useState(false)

  useEffect(() => {
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

  return (
    <div className="bg-stone-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-semibold text-black dark:text-white mb-8 sm:mb-12 tracking-tight leading-tight animate-fade-in">
            Music Drama Radio
          </h1>
          <div className="text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-400 mb-12 sm:mb-16 max-w-4xl mx-auto leading-relaxed font-light">
            <TypewriterText 
              text="Your reference point for K-pop, K-drama and Korean culture" 
              speed={30}
              delay={500}
            />
          </div>
          <Link to="/interviews" className="inline-block bg-black dark:bg-white text-white dark:text-black px-8 sm:px-12 py-4 sm:py-5 rounded-full text-lg sm:text-xl font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
            Discover Interviews
          </Link>
        </div>
        <ScrollIndicator />
      </section>

      {/* Sezioni Principali - Spotify Style */}
      <section className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-800 cards-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            
            {/* Artists Card */}
            <Link to="/artists" className="group">
              <div className={`bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 h-full transform ${
                cardsVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`} style={{ transitionDelay: '0ms' }}>
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4 relative flex-shrink-0">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
                    </svg>
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 rounded-xl transition-all duration-300"></div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-black dark:text-white mb-1 truncate">K-pop Artists</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 truncate">Music Drama • Playlist</p>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  Discover your favorite K-pop artists and their stories
                </p>
              </div>
            </Link>

            {/* Blog Card */}
            <Link to="/blog" className="group">
              <div className={`bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 h-full transform ${
                cardsVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`} style={{ transitionDelay: '200ms' }}>
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4 relative flex-shrink-0">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
                    </svg>
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 rounded-xl transition-all duration-300"></div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-black dark:text-white mb-1 truncate">K-drama Blog</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 truncate">Music Drama • Articles</p>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  Articles and insights about K-drama and K-pop world
                </p>
              </div>
            </Link>

            {/* Interviews Card */}
            <Link to="/interviews" className="group">
              <div className={`bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 h-full transform ${
                cardsVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`} style={{ transitionDelay: '400ms' }}>
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center mr-4 relative flex-shrink-0">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
                    </svg>
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 rounded-xl transition-all duration-300"></div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-black dark:text-white mb-1 truncate">Exclusive Interviews</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 truncate">Music Drama • Podcast</p>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  Exclusive interviews with artists and industry personalities
                </p>
              </div>
            </Link>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Home