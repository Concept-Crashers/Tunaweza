import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { services } from '../../data/siteContent'
import SectionHeading from '../content/SectionHeading'

function ServicesPreview() {
  return (
    <section className="section services-preview">
      <div className="container">
        <SectionHeading
          eyebrow="How we support"
          title="Support shaped around"
          highlight="each child."
          action={<Link className="text-link" to="/services">View services <ArrowUpRight aria-hidden="true" size={17} /></Link>}
        />
        <div className="service-grid">
          {services.map(({ slug, title, summary, icon: Icon }, index) => (
            <Link className="service-card" to={`/services/${slug}`} key={slug}>
              <div className="service-card__meta">
                <span className="service-card__icon"><Icon aria-hidden="true" size={21} strokeWidth={1.7} /></span>
                <span className="service-card__number">0{index + 1}</span>
              </div>
              <h3>{title}</h3>
              <p>{summary}</p>
              <span className="service-card__link">Explore <ArrowRight aria-hidden="true" size={17} /></span>
            </Link>
          ))}
        </div>
        <p className="content-note">
          Service names and descriptions are a starting point from the project overview;
          current delivery and availability must be confirmed by Tunaweza.
        </p>
      </div>
    </section>
  )
}

export default ServicesPreview
