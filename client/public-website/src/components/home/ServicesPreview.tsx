import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import DemoPhoto from '../content/DemoPhoto'
import { services } from '../../data/siteContent'

const serviceGroups = [
  {
    title: 'Assessment & therapy',
    description: 'Assessment and therapy areas listed by the centre.',
    slugs: [
      'assessment',
      'physiotherapy',
      'occupational-behavioural-therapy',
      'speech-language-therapy',
      'music-therapy',
    ],
  },
  {
    title: 'Learning & development',
    description: 'Education and individualised learning support.',
    slugs: ['special-education'],
  },
  {
    title: 'Family & community support',
    description: 'Psychosocial support and community outreach.',
    slugs: ['psychosocial-support', 'outreach'],
  },
]

function ServicesPreview() {
  return (
    <section className="section services-preview">
      <div className="container">
        <div className="services-preview__heading">
          <div>
            <p className="section-label"><span className="section-label__line" />How we support</p>
            <h2>Support shaped around <em>each child.</em></h2>
            <p>Explore the support areas listed by Tunaweza, then ask the team what is currently available and how to access it.</p>
          </div>
          <Link className="ui-button ui-button--primary ui-button--default" to="/contact">
            Ask about services <ArrowRight aria-hidden="true" size={17} />
          </Link>
        </div>
        <div className="services-preview__content">
          <div className="services-preview__feature">
            <DemoPhoto
              className="services-preview__photo"
              src="/images/child-activity-demo.jpg"
              alt="A child engaged in a play activity in an Unsplash stock photo used for this demo; the child is not a Tunaweza participant."
            />
            <p className="services-preview__photo-note">
              Demo photo only. It does not show a Tunaweza service or participant.
            </p>
            <div className="services-preview__note">
              <strong>Looking for the right next step?</strong>
              <p>Contact the centre to ask about current services, availability, and how families can access support.</p>
            </div>
          </div>
          <div className="services-preview__groups">
            {serviceGroups.map((group) => (
              <section className="service-group" key={group.title}>
                <div className="service-group__heading">
                  <h3>{group.title}</h3>
                  <p>{group.description}</p>
                </div>
                <ul>
                  {services.filter(({ slug }) => group.slugs.includes(slug)).map((service) => (
                    <li key={service.slug}>
                      <Link to={`/services/${service.slug}`}>
                        <span className="service-group__number" aria-hidden="true">
                          {String(services.indexOf(service) + 1).padStart(2, '0')}
                        </span>
                        <span className="service-group__copy">
                          <strong>{service.title}</strong>
                          <small>Information &amp; next steps</small>
                        </span>
                        <ArrowRight aria-hidden="true" size={16} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
        <p className="content-note">
          Categories are for easier browsing and should be confirmed by Tunaweza.
          Service delivery and availability also need confirmation.
        </p>
      </div>
    </section>
  )
}

export default ServicesPreview
