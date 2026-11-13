import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { Button } from '../components/ui/button'
import DemoPhoto from '../components/content/DemoPhoto'
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
            <Button asChild size="large">
              <Link to="/contact">Ask about this service <ArrowRight aria-hidden="true" size={17} /></Link>
            </Button>
            <Link className="back-link" to="/services"><ArrowLeft aria-hidden="true" size={16} /> All services</Link>
          </div>
          <DemoPhoto
            className="service-detail__photo"
            src="/images/child-activity-demo.jpg"
            alt="A child playing with a toy in an Unsplash stock photo used only to demonstrate the design; the child is not a Tunaweza participant."
          />
        </div>
      </section>
    </>
  )
}

export default ServiceDetailPage
