import { useState } from 'react'
import { CONTACT_EMAIL, WEB3FORMS_KEY, SOCIALS } from '../config.js'
import useReveal from '../hooks/useReveal.js'
import { Mail, Check, CalendarDays, HelpCircle } from 'lucide-react'
import { IconWa, IconIn } from '../components/Icons.jsx'

const SLOTS = [
  { value: '09:00', label: '09:00' },
  { value: '10:00', label: '10:00' },
  { value: '11:00', label: '11:00' },
  { value: '12:00', label: '12:00' },
  { value: '14:00', label: '14:00' },
  { value: '15:00', label: '15:00' },
  { value: '16:00', label: '16:00' },
  { value: '17:00', label: '17:00' },
  { value: '18:00', label: '18:00' },
]

const PERKS = [
  'Réponse sous 24 h',
  'Échange gratuit et sans engagement',
  'Conseils concrets sur votre projet',
]

const FAQ = [
  {
    question: 'Combien de temps dure l\'appel gratuit ?',
    answer: 'L\'appel découverte dure 30 minutes. C\'est le temps nécessaire pour comprendre votre besoin, répondre à vos questions et vous donner une première estimation.'
  },
  {
    question: 'Y a-t-il un engagement après l\'appel ?',
    answer: 'Aucun. L\'appel est gratuit et sans engagement. Si vous souhaitez aller plus loin, nous vous envoyons un devis détaillé que vous êtes libre d\'accepter ou non.'
  },
  {
    question: 'Comment se passe le paiement ?',
    answer: 'Nous fonctionnons par étapes validées ensemble : acompte de 30% à la signature, 40% à mi-parcours, 30% à la livraison. Paiement par virement, carte ou mobile money.'
  },
  {
    question: 'Quels sont vos délais typiques ?',
    answer: 'Site vitrine : 3-5 semaines. E-commerce : 6-8 semaines. Application mobile : 8-12 semaines. SaaS sur mesure : 3-6 mois. Un planning précis est donné au devis.'
  },
  {
    question: 'Travaillez-vous à distance ?',
    answer: 'Oui, nous sommes basés à Dakar mais travaillons avec des clients dans tout le Sénégal et à l\'international. Visioconférence, WhatsApp, email : on s\'adapte à vos habitudes.'
  },
  {
    question: 'Que se passe-t-il après la mise en ligne ?',
    answer: 'Nous assurons la maintenance corrective (bugs), la surveillance (uptime, sécurité) et restons disponibles pour les évolutions. Contrat de maintenance mensuel ou à la carte.'
  },
]

export default function Booking() {
  useReveal()
  const [status, setStatus] = useState('idle')

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
    <section id="booking" className="section-pad booking" aria-labelledby="booking-title">
      <div className="container booking__inner reveal">
        <div className="pixel-grid" />
        <div className="booking__glow" />

        <div className="booking__grid">
          <div className="booking__intro">
            <h2 id="booking-title" className="booking__title">
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
                <span>Créneau souhaité</span>
                <select name="time" required defaultValue="">
                  <option value="" disabled>Choisir…</option>
                  {SLOTS.map((slot) => <option key={slot.value} value={slot.value}>{slot.label}</option>)}
                </select>
              </label>
            </div>

            <label className="bk-field">
              <span>Votre projet (optionnel)</span>
              <textarea name="message" rows="3" placeholder="Site web, application, devis…" />
            </label>

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

      {/* FAQ Section with Structured Data */}
      <div className="container" style={{ marginTop: '60px' }}>
        <div className="section-head reveal" style={{ maxWidth: '800px', margin: '0 auto 40px', textAlign: 'center' }}>
          <span className="eyebrow">Questions fréquentes</span>
          <h3 className="section-title" style={{ fontSize: 'clamp(24px,3vw,32px)' }}>Questions sur nos rendez-vous</h3>
        </div>
        <div className="faq-grid">
          {FAQ.map((faq, i) => (
            <details key={i} className="faq-item reveal" style={{
              background: '#fff',
              border: '1px solid var(--card-border)',
              borderRadius: 'var(--radius)',
              padding: '24px',
              boxShadow: '0 10px 30px -22px rgba(10,15,44,.35)',
              transitionDelay: `${i * 50}ms`
            }} itemScope itemType="https://schema.org/Question">
              <summary itemProp="name" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                fontWeight: 600,
                fontSize: '16px',
                color: 'var(--navy)',
                cursor: 'pointer',
                listStyle: 'none'
              }}>
                <HelpCircle size={20} strokeWidth={1.8} style={{ color: 'var(--blue)', flexShrink: 0 }} />
                {faq.question}
              </summary>
              <div className="faq-answer" itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer" style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid var(--card-border)', color: 'var(--gray)', lineHeight: 1.7 }}>
                <p itemProp="text">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>

        {/* FAQ Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": FAQ.map((faq) => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            })
          }}
        />
      </div>
    </section>
  )
}