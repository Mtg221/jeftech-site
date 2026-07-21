import { useState } from 'react'
import useReveal from '../hooks/useReveal.js'
import { WEB3FORMS_KEY, CONTACT_EMAIL, SOCIALS } from '../config.js'
import { IconMail, IconWa, IconIn } from '../components/Icons.jsx'

export default function Contact() {
  useReveal()
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    const form = e.target
    const data = new FormData(form)
    data.append('access_key', WEB3FORMS_KEY)
    data.append('subject', 'Nouveau message depuis le site Jëftech')
    data.append('from_name', 'Site Jëftech')

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
      <div className="container contact__inner">
        <div className="contact__aside reveal">
          <span className="eyebrow">Contact</span>
          <h2 className="section-title">Parlons de votre projet.</h2>
          <p className="section-sub">
            Une question, un devis, une idée&nbsp;? Écrivez-nous — on vous répond sous 24&nbsp;h.
          </p>

          <ul className="contact__info">
            <li>
              <span className="contact__ic"><IconMail /></span>
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

        <form className="contact__form reveal" onSubmit={handleSubmit}>
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
            <input type="text" name="topic" placeholder="Site web, application, devis…" />
          </label>
          <label className="field">
            <span>Message</span>
            <textarea name="message" rows="5" required placeholder="Décrivez votre projet en quelques lignes…" />
          </label>

          {/* Anti-spam honeypot (caché) */}
          <input type="checkbox" name="botcheck" className="hidden-honeypot" tabIndex="-1" autoComplete="off" />

          <button type="submit" className="btn btn-primary btn--lg" disabled={status === 'sending'}>
            {status === 'sending' ? 'Envoi…' : 'Envoyer le message'}
          </button>

          {status === 'success' && (
            <p className="form-msg form-msg--ok">✅ Merci&nbsp;! Votre message a bien été envoyé.</p>
          )}
          {status === 'error' && (
            <p className="form-msg form-msg--err">
              ❌ Une erreur est survenue. Écrivez-nous directement à <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
