import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { Button } from '../components/ui/button'
import PageHero from '../components/content/PageHero'
import { services } from '../data/siteContent'
import NotFoundPage from './NotFoundPage'

function ServiceDetailPage() {
  const { slug } = useParams()
  const service = services.find((item) => item.slug === slug)

  if (!service) return <NotFoundPage />

  const Icon = service.icon

  return (
    <>
      <PageHero eyebrow="Our services" title={service.title} description={service.summary} />
      <section className="section service-detail">
        <div className="container service-detail__grid">
          <div className="service-detail__copy">
            <p className="service-detail__icon"><Icon aria-hidden="true" size={24} /></p>
            <p className="content-notice" role="note">{service.detail}</p>
            <h2>Find out what is available.</h2>
            <p>
              Get in touch with the centre for current information about this
              service, how to access it, and any next steps for your family.
            </p>
          </div>
          <aside className="service-detail__next-steps">
            <p className="section-label"><span className="section-label__line" />Your next step</p>
            <h2>What to ask the team</h2>
            <p>Contact Tunaweza to confirm current details for {service.title.toLowerCase()}.</p>
            <ul>
              <li>Is this service currently available?</li>
              <li>How can a family access or be referred?</li>
              <li>What should we know about scheduling and costs?</li>
            </ul>
            <Button asChild size="large">
              <Link to="/contact">Ask about {service.title} <ArrowRight aria-hidden="true" size={17} /></Link>
            </Button>
          </aside>
        </div>
        <div className="container service-detail__back">
          <Link className="back-link" to="/services"><ArrowLeft aria-hidden="true" size={16} /> All services</Link>
        </div>
      </section>
    </>
  )
}

export default ServiceDetailPage
