const paoloDionisiGallery = [
  {
    id: 'img-8090',
    src: `${import.meta.env.BASE_URL}interviews/paolo-dionisi/img-8090.jpg`,
    alt: {
      it: 'Paolo Dionisi e la redazione davanti al backdrop dell’Ambasciata d’Italia a Bangkok',
      en: 'Paolo Dionisi and the editorial team in front of the Embassy of Italy in Bangkok backdrop'
    }
  },
  {
    id: 'img-8075',
    src: `${import.meta.env.BASE_URL}interviews/paolo-dionisi/img-8075.jpg`,
    alt: {
      it: 'Momento dell’intervista registrata a Bangkok',
      en: 'Moment from the interview recorded in Bangkok'
    }
  },
  {
    id: 'img-8078',
    src: `${import.meta.env.BASE_URL}interviews/paolo-dionisi/img-8078.jpg`,
    alt: {
      it: 'Paolo Dionisi durante l’intervista',
      en: 'Paolo Dionisi during the interview'
    }
  },
  {
    id: 'img-8102',
    src: `${import.meta.env.BASE_URL}interviews/paolo-dionisi/img-8102.jpg`,
    alt: {
      it: 'Logo dell’Ambasciata d’Italia a Bangkok e dell’Istituto Italiano di Cultura',
      en: 'Embassy of Italy in Bangkok and Italian Cultural Institute logo'
    }
  },
  {
    id: 'img-8109',
    src: `${import.meta.env.BASE_URL}interviews/paolo-dionisi/img-8109.jpg`,
    alt: {
      it: 'Maria Sica davanti al pannello istituzionale a Bangkok',
      en: 'Maria Sica in front of the institutional panel in Bangkok'
    }
  }
]

const koreaGallery = [
  {
    id: 'img-6476',
    src: `${import.meta.env.BASE_URL}interviews/korea/img-6476.jpg`,
    alt: {
      it: 'Intervista in Ambasciata d’Italia a Seoul con l’Ambasciatrice Emilia Gatto',
      en: 'Interview at the Embassy of Italy in Seoul with Ambassador Emilia Gatto'
    }
  },
  {
    id: 'img-6477',
    src: `${import.meta.env.BASE_URL}interviews/korea/img-6477.jpg`,
    alt: {
      it: 'Momento di conversazione durante l’intervista a Seoul',
      en: 'Conversation moment during the interview in Seoul'
    }
  },
  {
    id: 'img-6479',
    src: `${import.meta.env.BASE_URL}interviews/korea/img-6479.jpg`,
    alt: {
      it: 'Scatto istituzionale con l’Ambasciatrice Emilia Gatto',
      en: 'Institutional portrait with Ambassador Emilia Gatto'
    }
  },
  {
    id: 'img-6481',
    src: `${import.meta.env.BASE_URL}interviews/korea/img-6481.jpg`,
    alt: {
      it: 'Foto ricordo al termine dell’incontro in Ambasciata',
      en: 'Photo taken at the end of the meeting at the Embassy'
    }
  }
]

