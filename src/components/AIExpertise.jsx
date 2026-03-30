const tools = [
  { name: 'Claude', category: 'LLM' },
  { name: 'Gemini', category: 'LLM' },
  { name: 'ChatGPT', category: 'LLM' },
  { name: 'Perplexity', category: 'Research' },
  { name: 'Bolt', category: 'Prototyping' },
  { name: 'Lovable', category: 'Prototyping' },
  { name: 'Claude Code', category: 'Dev' },
  { name: 'n8n', category: 'Automation' },
  { name: 'Airtable', category: 'Productivity' },
]

import { useState } from 'react'

const cards = [
  {
    id: 'ai-product',
    icon: '🧠',
    title: 'AI product culture',
    color: 'bg-purple-50 border-purple-200',
    iconBg: 'bg-purple-100',
    highlights: [
      'Facial recognition & online identity verification',
      'Energy consumption forecasting for industries',
      'Fraud detection & risk scoring',
    ],
    contexts: [
      {
        company: 'IDnow (ex-AriadNEXT)',
        domain: 'Digital Identity · Image Recognition',
        contribution: [
          'Product SWOT analysis of automated identity verification for a new e-signature workflow',
          'Functional support to data science team on an ANR-funded research project with INRIA and Gendarmerie Nationale on neural networks for image validation',
        ],
        learnings: [
          'Error rate optimization for production requires hybrid human-machine workflows',
          'Data quality and training sets are key success factors for ML-based services',
          'Maximizing user conversion requires multiple product and UX choices',
        ],
      },
      {
        company: 'Energiency',
        domain: 'Energy SaaS · Predictive Analytics',
        contribution: [
          'Collaborated with data science team to assess integration of energy consumption prediction into the core monitoring product',
        ],
        learnings: [
          'ML service level (availability, accuracy) is critical when predictions have direct financial impact',
          'Balancing scalable product development with bespoke data science work is key to business success',
        ],
      },
      {
        company: 'Alma',
        domain: 'Fintech · Risk & Fraud Scoring',
        contribution: [
          'Assessed opportunity to deploy ML-based scoring algorithm when launching Alma on new markets',
          'Adapted the payment flow to balance default and fraud risk during the cold-start period before scoring was available',
        ],
        learnings: [
          'Cold start data challenge requires a deliberate data collection strategy',
          'Payment conversion with ML-based scoring depends on multiple product and UX choices',
        ],
      },
    ],
  },
  {
    id: 'genai',
    icon: '🚀',
    title: 'GenAI prototyping',
    color: 'bg-indigo-50 border-indigo-200',
    iconBg: 'bg-indigo-100',
    highlights: [
      'Lovable, Bolt & Codex across 3 internal tools',
      '2 prototypes accelerated product decisions, 1 shipped to production',
      'Part of a merchant dashboard revamp at Alma',
    ],
    contexts: [],
    project: 'Alma was revamping the account structure of its merchant dashboard to support centralized management of large retail networks (hundreds of accounts) and advanced business rules. The revamp required adapting many internal tools. AI prototyping was a game changer for accelerating the build phase — out of 3 prototypes, 2 enabled quick framing and product decisions, and 1 led straight to production.',
    prototypes: [
      {
        tool: 'Lovable',
        title: 'Centralized log management',
        need: 'While building entity creation features, a developer asked how logs would be used in the future. Log management was planned later in the roadmap with no design or requirements ready.',
        result: 'Produced a functional prototype that validated the centralized log management concept and clarified implementation requirements for the development team.',
        link: 'https://drive.google.com/file/d/1I2NHUey2LGv-AQo8bXvKXf5LOEqOUakQ/view?usp=sharing',
      },
      {
        tool: 'Bolt',
        title: 'Bulk account creation tool',
        need: 'A key internal tool for onboarding merchant networks had to be rebuilt from scratch — functionally incomplete, poor UX, hard to maintain. Needed to clarify scope, get early feedback, and size the effort without committing to 6 months of design and development.',
        result: 'Welcomed warmly by all developers. Helped them quickly grasp the new direction, validated new product principles, and built confidence about the effort required.',
        link: 'https://drive.google.com/file/d/1dxrZ_fCZHQx6bM9dlwGnhk7uBhxrlo1I/view?usp=sharing',
      },
      {
        tool: 'Codex',
        title: 'Account mass configuration',
        need: 'A key tool for post-migration cleanup of the merchant base. The existing tool had poor UX, limited error management, and low visibility. Needed shared alignment on the target, early feedback, and a build strategy — without a long design phase.',
        result: 'Built collectively during a 2-day hackathon. Produced a fully functional product integrated into the codebase — pending a security/production code review and functional enrichment.',
        link: 'https://drive.google.com/file/d/1VHEti-Mn3SBa5nZ00Pas3i-zFWIsVGnc/view?usp=sharing',
      },
    ],
  },
]

