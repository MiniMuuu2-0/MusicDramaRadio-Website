function Artists() {
  const artists = [
    { name: "BTS", genre: "K-pop", description: "Il gruppo K-pop più famoso al mondo" },
    { name: "BLACKPINK", genre: "K-pop", description: "Girl group di successo internazionale" },
    { name: "Stray Kids", genre: "K-pop", description: "Boy group emergente con sound unico" }
  ]

  return (
    <div className="pt-20 pb-32 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-5xl font-semibold text-center mb-20 text-black dark:text-white tracking-tight">Artists</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artists.map((artist, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="w-full aspect-square bg-gray-100 dark:bg-gray-800 rounded-3xl mb-6 group-hover:scale-105 transition-transform duration-300"></div>
              <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">{artist.name}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{artist.genre}</p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{artist.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Artists