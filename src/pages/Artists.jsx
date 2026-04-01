import { Link } from 'react-router-dom'
import { useLanguage } from '../hooks/useLanguage'
import { useSeo } from '../hooks/useSeo'
import { artists } from '../data/artists'
import { translations } from '../utils/translations'

function Artists() {
  const { language } = useLanguage()
  const t = translations[language]

  useSeo({
    title: t.artistsSeoTitle,
    description: t.artistsSeoDescription,
    language,
    pageName: t.artistsTitle
  })

  return (
    <div className="bg-white pb-32 pt-20 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="mb-6 text-center text-5xl font-semibold tracking-tight text-black dark:text-white">{t.artistsTitle}</h1>
        <p className="mx-auto mb-16 max-w-2xl text-center text-gray-600 dark:text-gray-400">
          {t.artistsDescription}
        </p>

        {artists.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {artists.map((artist) => (
              <Link
                key={artist.slug}
                to={`/artists/${artist.slug}`}
                className="group mx-auto block w-full max-w-sm"
              >
                <article className="overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl dark:border-gray-800 dark:bg-gray-900">
                  <div className="aspect-square overflow-hidden bg-gray-100 dark:bg-gray-800">
                    <img
                      src={artist.image}
                      alt={artist.imageAlt?.[language] || artist.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="p-5">
                    <div className="mb-3 flex flex-wrap gap-2">
                      {artist.highlights?.[language]?.map((highlight) => (
                        <span
                          key={highlight}
                          className="rounded-full bg-gray-100 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-gray-600 dark:bg-gray-800 dark:text-gray-300"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>

                    <h2 className="text-2xl font-semibold text-black dark:text-white">{artist.name}</h2>
                    <p className="mt-2 text-sm uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">
                      {artist.genre[language]}
                    </p>
                    <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-300">
                      {artist.tagline[language]}
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        ) : (
          <div className="rounded-[2rem] border border-dashed border-gray-300 bg-gradient-to-br from-fuchsia-50 to-white px-8 py-16 text-center dark:border-gray-700 dark:from-gray-800/80 dark:to-gray-900">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-fuchsia-700 dark:text-fuchsia-400">Editorial Profiles</p>
            <h2 className="mt-4 text-3xl font-semibold text-black dark:text-white">{t.artistsEmptyTitle}</h2>
            <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600 dark:text-gray-300">
              {t.artistsEmptyDescription}
            </p>
            <Link
              to="/"
              className="mt-8 inline-flex items-center rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
            >
              {t.artistsEmptyCta}
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Artists
