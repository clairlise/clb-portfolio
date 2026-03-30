import { useState } from 'react'

const skills = [
  'Product Strategy', 'Customer Onboarding', 'KYC / eIDAS / PKI',
  'A/B Testing', 'Product Analytics', 'User Research',
  'Data Strategy', 'Fintech & Payments', 'Cross-functional Leadership',
  'Internationalization', 'B2B SaaS', 'Agile / Scrum',
]

const studies = [
  {
    id: 'internationalization',
    tag: 'Fintech · Growth',
    tagColor: 'bg-blue-100 text-blue-700',
    title: 'Product Internationalization at Alma',
    subtitle: 'Expanding BNPL payment conversion across European markets',
    context:
      'After Alma\'s Series C, the priority was rapid international expansion in Europe. Local payment conversion rates were 10–20 percentage points below the French baseline — a critical blocker to growth.',
    challenge:
      'Identify and integrate the local payment methods that mattered most per market, coordinate across engineering, compliance, and commercial teams, and ship fast enough to unblock the sales pipeline.',
    approach: [
      'Mapped conversion drop-off by country using analytics and merchant interviews',
      'Prioritized Bancontact (BE), iDEAL (NL), and SEPA Direct Debit (DE) based on deal impact',
      'Partnered with Adyen to design the integration and define the phased rollout',
      'Ran weekly cross-functional syncs with sales, compliance, and engineering',
    ],
    outcomes: [
      { label: 'Conversion rate BE/NL', before: '20%', after: '40%' },
      { label: 'SEPA deals secured', value: '~12 deals, half of German pipeline' },
    ],
    icon: '🌍',
    gradient: 'from-blue-500 to-indigo-600',
  },
  {
    id: 'merchant-onboarding',
    tag: 'Fintech · UX',
    tagColor: 'bg-violet-100 text-violet-700',
    title: 'Merchant Onboarding Redesign at Alma',
    subtitle: 'Turning a broken funnel into a gold-standard KYB experience',
    context:
      'Only 35% of new merchants completed the first phase of KYB document upload. The funnel was leaking at every step, and the completion time exceeded 1.5 hours — making Alma feel harder to join than competitors.',
    challenge:
      'Redesign the onboarding flow to increase completion rate and cut time-to-live, while satisfying compliance requirements for KYB.',
    approach: [
      'Ran usability tests and support ticket analysis to map friction points',
      'Rebuilt the flow from basic account creation to a step-by-step guided upload experience',
      'Introduced progress indicators, contextual guidance, and smart document validation',
      'Collaborated closely with design and backend engineering in two-week sprints',
    ],
    outcomes: [
      { label: 'Completion rate', before: '32%', after: '58%' },
      { label: 'Time to complete', before: '1.5h+', after: '12 min' },
    ],
    icon: '⚡',
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    id: 'stripe-acquisition',
    tag: 'Fintech · Growth',
    tagColor: 'bg-blue-100 text-blue-700',
    title: 'Acquisition channel via Stripe at Alma',
    subtitle: 'Opening a scalable, zero-CAC merchant acquisition channel via a global payment leader',
    context:
      'A new reseller partnership where any Stripe merchant could activate BNPL in one click, with no direct acquisition cost for Alma.',
    challenge:
      'Demonstrate technical ability and commercial traction in a pilot phase before signing the partnership agreement, requiring cross squad collaboration (merchant onboarding, checkout, and accounting).',
    approach: [
      'Split pilot scope into epics with clear single-squad ownership and clarified mid-term vision towards automation',
      'Close cross-squad steering and collaboration with Stripe',
      'Partnered with PMO to steer internal coordination across partnership, legal, and risk teams',
    ],
    outcomes: [
      { label: 'Pilot outcome', value: 'Validated — partnership agreement signed' },
      { label: 'Merchants activated', before: '0', after: '175' },
    ],
    icon: '💳',
    gradient: 'from-sky-500 to-blue-600',
  },
  {
    id: 'digital-identity',
    tag: 'Identity · Entrepreneurship',
    tagColor: 'bg-emerald-100 text-emerald-700',
    title: 'Digital Identity MVP at Tremen',
    subtitle: 'Building a consent-first identity verification startup from scratch',
    context:
      'Co-founded a 3-person startup to build an innovative identity verification product that puts user consent and control at the centre of digital trust.',
    challenge:
      'Validate product-market fit for a B2B2C identity product in a market dominated by large players (Onfido, iProov, Thales), with no funding and no existing customer base.',
    approach: [
      'Ran 30+ discovery interviews with digital businesses and end users',
      'Built and tested multiple prototypes, pivoting based on market feedback',
      'Applied Jobs-to-be-Done and Business Model Canvas frameworks throughout',
      'Presented to French Tech Rennes and secured incubation and subsidy',
    ],
    outcomes: [
      { label: 'Outcome', value: 'French Tech Rennes incubation + subsidy awarded' },
    ],
    icon: '🔐',
    gradient: 'from-emerald-500 to-teal-600',
  },
]

function MetricRow({ item }) {
  if (item.before && item.after) {
    return (
      <div className="flex items-center justify-between bg-slate-50 rounded-lg px-4 py-3">
        <span className="text-sm text-slate-600">{item.label}</span>
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-red-500 line-through">{item.before}</span>
          <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
          <span className="text-sm font-bold text-emerald-600">{item.after}</span>
        </div>
      </div>
    )
  }
  return (
    <div className="flex flex-col bg-slate-50 rounded-lg px-4 py-3">
      <span className="text-xs text-slate-500 mb-1">{item.label}</span>
      <span className="text-sm font-semibold text-slate-700">{item.value}</span>
    </div>
  )
}

function CaseStudyCard({ study }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-xl transition-shadow">
      {/* Header gradient strip */}
      <div className={`h-2 bg-gradient-to-r ${study.gradient}`} />

      <div className="p-8">
        <div className="flex items-start justify-between mb-4">
          <div>
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${study.tagColor} mb-3`}>
              {study.tag}
            </span>
            <h3 className="font-display text-xl font-bold text-slate-900 mb-1">{study.title}</h3>
            <p className="text-slate-500 text-sm">{study.subtitle}</p>
          </div>
          <span className="text-3xl ml-4">{study.icon}</span>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed mb-4">{study.context}</p>

        {expanded && (
          <div className="mt-4 space-y-4">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Challenge</h4>
              <p className="text-sm text-slate-600 leading-relaxed">{study.challenge}</p>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Approach</h4>
              <ul className="space-y-2">
                {study.approach.map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm text-slate-600">
                    <span className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-bold">
                      {i + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Outcomes</h4>
              <div className="space-y-2">
                {study.outcomes.map((item, i) => (
                  <MetricRow key={i} item={item} />
                ))}
              </div>
            </div>
          </div>
        )}

        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-6 flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
        >
          {expanded ? 'Show less' : 'Read case study'}
          <svg
            className={`w-4 h-4 transition-transform ${expanded ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default function CaseStudies() {
  return (
    <section id="case-studies" className="bg-slate-50">
      <div className="section-padding">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">Case Studies</h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Real products, real metrics. A selection of projects where I drove measurable outcomes.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {studies.map(study => (
            <CaseStudyCard key={study.id} study={study} />
          ))}
        </div>

        {/* Skills strip */}
        <div className="bg-white rounded-2xl p-6">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 text-center">
            Core Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map(s => (
              <div key={s} className="flex items-center bg-slate-50 border border-slate-200 rounded-full px-4 py-2 shadow-sm">
                <span className="text-sm font-semibold text-slate-700">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
