import { Link, Navigate, useParams } from 'react-router-dom'
import { useLanguage } from '../hooks/useLanguage'
import { useSeo } from '../hooks/useSeo'
import { getArtistBySlug } from '../data/artists'

function ArtistDetail() {
  const { slug } = useParams()
  const { language } = useLanguage()
  const artist = getArtistBySlug(slug)
  const gallery = artist?.gallery?.[language] || artist?.gallery?.it || []

  useSeo({
    title: artist ? `${artist.name} - Music Drama Radio` : 'Artists - Music Drama Radio',
    description: artist
      ? artist.description[language]
      : language === 'it'
        ? 'Archivio artisti di Music Drama Radio.'
        : 'Music Drama Radio artist archive.',
    language,
    pageName: artist?.name || 'Artists',
    type: 'article',
    pageType: 'CollectionPage'
  })

  if (!artist) {
    return <Navigate to="/artists" replace />
  }

  return (
    <div className="bg-stone-50 pb-24 pt-10 dark:bg-gray-950">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Link
          to="/artists"
          className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-black dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300 dark:hover:text-white"
        >
          <span aria-hidden="true">←</span>
          {language === 'it' ? 'Torna agli artisti' : 'Back to artists'}
        </Link>

        <div className="mt-8 rounded-[2rem] border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900 sm:p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            <div className="h-20 w-20 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800">
              <img
                src={artist.image}
                alt={artist.imageAlt?.[language] || artist.name}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex-1">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-500 dark:text-gray-400">
                {artist.genre[language]}
              </p>
              <h1 className="mt-2 text-3xl font-semibold text-black dark:text-white sm:text-4xl">{artist.name}</h1>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-600 dark:text-gray-300">
                {artist.description[language]}
              </p>
            </div>

            <div className="flex gap-2 sm:flex-col sm:items-end">
              {artist.highlights?.[language]?.map((highlight) => (
                <span
                  key={highlight}
                  className="rounded-full bg-gray-100 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-gray-600 dark:bg-gray-800 dark:text-gray-300"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-2xl space-y-6">
          {gallery.map((item) => (
            <article
              key={item.id}
              className="overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="bg-stone-100 dark:bg-gray-900">
                <img
                  src={item.src}
                  alt={item.alt?.[language] || artist.name}
                  className="h-auto w-full object-contain"
                  loading="lazy"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ArtistDetail
