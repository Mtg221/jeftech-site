import { Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal.js'
import { Calendar, Clock, ArrowLeft, Tag, Share2 } from 'lucide-react'
import { BLOG_POSTS } from './Blog.jsx'

function formatDate(dateStr) {
  const date = new Date(dateStr)
  return date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })
}

function getPostContent(slug) {
  const contents = {
    'cout-site-web-senegal': `
      <h2>Les quatre gammes de prix</h2>
      
      <h3>1. Site vitrine simple — 500 000 à 1 500 000 FCFA</h3>
      <p><strong>Pour qui ?</strong> Artisans, consultants, TPE, associations.</p>
      <p><strong>Ce que vous obtenez :</strong> 5-8 pages (Accueil, À propos, Services, Réalisations, Contact), design responsive, formulaire de contact, SEO de base, hébergement 1 an.</p>
      <p><strong>Délai :</strong> 2-3 semaines.</p>

      <h3>2. Site vitrine professionnel — 1 500 000 à 3 500 000 FCFA</h3>
      <p><strong>Pour qui ?</strong> PME, cabinets, écoles, ONG, startups.</p>
      <p><strong>Ce que vous obtenez :</strong> Design sur mesure, blog/CMS pour publier du contenu, optimisation SEO avancée, analytics, formulaires avancés, RGPD, performance (Lighthouse > 90), formation à l'administration.</p>
      <p><strong>Délai :</strong> 4-6 semaines.</p>

      <h3>3. E-commerce — 3 000 000 à 8 000 000 FCFA</h3>
      <p><strong>Pour qui ?</strong> Commerçants, marques, distributeurs.</p>
      <p><strong>Ce que vous obtenez :</strong> Catalogue produits illimité, variantes (tailles, couleurs), panier, paiement <strong>Orange Money + Wave + Carte</strong>, espace client, gestion stocks/commandes, emails transactionnels, dashboard admin, SEO fiches produits, facturation auto.</p>
      <p><strong>Délai :</strong> 6-10 semaines.</p>

      <h3>4. Application web / SaaS sur mesure — 5 000 000 à 15 000 000+ FCFA</h3>
      <p><strong>Pour qui ?</strong> Entreprises avec processus métiers uniques, startups tech, Scale-ups.</p>
      <p><strong>Ce que vous obtenez :</strong> Architecture modulaire, API documentées, authentification SSO/2FA, rôles/permissions (RBAC), temps réel, automatisations, tests automatisés, CI/CD, monitoring, documentation technique, propriété du code.</p>
      <p><strong>Délai :</strong> 3-6 mois.</p>

      <h2>Ce qui fait varier le prix</h2>
      <table>
        <thead>
          <tr><th>Facteur</th><th>Impact sur le prix</th></tr>
        </thead>
        <tbody>
          <tr><td>Nombre de pages uniques</td><td>+10-20% par page complexe</td></tr>
          <tr><td>Design sur mesure vs template</td><td>x2 à x3</td></tr>
          <tr><td>Intégration paiement (OM, Wave, Stripe)</td><td>+500k-1.5M FCFA</td></tr>
          <tr><td>Espace membre / espace client</td><td>+1-2M FCFA</td></tr>
          <tr><td>Multilingue (FR/EN/WO)</td><td>+30-50%</td></tr>
          <tr><td>Migration données existantes</td><td>Selon volume</td></tr>
          <tr><td>Maintenance incluse (1 an)</td><td>+15-25% du projet</td></tr>
        </tbody>
      </table>

      <h2>Les pièges à éviter</h2>
      <h3>❌ "Je vais prendre le moins cher"</h3>
      <p>Un site à 300 000 FCFA fait souvent avec un builder (Wix, WordPress + thème) vous coûtera plus cher à long terme : performances médiocres, SEO inexistant, impossible à faire évoluer, dépendance au prestataire.</p>

      <h3>❌ "Mon neveu sait faire des sites"</h3>
      <p>Compétence technique ≠ expertise produit. Un site pro demande : UX, SEO, accessibilité, sécurité, performance, conversion, maintenance. C'est un métier.</p>

      <h3>❌ Négliger le contenu</h3>
      <p>Le design sans contenu, c'est une coquille vide. Prévoyez du budget/temps pour : textes optimisés SEO, photos pro, vidéos, témoignages clients.</p>

      <h3>❌ Oublier l'après-lancement</h3>
      <p>Un site non maintenu = faille de sécurité + lenteur + baisse SEO. Prévoyez 15-25% du budget initial par an pour la maintenance.</p>

      <h2>Comment calculer votre ROI</h2>
      <pre><code>(Chiffre d'affaires généré par le site - Coût total du site) / Coût total du site × 100 = ROI %</code></pre>
      <p><strong>Exemple réel (client Jëftech, e-commerce cosmétiques) :</strong></p>
      <ul>
        <li>Investissement : 4 200 000 FCFA (site + 1 an maintenance)</li>
        <li>CA généré an 1 : 18 500 000 FCFA</li>
        <li>Marge nette : ~35% = 6 475 000 FCFA</li>
        <li><strong>ROI : 54% la première année</strong></li>
      </ul>

      <h2>Notre approche chez Jëftech</h2>
      <ol>
        <li><strong>Appel découverte gratuit (30 min)</strong> : On comprend votre besoin, votre cible, vos objectifs.</li>
        <li><strong>Cadrage & devis détaillé</strong> : Pas de surprise. Chaque ligne est explicite.</li>
        <li><strong>Maquettes validées avant code</strong> : Vous voyez le résultat avant qu'on développe.</li>
        <li><strong>Livraison par étapes</strong> : Démo hebdomadaire, vous validez au fur et à mesure.</li>
        <li><strong>Formation + documentation</strong> : Vous êtes autonome.</li>
        <li><strong>Maintenance incluse 3 mois</strong> : Puis forfait mensuel ou à la carte.</li>
      </ol>
    `,
    'choisir-agence-web-senegal': `
      <h2>1. Regardez le portfolio — mais pas seulement les captures d'écran</h2>
      <p><strong>Ce qu'il faut vérifier :</strong></p>
      <ul>
        <li>Les sites sont-ils <strong>en ligne</strong> et <strong>fonctionnels</strong> ? (Cliquez les liens)</li>
        <li>Sont-ils <strong>rapides</strong> ? (Testez sur mobile avec PageSpeed Insights)</li>
        <li>Y a-t-il des <strong>projets similaires</strong> au vôtre ? (E-commerce, SaaS, mobile, etc.)</li>
        <li>Le code est-il <strong>maintenable</strong> ? (Demandez l'accès au repo Git ou à la doc technique)</li>
      </ul>
      <p><strong>Drapeau rouge :</strong> Portfolio avec seulement des images, pas de liens vers des sites vivants.</p>

      <h2>2. Vérifiez l'expertise technique réelle</h2>
      <p><strong>Questions à poser :</strong></p>
      <ul>
        <li>"Quelle stack utilisez-vous et pourquoi ?" (Pas de bonne réponse unique, mais une réponse argumentée)</li>
        <li>"Comment gérez-vous la sécurité ?" (Auth, HTTPS, headers, RGPD, OWASP)</li>
        <li>"Quelle est votre approche performance ?" (Core Web Vitals, lazy loading, caching, CDN)</li>
        <li>"Faites-vous des tests automatisés ?" (Unit, integration, E2E)</li>
        <li>"Comment déployez-vous ?" (CI/CD, staging, rollback, monitoring)</li>
      </ul>
      <p><strong>Drapeau rouge :</strong> "On fait du WordPress pour tout" ou "On utilise [techno à la mode] sans savoir pourquoi".</p>

      <h2>3. Exigez un processus clair et transparent</h2>
      <p>Une agence pro a un processus <strong>documenté</strong> qu'elle vous explique au premier rendez-vous :</p>
      <ol>
        <li><strong>Découverte</strong> : Besoins, cibles, objectifs, KPIs</li>
        <li><strong>Cadrage</strong> : Périmètre, planning, budget, risques</li>
        <li><strong>Design</strong> : Wireframes → Maquettes → Prototypes → Validation</li>
        <li><strong>Développement</strong> : Sprints hebdomadaires, démo, feedback</li>
        <li><strong>Tests</strong> : QA, UAT, performance, sécurité, accessibilité</li>
        <li><strong>Lancement</strong> : Go-live, DNS, monitoring, formation</li>
        <li><strong>Maintenance</strong> : SLA, surveillance, évolutions</li>
      </ol>
      <p><strong>Drapeau rouge :</strong> "On commence demain, on verra au fur à mesure" ou pas de planning avec jalons.</p>

      <h2>4. La transparence sur les coûts — pas de surprise</h2>
      <p><strong>Un devis pro contient :</strong></p>
      <ul>
        <li>Détail par fonctionnalité/écran</li>
        <li>Coût de la maintenance (annuel ou mensuel)</li>
        <li>Ce qui est <strong>inclus</strong> et ce qui ne l'est <strong>pas</strong> (contenu, photos, SEO avancé, hébergement, noms de domaine, emails pro)</li>
        <li>Conditions de paiement (échéancier lié aux livrables)</li>
        <li>Clause de propriété du code source</li>
      </ul>
      <p><strong>Drapeau rouge :</strong> Devis une ligne "Site web complet — X FCFA" sans détail.</p>

      <h2>5. La maintenance n'est pas une option</h2>
      <p><strong>Posez ces questions :</strong></p>
      <ul>
        <li>"Que se passe-t-il si mon site tombe en panne un dimanche ?"</li>
        <li>"Combien coûte une modification mineure après livraison ?"</li>
        <li>"Faites-vous les mises à jour de sécurité ?"</li>
        <li>"Y a-t-il un monitoring uptime ?"</li>
        <li>"Quel est le SLA (temps de réponse garanti) ?"</li>
      </ul>
      <p><strong>Chez Jëftech :</strong> 3 mois offerts, puis forfait mensuel (surveillance + mises à jour + support prioritaire) ou à la carte. Code source = vôtre.</p>

      <h2>6. Les avis clients — allez au-delà des 5 étoiles</h2>
      <p><strong>Ce qu'il faut creuser :</strong></p>
      <ul>
        <li>Demandez 2-3 <strong>références directes</strong> (téléphone/email de vrais clients)</li>
        <li>Appelez-les : "Qu'est-ce qui s'est bien passé ? Qu'est-ce qui a été difficile ? Referiez-vous appel à eux ?"</li>
        <li>Cherchez des avis sur Google, LinkedIn, Clutch — pas seulement sur le site de l'agence</li>
      </ul>
      <p><strong>Drapeau rouge :</strong> Aucune référence vérifiable, ou refus de donner des contacts clients.</p>

      <h2>7. Le feeling — vous allez travailler ensemble pendant des mois</h2>
      <ul>
        <li>Répondent-ils <strong>vite</strong> et <strong>clairement</strong> à vos questions ?</li>
        <li>Vous parlent-ils <strong>langage business</strong> ou <strong>jargon technique</strong> ?</li>
        <li>Sont-ils <strong>honnêtes</strong> sur ce qui est possible/difficile/risqué ?</li>
        <li>Vous sentez-vous <strong>écouté</strong> ou <strong>vendu</strong> ?</li>
      </ul>
    `,
    'cout-application-mobile-senegal': `
      <h2>Les 3 approches techniques — et leur impact prix</h2>
      <table>
        <thead>
          <tr><th>Approche</th><th>Description</th><th>Prix typique</th><th>Pour qui ?</th></tr>
        </thead>
        <tbody>
          <tr><td>React Native / Expo (Cross-platform)</td><td>Un code base pour iOS + Android. 80-90% code partagé.</td><td>3M - 12M FCFA</td><td>Startups, PME, MVP, apps métiers</td></tr>
          <tr><td>Flutter (Cross-platform Google)</td><td>Un code base, performance proche native, UI cohérente.</td><td>3.5M - 15M FCFA</td><td>Apps exigeantes UI, équipes Flutter</td></tr>
          <tr><td>Native (Swift iOS + Kotlin Android)</td><td>Deux codes séparés, performance max, accès total APIs.</td><td>8M - 25M+ FCFA</td><td>Apps critiques (banque, santé, jeux 3D), gros budgets</td></tr>
        </tbody>
      </table>
      <p><strong>Notre recommandation par défaut : React Native + Expo</strong> — meilleur ratio délai/coût/qualité pour 90% des projets au Sénégal.</p>

      <h2>Ce qui fait varier le prix</h2>
      <h3>Complexité fonctionnelle</h3>
      <table>
        <thead><tr><th>Niveau</th><th>Exemples</th><th>Budget indicatif</th></tr></thead>
        <tbody>
          <tr><td>Simple</td><td>Catalogue, vitrine, formulaire, contenu statique, auth basique</td><td>3M - 5M FCFA</td></tr>
          <tr><td>Moyenne</td><td>E-commerce, réservation, chat, paiement, notifications, géoloc, mode offline partiel</td><td>5M - 10M FCFA</td></tr>
          <tr><td>Complexe</td><td>Temps réel (tracking, chat), IA/ML, sync offline-first, multi-rôles, API tierces multiples</td><td>10M - 25M+ FCFA</td></tr>
        </tbody>
      </table>

      <h3>Fonctionnalités "coûteuses" à prévoir</h3>
      <table>
        <thead><tr><th>Fonctionnalité</th><th>Surcoût estimé</th></tr></thead>
        <tbody>
          <tr><td>Paiement mobile money (Orange Money, Wave, CinetPay)</td><td>+500k - 1.5M FCFA</td></tr>
          <tr><td>Notifications push (Firebase, OneSignal)</td><td>+300k - 800k FCFA</td></tr>
          <tr><td>Géolocalisation + carte interactive</td><td>+500k - 1.5M FCFA</td></tr>
          <tr><td>Mode hors-ligne complet (sync bidirectionnelle)</td><td>+1.5M - 3M FCFA</td></tr>
          <tr><td>Chat temps réel / messagerie</td><td>+1M - 2.5M FCFA</td></tr>
          <tr><td>Authentification biométrique / SSO</td><td>+300k - 800k FCFA</td></tr>
          <tr><td>Tableau de bord admin web associé</td><td>+2M - 5M FCFA</td></tr>
          <tr><td>Publication stores (comptes dev, review, metadata)</td><td>+200k - 500k FCFA</td></tr>
        </tbody>
      </table>

      <h2>Exemples réels (projets Jëftech)</h2>
      <h3>Senegal Food App — Livraison repas Dakar</h3>
      <ul><li><strong>Stack :</strong> React Native (Expo) + Node.js/Express + PostgreSQL + Firebase</li><li><strong>Budget :</strong> ~9 500 000 FCFA</li><li><strong>Délai :</strong> 14 semaines</li><li><strong>Résultat :</strong> 1000+ commandes mois 1, note 4.7/5 stores</li></ul>

      <h3>Foot Vert — Réservation terrains foot</h3>
      <ul><li><strong>Stack :</strong> PWA (Next.js) + Firebase — choix PWA vs natif pour déploiement instantané sans store</li><li><strong>Budget :</strong> ~6 000 000 FCFA (PWA = 30% moins cher que natif)</li><li><strong>Délai :</strong> 8 semaines</li></ul>

      <h3>App interne logistique — Client B2B</h3>
      <ul><li><strong>Stack :</strong> React Native (Expo) + API existante client</li><li><strong>Budget :</strong> ~4 500 000 FCFA</li><li><strong>Délai :</strong> 6 semaines</li></ul>
    `,
    'digitaliser-pme-senegal': `
      <h2>Pourquoi les PME sénégalaises tardent-elles ?</h2>
      <table>
        <thead><tr><th>Frein</th><th>Réalité</th></tr></thead>
        <tbody>
          <tr><td>"C'est trop cher"</td><td>Le coût de l'inaction est plus élevé (perte clients, inefficacité)</td></tr>
          <tr><td>"On n'a pas le temps"</td><td>Les bons outils libèrent du temps dès le premier mois</td></tr>
          <tr><td>"Nos clients ne sont pas en ligne"</td><td>11M+ internautes au Sénégal, 95% sur mobile (ARTP 2024)</td></tr>
          <tr><td>"On ne sait pas par où commencer"</td><td>C'est pour ça qu'existe cet article</td></tr>
        </tbody>
      </table>

      <h2>La méthode Jëftech en 5 étapes</h2>

      <h3>Étape 1 : Audit de maturité digitale (1-2 semaines)</h3>
      <p>Diagnostiquez 6 piliers :</p>
      <table>
        <thead><tr><th>Pilier</th><th>Questions clés</th></tr></thead>
        <tbody>
          <tr><td>Présence web</td><td>Site à jour ? SEO ? Mobile ? Analytics ? Conversion ?</td></tr>
          <tr><td>Relation client</td><td>CRM ? Emailing ? WhatsApp Business ? Support ? Fidélité ?</td></tr>
          <tr><td>Processus internes</td><td>Devis/factures auto ? Stocks ? RH ? Comptabilité ? Projets ?</td></tr>
          <tr><td>Paiements</td><td>Orange Money ? Wave ? Carte ? Virement ? Facturation auto ?</td></tr>
          <tr><td>Données & pilotage</td><td>KPIs suivis ? Tableaux de bord ? Décisions data-driven ?</td></tr>
          <tr><td>Équipe & culture</td><td>Formation ? Outils collaboratifs ? Gestion du changement ?</td></tr>
        </tbody>
      </table>
      <p><strong>Résultat :</strong> Matrice de priorités — Quick wins vs Projets structurants.</p>

      <h3>Étape 2 : Quick wins — À faire ce mois-ci (0-500k FCFA)</h3>
      <table>
        <thead><tr><th>Action</th><th>Outil suggéré</th><th>Gain</th></tr></thead>
        <tbody>
          <tr><td>Google My Business optimisé</td><td>Gratuit</td><td>+30% visibilité locale</td></tr>
          <tr><td>WhatsApp Business + réponses rapides</td><td>Gratuit</td><td>Réponse < 5 min</td></tr>
          <tr><td>Signature email pro + liens réseaux</td><td>Gratuit</td><td>Crédibilité</td></tr>
          <tr><td>Formulaire contact/site → email + WhatsApp</td><td>Web3Forms, Formspree</td><td>Leads capturés</td></tr>
          <tr><td>Facturation dématérialisée</td><td>Facture.net, Sage, Odoo</td><td>-80% temps admin</td></tr>
          <tr><td>Paiement mobile money sur devis/factures</td><td>CinetPay, SenPay, Wave Pro</td><td>Encaissement +40%</td></tr>
          <tr><td>Drive partagé (Drive, OneDrive, Notion)</td><td>0-50k FCFA/mois</td><td>Fini les pertes de fichiers</td></tr>
          <tr><td>Réunions visio régulières</td><td>Meet, Zoom, Teams</td><td>Équipes alignées</td></tr>
        </tbody>
      </table>

      <h3>Étape 3 : Projets structurants — 3-12 mois (500k - 15M FCFA)</h3>
      <p><strong>Priorité 1 : Site web pro + SEO local</strong> — Budget 1.5M-3.5M | ROI : Visibilité 24/7, crédibilité, leads qualifiés</p>
      <p><strong>Priorité 2 : CRM léger + pipeline commercial</strong> — Budget 0-500k/an | Outils : HubSpot (gratuit), Pipedrive, Brevo, Odoo, Notion CRM</p>
      <p><strong>Priorité 3 : Gestion stocks/commandes (si commerce)</strong> — Budget 2M-8M | Outils : Odoo, TradeGecko, solution sur mesure</p>
      <p><strong>Priorité 4 : Espace client / Portail</strong> — Budget 3M-8M | Fonctionnalités : Suivi commande, factures, tickets, documents, paiement</p>

      <h3>Étape 4 : Pilotage par la data — Continu</h3>
      <p>Tableau de bord mensuel minimal (15 min de lecture) : CA mensuel, Nouveaux leads, Taux conversion, Panier moyen, CAC, NPS, Trafic site, Taux panier abandonné.</p>

      <h3>Étape 5 : Culture & formation — Le vrai levier</h3>
      <p>Sans adhésion de l'équipe, les outils servent à rien. Formation 30 min hebdo mois 1, puis mensuel. "Digital champion" par équipe. Budget formation 50k-200k FCFA/an/collaborateur.</p>
    `,
    'logiciel-sur-mesure-entreprise': `
      <h2>SaaS standard vs Logiciel sur mesure : le match</h2>
      <table>
        <thead><tr><th>Critère</th><th>SaaS Standard</th><th>Logiciel Sur Mesure</th></tr></thead>
        <tbody>
          <tr><td>Adaptation à VOS processus</td><td>Vous adaptez votre métier à l'outil</td><td>L'outil s'adapte à votre métier</td></tr>
          <tr><td>Fonctionnalités inutiles</td><td>60-80% non utilisées, payées quand même</td><td>100% utiles, rien d'autre</td></tr>
          <tr><td>Intégration existants</td><td>Connecteurs limités, souvent payants</td><td>API natives, sync temps réel</td></tr>
          <tr><td>Évolutivité</td><td>Dépend de la roadmap de l'éditeur</td><td>Vous décidez la roadmap</td></tr>
          <tr><td>Coût récurrent</td><td>Abonnement mensuel par utilisateur (à vie)</td><td>Investissement unique + maintenance optionnelle</td></tr>
          <tr><td>Propriété des données</td><td>Hébergées chez l'éditeur</td><td>Chez vous, où vous voulez</td></tr>
          <tr><td>Sécurité / Conformité</td><td>Standardisée</td><td>Sur mesure (banque, santé, RGPD strict)</td></tr>
          <tr><td>Différenciation concurrentielle</td><td>Même outils que vos concurrents</td><td>Avantage unique, difficile à copier</td></tr>
        </tbody>
      </table>

      <h2>Les 5 signaux qu'il faut passer au sur-mesure</h2>
      <ol>
        <li><strong>"On a 15 Excel/Google Sheets qui se parlent mal"</strong> — Si votre équipe passe plus de temps à copier-coller qu'à travailler, vous perdez de l'argent et de la fiabilité.</li>
        <li><strong>"Le SaaS nous oblige à changer notre processus"</strong> — Votre processus métier EST votre avantage concurrentiel. Ne le cassez pas pour un outil générique.</li>
        <li><strong>"On paie des licences pour 50 users mais 5 l'utilisent vraiment"</strong> — Modèle pervers : vous payez pour des fonctionnalités dont personne ne se sert.</li>
        <li><strong>"On ne peut pas connecter notre [ERP/compta/production] au reste"</strong> — Les silos de données coûtent cher : erreurs, délais, décisions à l'aveugle.</li>
        <li><strong>"On a une idée de service digital à vendre à NOS clients"</strong> — Votre expertise métier peut devenir un produit SaaS. Nous l'avons fait pour Foot Vert, SmartStock, Senegal Food.</li>
      </ol>

      <h2>Ce que le sur-mesure vous apporte concrètement</h2>
      <h3>Automatisation de vos processus uniques</h3>
      <p><em>Exemple : Cabinet d'expertise comptable → Génération auto des liasses fiscales à partir de la saisie, envoi client, signature électronique, archivage légal. Gain : 40h/mois/collaborateur.</em></p>
      <h3>Intégration transparente</h3>
      <p>Votre logiciel parle à : votre site web, votre compta (Sage, Odoo, QuickBooks), vos paiements (OM, Wave, Stripe), votre CRM, votre stock, vos fournisseurs (EDI, API), l'administration (DGID, API publiques).</p>
      <h3>Interface pensée pour VOS utilisateurs</h3>
      <p>Pas de menus inutiles, pas de jargon étranger. Vos opérateurs sont formés en 30 min, pas 3 jours.</p>
      <h3>Propriété totale</h3>
      <ul><li>Code source = vôtre (dépôt Git privé)</li><li>Base de données = vôtre (votre serveur, votre cloud)</li><li>Documentation technique = fournie</li><li>Pas de vendor lock-in. Vous pouvez changer de prestataire.</li></ul>
      <h3>Scalabilité maîtrisée</h3>
      <p>Architecture modulaire : on ajoute des modules sans casser l'existant. Micro-services si besoin. Kubernetes, serverless, ou VM simple — vous choisissez.</p>

      <h2>Combien ça coûte ? (Vraiment)</h2>
      <table>
        <thead><tr><th>Type de projet</th><th>Budget</th><th>Délai</th><th>ROI typique</th></tr></thead>
        <tbody>
          <tr><td>Outil interne unique (ex: devis auto, planning)</td><td>3M - 8M FCFA</td><td>6-10 semaines</td><td>6-12 mois</td></tr>
          <tr><td>Portail client/fournisseur</td><td>5M - 12M FCFA</td><td>3-5 mois</td><td>12-18 mois</td></tr>
          <tr><td>SaaS à revendre (multi-tenant)</td><td>15M - 50M+ FCFA</td><td>6-12 mois</td><td>18-36 mois</td></tr>
          <tr><td>Remplacement ERP legacy</td><td>20M - 100M+ FCFA</td><td>12-24 mois</td><td>24-48 mois</td></tr>
        </tbody>
      </table>
    `,
    'application-web-vs-mobile': `
      <h2>Les 4 options techniques — et ce qu'elles impliquent</h2>
      <table>
        <thead><tr><th>Type</th><th>Technos typiques</th><th>Installation</th><th>Accès matériel</th><th>Stores</th><th>Coût relatif</th></tr></thead>
        <tbody>
          <tr><td>Site web responsive</td><td>HTML/CSS/JS, React, Vue, Next.js</td><td>Aucune (navigateur)</td><td>Limité (caméra, GPS, push partiel)</td><td>Non</td><td>1x (base)</td></tr>
          <tr><td>PWA (Progressive Web App)</td><td>Next.js, Vite, Workbox, Service Workers</td><td>Optionnelle (icône home screen)</td><td>Étendu (GPS, caméra, push, offline, background sync)</td><td>Non (mais installable)</td><td>1.2x - 1.5x</td></tr>
          <tr><td>Hybride / Cross-platform</td><td>React Native, Expo, Flutter, Ionic</td><td>Oui (App Store / Play Store)</td><td>Complet (natif via bridges)</td><td>Oui</td><td>2x - 3x</td></tr>
          <tr><td>Native pur</td><td>Swift/SwiftUI (iOS), Kotlin/Jetpack Compose (Android)</td><td>Oui</td><td>Total, performance max</td><td>Oui</td><td>4x - 6x</td></tr>
        </tbody>
      </table>

      <h2>Matrice de décision rapide</h2>
      <p>Répondez à ces 8 questions. Majorité de <strong>A</strong> = Web/PWA. Majorité de <strong>B</strong> = Mobile (Hybride/Native).</p>
      <table>
        <thead><tr><th>Question</th><th>A → Web/PWA</th><th>B → Mobile</th></tr></thead>
        <tbody>
          <tr><td>1. Où sont vos utilisateurs ?</td><td>Majoritairement desktop / bureautique</td><td>Majoritairement mobile / terrain / transport</td></tr>
          <tr><td>2. Besoin caméra / GPS / Bluetooth / Capteurs ?</td><td>Non ou basique (scan QR occasionnel)</td><td>Oui, intensif (scan codes-barres, AR, tracking, santé)</td></tr>
          <tr><td>3. Mode hors-ligne critique ?</td><td>Non (connexion dispo)</td><td>Oui (terrain, métro, zones blanches, sync différée)</td></tr>
          <tr><td>4. Notifications push indispensables ?</td><td>Non (email/WhatsApp suffit)</td><td>Oui (alertes temps réel, rappels, promos)</td></tr>
          <tr><td>5. Budget développement ?</td><td>< 8M FCFA</td><td>> 8M FCFA</td></tr>
          <tr><td>6. Délai mise en marché ?</td><td>< 8 semaines</td><td>> 8 semaines</td></tr>
          <tr><td>7. Public cible "grand public" B2C ?</td><td>Non (B2B, interne, partenaires)</td><td>Oui (consommateurs, téléchargement store)</td></tr>
          <tr><td>8. Monétisation via stores ?</td><td>Non</td><td>Oui (abonnements, achats in-app, pubs natives)</td></tr>
        </tbody>
      </table>

      <h2>Quand choisir le Web / PWA ?</h2>
      <p><strong>✅ Idéal pour :</strong> Outils internes / B2B, Portails clients/fournisseurs, SaaS métiers, Sites e-commerce, MVP / Validation marché, Budget serré / Délai court.</p>
      <p><strong>🎯 PWA = Le meilleur des deux mondes (souvent)</strong> : Installable depuis le navigateur, fonctionne hors-ligne, push notifications, mise à jour instantanée, SEO natif, partageable par URL.</p>
      <p><strong>Exemple Jëftech : Foot Vert</strong> — Réservation terrains foot. Choisi en PWA car : utilisateurs sur mobile MAIS pas besoin caméra/Bluetooth, pas de store = déploiement instantané, SEO crucial, budget 30% < natif.</p>

      <h2>Quand choisir le Mobile (Hybride recommandé) ?</h2>
      <p><strong>✅ Idéal pour :</strong> Apps grand public B2C, Usage terrain / mobile-first, Fonctions natives critiques, Hors-ligne réel requis, Monétisation stores, Marque / Visibilité.</p>
      <p><strong>🎯 React Native / Expo = Notre choix par défaut</strong> : 1 codebase iOS+Android, performance quasi-native, écosystème énorme, Expo = dev rapide, build cloud, OTA updates. Coût ~50-60% du natif pur.</p>
      <p><strong>Exemple Jëftech : Senegal Food App</strong> — Livraison repas. Choisi React Native car : livreurs (GPS continu, caméra, push, hors-ligne), clients (push, tracking, paiement in-app), stores = confiance + paiement in-app + visibilité.</p>

      <h2>Quand choisir le Native pur (Swift/Kotlin) ?</h2>
      <p><strong>Uniquement si :</strong> Performance critique (60fps, 3D, AR/VR, audio temps réel), Intégration OS profonde (widgets, Live Activities, WatchOS, HealthKit), Sécurité maximale (banque, santé, gov), Équipe dédiée par plateforme (budget > 25M FCFA).</p>
    `,
  }
  return contents[slug] || '<p>Contenu en cours de rédaction...</p>'
}

