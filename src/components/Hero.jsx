export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-indigo-100 opacity-40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-purple-100 opacity-30 blur-3xl" />

      <div className="relative section-padding py-28">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Text */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex items-start gap-4 mb-4">
                <img
                  src="/CLB_photo.png"
                  alt="Claire-Lise Beaumont"
                  className="w-24 h-24 rounded-full object-cover shadow-md border-2 border-indigo-100 shrink-0"
                />
                <h1 className="font-display text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                  Claire-Lise<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                    Beaumont
                  </span>
                </h1>
              </div>
              <p className="text-xl font-semibold text-slate-600 mb-4">Senior Product Manager</p>
              <p className="text-slate-600 leading-relaxed mb-6">
                10+ years building data-centric B2B and B2B2C products in fintech, digital identity,
                and energy/climate SaaS. I combine deep expertise in customer onboarding, digital trust
                (KYC, e-signature, eIDAS, PKI), and security — with a strong track record of launching
                products and scaling them across European markets.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Experienced in partnering with data and ML teams to turn raw data into commercial value.
                Comfortable working with engineering, data, compliance, and business stakeholders.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="#case-studies"
                className="px-6 py-3 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors shadow-md"
              >
                View Case Studies
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-lg border-2 border-indigo-200 text-indigo-700 font-semibold hover:border-indigo-400 transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-6">

            {/* Tagline */}
            <p className="font-display text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 leading-snug pb-1">
              Building trust through seamless onboarding
            </p>

            {/* Key facts */}
            <div className="flex flex-col gap-5 mt-10">
              {[
                { label: '8+ years in PM' },
                { label: 'Product internationalization', sub: 'x2 payment conversion rate on 3 new European markets at Alma' },
                { label: 'Onboarding funnel transformed', sub: '+70% success rate of KYB data collection at Alma' },
                { label: 'Entrepreneurial experience', sub: 'With French Tech support' },
              ].map(fact => (
                <div key={fact.label} className="border-l-2 border-indigo-300 pl-4">
                  <div className="text-lg font-bold text-slate-800 leading-snug">{fact.label}</div>
                  {fact.sub && <div className="text-base text-slate-500 mt-0.5">{fact.sub}</div>}
                </div>
              ))}
            </div>
          </div>
        </div>


      </div>
    </section>
  )
}
