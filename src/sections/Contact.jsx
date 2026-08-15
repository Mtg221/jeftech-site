import { useState } from 'react'
import { CONTACT_EMAIL, WEB3FORMS_KEY, SOCIALS } from '../config.js'
import useReveal from '../hooks/useReveal.js'
import { Mail, Send, Check, AlertCircle, HelpCircle } from 'lucide-react'
import { IconWa, IconIn } from '../components/Icons.jsx'

const CONTACT_FAQ = [
  {
    question: 'Quel est votre délai de réponse ?',
    answer: 'Nous répondons à tous les messages sous 24h ouvrées. Pour les demandes urgentes, privilégiez WhatsApp ou un appel direct.'
  },
  {
    question: 'Puis-je obtenir un devis sans rendez-vous ?',
    answer: 'Oui, décrivez votre projet dans le formulaire (type, fonctionnalités principales, délai souhaité) et nous vous enverrons une estimation par email sous 48h.'
  },
  {
    question: 'Travaillez-vous avec des clients hors Sénégal ?',
    answer: 'Oui, nous accompagnons des clients en Afrique de l\'Ouest, en France et à l\'international. La communication se fait en visio, WhatsApp ou email.'
  },
  {
    question: 'Quels sont vos modes de paiement acceptés ?',
    answer: 'Virement bancaire, carte bancaire (Stripe), Orange Money, Wave. Facturation en FCFA ou EUR selon votre localisation.'
  },
  {
    question: 'Proposez-vous de la maintenance après livraison ?',
    answer: 'Oui, deux options : forfait mensuel (surveillance, mises à jour, support prioritaire) ou intervention à la carte selon vos besoins.'
  },
  {
    question: 'Le code source m\'appartient-il ?',
    answer: 'Oui, à la fin du projet et après paiement complet, vous êtes propriétaire du code source. Nous vous remettons l\'accès au dépôt Git et la documentation technique.'
  },
]

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
    <section id="contact" className="section-pad contact" aria-labelledby="contact-title">
      <div className="container contact__inner reveal">
        <div className="contact__aside">
          <h2 id="contact-title" className="section-title">Contactez-<span className="gradient-text">nous</span></h2>
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

          <address style={{ marginTop: '32px', fontStyle: 'normal', color: 'var(--gray)', fontSize: '14px', lineHeight: 1.8 }}>
            <strong>Jëftech</strong><br />
            Dakar, Sénégal<br />
            <a href="tel:+221779649539" style={{ color: 'var(--navy)', textDecoration: 'none' }}>+221 77 964 95 39</a>
          </address>
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

      {/* FAQ Section with Structured Data */}
      <div className="container" style={{ marginTop: '60px' }}>
        <div className="section-head reveal" style={{ maxWidth: '800px', margin: '0 auto 40px', textAlign: 'center' }}>
          <span className="eyebrow">Questions fréquentes</span>
          <h3 className="section-title" style={{ fontSize: 'clamp(24px,3vw,32px)' }}>Questions sur nos services</h3>
        </div>
        <div className="faq-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', maxWidth: '900px', margin: '0 auto' }}>
          {CONTACT_FAQ.map((faq, i) => (
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
              "mainEntity": CONTACT_FAQ.map((faq) => ({
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