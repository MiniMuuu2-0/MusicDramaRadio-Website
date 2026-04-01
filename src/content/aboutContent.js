const valueIcons = [
  'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
  'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
  'M13 10V3L4 14h7v7l9-11h-7z'
]

const showIcons = [
  'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z',
  'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z'
]

export const aboutContent = {
  it: {
    seoTitle: 'Chi Siamo - Music Drama Radio',
    seoDescription:
      'Scopri la storia, la missione e il team di Music Drama Radio, progetto editoriale italiano dedicato a K-pop, T-pop, drama asiatici e cultura contemporanea asiatica.',
    heroTitle: 'Chi Siamo',
    heroBadge: 'Dal 2022',
    heroSubtitle:
      'Music Drama Radio e un progetto editoriale dedicato a K-pop, T-pop, drama asiatici e cultura contemporanea orientale.',
    storyTitle: 'La Nostra Storia',
    storyParagraphs: [
      'Music Drama nasce nel febbraio 2022 da un idea di Cinzia Alberti e prende forma come spazio radiofonico su Radio Panda 96.3, con distribuzione anche su MixCloud.',
      'Il progetto racconta cultura coreana e thailandese attraverso musica, serie, interviste e analisi: non solo intrattenimento, ma anche contesto sociale e culturale.',
      "L'obiettivo editoriale e offrire un punto di riferimento in italiano, con contenuti chiari, verificati e costruiti con attenzione."
    ],
    nonProfit: '*Music Drama e un progetto non profit e attualmente non ha finalita commerciali.',
    missionTitle: 'Missione',
    missionText:
      'Portare la cultura pop asiatica al pubblico italiano con un racconto autentico, approfondito e accessibile.',
    valuesTitle: 'I Nostri Valori',
    valuesSubtitle: 'La linea editoriale di Music Drama Radio si basa su tre principi chiari.',
    values: [
      {
        title: 'Autenticita',
        description:
          'Selezioniamo contenuti affidabili e curati, valorizzando artisti, opere e contesto culturale senza semplificazioni.',
        gradient: 'from-blue-500 to-cyan-500',
        iconPath: valueIcons[0]
      },
      {
        title: 'Comunita',
        description:
          'Costruiamo un punto di incontro per appassionati, con un linguaggio accessibile e uno sguardo editoriale competente.',
        gradient: 'from-green-500 to-emerald-500',
        iconPath: valueIcons[1]
      },
      {
        title: 'Evoluzione',
        description:
          "Aggiorniamo format e approfondimenti in modo continuo, seguendo l'evoluzione di musica, serie e cultura asiatica.",
        gradient: 'from-purple-500 to-pink-500',
        iconPath: valueIcons[2]
      }
    ],
    showsTitle: 'I Nostri Programmi',
    showsSubtitle:
      'Due formati complementari per raccontare musica, serie e cultura asiatica in modo continuativo.',
    shows: [
      {
        title: 'Music Drama',
        schedule: 'Mensile · 2 ore · Radio Panda 96.3',
        description:
          'Il format principale del progetto: interviste, rubriche e letture trasversali su K-pop, drama e cultura coreana e thai.',
        gradient: 'from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20',
        iconBg: 'from-purple-500 to-pink-500',
        iconPath: showIcons[0]
      },
      {
        title: 'Living Room',
        schedule: 'Settimanale · martedi ore 21 · Radio Panda 96.3',
        description:
          'Uno spazio editoriale piu intimo, dedicato a conversazioni, storie e contesti culturali raccontati con taglio divulgativo.',
        gradient: 'from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20',
        iconBg: 'from-blue-500 to-cyan-500',
        iconPath: showIcons[1]
      }
    ],
    teamTitle: 'Il Team',
    teamSubtitle:
      'Un team editoriale snello con competenze complementari su contenuti, linguaggio e contesto culturale.',
    teamMembers: [
      {
        name: 'Cinzia Alberti',
        role: 'Fondatrice e conduttrice',
        image: `${import.meta.env.BASE_URL}CinziaAlberti.jpg`,
        rotation: 'rotate-1',
        description:
          'Tecnico dei servizi sociali, avvicinata ai K-Drama nel 2016. Ideatrice di Music Drama su Radio Panda 96.3 e VisiOnAir Radio.'
      },
      {
        name: 'Anna Cozzolino',
        role: 'Content creator',
        image: `${import.meta.env.BASE_URL}AnnaCozzolino.jpg`,
        rotation: '-rotate-1',
        description:
          'Studentessa universitaria in Scienze della Formazione, con focus su musica thai, traduzione e supporto editoriale.'
      }
    ],
    ctaTitle: 'Entra nel progetto',
    ctaText: 'Esplora interviste e articoli per seguire i temi principali di Music Drama Radio.',
    ctaInterviews: 'Esplora le Interviste',
    ctaBlog: 'Leggi il Blog',
    mixcloudLabel: 'Ascolta su MixCloud'
  },
  en: {
    seoTitle: 'About - Music Drama Radio',
    seoDescription:
      'Discover the story, mission and team behind Music Drama Radio, an Italian editorial project focused on K-pop, T-pop, Asian drama and contemporary Asian culture.',
    heroTitle: 'About',
    heroBadge: 'Since 2022',
    heroSubtitle:
      'Music Drama Radio is an editorial project dedicated to K-pop, T-pop, Asian drama and contemporary Asian culture.',
    storyTitle: 'Our Story',
    storyParagraphs: [
      'Music Drama began in February 2022 from an idea by Cinzia Alberti and took shape as a radio space on Radio Panda 96.3, with additional distribution on MixCloud.',
      'The project explores Korean and Thai culture through music, series, interviews and analysis: not just entertainment, but also social and cultural context.',
      'Its editorial goal is to offer a reliable point of reference in Italian, with clear, verified and carefully crafted content.'
    ],
    nonProfit: '*Music Drama is a non-profit project and currently has no commercial purpose.',
    missionTitle: 'Mission',
    missionText:
      'Bringing Asian pop culture to the Italian audience through storytelling that is authentic, in-depth and accessible.',
    valuesTitle: 'Our Values',
    valuesSubtitle: 'Music Drama Radio is guided by three clear editorial principles.',
    values: [
      {
        title: 'Authenticity',
        description:
          'We select reliable and carefully edited content, giving proper value to artists, works and cultural context without oversimplifying them.',
        gradient: 'from-blue-500 to-cyan-500',
        iconPath: valueIcons[0]
      },
      {
        title: 'Community',
        description:
          'We build a meeting point for enthusiasts with an accessible tone and a competent editorial perspective.',
        gradient: 'from-green-500 to-emerald-500',
        iconPath: valueIcons[1]
      },
      {
        title: 'Evolution',
        description:
          'We continuously refine formats and features, following the evolution of music, series and Asian culture.',
        gradient: 'from-purple-500 to-pink-500',
        iconPath: valueIcons[2]
      }
    ],
    showsTitle: 'Our Shows',
    showsSubtitle:
      'Two complementary formats designed to cover music, series and Asian culture on an ongoing basis.',
    shows: [
      {
        title: 'Music Drama',
        schedule: 'Monthly · 2 hours · Radio Panda 96.3',
        description:
          'The project flagship format: interviews, recurring columns and cross-disciplinary features on K-pop, drama, and Korean and Thai culture.',
        gradient: 'from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20',
        iconBg: 'from-purple-500 to-pink-500',
        iconPath: showIcons[0]
      },
      {
        title: 'Living Room',
        schedule: 'Weekly · Tuesday at 9 PM · Radio Panda 96.3',
        description:
          'A more intimate editorial space dedicated to conversations, stories and cultural context told with an accessible, informative tone.',
        gradient: 'from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20',
        iconBg: 'from-blue-500 to-cyan-500',
        iconPath: showIcons[1]
      }
    ],
    teamTitle: 'The Team',
    teamSubtitle:
      'A lean editorial team with complementary skills across content, language and cultural context.',
    teamMembers: [
      {
        name: 'Cinzia Alberti',
        role: 'Founder and host',
        image: `${import.meta.env.BASE_URL}CinziaAlberti.jpg`,
        rotation: 'rotate-1',
        description:
          'A social services professional who discovered K-dramas in 2016. She created Music Drama for Radio Panda 96.3 and VisiOnAir Radio.'
      },
      {
        name: 'Anna Cozzolino',
        role: 'Content creator',
        image: `${import.meta.env.BASE_URL}AnnaCozzolino.jpg`,
        rotation: '-rotate-1',
        description:
          'A university student in Education Sciences, focused on Thai music, translation and editorial support.'
      }
    ],
    ctaTitle: 'Step Into The Project',
    ctaText: 'Explore interviews and articles to follow the main themes of Music Drama Radio.',
    ctaInterviews: 'Explore Interviews',
    ctaBlog: 'Read the Blog',
    mixcloudLabel: 'Listen on MixCloud'
  }
}
