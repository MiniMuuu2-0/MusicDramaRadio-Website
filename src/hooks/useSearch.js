import { useState, useEffect } from 'react'
import { artists } from '../data/artists'
import { blogPosts } from '../data/blogPosts'
import { interviews } from '../data/interviews'

export function useSearch(query, language) {
  const [results, setResults] = useState([])

  useEffect(() => {
    if (!query || query.length < 2) {
      setResults([])
      return
    }

    const searchData = [
      ...artists.map((artist) => ({
        typeKey: 'searchTypeArtist',
        name: artist.name,
        path: `/artists/${artist.slug}`,
        description: artist.description[language]
      })),
      ...blogPosts.map((post) => ({
        typeKey: 'searchTypeBlog',
        name: post.title[language],
        path: `/blog/${post.slug}`,
        description: post.excerpt[language]
      })),
      ...interviews.map((interview) => ({
        typeKey: 'searchTypeInterview',
        name: interview.title[language],
        path: `/interviews/${interview.slug}`,
        description: interview.description[language]
      }))
    ]

    const filtered = searchData.filter(item =>
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase())
    )

    setResults(filtered)
  }, [language, query])

  return results
}
