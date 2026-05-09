const infiniteShadeSlides = (folder) => [
  {
    type: 'image',
    src: `${import.meta.env.BASE_URL}blog/${folder}/cover.png`,
    alt: {
      it: 'Cover -The Infinite Shade Concert, Nont Tanont × Singto Numchok, 5 aprile 2026, EventResidenz Düsseldorf',
      en: 'Cover -The Infinite Shade Concert, Nont Tanont × Singto Numchok, 5th April 2026, EventResidenz Düsseldorf'
    }
  },
  {
    type: 'image',
    src: `${import.meta.env.BASE_URL}blog/${folder}/fallin.png`,
    alt: {
      it: 'Nont Tanont sul palco dell\'EventResidenz durante "Fallin\'"',
      en: 'Nont Tanont on stage at EventResidenz during "Fallin\'"'
    }
  },
  {
    type: 'image',
    src: `${import.meta.env.BASE_URL}blog/${folder}/spring.png`,
    alt: {
      it: 'Nont Tanont canta "Spring" davanti al pubblico internazionale',
      en: 'Nont Tanont performs "Spring" in front of an international audience'
    }
  },
  {
    type: 'image',
    src: `${import.meta.env.BASE_URL}blog/${folder}/time-flies.png`,
    alt: {
      it: 'Nont Tanont durante "Time Flies" con le luci della sala',
      en: 'Nont Tanont performing "Time Flies" under the venue lights'
    }
  },
  {
    type: 'image',
    src: `${import.meta.env.BASE_URL}blog/${folder}/first-love.png`,
    alt: {
      it: 'Nont Tanont interpreta "First Love", la sua canzone iconica',
      en: 'Nont Tanont performs "First Love", his iconic song'
    }
  },
  {
    type: 'image',
    src: `${import.meta.env.BASE_URL}blog/${folder}/temple-dog.png`,
    alt: {
      it: 'Nont Tanont e Singto Numchok cantano "Temple Dog" insieme',
      en: 'Nont Tanont and Singto Numchok perform "Temple Dog" together'
    }
  },
  {
    type: 'image',
    src: `${import.meta.env.BASE_URL}blog/${folder}/yoo-tor-loey.png`,
    alt: {
      it: 'Singto Numchok tra il pubblico durante "Yoo Tor Loey Dai Mai"',
      en: 'Singto Numchok among the audience during "Yoo Tor Loey Dai Mai"'
    }
  },
  {
    type: 'image',
    src: `${import.meta.env.BASE_URL}blog/${folder}/crowd-walk.png`,
    alt: {
      it: 'Singto cammina tra la folla e passa il microfono a un fan',
      en: 'Singto walks through the crowd and hands the mic to a fan'
    }
  },
  {
    type: 'image',
    src: `${import.meta.env.BASE_URL}blog/${folder}/always-with-me.png`,
    alt: {
      it: 'Nont Tanont chiude il concerto con "Always With Me"',
      en: 'Nont Tanont closes the show with "Always With Me"'
    }
  }
]

export const blogPosts = [
  {
    id: 'infinite-shade-concert',
    slug: 'the-infinite-shade-concert-nontxsingto',
    title: {
      it: 'The Infinite Shade Concert - Nont Tanont × Singto Numchok',
      en: 'The Infinite Shade Concert - Nont Tanont × Singto Numchok'
    },
    excerpt: {
      it: 'Il 5 aprile 2026 l\'EventResidenz di Düsseldorf ha ospitato uno show indimenticabile: Nont Tanont e Singto Numchok sul palco insieme per una serata di musica thai pop tra emozione, risate e canzoni destinate a restare nel cuore.',
      en: 'On 5th April 2026, the EventResidenz in Düsseldorf hosted an unforgettable show: Nont Tanont and Singto Numchok on stage together for an evening of Thai pop music filled with emotion, laughter and songs that will stay in the heart.'
    },
    date: '2026-04-05',
    category: {
      it: 'Concerti',
      en: 'Concerts'
    },
    coverImage: `${import.meta.env.BASE_URL}blog/infinite-shade-concert/hero.png`,
    coverAlt: {
      it: 'The Infinite Shade Concert - Nont Tanont × Singto Numchok, EventResidenz Düsseldorf',
      en: 'The Infinite Shade Concert - Nont Tanont × Singto Numchok, EventResidenz Düsseldorf'
    },
    content: {
      it: infiniteShadeSlides('infinite-shade-concert'),
      en: infiniteShadeSlides('infinite-shade-concert-en')
    },
    credits: {
      it: 'Foto e articolo a cura di Anna Cozzolino. Tutte le immagini © Music Drama Radio 2026.',
      en: 'Pictures and article by Anna Cozzolino. All images © Music Drama Radio 2026.'
    }
  }
]

export function getBlogPostBySlug(slug) {
  return blogPosts.find((post) => post.slug === slug)
}
