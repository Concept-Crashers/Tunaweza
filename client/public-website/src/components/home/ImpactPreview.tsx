import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const impactFigures = [
  { value: '8,000+', label: 'children seen since 2012' },
  { value: '15,000+', label: 'children assessed through outreach' },
  { value: '85%', label: 'positive impact rate reported' },
]

function ImpactPreview() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="impact-preview">
      <div className="container impact-preview__inner">
        <motion.div
          className="impact-preview__copy"
          initial={prefersReducedMotion ? false : { opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: prefersReducedMotion ? 0 : .45 }}
        >
          <p className="section-label section-label--light"><span className="section-label__line" />Our impact</p>
          <h2>Progress is personal. <em>Possibility is shared.</em></h2>
          <p>
            Existing public information reports the following impact
            highlights. The organisation should confirm the figures and their
            methodology before these are used beyond this demo.
          </p>
          <Link className="text-link text-link--light" to="/impact">Explore our impact <ArrowUpRight aria-hidden="true" size={17} /></Link>
        </motion.div>
        <div className="impact-preview__figures">
          {impactFigures.map((figure, index) => (
            <motion.div
              className="impact-figure"
              key={figure.value}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: prefersReducedMotion ? 0 : .35, delay: prefersReducedMotion ? 0 : index * .08 }}
            >
              <strong>{figure.value}</strong>
              <span>{figure.label}</span>
            </motion.div>
          ))}
          <small className="impact-preview__notice">Figures from existing website copy · verify before publication</small>
        </div>
      </div>
    </section>
  )
}

export default ImpactPreview
