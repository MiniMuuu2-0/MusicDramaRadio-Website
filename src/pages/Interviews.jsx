function Interviews() {
  const interviews = [
    {
      title: "Intervista con [Nome Artista]",
      date: "20 Dicembre 2024",
      duration: "25 min",
      description: "Una conversazione approfondita sulla carriera e i progetti futuri..."
    },
    {
      title: "Dietro le quinte di [K-Drama]",
      date: "18 Dicembre 2024",
      duration: "30 min",
      description: "Parliamo con il cast del drama più seguito del momento..."
    },
    {
      title: "Il successo internazionale del K-pop",
      date: "15 Dicembre 2024",
      duration: "20 min",
      description: "Analisi del fenomeno globale con esperti del settore..."
    }
  ]

  return (
    <div className="pt-20 pb-32 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-5xl font-semibold text-center mb-20 text-black dark:text-white tracking-tight">Interviste</h1>
        <div className="grid md:grid-cols-2 gap-12">
          {interviews.map((interview, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="w-full aspect-video bg-gray-100 dark:bg-gray-800 rounded-3xl mb-6 group-hover:scale-105 transition-transform duration-300"></div>
              <div className="px-2">
                <h3 className="text-2xl font-semibold mb-3 text-black dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{interview.title}</h3>
                <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <span>{interview.date}</span>
                  <span>{interview.duration}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">{interview.description}</p>
                <span className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full font-medium group-hover:bg-blue-700 transition-colors">
                  Guarda Intervista
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Interviews