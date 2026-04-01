import { useEffect } from 'react'
import { useLanguage } from '../hooks/useLanguage'

function LanguageSelectionModal() {
  const { hasChosenLanguage, selectLanguage } = useLanguage()

  useEffect(() => {
    if (hasChosenLanguage) {
      return undefined
    }

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [hasChosenLanguage])

  if (hasChosenLanguage) {
    return null
  }

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center bg-slate-950/75 backdrop-blur-sm px-4">
      <div
        className="w-full max-w-xl rounded-[2rem] border border-white/10 bg-white p-6 shadow-2xl shadow-black/30 sm:p-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="language-selection-title"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-700">
          Language selection
        </p>
        <h2
          id="language-selection-title"
          className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl"
        >
          Welcome to Music Drama Radio
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
          Choose the language you want to use on the website. You can change it later at any
          time from the navigation bar.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <button
            type="button"
            onClick={() => selectLanguage('it')}
            className="rounded-[1.5rem] border border-slate-200 bg-slate-50 px-6 py-6 text-left transition-all hover:-translate-y-0.5 hover:border-slate-900 hover:bg-white hover:shadow-lg"
          >
            <span className="block text-2xl font-semibold text-slate-950">Italiano</span>
            <span className="mt-2 block text-sm text-slate-600">Continue in Italian.</span>
          </button>

          <button
            type="button"
            onClick={() => selectLanguage('en')}
            className="rounded-[1.5rem] border border-slate-900 bg-slate-950 px-6 py-6 text-left transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-900/20"
          >
            <span className="block text-2xl font-semibold text-white">English</span>
            <span className="mt-2 block text-sm text-slate-300">Continue in English.</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default LanguageSelectionModal
