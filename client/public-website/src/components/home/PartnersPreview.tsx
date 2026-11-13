import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const partners = [
  {
    name: 'aMaDEUS',
    wordmark: 'aMaDEUS',
  },
  {
    name: 'Bank of Uganda',
    logo: 'https://www.bou.or.ug/assets/logo.ico',
  },
  {
    name: 'Boston Speechies',
    wordmark: 'Boston Speechies',
  },
  {
    name: 'Kyambogo University',
    logo: 'https://kyu.ac.ug/wp-content/uploads/2024/02/Kyu-Web-logo-1.png',
  },
  {
    name: 'Mass General Hospital',
    wordmark: 'Mass General',
  },
]

function PartnersPreview() {
  const renderPartners = (isDuplicate = false) => (
    <div
      className="partners-preview__group"
      aria-hidden={isDuplicate ? true : undefined}
      role={isDuplicate ? undefined : 'list'}
    >
      {partners.map(({ name, logo, wordmark }) => (
        <div className="partners-preview__item" key={name} role={isDuplicate ? undefined : 'listitem'}>
          {logo ? (
            <img src={logo} alt={`${name} logo`} loading="lazy" />
          ) : (
            <span className="partners-preview__wordmark">{wordmark}</span>
          )}
          {logo && <span className="partners-preview__name">{name}</span>}
        </div>
      ))}
    </div>
  )

  return (
    <section className="partners-preview">
      <div className="container partners-preview__inner">
        <div className="partners-preview__heading">
          <p className="section-label"><span className="section-label__line" />Partners & supporters</p>
          <h2>Better together.</h2>
          <Link className="text-link" to="/partners">About partnerships <ArrowRight aria-hidden="true" size={16} /></Link>
        </div>
        <div className="partners-preview__marquee" aria-label="Tunaweza partners">
          <div className="partners-preview__track">
            {renderPartners()}
            {renderPartners(true)}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PartnersPreview
