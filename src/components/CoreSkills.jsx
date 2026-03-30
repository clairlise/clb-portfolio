const skills = [
  'Product Strategy', 'Customer Onboarding', 'KYC / eIDAS / PKI',
  'A/B Testing', 'Product Analytics', 'User Research',
  'Data Strategy', 'Fintech & Payments', 'Cross-functional Leadership',
  'Internationalization', 'B2B SaaS', 'Agile / Scrum',
]

export default function CoreSkills() {
  return (
    <section id="skills" className="bg-white border-t border-slate-100">
      <div className="section-padding py-16">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900 mb-8">Core Skills</h2>
        <div className="flex flex-wrap gap-3">
          {skills.map(s => (
            <span key={s} className="px-4 py-2 rounded-full bg-indigo-50 text-indigo-700 text-sm font-medium border border-indigo-100">
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
