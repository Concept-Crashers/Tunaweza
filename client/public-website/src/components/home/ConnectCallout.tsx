import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'

function ConnectCallout() {
  return (
    <section className="connect-callout section">
      <div className="container connect-callout__inner">
        <p className="section-label"><span className="section-label__line" />Be part of the journey</p>
        <h2>Every kind of support <em>matters.</em></h2>
        <p>Volunteer your skills, donate useful materials, or start a conversation about working together.</p>
        <div className="connect-callout__actions">
          <Button asChild size="large">
            <Link to="/get-involved">Volunteer or donate <ArrowRight aria-hidden="true" size={17} /></Link>
          </Button>
          <Link className="text-link" to="/contact">Ask how to help <ArrowRight aria-hidden="true" size={16} /></Link>
        </div>
        <p className="content-note">Donation instructions and volunteer details must be confirmed by Tunaweza.</p>
      </div>
    </section>
  )
}

export default ConnectCallout
