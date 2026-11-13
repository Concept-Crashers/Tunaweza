import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import DemoPhoto from '../components/content/DemoPhoto'
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
          <div className="welcome-strip__copy">
            <p className="section-label"><span className="section-label__line" />Who we are</p>
            <h2>A community where children are seen, supported, and included.</h2>
            <p>
              Tunaweza Children&apos;s Centre is a registered non-profit in
              Kampala, Uganda, supporting children with disabilities through
              therapy and day programmes shaped around each child and family.
            </p>
            <Link className="text-link" to="/about">More about Tunaweza <ArrowUpRight aria-hidden="true" size={17} /></Link>
            <ul className="values-list" aria-label="Tunaweza values">
              {['Dignity', 'Respect', 'Justice', 'Excellence', 'Independence'].map((value) => (
                <li key={value}>{value}</li>
              ))}
            </ul>
          </div>
          <DemoPhoto
            className="welcome-strip__photo"
            src="/images/children-playing-demo.jpg"
            alt="Children playing together outdoors in an Unsplash stock photo used for this demo; they are not Tunaweza participants."
          />
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
