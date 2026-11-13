import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'

function ConnectCallout() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="connect-callout section">
      <motion.div
        className="container connect-callout__inner"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: prefersReducedMotion ? 0 : .45 }}
      >
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
      </motion.div>
    </section>
  )
}

export default ConnectCallout
