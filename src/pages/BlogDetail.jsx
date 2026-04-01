import { Link, Navigate, useParams } from 'react-router-dom'
import { useMemo } from 'react'
import { useLanguage } from '../hooks/useLanguage'
import { useSeo } from '../hooks/useSeo'
import { getBlogPostBySlug } from '../data/blogPosts'
import { translations } from '../utils/translations'

function BlogDetail() {
  const { slug } = useParams()
  const { language } = useLanguage()
  const t = translations[language]
  const post = getBlogPostBySlug(slug)
  const dateFormatter = useMemo(() => {
    return new Intl.DateTimeFormat(language === 'it' ? 'it-IT' : 'en-US', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    })
  }, [language])

  useSeo({
    title: post ? `${post.title[language]} - Music Drama Radio` : t.blogSeoTitle,
    description: post ? post.excerpt[language] : t.blogSeoDescription,
    language,
    pageName: post?.title?.[language] || t.blogTitle,
    pageType: 'Article',
    type: 'article'
  })

  if (!post) {
    return <Navigate to="/blog" replace />
  }

  const date = new Date(post.date)
  const formattedDate = Number.isNaN(date.getTime()) ? post.date : dateFormatter.format(date)
  const blocks = post.content?.[language] || []

  return (
    <div className="bg-white pb-24 pt-10 dark:bg-gray-950">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-black dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300 dark:hover:text-white"
        >
          <span aria-hidden="true">←</span>
          {language === 'it' ? 'Torna al blog' : 'Back to blog'}
        </Link>

        <article className="mt-8 overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
          {post.coverImage && (
            <div className="aspect-[16/9] bg-gray-100 dark:bg-gray-800">
              <img
                src={post.coverImage}
                alt={post.coverAlt?.[language] || post.title[language]}
                className="h-full w-full object-cover"
              />
            </div>
          )}

          <div className="px-6 py-8 sm:px-10 sm:py-10">
            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
              <span className="rounded-full bg-gray-100 px-4 py-2 dark:bg-gray-800">{formattedDate}</span>
              {post.category?.[language] && (
                <span className="rounded-full bg-gray-100 px-4 py-2 dark:bg-gray-800">
                  {post.category[language]}
                </span>
              )}
            </div>

            <h1 className="mt-5 max-w-4xl text-3xl font-semibold tracking-tight text-black dark:text-white sm:text-5xl">
              {post.title[language]}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-300">
              {post.excerpt[language]}
            </p>

            <div className="mt-10 space-y-8">
              {blocks.map((block, index) => {
                if (block.type === 'heading') {
                  return (
                    <h2
                      key={`${block.type}-${index}`}
                      className="text-2xl font-semibold text-black dark:text-white"
                    >
                      {block.text}
                    </h2>
                  )
                }

                if (block.type === 'quote') {
                  return (
                    <blockquote
                      key={`${block.type}-${index}`}
                      className="rounded-[1.5rem] border-l-4 border-sky-500 bg-sky-50 px-6 py-5 text-lg leading-8 text-gray-700 dark:bg-sky-900/10 dark:text-gray-200"
                    >
                      {block.text}
                    </blockquote>
                  )
                }

                return (
                  <p
                    key={`${block.type}-${index}`}
                    className="text-base leading-8 text-gray-700 dark:text-gray-300"
                  >
                    {block.text}
                  </p>
                )
              })}
            </div>

            {post.credits?.[language] && (
              <div className="mt-12 rounded-[1.5rem] border border-gray-200 bg-stone-50 px-6 py-5 dark:border-gray-800 dark:bg-gray-950">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">
                  {language === 'it' ? 'Crediti' : 'Credits'}
                </p>
                <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                  {post.credits[language]}
                </p>
              </div>
            )}
          </div>
        </article>
      </div>
    </div>
  )
}

export default BlogDetail
