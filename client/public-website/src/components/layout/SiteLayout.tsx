import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import SiteFooter from './SiteFooter'
import SiteHeader from './SiteHeader'

function SiteLayout({ children }: { children: ReactNode }) {
  const { pathname } = useLocation()
  const prefersReducedMotion = useReducedMotion()

  return (
    <>
      <SiteHeader />
      <motion.main
        id="main-content"
        key={pathname}
        initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.24, ease: 'easeOut' }}
      >
        {children}
      </motion.main>
      <SiteFooter />
    </>
  )
}

export default SiteLayout
