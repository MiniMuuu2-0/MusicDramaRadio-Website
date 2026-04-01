import { Link } from 'react-router-dom'
import { useLanguage } from '../hooks/useLanguage'
import { useSeo } from '../hooks/useSeo'
import { legalContent } from '../content/legalContent'

function Terms() {
  const { language } = useLanguage()
  const content = legalContent.terms[language]

  useSeo({
    title: content.seoTitle,
    description: content.seoDescription,
    language,
    pageName: content.title
  })

  return (
    <div className="pt-20 pb-32 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors mb-8"
          aria-label={content.backHome}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {content.backHome}
        </Link>

        <h1 className="text-4xl sm:text-5xl font-semibold text-center mb-12 sm:mb-20 text-black dark:text-white tracking-tight">
          {content.title}
        </h1>

        <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300 space-y-8">
          <p className="text-lg">{content.updatedAt}</p>

          {content.sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">{section.title}</h2>
              <p>{section.body}</p>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Terms
