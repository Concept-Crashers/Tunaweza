import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import DemoPhoto from '../components/content/DemoPhoto'
import PageHero from '../components/content/PageHero'
import { services } from '../data/siteContent'

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="A thoughtful approach to"
        highlight="support."
        description="Learn about the support areas listed in the project overview and ask the team about current services."
      />
      <section className="section services-page">
        <div className="container">
          <div className="page-intro-row">
            <p className="content-notice" role="note">
              Service names and descriptions are a draft. The centre must confirm current delivery, referrals, and availability.
            </p>
            <DemoPhoto
              className="services-page__photo"
              src="/images/child-activity-demo.jpg"
              alt="A child playing in an Unsplash stock photo used only for this demo; the child is not a Tunaweza participant."
            />
          </div>
          <div className="service-list">
            {services.map(({ slug, title, summary, icon: Icon }, index) => (
              <Link className="service-list__item" to={`/services/${slug}`} key={slug}>
                <span className="service-list__number">{String(index + 1).padStart(2, '0')}</span>
                <span className="service-list__icon"><Icon aria-hidden="true" size={21} /></span>
                <span className="service-list__copy"><strong>{title}</strong><small>{summary}</small></span>
                <ArrowRight aria-hidden="true" size={20} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default ServicesPage
