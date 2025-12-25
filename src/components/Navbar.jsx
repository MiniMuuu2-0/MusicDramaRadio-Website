import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { useTheme } from '../hooks/useTheme'
import { useLanguage } from '../hooks/useLanguage'
import { useSearch } from '../hooks/useSearch'
import { translations } from '../utils/translations'

function Navbar() {
  const location = useLocation()
  const { isDark, toggleTheme } = useTheme()
  const { language, toggleLanguage } = useLanguage()
  const [searchQuery, setSearchQuery] = useState('')
  const [showResults, setShowResults] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const searchResults = useSearch(searchQuery)
  const t = translations[language]
  
  const isActive = (path) => location.pathname === path
  
  return (
    <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-14">
          <Link to="/" className="text-lg font-medium text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
            Music Drama
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10">
            <Link 
              to="/about" 
              className={`text-sm transition-all duration-200 relative ${
                isActive('/about') 
                  ? 'text-black dark:text-white font-medium' 
                  : 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white'
              }`}
            >
              About
              {isActive('/about') && <div className="absolute -bottom-4 left-0 right-0 h-0.5 bg-black dark:bg-white rounded-full"></div>}
            </Link>
            <Link 
              to="/artists" 
              className={`text-sm transition-all duration-200 relative ${
                isActive('/artists') 
                  ? 'text-black dark:text-white font-medium' 
                  : 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white'
              }`}
            >
              Artists
              {isActive('/artists') && <div className="absolute -bottom-4 left-0 right-0 h-0.5 bg-black dark:bg-white rounded-full"></div>}
            </Link>
            <Link 
              to="/blog" 
              className={`text-sm transition-all duration-200 relative ${
                isActive('/blog') 
                  ? 'text-black dark:text-white font-medium' 
                  : 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white'
              }`}
            >
              Blog
              {isActive('/blog') && <div className="absolute -bottom-4 left-0 right-0 h-0.5 bg-black dark:bg-white rounded-full"></div>}
            </Link>
            <Link 
              to="/interviews" 
              className={`text-sm transition-all duration-200 relative ${
                isActive('/interviews') 
                  ? 'text-black dark:text-white font-medium' 
                  : 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white'
              }`}
            >
              Interviews
              {isActive('/interviews') && <div className="absolute -bottom-4 left-0 right-0 h-0.5 bg-black dark:bg-white rounded-full"></div>}
            </Link>
          </div>
          
          {/* Desktop Search & Theme */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input 
                type="text" 
                placeholder={t.search}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setShowResults(true)}
                onBlur={() => setTimeout(() => setShowResults(false), 200)}
                className="w-48 px-4 py-2 text-sm bg-gray-100 dark:bg-gray-800 border-0 rounded-full focus:outline-none focus:bg-white dark:focus:bg-gray-700 focus:shadow-sm transition-all duration-200 placeholder-gray-500 dark:placeholder-gray-400 text-black dark:text-white"
              />
              <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              {showResults && searchResults.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-50">
                  {searchResults.map((result, index) => (
                    <Link
                      key={index}
                      to={result.path}
                      className="block px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                      onClick={() => setShowResults(false)}
                    >
                      <div className="text-sm font-medium text-black dark:text-white">{result.name}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 capitalize">{result.type}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <button 
              onClick={toggleLanguage}
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors flex items-center space-x-1"
            >
              <span className="text-sm font-medium">{language.toUpperCase()}</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
            </button>
            <button 
              onClick={toggleTheme}
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            >
              {isDark ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button 
              onClick={toggleLanguage}
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors flex items-center"
            >
              <span className="text-sm font-medium">{language.toUpperCase()}</span>
            </button>
            <button 
              onClick={toggleTheme}
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            >
              {isDark ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
            <div className="space-y-4">
              <input 
                type="text" 
                placeholder={t.search}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 text-sm bg-gray-100 dark:bg-gray-800 border-0 rounded-full focus:outline-none focus:bg-white dark:focus:bg-gray-700 focus:shadow-sm transition-all duration-200 placeholder-gray-500 dark:placeholder-gray-400 text-black dark:text-white"
              />
              <div className="space-y-2">
                <Link 
                  to="/about" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-2 text-base ${
                    isActive('/about') 
                      ? 'text-black dark:text-white font-medium' 
                      : 'text-gray-600 dark:text-gray-400'
                  }`}
                >
                  About
                </Link>
                <Link 
                  to="/artists" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-2 text-base ${
                    isActive('/artists') 
                      ? 'text-black dark:text-white font-medium' 
                      : 'text-gray-600 dark:text-gray-400'
                  }`}
                >
                  Artists
                </Link>
                <Link 
                  to="/blog" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-2 text-base ${
                    isActive('/blog') 
                      ? 'text-black dark:text-white font-medium' 
                      : 'text-gray-600 dark:text-gray-400'
                  }`}
                >
                  Blog
                </Link>
                <Link 
                  to="/interviews" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-2 text-base ${
                    isActive('/interviews') 
                      ? 'text-black dark:text-white font-medium' 
                      : 'text-gray-600 dark:text-gray-400'
                  }`}
                >
                  Interviews
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar