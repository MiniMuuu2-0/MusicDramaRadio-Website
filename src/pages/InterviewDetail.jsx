import { Link, Navigate, useParams } from 'react-router-dom'
import { useMemo } from 'react'
import { useState } from 'react'
import { useLanguage } from '../hooks/useLanguage'
import { useSeo } from '../hooks/useSeo'
import { getInterviewBySlug } from '../data/interviews'
import { translations } from '../utils/translations'

function InterviewDetail() {
  const { slug } = useParams()
  const { language } = useLanguage()
  const t = translations[language]
  const interview = getInterviewBySlug(slug)
  const [isAudioPlaying, setIsAudioPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [isTranscriptExpanded, setIsTranscriptExpanded] = useState(false)
  const dateFormatter = useMemo(() => {
    return new Intl.DateTimeFormat(language === 'it' ? 'it-IT' : 'en-US', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    })
  }, [language])

  useSeo({
    title: interview ? `${interview.title[language]} - Music Drama Radio` : 'Interviews - Music Drama Radio',
    description: interview
      ? interview.description[language]
      : language === 'it'
        ? 'Archivio interviste di Music Drama Radio.'
        : 'Music Drama Radio interview archive.',
    language,
    pageName: interview?.title?.[language] || t.navInterviews,
    type: 'article',
    pageType: 'Interview'
  })

  if (!interview) {
    return <Navigate to="/interviews" replace />
  }

  const date = new Date(interview.date)
  const formattedDate = Number.isNaN(date.getTime()) ? interview.date : dateFormatter.format(date)
  const activeItalianEntry = interview.transcript?.it?.find((entry) => currentTime >= entry.startTime && currentTime < entry.endTime)
  const showItalianTranscript = language === 'it' && isAudioPlaying && activeItalianEntry

  return (
    <div className="bg-stone-50 pb-24 pt-10 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Link
          to="/interviews"
          className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-black dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300 dark:hover:text-white"
        >
          <span aria-hidden="true">←</span>
          {t.interviewsBack}
        </Link>

        <div className="mt-8 overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
            <div className="aspect-[4/3] bg-gray-100 dark:bg-gray-800 lg:aspect-auto">
              <img
                src={interview.image}
                alt={interview.imageAlt?.[language] || interview.title[language]}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="p-6 sm:p-8 lg:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-500 dark:text-gray-400">
                {t.navInterviews}
              </p>
              <h1 className="mt-3 text-3xl font-semibold text-black dark:text-white sm:text-4xl">
                {interview.title[language]}
              </h1>
              <p className="mt-5 max-w-xl leading-7 text-gray-600 dark:text-gray-300">
                {interview.description[language]}
              </p>

              <div className="mt-6 flex flex-wrap gap-3 text-sm text-gray-500 dark:text-gray-400">
                <span className="rounded-full bg-gray-100 px-4 py-2 dark:bg-gray-800">
                  {formattedDate}
                </span>
                <span className="rounded-full bg-gray-100 px-4 py-2 dark:bg-gray-800">
                  {interview.duration}
                </span>
                <span className="rounded-full bg-gray-100 px-4 py-2 dark:bg-gray-800">
                  {t.interviewsRecordedIn} {interview.location[language]}
                </span>
              </div>

              <div className="mt-8 rounded-[1.5rem] border border-gray-200 bg-stone-50 p-5 dark:border-gray-800 dark:bg-gray-950">
                <p className="text-sm font-semibold text-black dark:text-white">{t.interviewsAudio}</p>
                <audio
                  controls
                  preload="metadata"
                  src={interview.audio}
                  onPlay={() => {
                    setIsAudioPlaying(true)
                    setIsTranscriptExpanded(false)
                  }}
                  onPause={() => setIsAudioPlaying(false)}
                  onEnded={() => {
                    setIsAudioPlaying(false)
                    setCurrentTime(0)
                    setIsTranscriptExpanded(false)
                  }}
                  onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)}
                  onSeeked={(event) => setCurrentTime(event.currentTarget.currentTime)}
                  className="mt-4 w-full"
                >
                  {t.interviewsListen}
                </audio>
              </div>
            </div>
          </div>
        </div>

        {language === 'en' && (
          <section className="mt-12">
            <div className="rounded-[2rem] border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900 sm:p-8">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h2 className="text-2xl font-semibold text-black dark:text-white">{t.interviewsTranscript}</h2>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{t.interviewsTranscriptNote}</p>
                </div>
              </div>

              <div className="mt-8">
                <div className="rounded-[1.5rem] border border-gray-200 bg-stone-50 p-5 dark:border-gray-800 dark:bg-gray-950">
                  <h3 className="text-lg font-semibold text-black dark:text-white">{t.interviewsTranscriptEnglish}</h3>
                  <div className="mt-5 space-y-5">
                    {interview.transcript.en.map((entry, index) => (
                      <article
                        key={`en-${index}`}
                        className="rounded-[1.25rem] bg-white p-5 dark:bg-gray-900"
                      >
                        <p className="text-sm font-semibold leading-6 text-black dark:text-white">{entry.question}</p>
                        <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">{entry.answer}</p>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        <section className="mt-12">
          <div className="rounded-[2rem] border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900 sm:p-8">
            <h2 className="text-2xl font-semibold text-black dark:text-white">{t.interviewsThanks}</h2>
            <p className="mt-4 max-w-4xl leading-7 text-gray-600 dark:text-gray-300">
              {interview.acknowledgements[language]}
            </p>
          </div>
        </section>

        <section className="mt-12">
          <div className="mb-6 flex items-center justify-between gap-4">
            <h2 className="text-2xl font-semibold text-black dark:text-white">{t.interviewsGallery}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {interview.gallery.length} {language === 'it' ? 'foto' : 'photos'}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {interview.gallery.map((image) => (
              <article
                key={image.id}
                className="overflow-hidden rounded-[1.75rem] border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900"
              >
                <img
                  src={image.src}
                  alt={image.alt?.[language] || interview.title[language]}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </article>
            ))}
          </div>
        </section>
      </div>

      {showItalianTranscript && (
        <aside className="fixed bottom-3 left-3 right-3 z-40 overflow-hidden rounded-[1.5rem] border border-gray-200 bg-white shadow-2xl dark:border-gray-800 dark:bg-gray-900 sm:bottom-4 sm:left-auto sm:right-4 sm:max-h-[70vh] sm:w-[28rem]">
          <div className="border-b border-gray-200 px-4 py-4 dark:border-gray-800 sm:px-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-black dark:text-white">{t.interviewsTranscriptOriginal}</p>
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                  {language === 'it' ? 'Il testo compare mentre l’audio è in riproduzione.' : 'This panel appears while the audio is playing.'}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsTranscriptExpanded((currentValue) => !currentValue)}
                className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 transition-colors hover:text-black dark:bg-gray-800 dark:text-gray-300 dark:hover:text-white sm:hidden"
              >
                {isTranscriptExpanded ? t.interviewsTranscriptHide : t.interviewsTranscriptShow}
              </button>
            </div>
          </div>
          <div className="max-h-[22vh] overflow-y-auto px-4 py-4 sm:max-h-[calc(70vh-4.5rem)] sm:px-4">
            <article className="rounded-[1.25rem] bg-stone-50 p-4 dark:bg-gray-950">
              <p className="text-sm font-semibold leading-6 text-black dark:text-white">{activeItalianEntry.question}</p>
              <div className={`${isTranscriptExpanded ? 'block' : 'hidden'} mt-3 sm:block`}>
                <p className="text-sm leading-7 text-gray-600 dark:text-gray-300">{activeItalianEntry.answer}</p>
              </div>
            </article>
          </div>
        </aside>
      )}
    </div>
  )
}

export default InterviewDetail
