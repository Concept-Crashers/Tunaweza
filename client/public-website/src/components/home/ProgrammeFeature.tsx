import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import DemoPhoto from '../content/DemoPhoto'

function ProgrammeFeature() {
  return (
    <section className="section programme-feature">
      <div className="container programme-feature__grid">
        <DemoPhoto
          className="programme-feature__photo"
          src="/images/classroom-demo.jpg"
          alt="A classroom scene in a stock photo used only to demonstrate the website; it does not show a Tunaweza programme."
        />
        <div className="programme-feature__copy">
          <p className="section-label"><span className="section-label__line" />Our programmes</p>
          <h2>Everyday moments can open up <em>new possibilities.</em></h2>
          <p>
            Half- and full-day options are described in existing programme
            information. The day programme is intended to complement, not
            replace, a child&apos;s school placement.
          </p>
          <ul className="programme-feature__activities">
            <li>Therapy sessions</li>
            <li>Art, music & movement</li>
            <li>Outside play</li>
            <li>Group & quiet activities</li>
            <li>Snack or lunch breaks</li>
            <li>Rest time</li>
          </ul>
          <p className="content-note">
            Programme details and availability are from existing public copy and
            need reconfirmation before launch.
          </p>
          <Button asChild variant="outline">
            <Link to="/contact">Ask about enrolment <ArrowRight aria-hidden="true" size={17} /></Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default ProgrammeFeature
