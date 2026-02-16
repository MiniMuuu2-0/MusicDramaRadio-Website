import { useMemo } from 'react'
import { blogPosts } from '../data/blogPosts'

function Blog() {
  const dateFormatter = useMemo(() => {
    return new Intl.DateTimeFormat('it-IT', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    })
  }, [])

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    if (Number.isNaN(date.getTime())) return dateString
    return dateFormatter.format(date)
  }

  return (
    <div className="pt-20 pb-32 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-5xl font-semibold text-center mb-20 text-black dark:text-white tracking-tight">Blog</h1>
        <div className="space-y-12">
          {blogPosts.map((post) => (
            <article key={post.id} className="group cursor-pointer border-b border-gray-100 dark:border-gray-800 pb-12 last:border-b-0">
              <h2 className="text-3xl font-semibold mb-4 text-black dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">{formatDate(post.date)}</p>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">{post.excerpt}</p>
              <span className="text-blue-600 dark:text-blue-400 font-medium group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                Leggi di più →
              </span>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blog
