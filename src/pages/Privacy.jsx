import { Link } from 'react-router-dom'

function Privacy() {
  return (
    <div className="pt-20 pb-32 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors mb-8"
          aria-label="Torna alla Home"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Torna alla Home
        </Link>

        <h1 className="text-4xl sm:text-5xl font-semibold text-center mb-12 sm:mb-20 text-black dark:text-white tracking-tight">Informativa Privacy</h1>

        <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300 space-y-8">
          <p className="text-lg">Ultimo aggiornamento: 16 febbraio 2026</p>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">1. Titolare del trattamento</h2>
            <p>
              Il sito Music Drama Radio tratta i dati personali nel rispetto del Regolamento (UE) 2016/679 (GDPR)
              e della normativa italiana applicabile. Per richieste o chiarimenti e possibile contattare il team
              all'indirizzo <strong>teamminimuuu@gmail.com</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">2. Dati raccolti</h2>
            <p>
              Possiamo raccogliere i dati forniti volontariamente tramite form di contatto (nome, email, oggetto,
              messaggio) e informazioni tecniche essenziali alla fruizione del sito (ad esempio dati di navigazione
              e log tecnici).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">3. Finalita e base giuridica</h2>
            <p>
              I dati sono trattati per rispondere alle richieste inviate, gestire comunicazioni editoriali e migliorare
              qualita e sicurezza del servizio. La base giuridica e l'esecuzione di misure precontrattuali su richiesta
              dell'interessato, il legittimo interesse del titolare e, ove richiesto, il consenso.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">4. Modalita di trattamento e conservazione</h2>
            <p>
              I dati sono trattati con strumenti elettronici e misure organizzative adeguate a garantirne riservatezza,
              integrita e disponibilita. I dati sono conservati per il tempo strettamente necessario alle finalita
              indicate e, ove necessario, per obblighi di legge.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">5. Comunicazione a terzi</h2>
            <p>
              I dati non vengono venduti o ceduti a fini commerciali. Possono essere trattati da fornitori tecnici
              che operano come responsabili del trattamento, esclusivamente per finalita connesse al funzionamento
              del sito e dei servizi collegati.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">6. Diritti dell'interessato</h2>
            <p>
              L'utente puo esercitare in qualsiasi momento i diritti previsti dagli articoli 15-22 del GDPR,
              inclusi accesso, rettifica, cancellazione, limitazione, opposizione e portabilita dei dati,
              scrivendo a <strong>teamminimuuu@gmail.com</strong>. Resta salva la possibilita di proporre reclamo
              all'autorita di controllo competente.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">7. Aggiornamenti</h2>
            <p>
              La presente informativa puo essere aggiornata nel tempo per adeguamenti normativi o evoluzioni del servizio.
              Le modifiche saranno pubblicate in questa pagina con data di revisione aggiornata.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Privacy