export const interviews = [
  {
    id: 'paolo-dionisi',
    slug: 'paolo-dionisi-bangkok',
    title: {
      it: 'Intervista a Paolo Dionisi, Ambasciatore d’Italia in Thailandia',
      en: 'Interview with Paolo Dionisi, Ambassador of Italy to Thailand'
    },
    description: {
      it: 'Conversazione registrata a Bangkok con Paolo Dionisi tra diplomazia, presenza italiana in Thailandia e dialogo culturale. Nelle foto compare anche Maria Sica, direttrice dell’Istituto Italiano di Cultura di Bangkok.',
      en: 'A conversation recorded in Bangkok with Paolo Dionisi about diplomacy, the Italian presence in Thailand and cultural dialogue. The photos also feature Maria Sica, director of the Italian Cultural Institute in Bangkok.'
    },
    date: '2025-11-05',
    duration: '15:35',
    location: {
      it: 'Bangkok',
      en: 'Bangkok'
    },
    guest: {
      it: 'Paolo Dionisi',
      en: 'Paolo Dionisi'
    },
    image: `${import.meta.env.BASE_URL}interviews/paolo-dionisi/img-8090.jpg`,
    imageAlt: {
      it: 'Paolo Dionisi e la redazione davanti al backdrop dell’Ambasciata d’Italia a Bangkok',
      en: 'Paolo Dionisi and the editorial team in front of the Embassy of Italy in Bangkok backdrop'
    },
    audio: `${import.meta.env.BASE_URL}interviews-paolo-dionisi.mp3`,
    topics: {
      it: [
        'Relazioni storiche tra Italia e Thailandia e nuove direzioni strategiche.',
        'Percezione reciproca tra cultura thailandese e cultura italiana.',
        'Soft power, moda, cucina e immagine dell’Italia nel paese.',
        'Scambi economici, macchinari e dinamiche commerciali.',
        'Lingua italiana, universita e nuove generazioni.',
        'Il ruolo dei social media nella diplomazia culturale.'
      ],
      en: [
        'Historical ties between Italy and Thailand and new strategic directions.',
        'Mutual perceptions between Thai culture and Italian culture.',
        'Soft power, fashion, food and the image of Italy in the country.',
        'Economic exchange, machinery and trade dynamics.',
        'Italian language, universities and younger generations.',
        'The role of social media in cultural diplomacy.'
      ]
    },
    acknowledgements: {
      it: 'Si ringraziano l’Ambasciatore Paolo Dionisi per la disponibilità all’intervista, Maria Sica, direttrice dell’Istituto Italiano di Cultura di Bangkok, e il team dell’Ambasciata d’Italia a Bangkok per l’accoglienza e il supporto.',
      en: 'Special thanks to Ambassador Paolo Dionisi for the interview, to Maria Sica, director of the Italian Cultural Institute in Bangkok, and to the team of the Embassy of Italy in Bangkok for their hospitality and support.'
    },
    transcript: {
      it: [
        {
          startTime: 13,
          endTime: 137,
          question: 'Music Drama: Ambasciatore Dionisi, come descriverebbe oggi il rapporto tra Italia e Thailandia?',
          answer:
            'Paolo Dionisi: È una storia d’amore lunga 157 anni e continua a crescere. All’inizio era la Thailandia a guardare all’Italia con ammirazione: il re Rama V rimase colpito soprattutto da Torino e dal suo impianto urbano, tanto da voler coinvolgere architetti italiani nello sviluppo di Bangkok. Oggi il rapporto continua, ma in parte si è anche invertito: siamo noi a osservare con grande interesse la vitalità della Thailandia e dell’area indo-pacifica.'
        },
        {
          startTime: 137,
          endTime: 328,
          question: 'Music Drama: Quali aspetti della cultura thailandese colpiscono di più gli italiani? E cosa affascina invece i thailandesi della cultura italiana?',
          answer:
            'Paolo Dionisi: Gli italiani restano colpiti dalla spiritualità, dai templi, dall’architettura e soprattutto dall’apertura delle persone. La Thailandia è davvero il paese del sorriso, e questo si percepisce ogni giorno. I thailandesi, invece, conoscono molto bene le famose quattro F italiane: fashion, furniture, food e tutto ciò che ruota intorno allo stile italiano. Il nostro lavoro oggi è mostrare che l’Italia è anche molto altro: tecnologia, spazio, blue economy, economia circolare e sicurezza alimentare.'
        },
        {
          startTime: 328,
          endTime: 458,
          question: 'Music Drama: Quanto contano arte, cucina e moda nel rafforzare il legame tra i due paesi?',
          answer:
            'Paolo Dionisi: Il soft power è diventato quasi hard power, perché è uno degli strumenti con cui un paese come l’Italia porta avanti anche i propri interessi. In Thailandia la cucina italiana è tra le più amate, subito dopo quella giapponese, e la presenza di ristoranti italiani è molto forte. Anche la moda è ovunque: i grandi marchi italiani sono presenti e riconosciuti. Tutto questo rafforza la percezione dell’Italia e crea un legame molto concreto.'
        },
        {
          startTime: 458,
          endTime: 620,
          question: 'Music Drama: E sul piano economico quali sono i settori di scambio più importanti tra Italia e Thailandia?',
          answer:
            'Paolo Dionisi: Il dato che sorprende di più è che il primo settore di scambio riguarda i macchinari: agricoli, industriali e tecnologici. Il commercio tra i due paesi vale quasi cinque miliardi di euro e continua a crescere. Oltre al food e all’arredo, la Thailandia rappresenta per l’Italia un partner molto interessante in un’area geografica dinamica e strategica.'
        },
        {
          startTime: 620,
          endTime: 663,
          question: 'Music Drama: La lingua è uno dei ponti più forti tra le culture. Quali iniziative esistono oggi per promuovere lo studio dell’italiano in Thailandia?',
          answer:
            'Paolo Dionisi: Esiste già una buona base, a partire da università importanti come Chulalongkorn, dove è attivo un percorso di italianistica sostenuto anche dal governo italiano. Ogni anno molti studenti thailandesi scelgono di imparare l’italiano, e il nostro obiettivo è rafforzare ulteriormente questo percorso.'
        },
        {
          startTime: 663,
          endTime: 774,
          question: 'Music Drama: Per il futuro delle relazioni tra i nostri paesi è fondamentale coinvolgere i più giovani. Ci sono programmi di scambio o progetti che vanno in questa direzione?',
          answer:
            'Paolo Dionisi: Sì, ed è un punto centrale. Stiamo ampliando borse di studio, opportunità universitarie e percorsi formativi in settori diversi, dalla tecnologia alla musica. Ci sono giovani thailandesi che studiano nei conservatori italiani e progetti per rafforzare anche il canto lirico a Bangkok. Investire sui giovani significa creare futuri leader, professionisti e amici dell’Italia.'
        },
        {
          startTime: 774,
          endTime: 878,
          question: 'Music Drama: Oggi i social media hanno un ruolo decisivo nel far conoscere culture e fenomeni pop. Che effetto ha questo sulla Thailandia e sul lavoro dell’Ambasciata?',
          answer:
            'Paolo Dionisi: I social hanno assunto un ruolo fondamentale e in Thailandia il loro impatto è fortissimo. TikTok, Instagram e altri canali aiutano a diffondere eventi, cultura e immaginario contemporaneo. Anche l’Ambasciata collabora con creator e figure influenti per promuovere iniziative e parlare a un pubblico più giovane. Se si vuole restare rilevanti in un mondo che cambia, bisogna saper usare questi linguaggi nuovi senza perdere la profondità del rapporto storico che unisce i due paesi.'
        }
      ],
      en: [
        {
          startTime: 13,
          endTime: 137,
          question: 'Music Drama: Ambassador Dionisi, how would you describe the relationship between Italy and Thailand today?',
          answer:
            'Paolo Dionisi: It is a 157-year love story, and it is still growing. At the beginning, Thailand looked at Italy with admiration. King Rama V was especially impressed by Turin and its urban planning, and that helped bring Italian architects into the development of Bangkok. Today the relationship is still strong, but in some ways it has also reversed: now Italy looks at Thailand and the Indo-Pacific area with great interest because of their energy and growth.'
        },
        {
          startTime: 137,
          endTime: 328,
          question: 'Music Drama: What aspects of Thai culture fascinate Italians the most? And what attracts Thai people to Italian culture?',
          answer:
            'Paolo Dionisi: Italians are often struck by Thailand’s spirituality, its temples, its architecture and, above all, by the openness of its people. Thailand truly is a land of smiles, and you can feel that every day. Thai audiences, on the other hand, know the famous Italian four Fs very well: fashion, furniture, food and the broader Italian lifestyle. Our task today is to show that Italy is also much more than that, including technology, space, the blue economy, the circular economy and food safety.'
        },
        {
          startTime: 328,
          endTime: 458,
          question: 'Music Drama: How important are art, food and fashion in strengthening the connection between the two countries?',
          answer:
            'Paolo Dionisi: Soft power has almost become hard power, because it is now one of the tools through which a country like Italy advances its national interests as well. In Thailand, Italian cuisine is among the most appreciated, second only to Japanese food, and the presence of Italian restaurants is very strong. Fashion is everywhere too: major Italian brands are present and highly recognized. All of this reinforces the image of Italy and turns cultural attraction into a very concrete bond.'
        },
        {
          startTime: 458,
          endTime: 620,
          question: 'Music Drama: And economically speaking, what are the main sectors of exchange between Italy and Thailand?',
          answer:
            'Paolo Dionisi: The most surprising fact is that machinery comes first: agricultural, industrial and technological equipment. Trade between the two countries is worth nearly five billion euros and continues to grow. Alongside food and furniture, Thailand is a very interesting partner for Italy within a dynamic and strategic geographic area.'
        },
        {
          startTime: 620,
          endTime: 663,
          question: 'Music Drama: Language is one of the strongest bridges between cultures. What initiatives exist today to promote the study of Italian in Thailand?',
          answer:
            'Paolo Dionisi: There is already a solid foundation, starting with major universities such as Chulalongkorn, where Italian studies are active with support from the Italian government. Every year many Thai students choose to learn Italian, and our goal is to strengthen this path even further.'
        },
        {
          startTime: 663,
          endTime: 774,
          question: 'Music Drama: Younger generations are essential for the future of this relationship. Are there exchange programs or projects that support that goal?',
          answer:
            'Paolo Dionisi: Yes, and this is a central point for us. We are expanding scholarships, university opportunities and training paths in different sectors, from technology to music. Thai students are studying in Italian conservatories, and there are projects to strengthen lyrical singing in Bangkok as well. Investing in young people means building future leaders, professionals and friends of Italy.'
        },
        {
          startTime: 774,
          endTime: 878,
          question: 'Music Drama: Social media now play a decisive role in spreading culture and pop phenomena. What effect does this have on Thailand and on the work of the Embassy?',
          answer:
            'Paolo Dionisi: Social media have become essential, and in Thailand their impact is extremely strong. TikTok, Instagram and other platforms help circulate events, culture and contemporary narratives. The Embassy also works with creators and influential figures to promote initiatives and speak to younger audiences. If you want to remain relevant in a changing world, you need to use these new languages while preserving the depth of the historical bond between our two countries.'
        }
      ]
    },
    gallery: paoloDionisiGallery
  },
  {
    id: 'korea-emilia-gatto',
    slug: 'emilia-gatto-seoul',
    title: {
      it: 'Intervista a Emilia Gatto, Ambasciatrice d’Italia in Corea del Sud',
      en: 'Interview with Emilia Gatto, Ambassador of Italy to South Korea'
    },
    description: {
      it: 'Conversazione registrata a Seoul con l’Ambasciatrice Emilia Gatto su relazioni diplomatiche tra Italia e Corea del Sud, scambi culturali, lingua italiana, universita e nuove opportunita per chi guarda alla Corea.',
      en: 'A conversation recorded in Seoul with Ambassador Emilia Gatto about diplomatic relations between Italy and South Korea, cultural exchange, the Italian language, universities and new opportunities for people looking at Korea.'
    },
    date: '2025-10-22',
    time: '11:30',
    duration: '13:06',
    location: {
      it: 'Seoul',
      en: 'Seoul'
    },
    guest: {
      it: 'Emilia Gatto',
      en: 'Emilia Gatto'
    },
    image: `${import.meta.env.BASE_URL}interviews/korea/img-6479.jpg`,
    imageAlt: {
      it: 'Intervista in Ambasciata d’Italia a Seoul con l’Ambasciatrice Emilia Gatto',
      en: 'Interview at the Embassy of Italy in Seoul with Ambassador Emilia Gatto'
    },
    audio: `${import.meta.env.BASE_URL}interviews-korea.m4a`,
    topics: {
      it: [
        'Il ruolo dell’Ambasciata italiana in Corea del Sud e le priorita del sistema Italia a Seoul.',
        'La crescita dell’interesse reciproco tra Italia e Corea, anche attraverso cultura pop e social media.',
        'Accoglienza degli italiani che si trasferiscono in Corea e attenzione a scambi universitari e accademici.',
        'L’immagine dell’Italia in Corea tra moda, design, food, lusso e alta tecnologia.',
        'Promozione della lingua italiana, programmi universitari e iniziative come Study in Italy.',
        'Un messaggio ai giovani e a chi immagina un percorso professionale o imprenditoriale in Corea del Sud.'
      ],
      en: [
        'The role of the Italian Embassy in South Korea and the main priorities of the Italian system in Seoul.',
        'The growing mutual interest between Italy and Korea, including the role of pop culture and social media.',
        'Support for Italians relocating to Korea, with strong attention to academic and university exchange.',
        'Italy’s image in Korea across fashion, design, food, luxury and advanced technology.',
        'Promotion of the Italian language, university paths and initiatives such as Study in Italy.',
        'A message to younger generations and to people considering a professional or entrepreneurial path in South Korea.'
      ]
    },
    acknowledgements: {
      it: 'Si ringraziano l’Ambasciatrice Emilia Gatto e Andrea Ferrara, Primo Segretario Capo Ufficio Consolare e Culturale Ambasciata d’Italia a Seoul, per il tempo dedicato all’intervista e per l’accoglienza riservata alla redazione.',
      en: 'Special thanks to Ambassador Emilia Gatto and Andrea Ferrara, First Secretary and Head of the Consular and Cultural Office at the Embassy of Italy in Seoul, for their time and for welcoming the editorial team.'
    },
    transcript: {
      it: [
        {
          startTime: 0,
          endTime: 86,
          question: 'Music Drama: Qual e oggi il ruolo principale dell’Ambasciata italiana in Corea del Sud?',
          answer:
            'Emilia Gatto: L’Ambasciata lavora anzitutto per rafforzare le relazioni diplomatiche tra Italia e Corea del Sud, che hanno una storia lunga oltre 140 anni. Le priorita toccano il dialogo politico, i rapporti economico-commerciali e il grande spazio della cultura, coordinando il sistema Italia presente nel paese.'
        },
        {
          startTime: 86,
          endTime: 186,
          question: 'Music Drama: Perche la Corea interessa sempre di piu gli italiani, soprattutto i piu giovani?',
          answer:
            'Emilia Gatto: La Corea viene percepita come un paese del futuro, capace di attrarre nuove generazioni e professionisti grazie a uno sviluppo rapido e molto visibile sul piano internazionale. Cresce pero anche il movimento opposto: sempre piu coreani guardano all’Italia con interesse e curiosita.'
        },
        {
          startTime: 186,
          endTime: 272,
          question: 'Music Drama: Che tipo di supporto offrite agli italiani che si trasferiscono o arrivano in Corea del Sud?',
          answer:
            'Emilia Gatto: L’Ambasciata cura da vicino il rapporto con la comunita italiana, organizza momenti di orientamento e accoglienza in Residenza e aiuta a capire servizi, consolato e primi passaggi pratici. Grande attenzione viene data anche agli scambi accademici e universitari, che stanno crescendo molto.'
        },
        {
          startTime: 272,
          endTime: 388,
          question: 'Music Drama: Come viene percepita la cultura italiana dalla popolazione coreana?',
          answer:
            'Emilia Gatto: In Corea l’Italia resta fortemente associata a moda, food, design e lusso, e c’e un amore sincero per musica, opera, storia e radici culturali italiane. La sfida diplomatica e culturale e mostrare che l’Italia e anche innovazione, ricerca e alta tecnologia.'
        },
        {
          startTime: 388,
          endTime: 539,
          question: 'Music Drama: Quale lavoro fate sulla lingua italiana e sui percorsi di studio tra i due paesi?',
          answer:
            'Emilia Gatto: La diffusione dell’italiano viene promossa con corsi, attivita dell’Istituto Italiano di Cultura e iniziative di orientamento verso universita italiane di eccellenza. Il messaggio ai giovani coreani e chiaro: oggi si puo studiare in Italia anche attraverso programmi in inglese, avvicinandosi al tempo stesso alla nostra lingua e alla nostra cultura.'
        },
        {
          startTime: 539,
          endTime: 783,
          question: 'Music Drama: Che messaggio darebbe a giovani, professionisti e imprenditori italiani che guardano alla Corea del Sud?',
          answer:
            'Emilia Gatto: La Corea del Sud e un paese in cui si puo vivere bene e costruire relazioni profonde. I coreani, una volta superata la prima riservatezza, mostrano una forte passione per bellezza, arte e cultura, e proprio qui nasce una grande sintonia con l’Italia. Per questo vale la pena venire, conoscere il contesto e costruire ponti veri tra i due paesi.'
        }
      ],
      en: [
        {
          startTime: 0,
          endTime: 86,
          question: 'Music Drama: What is the main role of the Italian Embassy in South Korea today?',
          answer:
            'Emilia Gatto: The Embassy works first of all to strengthen diplomatic relations between Italy and South Korea, a relationship built over more than 140 years. The priorities include political dialogue, economic and trade relations, and a major focus on culture, while coordinating the wider Italian system active in the country.'
        },
        {
          startTime: 86,
          endTime: 186,
          question: 'Music Drama: Why is Korea drawing more and more interest from Italians, especially younger generations?',
          answer:
            'Emilia Gatto: Korea is increasingly seen as a country of the future, capable of attracting young people and professionals thanks to its rapid development and strong international visibility. At the same time, the reverse movement is also growing, with more and more Koreans looking at Italy with real interest.'
        },
        {
          startTime: 186,
          endTime: 272,
          question: 'Music Drama: What kind of support do you offer Italians who move to or arrive in South Korea?',
          answer:
            'Emilia Gatto: The Embassy works closely with the Italian community, organizing orientation and welcome moments at the Residence and helping newcomers understand services, consular structures and the first practical steps. There is also strong attention to academic and university exchange, which is growing rapidly.'
        },
        {
          startTime: 272,
          endTime: 388,
          question: 'Music Drama: How is Italian culture perceived by the Korean public?',
          answer:
            'Emilia Gatto: In Korea, Italy is still strongly associated with fashion, food, design and luxury, and there is genuine admiration for Italian music, opera, history and cultural roots. The diplomatic and cultural challenge is to show that Italy also stands for innovation, research and advanced technology.'
        },
        {
          startTime: 388,
          endTime: 539,
          question: 'Music Drama: What work do you do around the Italian language and study paths between the two countries?',
          answer:
            'Emilia Gatto: The Italian language is promoted through courses, activities by the Italian Cultural Institute and orientation initiatives toward leading Italian universities. The message to Korean students is clear: today Italy can also be approached through English-language programs, while still becoming closer to the Italian language and to Italian culture.'
        },
        {
          startTime: 539,
          endTime: 783,
          question: 'Music Drama: What message would you give to young Italians, professionals and entrepreneurs looking at South Korea?',
          answer:
            'Emilia Gatto: South Korea is a country where it is possible to live well and build meaningful relationships. Once the first layer of reserve is overcome, Koreans reveal a strong passion for beauty, art and culture, and that is where a real connection with Italy often begins. That is why it is worth coming here, understanding the context and building real bridges between the two countries.'
        }
      ]
    },
    gallery: koreaGallery
  }
]

export function getInterviewBySlug(slug) {
  return interviews.find((interview) => interview.slug === slug)
}
