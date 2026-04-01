import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../hooks/useLanguage'
import { translations } from '../utils/translations'
import ContactModal from './ContactModal'

function Footer() {
  const [isContactOpen, setIsContactOpen] = useState(false)
  const { language, openCookiePreferences } = useLanguage()
  const t = translations[language]

  return (
    <>
      <footer className="relative bg-slate-950 text-slate-100 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent"></div>
        <div className="relative border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-300 mb-3">Music Drama Radio</p>
                <h3 className="text-2xl font-semibold leading-tight mb-3">{t.footerTagline}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {t.footerDescription}
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-300 mb-3">{t.footerNavigation}</p>
                <div className="space-y-2 text-sm">
                  <Link to="/about" className="block text-slate-200 hover:text-white transition-colors">{t.navAbout}</Link>
                  <Link to="/artists" className="block text-slate-200 hover:text-white transition-colors">{t.navArtists}</Link>
                  <Link to="/blog" className="block text-slate-200 hover:text-white transition-colors">{t.blogTitle}</Link>
                  <Link to="/interviews" className="block text-slate-200 hover:text-white transition-colors">{t.navInterviews}</Link>
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-300 mb-3">{t.footerCommunity}</p>
                <div className="flex items-center gap-3 mb-5">
                  <a
                    href="https://www.instagram.com/musicdramaradio?igsh=MmVjOTZpeGZxMzJw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-white/20 hover:border-white/60 text-slate-200 hover:text-white flex items-center justify-center transition-all"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.threads.com/@musicdramaradio?xmt=AQF0aaRE900YQp-BPX8Zmc1ltazQN0LJ9HuFvsJMQX9e6w0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-white/20 hover:border-white/60 text-slate-200 hover:text-white flex items-center justify-center transition-all"
                    aria-label="Threads"
                  >
                    <img src="/logo-threads.png" alt="Threads" className="w-4 h-4" />
                  </a>
                </div>

                <button
                  onClick={() => setIsContactOpen(true)}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-slate-100 text-slate-900 font-semibold hover:bg-white transition-colors"
                >
                  {t.footerContact}
                </button>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
              <p>{t.footerCopyright}</p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <button
                  type="button"
                  onClick={openCookiePreferences}
                  className="hover:text-slate-200 transition-colors"
                >
                  {t.cookieSettings}
                </button>
                <Link to="/privacy" className="hover:text-slate-200 transition-colors">{t.footerPrivacy}</Link>
                <Link to="/terms" className="hover:text-slate-200 transition-colors">{t.footerTerms}</Link>
                <a
                  href="https://minimuuu.it/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-slate-200 transition-colors"
                >
                  {t.footerMadeBy}
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </>
  )
}

export default Footer
