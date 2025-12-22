import { Link } from 'react-router-dom'

function About() {
  return (
    <div className="bg-stone-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="pt-20 pb-16 sm:pt-32 sm:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <h1 className="text-4xl sm:text-6xl font-semibold text-black dark:text-white mb-6 sm:mb-8 tracking-tight leading-tight">
            About Music Drama Radio
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto">
            Your ultimate destination for K-pop, T-pop, K-drama content and Korean culture insights.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 sm:py-24 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold mb-6 text-black dark:text-white">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  Music Drama is a radio program and project created by Cinzia Alberti in February 2022.
                  It airs on Radio Panda 96.3 and on MixCloud.
                </p>
                <p>
                  Our journey is dedicated to Korean and Thai culture, with particular attention to traditions, 
                  habits, lifestyles and the latest musical and cinematographic productions.
                </p>
                <p>
                  The project develops thanks to the work of a team of people with different skills.
                </p>
                <p className="text-sm italic text-gray-600 dark:text-gray-400">
                  *Music Drama is non-profit and currently has no commercial purpose.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-2xl p-8 sm:p-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">Our Mission</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Bringing Korean and Thai culture to the Italian public through authentic content 
                    that celebrates traditions, music and cinematography of these countries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4 text-black dark:text-white">
              What We Stand For
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our core values guide everything we do at Music Drama Radio
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-black dark:text-white">Authenticity</h3>
              <p className="text-gray-700 dark:text-gray-300">
                We provide genuine, unbiased content that respects the artistry and culture behind Korean entertainment.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-black dark:text-white">Community</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Building a global community of fans who share the same passion for Korean culture and entertainment.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-black dark:text-white">Innovation</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Constantly evolving our content and approach to bring you fresh perspectives on Korean entertainment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 sm:py-24 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4 text-black dark:text-white">
              Our Team
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A group of 7 collaborators passionate about Asian culture
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {/* Cinzia Alberti */}
            <div className="group cursor-pointer">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg transform rotate-1 group-hover:rotate-0 transition-all duration-300 hover:shadow-xl max-w-xs">
                <div className="w-48 h-56 bg-gray-100 dark:bg-gray-700 rounded-lg mb-3 overflow-hidden">
                  <img 
                    src="/MusicDramaRadio-Website/CinziaAlberti.jpg" 
                    alt="Cinzia Alberti" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-handwriting text-lg font-medium text-black dark:text-white mb-1">Cinzia Alberti</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Founder & Host</p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 leading-tight">
                    Social Services Technician, discovered K-Drama in 2016. Founder of Music Drama on Radio Panda 96.3 and VisiOnAir Radio.
                  </p>
                </div>
              </div>
            </div>

            {/* Anna Cozzolino */}
            <div className="group cursor-pointer">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg transform -rotate-1 group-hover:rotate-0 transition-all duration-300 hover:shadow-xl max-w-xs">
                <div className="w-48 h-56 bg-gray-100 dark:bg-gray-700 rounded-lg mb-3 overflow-hidden">
                  <img 
                    src="/MusicDramaRadio-Website/AnnaCozzolino.jpg" 
                    alt="Anna Cozzolino" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-handwriting text-lg font-medium text-black dark:text-white mb-1">Anna Cozzolino</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Content Creator</p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 leading-tight">
                    University student in Educational Sciences with a passion for Thai music. Interpreter and translator for Music Drama.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="my-12 flex items-center justify-center">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent w-full max-w-md"></div>
          </div>

          {/* Other Team Members */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 justify-items-center">
            {/* Saverio Lombardi */}
            <div className="group cursor-pointer">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg transform rotate-2 group-hover:rotate-0 transition-all duration-300 hover:shadow-xl max-w-xs">
                <div className="w-48 h-56 bg-gray-100 dark:bg-gray-700 rounded-lg mb-3 overflow-hidden">
                  <img 
                    src="/MusicDramaRadio-Website/SaverioLombardi.jpg" 
                    alt="Saverio Lombardi" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-handwriting text-lg font-medium text-black dark:text-white mb-1">Saverio Lombardi</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Speaker</p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 leading-tight">
                    Traveling speaker since 1988, touring Italian radios. Always on point at any time of day or night.
                  </p>
                </div>
              </div>
            </div>

            {/* DJ Quarto */}
            <div className="group cursor-pointer">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg transform -rotate-2 group-hover:rotate-0 transition-all duration-300 hover:shadow-xl max-w-xs">
                <div className="w-48 h-56 bg-gray-100 dark:bg-gray-700 rounded-lg mb-3 overflow-hidden">
                  <img 
                    src="/MusicDramaRadio-Website/DjQuarto.jpg" 
                    alt="DJ Quarto" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-handwriting text-lg font-medium text-black dark:text-white mb-1">DJ Quarto</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Director & Speaker</p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 leading-tight">
                    Director and radio speaker. Started in 2022, joined Music Drama in 2023. Director of La Buca del Rock.
                  </p>
                </div>
              </div>
            </div>

            {/* Sofia Porta */}
            <div className="group cursor-pointer">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg transform rotate-1 group-hover:rotate-0 transition-all duration-300 hover:shadow-xl max-w-xs">
                <div className="w-48 h-56 bg-gray-100 dark:bg-gray-700 rounded-lg mb-3 overflow-hidden">
                  <img 
                    src="/MusicDramaRadio-Website/SofiaPorta .jpg" 
                    alt="Sofia Porta" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-handwriting text-lg font-medium text-black dark:text-white mb-1">Sofia Porta</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Actress & Voice Actor</p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 leading-tight">
                    Actress, voice actor and speaker. Worked on Music Drama for the entire second season (Oct 2023 - Jun 2024).
                  </p>
                </div>
              </div>
            </div>

            {/* Isabella Deborah Bonomo */}
            <div className="group cursor-pointer">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg transform -rotate-1 group-hover:rotate-0 transition-all duration-300 hover:shadow-xl max-w-xs">
                <div className="w-48 h-56 bg-gray-100 dark:bg-gray-700 rounded-lg mb-3 overflow-hidden">
                  <img 
                    src="/MusicDramaRadio-Website/IsabellaDeborahBonomo .jpg" 
                    alt="Isabella Deborah Bonomo" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-handwriting text-lg font-medium text-black dark:text-white mb-1">Isabella D. Bonomo</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Translator & Editor</p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 leading-tight">
                    Also known as Yishan B. Translator, video editor and maker for Music Drama in the Tilly Birds project.
                  </p>
                </div>
              </div>
            </div>

            {/* Angelina Faggion */}
            <div className="group cursor-pointer">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg transform rotate-2 group-hover:rotate-0 transition-all duration-300 hover:shadow-xl max-w-xs">
                <div className="w-48 h-56 bg-gray-100 dark:bg-gray-700 rounded-lg mb-3 overflow-hidden">
                  <img 
                    src="/MusicDramaRadio-Website/AngelinaFaggion.jpg" 
                    alt="Angelina Faggion" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-handwriting text-lg font-medium text-black dark:text-white mb-1">Angelina Faggion</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Collaborator</p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 leading-tight">
                    Passionate about Oriental culture. Discovered K-Drama and K-pop, traveled to Seoul in 2019. Collaborated until June 2024.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6 text-black dark:text-white">
            Join Our Journey
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            Discover exclusive interviews, read our latest articles, and become part of our growing community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/interviews" 
              className="inline-block bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Explore Interviews
            </Link>
            <Link 
              to="/blog" 
              className="inline-block border-2 border-black dark:border-white text-black dark:text-white px-8 py-4 rounded-full font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Read Our Blog
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About