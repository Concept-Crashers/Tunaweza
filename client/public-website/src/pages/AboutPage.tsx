import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'
import DemoPhoto from '../components/content/DemoPhoto'
import PageHero from '../components/content/PageHero'

const values = ['Dignity', 'Respect', 'Justice', 'Excellence', 'Independence']

function AboutPage() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <div className="about-page">
      <PageHero
        eyebrow="About Tunaweza"
        title="A holistic approach to"
        highlight="every child."
        description="Tunaweza Children’s Centre supports children with disabilities and their families through therapy and day programmes in Kampala, Uganda."
      >
        <div className="about-page__hero-actions">
          <Button asChild size="large">
            <Link to="/services">Explore our services <ArrowRight aria-hidden="true" size={18} /></Link>
          </Button>
          <Button asChild size="large" variant="outline">
            <Link to="/contact">Talk to our team</Link>
          </Button>
        </div>
      </PageHero>

      <section className="about-intro section">
        <div className="container about-intro__grid">
          <div className="about-intro__copy">
            <p className="section-label"><span className="section-label__line" />Who we are</p>
            <h2>Making your child’s world <em>better.</em></h2>
            <p>
              Tunaweza Children’s Centre is a registered non-profit organisation
              located in Kampala, Uganda. The centre provides children with
              disabilities access to therapy and day programmes that support the
              needs of each child and their family.
            </p>
            <p>
              Its approach recognises the whole child and the people around
              them—creating space for children and families to be met with care,
              respect, and support.
            </p>
            <span className="about-intro__location">Registered non-profit · Kampala, Uganda</span>
          </div>
          <DemoPhoto
            className="about-page__photo"
            src="/images/child-activity-demo.jpg"
            alt="A child engaged in a play activity in an Unsplash stock photo used for this website demo; the child is not a Tunaweza participant."
          />
        </div>
      </section>

      <section className="about-values">
        <div className="container">
          <div className="about-values__heading">
            <p className="section-label section-label--light"><span className="section-label__line" />What guides us</p>
            <h2>Every child and family deserves <em>more.</em></h2>
            <p>The centre’s stated values shape its holistic approach to support.</p>
          </div>
          <ul className="about-values__list">
            {values.map((value, index) => (
              <motion.li
                key={value}
                initial={prefersReducedMotion ? false : { opacity: 0, scale: .94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: prefersReducedMotion ? 0 : .3, delay: prefersReducedMotion ? 0 : index * .06 }}
              >
                <span>0{index + 1}</span>
                <strong>{value}</strong>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      <section className="about-approach section">
        <div className="container">
          <div className="about-approach__heading">
            <p className="section-label"><span className="section-label__line" />How we support</p>
            <h2>Support that sees the <em>whole picture.</em></h2>
          </div>
          <div className="about-approach__grid">
            <motion.article
              initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: prefersReducedMotion ? 0 : .35 }}
            >
              <span>01</span>
              <h3>For each child</h3>
              <p>Therapy and day programmes support children with disabilities and their individual needs.</p>
            </motion.article>
            <motion.article
              initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: prefersReducedMotion ? 0 : .35, delay: prefersReducedMotion ? 0 : .08 }}
            >
              <span>02</span>
              <h3>Alongside families</h3>
              <p>Families are part of the holistic approach to supporting a child’s needs and development.</p>
            </motion.article>
            <motion.article
              initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: prefersReducedMotion ? 0 : .35, delay: prefersReducedMotion ? 0 : .16 }}
            >
              <span>03</span>
              <h3>With dignity and respect</h3>
              <p>The centre’s values affirm the dignity, respect, justice, excellence, and independence children and families deserve.</p>
            </motion.article>
          </div>
        </div>
      </section>

      <section className="about-page__cta">
        <div className="container">
          <p className="section-label"><span className="section-label__line" />Start a conversation</p>
          <h2>Learn more about support for your family.</h2>
          <p>Contact the centre to ask about services and current programme information.</p>
          <Button asChild size="large">
            <Link to="/contact">Get in touch <ArrowRight aria-hidden="true" size={18} /></Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
