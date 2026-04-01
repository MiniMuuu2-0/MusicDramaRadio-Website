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
              <article key={post.id} className="group cursor-pointer border-b border-gray-100 dark:border-gray-800 pb-12 last:border-b-0">
                <h2 className="text-3xl font-semibold mb-4 text-black dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {post.title[language]}
                </h2>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">{formatDate(post.date)}</p>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">{post.excerpt[language]}</p>
                <span className="text-blue-600 dark:text-blue-400 font-medium group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                  {t.blogReadMore} →
                </span>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/60 px-8 py-16 text-center">
            <h2 className="text-2xl font-semibold text-black dark:text-white">{t.blogEmptyTitle}</h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-300 leading-7">
              {t.blogEmptyDescription}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Blog