export default function AIExpertise() {
  const [open, setOpen] = useState(new Set())
  const toggle = id => setOpen(prev => {
    const next = new Set(prev)
    next.has(id) ? next.delete(id) : next.add(id)
    return next
  })

  return (
    <section id="ai-expertise" className="bg-white">
      <div className="section-padding">
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-semibold mb-4">
            AI & Data
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">AI and Data Expertise</h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Building and prototyping with data and AI across multiple domains.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {cards.map(card => (
            <div key={card.id} className={`rounded-2xl border p-6 cursor-pointer transition-shadow hover:shadow-md ${card.color}`} onClick={() => toggle(card.id)}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className={`text-2xl p-2 rounded-xl ${card.iconBg}`}>{card.icon}</span>
                  <h3 className="font-display font-bold text-slate-800 text-lg">{card.title}</h3>
                </div>
                <svg className={`w-5 h-5 text-slate-400 transition-transform ${open.has(card.id) ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              {/* Highlights always visible */}
              <div className="flex flex-col gap-2">
                {card.highlights.map(h => (
                  <div key={h} className="flex items-center gap-2 px-3 py-2">
                    <span className="w-2 h-2 rounded-full bg-indigo-400 shrink-0" />
                    <span className="text-sm font-semibold text-slate-700">{h}</span>
                  </div>
                ))}
              </div>

              {/* Expandable: company contexts (AI product culture) */}
              {open.has(card.id) && card.contexts.length > 0 && (
                <div className="mt-8 space-y-8">
                  {card.contexts.map(ctx => (
                    <div key={ctx.company}>
                      <div className="mb-4">
                        <span className="text-sm font-bold text-slate-800">{ctx.company}</span>
                        <span className="ml-2 text-xs font-semibold px-2 py-0.5 rounded-full bg-purple-100 text-purple-600">{ctx.domain}</span>
                      </div>
                      <div className="mb-4">
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Contribution</p>
                        <ul className="space-y-3">
                          {ctx.contribution.map((c, i) => (
                            <li key={i} className="flex gap-2 text-sm text-slate-600">
                              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                              {c}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Key learnings</p>
                        <ul className="space-y-3">
                          {ctx.learnings.map((l, i) => (
                            <li key={i} className="flex gap-2 text-sm text-slate-600">
                              <svg className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              {l}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Expandable: prototypes (GenAI prototyping) */}
              {open.has(card.id) && card.prototypes?.length > 0 && (
                <div className="mt-6 space-y-2">
                  <p className="text-sm text-slate-600 leading-relaxed mb-8">{card.project}</p>
                  <div className="space-y-8">
                    {card.prototypes.map(p => (
                      <div key={p.title}>
                        <div className="flex items-center gap-2 mb-4">
                          <span className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-600">{p.tool}</span>
                          <span className="text-sm font-bold text-slate-800">{p.title}</span>
                          <a
                            href={p.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={e => e.stopPropagation()}
                            className="ml-auto inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors shrink-0"
                          >
                            View
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        </div>
                        <div className="mb-3">
                          <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Need</p>
                          <p className="text-sm text-slate-600 leading-relaxed">{p.need}</p>
                        </div>
                        <div className="mb-3">
                          <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Result</p>
                          <p className="text-sm text-slate-600 leading-relaxed">{p.result}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Tools strip */}
        <div className="bg-slate-50 rounded-2xl p-6">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 text-center">
            AI Tools I use regularly
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map(t => (
              <div key={t.name} className="flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-2 shadow-sm">
                <span className="text-sm font-semibold text-slate-700">{t.name}</span>
                <span className="text-xs text-slate-400">{t.category}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
