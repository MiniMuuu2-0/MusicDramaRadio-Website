import { Link } from 'react-router-dom'
import { useEffect } from 'react'

const values = [
  {
    title: 'Autenticita',
    description:
      "Selezioniamo contenuti affidabili e curati, valorizzando artisti, opere e contesto culturale senza semplificazioni.",
    gradient: 'from-blue-500 to-cyan-500',
    iconPath:
      'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
  },
  {
    title: 'Comunita',
    description:
      'Costruiamo un punto di incontro per appassionati, con un linguaggio accessibile e uno sguardo editoriale competente.',
    gradient: 'from-green-500 to-emerald-500',
    iconPath:
      'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
  },
  {
    title: 'Evoluzione',
    description:
      'Aggiorniamo format e approfondimenti in modo continuo, seguendo l evoluzione di musica, serie e cultura asiatica.',
    gradient: 'from-purple-500 to-pink-500',
    iconPath: 'M13 10V3L4 14h7v7l9-11h-7z'
  }
]

const shows = [
  {
    title: 'Music Drama',
    schedule: 'Mensile - 2 ore - Radio Panda 96.3',
    description:
      'Il format principale del progetto: interviste, rubriche e letture trasversali su K-pop, drama e cultura coreana e thai.',
    gradient: 'from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20',
    iconBg: 'from-purple-500 to-pink-500',
    iconPath: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z'
  },
  {
    title: 'Living Room',
    schedule: 'Settimanale - Martedi ore 21 - Radio Panda 96.3',
    description:
      'Uno spazio editoriale piu intimo, dedicato a conversazioni, storie e contesti culturali raccontati con taglio divulgativo.',
    gradient: 'from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20',
    iconBg: 'from-blue-500 to-cyan-500',
    iconPath: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z'
  }
]

const teamMembers = [
  {
    name: 'Cinzia Alberti',
    role: 'Fondatrice e conduttrice',
    image: '/MusicDramaRadio-Website/CinziaAlberti.jpg',
    rotation: 'rotate-1',
    description:
      'Tecnico dei servizi sociali, avvicinata ai K-Drama nel 2016. Ideatrice di Music Drama su Radio Panda 96.3 e VisiOnAir Radio.'
  },
  {
    name: 'Anna Cozzolino',
    role: 'Content creator',
    image: '/MusicDramaRadio-Website/AnnaCozzolino.jpg',
    rotation: '-rotate-1',
    description:
      'Studentessa universitaria in Scienze della Formazione, con focus su musica thai, traduzione e supporto editoriale.'
  }
]

function About() {
  useEffect(() => {
    document.title = 'Chi Siamo - Music Drama Radio'

    let meta = document.querySelector('meta[name="description"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'description')
      document.head.appendChild(meta)
    }

    meta.setAttribute(
      'content',
      'Scopri la storia, la missione e il team di Music Drama Radio: un progetto editoriale italiano dedicato alla cultura pop asiatica.'
    )
  }, [])

  return (
    <div className="bg-stone-50 dark:bg-gray-900">
      <section className="pt-20 pb-16 sm:pt-32 sm:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <h1 className="text-4xl sm:text-6xl font-semibold text-black dark:text-white mb-4 sm:mb-6 tracking-tight leading-tight">
            Chi Siamo
          </h1>
          <div className="flex items-center justify-center mb-6 sm:mb-8">
            <div className="flex items-center space-x-4 text-lg sm:text-xl text-gray-600 dark:text-gray-400">
              <span className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                </svg>
                Dal 2022
              </span>
              <span className="text-gray-400">•</span>
              <span>Radio Panda 96.3</span>
            </div>
          </div>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto">
            Music Drama Radio e un progetto editoriale dedicato a K-pop, T-pop, drama asiatici e cultura contemporanea orientale.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold mb-6 text-black dark:text-white">La Nostra Storia</h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  Music Drama nasce nel febbraio 2022 da un idea di Cinzia Alberti e prende forma come spazio radiofonico su Radio Panda 96.3,
                  con distribuzione anche su MixCloud.
                </p>
                <p>
                  Il progetto racconta cultura coreana e thailandese attraverso musica, serie, interviste e analisi: non solo intrattenimento,
                  ma anche contesto sociale e culturale.
                </p>
                <p>
                  L obiettivo editoriale e offrire un punto di riferimento in italiano, con contenuti chiari, verificati e costruiti con attenzione.
                </p>
                <p className="text-sm italic text-gray-600 dark:text-gray-400">
                  *Music Drama e un progetto non profit e attualmente non ha finalita commerciali.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-2xl p-8 sm:p-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">Missione</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Portare la cultura pop asiatica al pubblico italiano con un racconto autentico, approfondito e accessibile.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4 text-black dark:text-white">I Nostri Valori</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              La linea editoriale di Music Drama Radio si basa su tre principi chiari.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center group">
                <div className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={value.iconPath} />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-black dark:text-white">{value.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4 text-black dark:text-white">I Nostri Programmi</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Due formati complementari per raccontare musica, serie e cultura asiatica in modo continuativo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {shows.map((show) => (
              <div key={show.title} className={`bg-gradient-to-br ${show.gradient} rounded-2xl p-8 hover:shadow-xl transition-all duration-300`}>
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${show.iconBg} rounded-xl flex items-center justify-center mr-4`}>
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d={show.iconPath} />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-black dark:text-white mb-1">{show.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{show.schedule}</p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{show.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4 text-black dark:text-white">Il Team</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Un team editoriale snello con competenze complementari su contenuti, linguaggio e contesto culturale.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {teamMembers.map((member) => (
              <article key={member.name} className="group cursor-pointer">
                <div className={`bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg transform ${member.rotation} group-hover:rotate-0 transition-all duration-300 hover:shadow-xl max-w-xs`}>
                  <div className="w-48 h-56 bg-gray-100 dark:bg-gray-700 rounded-lg mb-3 overflow-hidden">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="text-center">
                    <h3 className="font-handwriting text-lg font-medium text-black dark:text-white mb-1">{member.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{member.role}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-500 leading-tight">{member.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6 text-black dark:text-white">Entra nel progetto</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            Esplora interviste e articoli per seguire i temi principali di Music Drama Radio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              to="/interviews"
              className="inline-block bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Esplora le Interviste
            </Link>
            <Link
              to="/blog"
              className="inline-block border-2 border-black dark:border-white text-black dark:text-white px-8 py-4 rounded-full font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Leggi il Blog
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-600 dark:text-gray-400">
            <a
              href="https://radiopanda.it"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-black dark:hover:text-white transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
              </svg>
              Radio Panda 96.3
            </a>
            <span className="hidden sm:block text-gray-400">•</span>
            <a
              href="https://mixcloud.com/musicdrama"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-black dark:hover:text-white transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2.5 12C2.5 6.2 7.2 1.5 13 1.5S23.5 6.2 23.5 12 18.8 22.5 13 22.5 2.5 17.8 2.5 12zm8.5 0c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm6 0c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z" />
              </svg>
              Ascolta su MixCloud
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
