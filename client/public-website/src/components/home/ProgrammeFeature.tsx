import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import DemoPhoto from '../content/DemoPhoto'

function ProgrammeFeature() {
  const prefersReducedMotion = useReducedMotion()
  const reveal = {
    initial: prefersReducedMotion ? false : { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: prefersReducedMotion ? 0 : .45, ease: 'easeOut' as const },
  }

  return (
    <section className="section programme-feature">
      <div className="container programme-feature__grid">
        <motion.div {...reveal}>
          <DemoPhoto
            className="programme-feature__photo"
            src="/images/classroom-demo.jpg"
            alt="A classroom scene in a stock photo used only to demonstrate the website; it does not show a Tunaweza programme."
          />
        </motion.div>
        <motion.div className="programme-feature__copy" {...reveal} transition={{ ...reveal.transition, delay: prefersReducedMotion ? 0 : .1 }}>
          <p className="section-label"><span className="section-label__line" />Our programmes</p>
          <h2>Everyday moments can open up <em>new possibilities.</em></h2>
          <p>
            Half- and full-day options are described in existing programme
            information. The day programme is intended to complement, not
            replace, a child&apos;s school placement.
          </p>
          <ul className="programme-feature__activities">
            {['Therapy sessions', 'Art, music & movement', 'Outside play', 'Group & quiet activities', 'Snack or lunch breaks', 'Rest time'].map((activity, index) => (
              <motion.li
                key={activity}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: prefersReducedMotion ? 0 : .3, delay: prefersReducedMotion ? 0 : index * .04 }}
              >
                {activity}
              </motion.li>
            ))}
          </ul>
          <p className="content-note">
            Programme details and availability are from existing public copy and
            need reconfirmation before launch.
          </p>
          <Button asChild variant="outline">
            <Link to="/contact">Ask about enrolment <ArrowRight aria-hidden="true" size={17} /></Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default ProgrammeFeature
