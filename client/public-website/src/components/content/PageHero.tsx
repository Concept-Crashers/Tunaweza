import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

function PageHero({
  eyebrow,
  title,
  highlight,
  description,
  children,
}: {
  eyebrow: string
  title: string
  highlight?: string
  description: string
  children?: ReactNode
}) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.section
      className="page-hero"
      initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: prefersReducedMotion ? 0 : .35, ease: 'easeOut' }}
    >
      <div className="container page-hero__inner">
        <p className="section-label"><span className="section-label__line" />{eyebrow}</p>
        <h1>{title}{highlight && <> <em>{highlight}</em></>}</h1>
        <p className="page-hero__description">{description}</p>
        {children}
      </div>
    </motion.section>
  )
}

export default PageHero
