import { Link } from 'react-router-dom'

function Terms() {
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

        <h1 className="text-4xl sm:text-5xl font-semibold text-center mb-12 sm:mb-20 text-black dark:text-white tracking-tight">Termini di Servizio</h1>

        <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300 space-y-8">
          <p className="text-lg">Ultimo aggiornamento: 16 febbraio 2026</p>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">1. Ambito di applicazione</h2>
            <p>
              I presenti Termini disciplinano l'accesso e l'utilizzo del sito Music Drama Radio. Navigando nel sito,
              l'utente dichiara di aver letto e accettato integralmente le condizioni qui riportate.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">2. Uso consentito</h2>
            <p>
              L'utente si impegna a utilizzare il sito in modo lecito, corretto e conforme alle normative vigenti,
              evitando comportamenti che possano compromettere sicurezza, disponibilita o integrita dei contenuti e
              delle funzionalita offerte.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">3. Proprieta intellettuale</h2>
            <p>
              Testi, immagini, elementi grafici, contenuti audio/video e materiali editoriali presenti sul sito sono
              protetti dalla normativa in materia di proprieta intellettuale e restano nella titolarita dei rispettivi
              aventi diritto. E vietata la riproduzione non autorizzata, anche parziale.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">4. Limitazione di responsabilita</h2>
            <p>
              Pur adottando misure ragionevoli per garantire accuratezza e aggiornamento dei contenuti, Music Drama Radio
              non garantisce assenza assoluta di errori o interruzioni del servizio. Nei limiti di legge, il sito non
              risponde di danni indiretti derivanti dall'uso o dall'impossibilita di utilizzo dei contenuti.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">5. Link esterni e servizi terzi</h2>
            <p>
              Il sito puo contenere collegamenti a piattaforme esterne (ad esempio social media). Tali servizi sono
              gestiti da soggetti terzi e sono regolati da condizioni e informative privacy autonome, non controllate
              direttamente da Music Drama Radio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">6. Modifiche ai termini</h2>
            <p>
              Music Drama Radio si riserva il diritto di aggiornare i presenti Termini in qualsiasi momento.
              Le modifiche entrano in vigore dalla data di pubblicazione su questa pagina.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">7. Contatti</h2>
            <p>
              Per richieste relative a questi Termini e possibile scrivere a <strong>teamminimuuu@gmail.com</strong>.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Terms
