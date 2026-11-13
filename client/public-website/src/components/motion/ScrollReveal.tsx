import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

function ScrollReveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: prefersReducedMotion ? 0 : .45, delay: prefersReducedMotion ? 0 : delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

export default ScrollReveal
