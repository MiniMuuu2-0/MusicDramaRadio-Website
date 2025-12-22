import { useState, useEffect } from 'react'

export function useSearch(query) {
  const [results, setResults] = useState([])

  useEffect(() => {
    if (!query || query.length < 2) {
      setResults([])
      return
    }

    const searchData = [
      { type: 'artist', name: 'BTS', path: '/artists', description: 'Il gruppo K-pop più famoso al mondo' },
      { type: 'artist', name: 'BLACKPINK', path: '/artists', description: 'Girl group di successo internazionale' },
      { type: 'artist', name: 'Stray Kids', path: '/artists', description: 'Boy group emergente con sound unico' },
      { type: 'blog', name: 'Il fenomeno K-pop nel 2024', path: '/blog', description: 'Analisi delle tendenze K-pop' },
      { type: 'blog', name: 'I migliori K-drama da non perdere', path: '/blog', description: 'Selezione dei drama coreani' },
      { type: 'interview', name: 'Intervista con [Nome Artista]', path: '/interviews', description: 'Conversazione approfondita' },
      { type: 'interview', name: 'Dietro le quinte di [K-Drama]', path: '/interviews', description: 'Parliamo con il cast' },
    ]

    const filtered = searchData.filter(item =>
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase())
    )

    setResults(filtered)
  }, [query])

  return results
}