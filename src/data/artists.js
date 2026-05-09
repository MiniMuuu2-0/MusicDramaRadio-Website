function createPotatoGallery(folder) {
  return [
    {
      id: 'cover',
      src: `${import.meta.env.BASE_URL}artists/${folder}/cover.png`,
      alt: {
        it: 'Cover editoriale dedicata ai Potato Band',
        en: 'Editorial cover dedicated to Potato Band'
      }
    },
    {
      id: 'letter',
      src: `${import.meta.env.BASE_URL}artists/${folder}/letter-from-the-editor-left.png`,
      alt: {
        it: 'Pagina editoriale introduttiva sui Potato Band',
        en: 'Editorial introduction page about Potato Band'
      }
    },
    {
      id: 'article-2',
      src: `${import.meta.env.BASE_URL}artists/${folder}/article-2-right.png`,
      alt: {
        it: 'Approfondimento fotografico sui Potato Band',
        en: 'Photo feature focused on Potato Band'
      }
    },
    {
      id: 'article-2-2',
      src: `${import.meta.env.BASE_URL}artists/${folder}/article-2-right-2.png`,
      alt: {
        it: 'Pagina editoriale sui Potato Band',
        en: 'Editorial page about Potato Band'
      }
    },
    {
      id: 'article-2-3',
      src: `${import.meta.env.BASE_URL}artists/${folder}/article-2-right-3.png`,
      alt: {
        it: 'Ulteriore pagina dell’articolo sui Potato Band',
        en: 'Additional article page about Potato Band'
      }
    },
    {
      id: 'article-2-4',
      src: `${import.meta.env.BASE_URL}artists/${folder}/article-2-right-4.png`,
      alt: {
        it: 'Pagina con contenuti visivi dedicati ai Potato Band',
        en: 'Visual content page dedicated to Potato Band'
      }
    },
    {
      id: 'article-2-5',
      src: `${import.meta.env.BASE_URL}artists/${folder}/article-2-right-5.png`,
      alt: {
        it: 'Pagina finale del servizio sui Potato Band',
        en: 'Closing feature page about Potato Band'
      }
    },
    {
      id: 'listicle-1',
      src: `${import.meta.env.BASE_URL}artists/${folder}/listicle-left.png`,
      alt: {
        it: 'Pagina elenco dedicata ai Potato Band',
        en: 'Listicle page dedicated to Potato Band'
      }
    },
    {
      id: 'listicle-2',
      src: `${import.meta.env.BASE_URL}artists/${folder}/listicle-left-2.png`,
      alt: {
        it: 'Seconda pagina elenco dedicata ai Potato Band',
        en: 'Second listicle page dedicated to Potato Band'
      }
    },
    {
      id: 'listicle-3',
      src: `${import.meta.env.BASE_URL}artists/${folder}/listicle-left-3.png`,
      alt: {
        it: 'Terza pagina elenco dedicata ai Potato Band',
        en: 'Third listicle page dedicated to Potato Band'
      }
    },
    {
      id: 'listicle-4',
      src: `${import.meta.env.BASE_URL}artists/${folder}/listicle-left-4.png`,
      alt: {
        it: 'Quarta pagina elenco dedicata ai Potato Band',
        en: 'Fourth listicle page dedicated to Potato Band'
      }
    },
    {
      id: 'article-1',
      src: `${import.meta.env.BASE_URL}artists/${folder}/article-1-right.png`,
      alt: {
        it: 'Pagina dell’articolo dedicato ai Potato Band',
        en: 'Feature page dedicated to Potato Band'
      }
    }
  ]
}

