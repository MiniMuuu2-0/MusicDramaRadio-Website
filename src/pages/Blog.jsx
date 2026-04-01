import { Link } from 'react-router-dom'
import { useMemo } from 'react'
import { useLanguage } from '../hooks/useLanguage'
import { useSeo } from '../hooks/useSeo'
import { translations } from '../utils/translations'
import { blogPosts } from '../data/blogPosts'

function Blog() {
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
    title: t.blogSeoTitle,
    description: t.blogSeoDescription,
    language,
    pageName: t.blogTitle,
    pageType: 'CollectionPage'
  })

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    if (Number.isNaN(date.getTime())) return dateString
    return dateFormatter.format(date)
  }

  return (
    <div className="pt-20 pb-32 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-5xl font-semibold text-center mb-6 text-black dark:text-white tracking-tight">{t.blogTitle}</h1>
        <p className="mx-auto mb-16 max-w-2xl text-center text-gray-600 dark:text-gray-400">
          {t.blogDescription}
        </p>
        {blogPosts.length > 0 ? (
          <div className="space-y-12">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="group block border-b border-gray-100 pb-12 last:border-b-0 dark:border-gray-800"
              >
                <article>
                  <h2 className="mb-4 text-3xl font-semibold text-black transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                    {post.title[language]}
                  </h2>
                  <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">{formatDate(post.date)}</p>
                  <p className="mb-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300">{post.excerpt[language]}</p>
                  <span className="font-medium text-blue-600 transition-colors group-hover:text-blue-700 dark:text-blue-400 dark:group-hover:text-blue-300">
                    {t.blogReadMore} →
                  </span>
                </article>
              </Link>
            ))}
          </div>
        ) : (
          <div className="rounded-[2rem] border border-dashed border-gray-300 bg-gradient-to-br from-sky-50 to-white px-8 py-16 text-center dark:border-gray-700 dark:from-gray-800/80 dark:to-gray-900">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-700 dark:text-sky-400">Editorial Desk</p>
            <h2 className="mt-4 text-3xl font-semibold text-black dark:text-white">{t.blogEmptyTitle}</h2>
            <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600 dark:text-gray-300">
              {t.blogEmptyDescription}
            </p>
            <Link
              to="/interviews"
              className="mt-8 inline-flex items-center rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
            >
              {t.blogEmptyCta}
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Blog
