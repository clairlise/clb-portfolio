export default function Contact() {
  return (
    <section id="contact" className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
      <div className="section-padding !py-10 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Let's talk</h2>
        <p className="text-indigo-200 max-w-lg mx-auto mb-10 text-lg">
          If you're building products that require advanced product skills and deep expertise in customer onboarding or digital trust, let's talk.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <a
            href="https://drive.google.com/file/d/1wnQhvItqpER-CeBNEnpxs0BcAW88HUa9/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-white text-indigo-700 font-semibold rounded-lg hover:bg-indigo-50 transition-colors shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            View Resume
          </a>
          <a
            href="https://www.linkedin.com/in/claire-lise-b-3b168425/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-indigo-800/60 border border-indigo-400/40 text-white font-semibold rounded-lg hover:bg-indigo-800 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            Connect on LinkedIn
          </a>
        </div>

        {/* Footer */}
        <div className="border-t border-indigo-500/40 pt-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-indigo-300">
            <span className="font-display font-bold text-white text-base">CLB · Product Portfolio</span>
            <span>© {new Date().getFullYear()} Claire-Lise Beaumont</span>
          </div>
        </div>
      </div>
    </section>
  )
}
