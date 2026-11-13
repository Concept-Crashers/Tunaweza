import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const partners = [
  'aMaDEUS',
  'Bank of Uganda',
  'Boston Speechies',
  'Kyambogo University',
  'Mass General Hospital',
]

function PartnersPreview() {
  return (
    <section className="partners-preview">
      <div className="container partners-preview__inner">
        <div>
          <p className="section-label"><span className="section-label__line" />Partners & supporters</p>
          <h2>Better together.</h2>
        </div>
        <div className="partners-preview__list" aria-label="Partners listed on the existing website">
          {partners.map((partner) => <span key={partner}>{partner}</span>)}
          <small>Names listed on existing site · reconfirm before launch</small>
        </div>
        <Link className="text-link" to="/partners">About partnerships <ArrowRight aria-hidden="true" size={16} /></Link>
      </div>
    </section>
  )
}

export default PartnersPreview
