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

export const artists = [
  {
    slug: 'potato-band',
    name: 'Potato Band',
    genre: {
      it: 'Rock thailandese',
      en: 'Thai rock'
    },
    tagline: {
      it: 'Feed editoriale privato dedicato alla band.',
      en: 'Private editorial feed dedicated to the band.'
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
  }
]

export function getArtistBySlug(slug) {
  return artists.find((artist) => artist.slug === slug)
}