function createNontTanontGallery(folder) {
  return [
    {
      id: 'cover',
      src: `${import.meta.env.BASE_URL}artists/${folder}/cover.png`,
      alt: {
        it: 'Cover editoriale dedicata a Nont Tanont — Tra musica e carisma',
        en: 'Editorial cover dedicated to Nont Tanont — Between music and charisma'
      }
    },
    {
      id: 'article-intro',
      src: `${import.meta.env.BASE_URL}artists/${folder}/article-intro.png`,
      alt: {
        it: 'Pagina introduttiva su Nont Tanont',
        en: 'Introductory article page about Nont Tanont'
      }
    },
    {
      id: 'biography-1',
      src: `${import.meta.env.BASE_URL}artists/${folder}/biography-1.png`,
      alt: {
        it: 'Biografia di Nont Tanont — dagli esordi al successo',
        en: 'Biography of Nont Tanont — from early career to success'
      }
    },
    {
      id: 'biography-2',
      src: `${import.meta.env.BASE_URL}artists/${folder}/biography-2.png`,
      alt: {
        it: 'Nont Tanont — Monospectrum e l\'album più recente',
        en: 'Nont Tanont — Monospectrum and the latest album'
      }
    },
    {
      id: 'genre-style',
      src: `${import.meta.env.BASE_URL}artists/${folder}/genre-style.png`,
      alt: {
        it: 'Genere e stile di Nont Tanont — pop, R&B e soul',
        en: 'Genre and style of Nont Tanont — pop, R&B and soul'
      }
    },
    {
      id: 'albums',
      src: `${import.meta.env.BASE_URL}artists/${folder}/albums.png`,
      alt: {
        it: 'Discografia di Nont Tanont — tutti gli album',
        en: 'Nont Tanont discography — all albums'
      }
    },
    {
      id: 'music-video',
      src: `${import.meta.env.BASE_URL}artists/${folder}/music-video.png`,
      alt: {
        it: 'Ultimo video musicale di Nont Tanont — กลัวลืม (The Collection)',
        en: 'Latest music video by Nont Tanont — กลัวลืม (The Collection)'
      }
    }
  ]
}

export const artists = [
  {
    slug: 'potato-band',
    name: 'Potato Band',
    genre: {
      it: 'Rock thailandese',
      en: 'Thai rock'
    },
    tagline: {
      it: '',
      en: ''
    },
    description: {
      it: 'Band rock thailandese formata nel 2000, con un’identità forte e un legame molto diretto con il pubblico.',
      en: 'A Thai rock band formed in 2000, known for a strong identity and a direct connection with its audience.'
    },
    image: `${import.meta.env.BASE_URL}artists/potato-band-card.jpg`,
    imageAlt: {
      it: 'Foto promozionale verticale dei Potato Band',
      en: 'Vertical promotional photo of Potato Band'
    },
    highlights: {
      it: ['Thailandia', 'Dal 2000', '12 immagini'],
      en: ['Thailand', 'Since 2000', '12 images']
    },
    gallery: {
      it: createPotatoGallery('potato-band'),
      en: createPotatoGallery('potato-band-en')
    }
  },
  {
    slug: 'nont-tanont',
    name: 'Nont Tanont',
    genre: {
      it: 'Pop thailandese, R&B, Soul',
      en: 'Thai pop, R&B, Soul'
    },
    tagline: {
      it: '',
      en: ''
    },
    description: {
      it: 'Cantautore thailandese che ha conquistato il pubblico dai talent show al sold out dell\'IMPACT Arena, con una voce espressiva e una personalità carismatica.',
      en: 'Thai singer-songwriter who won audiences from talent shows to sold-out IMPACT Arena shows, known for his expressive voice and charismatic personality.'
    },
    image: `${import.meta.env.BASE_URL}artists/nont-tanont-card.jpg`,
    imageAlt: {
      it: 'Foto promozionale di Nont Tanont',
      en: 'Promotional photo of Nont Tanont'
    },
    highlights: {
      it: ['Thailandia', 'Dal 2012', '7 slide'],
      en: ['Thailand', 'Since 2012', '7 slides']
    },
    gallery: {
      it: createNontTanontGallery('nont-tanont'),
      en: createNontTanontGallery('nont-tanont-en')
    }
  },
  {
    slug: 'singto-numchok',
    name: 'Singto Numchok',
    genre: {
      it: 'Indie-pop thailandese, Folk-pop, Surf music',
      en: 'Thai indie-pop, Folk-pop, Surf music'
    },
    tagline: {
      it: '',
      en: ''
    },
    description: {
      it: 'Cantautore indipendente thailandese attivo dal 2003, noto per il suo sound rilassato con ukulele e chitarra e per il contatto diretto con il pubblico nei festival di tutto il mondo.',
      en: 'Independent Thai singer-songwriter active since 2003, known for his laid-back ukulele and guitar sound and direct connection with audiences at festivals worldwide.'
    },
    image: `${import.meta.env.BASE_URL}artists/singto-numchok-card.jpg`,
    imageAlt: {
      it: 'Foto promozionale di Singto Numchok',
      en: 'Promotional photo of Singto Numchok'
    },
    highlights: {
      it: ['Thailandia', 'Dal 2003', '8 slide'],
      en: ['Thailand', 'Since 2003', '8 slides']
    },
    gallery: {
      it: createSingtoNumchokGallery('singto-numchok'),
      en: createSingtoNumchokGallery('singto-numchok-en')
    }
  }
]

