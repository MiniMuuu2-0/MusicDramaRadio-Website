import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import TypewriterText from '../components/TypewriterText'

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
      <section className="min-h-screen flex items-center justify-center relative w-full overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20 animate-pulse"></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/interviews" className="inline-block bg-black dark:bg-white text-white dark:text-black px-8 sm:px-12 py-4 sm:py-5 rounded-full text-lg sm:text-xl font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Discover Interviews
            </Link>
            <Link to="/blog" className="inline-block border-2 border-black dark:border-white text-black dark:text-white px-8 sm:px-12 py-4 sm:py-5 rounded-full text-lg sm:text-xl font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Read Blog
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Updates */}
      <section className="py-16 sm:py-20 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-12 text-black dark:text-white">Latest Updates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="group cursor-pointer">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-12 h-12 bg-purple-500 rounded-xl mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">New K-pop Interview</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">2 days ago</p>
                <p className="text-gray-700 dark:text-gray-300">Exclusive interview with rising K-pop stars about their latest album.</p>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-12 h-12 bg-blue-500 rounded-xl mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">K-drama Review</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">5 days ago</p>
                <p className="text-gray-700 dark:text-gray-300">In-depth review of the latest trending K-drama series.</p>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-12 h-12 bg-red-500 rounded-xl mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">Culture Spotlight</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">1 week ago</p>
                <p className="text-gray-700 dark:text-gray-300">Exploring Korean cultural traditions and their modern influence.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Sezioni Principali - Spotify Style */}
      <section className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-800 cards-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            
            {/* Artists Card */}
            <Link to="/artists" className="group">
              <div className={`bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 h-full transform relative overflow-hidden ${
                cardsVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`} style={{ transitionDelay: '0ms' }}>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="flex items-center mb-4 relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4 relative flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-black dark:text-white mb-1 truncate group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">K-pop Artists</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 truncate">Music Drama • Playlist</p>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 flex-shrink-0 transform translate-x-2 group-hover:translate-x-0">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed relative z-10">
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