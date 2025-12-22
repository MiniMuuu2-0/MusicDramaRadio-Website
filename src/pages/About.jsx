function About() {
  return (
    <div className="pt-20 pb-32 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h1 className="text-4xl sm:text-5xl font-semibold text-center mb-12 sm:mb-20 text-black dark:text-white tracking-tight">About</h1>
        
        <div className="prose prose-lg max-w-none">
          <div className="text-center mb-16">
            <div className="w-32 h-32 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto mb-8"></div>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-black dark:text-white">Music Drama Radio</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              La tua fonte di riferimento per il mondo K-pop e K-drama
            </p>
          </div>

          <div className="space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed">
            <p className="text-lg">
              Benvenuti su Music Drama Radio, il punto di incontro per tutti gli appassionati di cultura coreana. 
              Qui troverete interviste esclusive con i vostri artisti preferiti, approfondimenti sui K-drama più seguiti 
              e le ultime novità dal mondo del K-pop.
            </p>
            
            <p>
              La nostra missione è quella di avvicinare il pubblico italiano alla ricchezza culturale della Corea del Sud, 
              attraverso contenuti di qualità e interviste autentiche che raccontano le storie dietro la musica e i drama 
              che tanto amiamo.
            </p>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 my-12">
              <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">Cosa troverai qui</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-3">•</span>
                  Interviste esclusive con artisti K-pop e attori di K-drama
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-3">•</span>
                  Approfondimenti e recensioni sui drama più popolari
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-3">•</span>
                  News e aggiornamenti dal mondo dell'entertainment coreano
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-3">•</span>
                  Contenuti originali e dietro le quinte
                </li>
              </ul>
            </div>

            <p>
              Seguici per rimanere sempre aggiornato sulle ultime novità e non perdere nessuna delle nostre interviste esclusive!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About