function createSingtoNumchokGallery(folder) {
  return [
    {
      id: 'cover',
      src: `${import.meta.env.BASE_URL}artists/${folder}/cover.png`,
      alt: {
        it: 'Cover editoriale di Singto Numchok — Il leone fortunato dell\'indie-pop thailandese',
        en: 'Editorial cover of Singto Numchok — The lucky lion of Thai indie-pop'
      }
    },
    {
      id: 'article-intro',
      src: `${import.meta.env.BASE_URL}artists/${folder}/article-intro.png`,
      alt: {
        it: 'Pagina introduttiva su Singto Numchok',
        en: 'Introductory article page about Singto Numchok'
      }
    },
    {
      id: 'biography-1',
      src: `${import.meta.env.BASE_URL}artists/${folder}/biography-1.png`,
      alt: {
        it: 'Biografia di Singto Numchok — dagli esordi al riscatto personale',
        en: 'Biography of Singto Numchok — from early life to personal redemption'
      }
    },
    {
      id: 'biography-2',
      src: `${import.meta.env.BASE_URL}artists/${folder}/biography-2.png`,
      alt: {
        it: 'Singto Numchok artista indipendente — gli ultimi progetti',
        en: 'Singto Numchok as an independent artist — latest projects'
      }
    },
    {
      id: 'genre-style',
      src: `${import.meta.env.BASE_URL}artists/${folder}/genre-style.png`,
      alt: {
        it: 'Genere e stile di Singto Numchok — folk-pop, surf music e ukulele',
        en: 'Genre and style of Singto Numchok — folk-pop, surf music and ukulele'
      }
    },
    {
      id: 'albums',
      src: `${import.meta.env.BASE_URL}artists/${folder}/albums.png`,
      alt: {
        it: 'Discografia di Singto Numchok — tutti gli album',
        en: 'Singto Numchok discography — all albums'
      }
    },
    {
      id: 'eps',
      src: `${import.meta.env.BASE_URL}artists/${folder}/eps.png`,
      alt: {
        it: 'EP di Singto Numchok — Sticky Rice, Chok Dee, TingRingTing',
        en: 'Singto Numchok EPs — Sticky Rice, Chok Dee, TingRingTing'
      }
    },
    {
      id: 'latest-ep',
      src: `${import.meta.env.BASE_URL}artists/${folder}/latest-ep.png`,
      alt: {
        it: 'Ultimo EP di Singto Numchok — Jaeo Into The Sea (2025)',
        en: 'Latest EP by Singto Numchok — Jaeo Into The Sea (2025)'
      }
    }
  ]
}

export function getArtistBySlug(slug) {
  return artists.find((artist) => artist.slug === slug)
}
