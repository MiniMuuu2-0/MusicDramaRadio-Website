import { Link } from 'react-router-dom'
import { useMemo } from 'react'
import { useLanguage } from '../hooks/useLanguage'
import { useSeo } from '../hooks/useSeo'
import { translations } from '../utils/translations'
import { interviews } from '../data/interviews'

function Interviews() {
  const { language } = useLanguage()
  const t = translations[language]
  const dateFormatter = useMemo(() => {
    return new Intl.DateTimeFormat(language === 'it' ? 'it-IT' : 'en-US', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    })
  }, [language])

  useSeo({
    title: t.interviewsSeoTitle,
    description: t.interviewsSeoDescription,
    language,
    pageName: t.navInterviews,
    pageType: 'CollectionPage'
  })

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    if (Number.isNaN(date.getTime())) return dateString
    return dateFormatter.format(date)
  }

  return (
    <div className="bg-white pb-32 pt-20 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="mb-6 text-center text-5xl font-semibold tracking-tight text-black dark:text-white">{t.navInterviews}</h1>
        <p className="mx-auto mb-16 max-w-2xl text-center text-gray-600 dark:text-gray-400">
          {t.interviewsDescription}
        </p>
        {interviews.length > 0 ? (
          <div className="grid gap-10 md:grid-cols-2">
            {interviews.map((interview) => (
              <Link
                key={interview.id}
                to={`/interviews/${interview.slug}`}
                className="group block"
              >
                <article className="overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl dark:border-gray-800 dark:bg-gray-900">
                  <div className="aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-gray-800">
                    <img
                      src={interview.image}
                      alt={interview.imageAlt?.[language] || interview.title[language]}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="p-6">
                    <h2 className="text-2xl font-semibold text-black transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                      {interview.title[language]}
                    </h2>
                    <div className="mb-4 mt-3 flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
                      <span>{formatDate(interview.date)}</span>
                      <span>{interview.duration}</span>
                      <span>{interview.location[language]}</span>
                    </div>
                    <p className="mb-6 leading-relaxed text-gray-600 dark:text-gray-300">
                      {interview.description[language]}
                    </p>
                    <span className="inline-flex items-center rounded-full bg-blue-600 px-6 py-3 font-medium text-white transition-colors group-hover:bg-blue-700">
                      {t.interviewsListen}
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        ) : (
          <div className="rounded-[2rem] border border-dashed border-gray-300 bg-gradient-to-br from-rose-50 to-white px-8 py-16 text-center dark:border-gray-700 dark:from-gray-800/80 dark:to-gray-900">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-rose-700 dark:text-rose-400">Audio Features</p>
            <h2 className="mt-4 text-3xl font-semibold text-black dark:text-white">{t.interviewsEmptyTitle}</h2>
            <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600 dark:text-gray-300">
              {t.interviewsEmptyDescription}
            </p>
            <Link
              to="/artists"
              className="mt-8 inline-flex items-center rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
            >
              {t.interviewsEmptyCta}
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Interviews