export default function BlogPost({ match }) {
  const slug = match.params.slug
  const post = BLOG_POSTS.find(p => p.slug === slug)
  useReveal()

  if (!post) {
    return (
      <section className="section-pad" style={{ textAlign: 'center' }}>
        <div className="container">
          <h1>Article non trouvé</h1>
          <p style={{ color: 'var(--gray)', marginTop: '16px' }}>Cet article n'existe pas ou a été déplacé.</p>
          <Link to="/blog" className="btn btn-primary" style={{ marginTop: '24px', display: 'inline-block' }}>
            <ArrowLeft size={16} strokeWidth={2} /> Retour au blog
          </Link>
        </div>
      </section>
    )
  }

  const content = getPostContent(slug)

  return (
    <article className="section-pad blog-post-page" itemScope itemType="https://schema.org/BlogPosting">
      <meta itemProp="headline" content={post.title} />
      <meta itemProp="description" content={post.description} />
      <meta itemProp="datePublished" content={post.date} />
      <meta itemProp="author" content={post.author} />
      <meta itemProp="articleSection" content={post.category} />
      <meta itemProp="image" content={post.image} />
      <meta itemProp="url" content={`https://jeftech.dev/blog/${post.slug}`} />

      <div className="container" style={{ maxWidth: '800px' }}>
        <Link to="/blog" className="blog-post__back-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '32px', color: 'var(--blue)', fontWeight: 600 }}>
          <ArrowLeft size={18} strokeWidth={2} /> Retour au blog
        </Link>

        <header className="blog-post__header reveal" style={{ marginBottom: '40px' }}>
          <span className="blog-post__category" itemProp="articleSection">{post.category}</span>
          <h1 className="blog-post__title" itemProp="headline" style={{ marginTop: '16px', marginBottom: '24px' }}>{post.title}</h1>
          <div className="blog-post__meta" style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', color: 'var(--gray)', fontSize: '15px' }}>
            <time dateTime={post.date} itemProp="datePublished">
              <Calendar size={16} strokeWidth={1.5} style={{ verticalAlign: 'middle', marginRight: '6px' }} /> {formatDate(post.date)}
            </time>
            <span itemProp="author" itemscope itemtype="https://schema.org/Person">
              <span itemProp="name">{post.author}</span>
            </span>
            <span>
              <Clock size={16} strokeWidth={1.5} style={{ verticalAlign: 'middle', marginRight: '6px' }} /> {post.readTime}
            </span>
          </div>
        </header>

        <div className="blog-post__image reveal" style={{ marginBottom: '40px', borderRadius: 'var(--radius)', overflow: 'hidden' }}>
          <div
            style={{
              backgroundImage: `url(${post.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '400px',
              width: '100%',
            }}
            itemProp="image"
            itemscope
            itemtype="https://schema.org/ImageObject"
          >
            <meta itemProp="url" content={post.image} />
            <meta itemProp="caption" content={post.title} />
          </div>
        </div>

        <div className="blog-post__content reveal" 
          itemProp="articleBody" 
          dangerouslySetInnerHTML={{ __html: content }}
          style={{ lineHeight: 1.8, fontSize: '17px', color: 'var(--text)' }}
        />

        <footer className="blog-post__footer reveal" style={{ marginTop: '60px', paddingTop: '32px', borderTop: '1px solid var(--card-border)' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '24px' }}>
            {post.tags.map((tag) => (
              <span key={tag} className="tech-tag" style={{ fontSize: '13px' }}>
                <Tag size={12} strokeWidth={1.5} style={{ verticalAlign: 'middle', marginRight: '4px' }} /> {tag}
              </span>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <span style={{ color: 'var(--gray)', fontSize: '14px' }}>Partager :</span>
            <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=https://jeftech.dev/blog/${post.slug}`} target="_blank" rel="noopener noreferrer" aria-label="Partager sur X" style={{ color: 'var(--gray)', transition: 'color .2s' }} onMouseOver={e => e.target.style.color = '#1A56FF'} onMouseOut={e => e.target.style.color = 'var(--gray)'}>
              <Share2 size={20} strokeWidth={1.8} />
            </a>
            <a href={`https://www.linkedin.com/sharing/share-offsite/?url=https://jeftech.dev/blog/${post.slug}`} target="_blank" rel="noopener noreferrer" aria-label="Partager sur LinkedIn" style={{ color: 'var(--gray)', transition: 'color .2s' }} onMouseOver={e => e.target.style.color = '#1A56FF'} onMouseOut={e => e.target.style.color = 'var(--gray)'}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5A2.5 2.5 0 102.5 6 2.5 2.5 0 004.98 3.5zM3 8.98h4V21H3zM9 8.98h3.8v1.64h.05a4.16 4.16 0 013.75-2.06c4 0 4.75 2.64 4.75 6.06V21h-4v-5.36c0-1.28 0-2.92-1.78-2.92s-2.05 1.39-2.05 2.83V21H9z"/></svg>
            </a>
          </div>
        </footer>

        <div className="blog-post__cta reveal" style={{ marginTop: '60px', padding: '40px', background: 'var(--bg-alt)', borderRadius: 'var(--radius)', textAlign: 'center' }}>
          <h3 style={{ fontFamily: 'var(--display)', fontSize: 'clamp(22px,3vw,28px)', marginBottom: '12px' }}>
            Besoin d'accompagnement sur ce sujet ?
          </h3>
          <p style={{ color: 'var(--gray)', marginBottom: '24px', maxWidth: '500px', margin: '0 auto 24px' }}>
            On en discute gratuitement. 30 min, sans engagement, conseils concrets.
          </p>
          <Link to="#booking" className="btn btn-primary" style={{ display: 'inline-block' }}>
            Réserver un appel
          </Link>
        </div>
      </div>
    </article>
  )
}