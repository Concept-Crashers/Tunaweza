import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import HomeHero from '../components/home/HomeHero'
import ServicesPreview from '../components/home/ServicesPreview'
import ProgrammeFeature from '../components/home/ProgrammeFeature'
import StoriesPreview from '../components/home/StoriesPreview'
import ImpactPreview from '../components/home/ImpactPreview'
import ConnectCallout from '../components/home/ConnectCallout'
import PartnersPreview from '../components/home/PartnersPreview'

function HomePage() {
  return (
    <>
      <HomeHero />
      <section className="welcome-strip">
        <div className="container welcome-strip__inner">
          <p className="section-label"><span className="section-label__line" />Welcome to Tunaweza</p>
          <div>
            <h2>A community where children are seen, supported, and included.</h2>
            <p>
              Tunaweza Children&apos;s Centre is a registered non-profit in
              Kampala, Uganda, supporting children with disabilities through
              therapy and day programmes shaped around each child and family.
            </p>
            <Link className="text-link" to="/about">Get to know Tunaweza <ArrowUpRight aria-hidden="true" size={17} /></Link>
            <ul className="values-list" aria-label="Tunaweza values">
              {['Dignity', 'Respect', 'Justice', 'Excellence', 'Independence'].map((value) => (
                <li key={value}>{value}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <ServicesPreview />
      <ProgrammeFeature />
      <StoriesPreview />
      <ImpactPreview />
      <PartnersPreview />
      <ConnectCallout />
    </>
  )
}

export default HomePage
