import { motion, useReducedMotion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { Button } from '../components/ui/button'
import PageHero from '../components/content/PageHero'
import { services } from '../data/siteContent'
import NotFoundPage from './NotFoundPage'

function ServiceDetailPage() {
  const prefersReducedMotion = useReducedMotion()
  const { slug } = useParams()
  const service = services.find((item) => item.slug === slug)

  if (!service) return <NotFoundPage />

  const Icon = service.icon
  const enquiryParams = new URLSearchParams({
    topic: 'services',
    service: service.title,
  })

  return (
    <>
      <PageHero eyebrow="Our services" title={service.title} description={service.summary} />
      <section className="section service-detail">
        <div className="container service-detail__grid">
          <motion.div
            className="service-detail__copy"
            initial={prefersReducedMotion ? false : { opacity: 0, x: -14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: prefersReducedMotion ? 0 : .4 }}
          >
            <p className="service-detail__icon"><Icon aria-hidden="true" size={24} /></p>
            <p className="content-notice" role="note">{service.detail}</p>
            <h2>Find out what is available.</h2>
            <p>
              Get in touch with the centre for current information about this
              service, how to access it, and any next steps for your family.
            </p>
          </motion.div>
          <motion.aside
            className="service-detail__next-steps"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: prefersReducedMotion ? 0 : .4, delay: prefersReducedMotion ? 0 : .08 }}
          >
            <p className="section-label"><span className="section-label__line" />Your next step</p>
            <h2>What to ask the team</h2>
            <p>Contact Tunaweza to confirm current details for {service.title.toLowerCase()}.</p>
            <ul>
              <li>Is this service currently available?</li>
              <li>How can a family access or be referred?</li>
              <li>What should we know about scheduling and costs?</li>
            </ul>
            <Button asChild size="large">
              <Link to={`/contact?${enquiryParams.toString()}`}>Ask about {service.title} <ArrowRight aria-hidden="true" size={17} /></Link>
            </Button>
          </motion.aside>
        </div>
        <div className="container service-detail__back">
          <Link className="back-link" to="/services"><ArrowLeft aria-hidden="true" size={16} /> All services</Link>
        </div>
      </section>
    </>
  )
}

export default ServiceDetailPage
