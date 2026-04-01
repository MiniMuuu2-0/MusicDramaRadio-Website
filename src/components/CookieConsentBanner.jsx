import { Link } from 'react-router-dom'
import { useLanguage } from '../hooks/useLanguage'
import { translations } from '../utils/translations'

function CookieConsentBanner() {
  const {
    closeCookiePreferences,
    cookieConsent,
    hasChosenLanguage,
    isCookieBannerVisible,
    language,
    updateCookieConsent
  } = useLanguage()
  const t = translations[language]

  if (!hasChosenLanguage || !isCookieBannerVisible) {
    return null
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-[70] px-3 pb-3 sm:px-4 sm:pb-4">
      <div className="mx-auto max-w-5xl rounded-[1.75rem] border border-slate-200/90 bg-white/95 p-5 shadow-2xl shadow-slate-900/15 backdrop-blur sm:p-6 dark:border-gray-700 dark:bg-gray-900/95">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-600 dark:text-sky-400">
              {t.cookieTitle}
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-gray-300">
              {t.cookieDescription}{' '}
              <Link
                to="/privacy"
                className="font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-900 dark:text-white dark:decoration-gray-500 dark:hover:decoration-white"
              >
                {t.cookiePolicy}
              </Link>
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
            {cookieConsent !== null && (
              <button
                type="button"
                onClick={closeCookiePreferences}
                className="w-full rounded-full border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700 transition-colors hover:border-slate-900 hover:text-slate-900 sm:w-auto dark:border-gray-600 dark:text-gray-200 dark:hover:border-white dark:hover:text-white"
              >
                {t.cookieClose}
              </button>
            )}
            <button
              type="button"
              onClick={() => updateCookieConsent('essential')}
              className="w-full rounded-full border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700 transition-colors hover:border-slate-900 hover:text-slate-900 sm:w-auto dark:border-gray-600 dark:text-gray-200 dark:hover:border-white dark:hover:text-white"
            >
              {t.cookieEssentialOnly}
            </button>
            <button
              type="button"
              onClick={() => updateCookieConsent('preferences')}
              className="w-full rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800 sm:w-auto dark:bg-white dark:text-slate-950 dark:hover:bg-gray-200"
            >
              {t.cookieAcceptPreferences}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CookieConsentBanner
