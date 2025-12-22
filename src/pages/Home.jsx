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
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4 text-black dark:text-white">Latest Updates</h2>
            <p className="text-gray-600 dark:text-gray-400">Stay updated with our newest content</p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-purple-500 via-blue-500 to-pink-500 hidden md:block"></div>
            
            <div className="space-y-12">
              
              {/* Update 1 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-8 mb-4 md:mb-0">
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex items-center mb-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      <span className="text-sm text-purple-600 dark:text-purple-400 font-medium">2 days ago</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">Exclusive NewJeans Interview</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">Deep dive into their creative process and upcoming projects with the rising K-pop sensation.</p>
                  </div>
                </div>
                <div className="hidden md:block w-4 h-4 bg-purple-500 rounded-full border-4 border-white dark:border-gray-900 relative z-10"></div>
                <div className="md:w-1/2 md:pl-8"></div>
              </div>

              {/* Update 2 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-8"></div>
                <div className="hidden md:block w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-gray-900 relative z-10"></div>
                <div className="md:w-1/2 md:pl-8 mb-4 md:mb-0">
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex items-center mb-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">5 days ago</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">Business Proposal K-drama Review</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">Complete analysis of the hit romantic comedy that took the world by storm.</p>
                  </div>
                </div>
              </div>

              {/* Update 3 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-8 mb-4 md:mb-0">
                  <div className="bg-gradient-to-r from-pink-50 to-red-50 dark:from-pink-900/20 dark:to-red-900/20 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex items-center mb-3">
                      <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                      <span className="text-sm text-pink-600 dark:text-pink-400 font-medium">1 week ago</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">Korean Culture Spotlight</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">Exploring traditional Korean festivals and their influence on modern entertainment.</p>
                  </div>
                </div>
                <div className="hidden md:block w-4 h-4 bg-pink-500 rounded-full border-4 border-white dark:border-gray-900 relative z-10"></div>
                <div className="md:w-1/2 md:pl-8"></div>
              </div>

            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/blog" className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 font-medium transition-colors duration-200">
              View all updates
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
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