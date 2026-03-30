import { Analytics } from '@vercel/analytics/react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import CaseStudies from './components/CaseStudies'
import AIExpertise from './components/AIExpertise'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <CaseStudies />
        <AIExpertise />
        <Contact />
      </main>
      <Analytics />
    </div>
  )
}
