import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import DemoPhoto from '../components/content/DemoPhoto'
import HomeHero from '../components/home/HomeHero'
import ServicesPreview from '../components/home/ServicesPreview'
import ProgrammeFeature from '../components/home/ProgrammeFeature'
import StoriesPreview from '../components/home/StoriesPreview'
import ImpactPreview from '../components/home/ImpactPreview'
import ConnectCallout from '../components/home/ConnectCallout'
import PartnersPreview from '../components/home/PartnersPreview'
import ScrollReveal from '../components/motion/ScrollReveal'

function HomePage() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <>
      <HomeHero />
      <ScrollReveal>
        <section className="welcome-strip">
          <div className="container welcome-strip__inner">
            <div className="welcome-strip__copy">
              <p className="section-label"><span className="section-label__line" />Who we are</p>
              <h2>A community where children are seen, supported, and included.</h2>
              <p>
                Tunaweza Children&apos;s Centre is a registered non-profit in
                Kampala, Uganda, supporting children with disabilities through
                therapy and day programmes shaped around each child and family.
              </p>
              <Link className="text-link" to="/about">More about Tunaweza <ArrowUpRight aria-hidden="true" size={17} /></Link>
              <ul className="values-list" aria-label="Tunaweza values">
                {['Dignity', 'Respect', 'Justice', 'Excellence', 'Independence'].map((value) => (
                  <motion.li
                    key={value}
                    initial={prefersReducedMotion ? false : { opacity: 0, scale: .94 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: prefersReducedMotion ? 0 : .3 }}
                  >
                    {value}
                  </motion.li>
                ))}
              </ul>
            </div>
            <DemoPhoto
              className="welcome-strip__photo"
              src="/images/children-playing-demo.jpg"
              alt="Children playing together outdoors in an Unsplash stock photo used for this demo; they are not Tunaweza participants."
            />
          </div>
        </section>
      </ScrollReveal>
      <ScrollReveal><ServicesPreview /></ScrollReveal>
      <ScrollReveal delay={.05}><ProgrammeFeature /></ScrollReveal>
      <ScrollReveal delay={.08}><StoriesPreview /></ScrollReveal>
      <ScrollReveal delay={.05}><ImpactPreview /></ScrollReveal>
      <ScrollReveal><PartnersPreview /></ScrollReveal>
      <ScrollReveal><ConnectCallout /></ScrollReveal>
    </>
  )
}

export default HomePage
