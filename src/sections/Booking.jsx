import { useState } from 'react'
import { CONTACT_EMAIL, WEB3FORMS_KEY, SOCIALS } from '../config.js'
import useReveal from '../hooks/useReveal.js'
import { Mail, Check, CalendarDays } from 'lucide-react'
import { IconWa, IconIn } from '../components/Icons.jsx'

// Créneaux horaires proposés (heures ouvrées)
const SLOTS = ['09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00', '18:00']

const PERKS = [
  'Réponse sous 24 h',
  'Échange gratuit et sans engagement',
  'Conseils concrets sur votre projet',
]

export default function Booking() {
  useReveal()
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  // Date minimale = aujourd'hui (pas de RDV dans le passé)
  const today = new Date().toISOString().split('T')[0]

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    const form = e.target
    const data = new FormData(form)
    data.append('access_key', WEB3FORMS_KEY)
    data.append('subject', 'Nouvelle demande de rendez-vous — Jëftech')
    data.append('from_name', 'Site Jëftech · Rendez-vous')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      })
      const json = await res.json()
      if (json.success) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="booking" className="section-pad booking">
      <div className="container booking__inner reveal">
        <div className="pixel-grid" />
        <div className="booking__glow" />

        <div className="booking__grid">
          <div className="booking__intro">
            <h2 className="booking__title">
              Parlons de <span className="gradient-text">votre projet.</span>
            </h2>
            <p className="booking__sub">
              Choisissez la date et l'heure qui vous arrangent. On vous recontacte pour
              confirmer un appel gratuit de 30 minutes et sans engagement.
            </p>

            <ul className="booking__contact">
              <li>
                <span className="booking__ic"><Mail size={18} strokeWidth={1.8} /></span>
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              </li>
              <li>
                <span className="booking__ic"><IconWa /></span>
                <a href={SOCIALS.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>
              </li>
              <li>
                <span className="booking__ic"><IconIn /></span>
                <a href={SOCIALS.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              </li>
            </ul>

            <ul className="booking__perks">
              {PERKS.map((p) => (
                <li key={p}><Check size={17} strokeWidth={2.4} /> {p}</li>
              ))}
            </ul>
          </div>

          <form className="booking__form" onSubmit={handleSubmit}>
            <div className="bk-row">
              <label className="bk-field">
                <span>Nom complet</span>
                <input type="text" name="name" required placeholder="Votre nom" />
              </label>
              <label className="bk-field">
                <span>Téléphone / WhatsApp</span>
                <input type="tel" name="phone" placeholder="+221 77 000 00 00" />
              </label>
            </div>

            <label className="bk-field">
              <span>Email</span>
              <input type="email" name="email" required placeholder="vous@email.com" />
            </label>

            <div className="bk-row">
              <label className="bk-field">
                <span>Date souhaitée</span>
                <input type="date" name="date" required min={today} />
              </label>
              <label className="bk-field">
                <span>Heure souhaitée</span>
                <select name="time" required defaultValue="">
                  <option value="" disabled>Choisir…</option>
                  {SLOTS.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </label>
            </div>

            <label className="bk-field">
              <span>Votre projet (optionnel)</span>
              <textarea name="message" rows="3" placeholder="Site web, application, devis…" />
            </label>

            {/* Anti-spam honeypot */}
            <input type="checkbox" name="botcheck" className="hidden-honeypot" tabIndex="-1" autoComplete="off" />

            <button type="submit" className="btn btn-primary btn--lg" disabled={status === 'sending'}>
              <CalendarDays size={19} strokeWidth={1.9} />
              {status === 'sending' ? 'Envoi…' : 'Demander ce rendez-vous'}
            </button>

            {status === 'success' && (
              <p className="form-msg form-msg--ok">Demande envoyée ! On vous recontacte très vite pour confirmer.</p>
            )}
            {status === 'error' && (
              <p className="form-msg form-msg--err">
                Une erreur est survenue. Écrivez-nous à <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
