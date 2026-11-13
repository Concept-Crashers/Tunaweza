import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { footerGroups } from '../../data/siteContent'
import Brand from './Brand'

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__cta">
          <div>
            <span className="eyebrow eyebrow--light">Start a conversation</span>
            <h2>Every family deserves a place to begin.</h2>
          </div>
          <Link className="footer-cta-link" to="/contact">
            Contact the team <ArrowUpRight aria-hidden="true" size={18} />
          </Link>
        </div>
        <div className="site-footer__main">
          <div className="site-footer__identity">
            <Brand footer />
            <p>A draft digital home for the Tunaweza Children&apos;s Centre community.</p>
          </div>
          <div className="site-footer__links">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h2>{group.title}</h2>
                {group.links.map((link) => (
                  <Link key={link.to} to={link.to}>{link.label}</Link>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="site-footer__bottom">
          <span>© {new Date().getFullYear()} Tunaweza Children&apos;s Centre</span>
          <span>Preview only · Not connected to live services</span>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
