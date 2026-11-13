import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '../components/content/PageHero'

function NewsPage() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <>
      <PageHero
        eyebrow="News & events"
        title="The latest from"
        highlight="Tunaweza."
        description="News, newsletters, and events will be shared here after details are confirmed."
      />
      <section className="section empty-content">
        <motion.div
          className="container empty-content__card"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: prefersReducedMotion ? 0 : .4 }}
        >
          <span className="empty-content__mark" aria-hidden="true">T</span>
          <p className="section-label"><span className="section-label__line" />Coming soon</p>
          <h2>Updates are being prepared.</h2>
          <p>
            There are no approved articles or event details in this frontend
            preview. Existing newsletter and news content can be added after
            the migration and approval review.
          </p>
          <Link className="text-link" to="/contact">Contact the team <ArrowRight aria-hidden="true" size={16} /></Link>
        </motion.div>
      </section>
    </>
  )
}

export default NewsPage
