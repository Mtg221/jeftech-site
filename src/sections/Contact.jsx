import { useState } from 'react'
import { CONTACT_EMAIL, WEB3FORMS_KEY, SOCIALS } from '../config.js'
import useReveal from '../hooks/useReveal.js'
import { Mail, Send, Check, AlertCircle } from 'lucide-react'
import { IconWa, IconIn } from '../components/Icons.jsx'

export default function Contact() {
  useReveal()
  const [status, setStatus] = useState('idle')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    const form = e.target
    const data = new FormData(form)
    data.append('access_key', WEB3FORMS_KEY)
    data.append('subject', 'Nouveau message de contact — Jëftech')
    data.append('from_name', 'Site Jëftech · Contact')

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
    <section id="contact" className="section-pad contact">
      <div className="container contact__inner reveal">
        <div className="contact__aside">
          <h2 className="section-title">Contactez-<span className="gradient-text">nous</span></h2>
          <p className="section-sub">Une question, un projet en tête, ou juste envie d'échanger ? On vous répond sous 24h.</p>

          <ul className="contact__info">
            <li>
              <span className="contact__ic"><Mail size={20} strokeWidth={1.8} /></span>
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </li>
            <li>
              <span className="contact__ic"><IconWa /></span>
              <a href={SOCIALS.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>
            </li>
            <li>
              <span className="contact__ic"><IconIn /></span>
              <a href={SOCIALS.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            </li>
          </ul>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="field-row">
            <label className="field">
              <span>Nom complet</span>
              <input type="text" name="name" required placeholder="Votre nom" />
            </label>
            <label className="field">
              <span>Email</span>
              <input type="email" name="email" required placeholder="vous@email.com" />
            </label>
          </div>

          <label className="field">
            <span>Sujet</span>
            <select name="subject" required>
              <option value="" disabled>Choisir un sujet…</option>
              <option value="projet">Nouveau projet web / mobile</option>
              <option value="devis">Demande de devis</option>
              <option value="partenariat">Partenariat</option>
              <option value="autre">Autre</option>
            </select>
          </label>

          <label className="field">
            <span>Message</span>
            <textarea name="message" rows="5" required placeholder="Parlez-nous de votre projet…" />
          </label>

          <input type="checkbox" name="botcheck" className="hidden-honeypot" tabIndex="-1" autoComplete="off" />

          <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
            <Send size={19} strokeWidth={1.9} />
            {status === 'sending' ? 'Envoi…' : 'Envoyer le message'}
          </button>

          {status === 'success' && (
            <p className="form-msg form-msg--ok">
              <Check size={15} strokeWidth={2.5} /> Message envoyé ! On vous répond très vite.
            </p>
          )}
          {status === 'error' && (
            <p className="form-msg form-msg--err">
              <AlertCircle size={15} strokeWidth={2.5} /> Une erreur est survenue. Écrivez-nous à <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}