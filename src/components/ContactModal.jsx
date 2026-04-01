import { useState } from 'react'
import { useLanguage } from '../hooks/useLanguage'
import { translations } from '../utils/translations'

function ContactModal({ isOpen, onClose }) {
  const { language } = useLanguage()
  const t = translations[language]
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Qui potresti integrare con un servizio email
    console.log('Form submitted:', formData)
    alert(t.contactSuccess)
    onClose()
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-900 rounded-2xl max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-2xl font-semibold mb-6 text-black dark:text-white">{t.contactTitle}</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder={t.contactName}
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 bg-white dark:bg-gray-800 text-black dark:text-white"
            />
          </div>
          
          <div>
            <input
              type="email"
              name="email"
              placeholder={t.contactEmail}
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 bg-white dark:bg-gray-800 text-black dark:text-white"
            />
          </div>

          <div>
            <input
              type="text"
              name="subject"
              placeholder={t.contactSubject}
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 bg-white dark:bg-gray-800 text-black dark:text-white"
            />
          </div>

          <div>
            <textarea
              name="message"
              placeholder={t.contactMessage}
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 bg-white dark:bg-gray-800 text-black dark:text-white resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black dark:bg-white text-white dark:text-black py-3 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
          >
            {t.contactSend}
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactModal
