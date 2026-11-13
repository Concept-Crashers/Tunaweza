import { useState } from 'react'
import { ArrowRight, ArrowUpRight, MapPin, Menu, Phone, X } from 'lucide-react'
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'
import * as Dialog from '@radix-ui/react-dialog'
import { Button } from '../ui/button'
import { navigation } from '../../data/siteContent'
import Brand from './Brand'
import { cn } from '../../lib/utils'

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="preview-banner">
        <div className="container preview-banner__inner">
          <p className="preview-banner__address"><MapPin aria-hidden="true" size={14} /> Plot 1211 Papaya Rise, Kampala, Uganda</p>
          <div className="preview-banner__contacts" aria-label="Call Tunaweza">
            <Phone aria-hidden="true" size={14} />
            <a href="tel:+256787197884">+256 787 197884</a>
            <span aria-hidden="true">|</span>
            <a href="tel:+256752600196">+256 752 600196</a>
          </div>
          <div className="preview-banner__socials" role="group" aria-label="Social profile placeholders">
            <p className="preview-banner__social-label">Connect with Tunaweza</p>
            <span><FaFacebookF aria-hidden="true" /> Facebook <small>Coming soon</small></span>
            <span><FaInstagram aria-hidden="true" /> Instagram <small>Coming soon</small></span>
            <span><FaYoutube aria-hidden="true" /> YouTube <small>Coming soon</small></span>
          </div>
        </div>
      </div>
      <header className="site-header">
        <div className="container site-header__inner">
          <Brand />
          <nav className="desktop-nav" aria-label="Main navigation">
            {navigation.map((item) => (
              <NavLink
                className={({ isActive }) => cn('desktop-nav__link', isActive && 'is-active')}
                end={item.to === '/'}
                key={item.to}
                to={item.to}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="site-header__actions">
            <Button asChild size="small" className="header-contact">
              <Link to="/contact">Talk to us <ArrowUpRight aria-hidden="true" size={16} /></Link>
            </Button>
            <Dialog.Root open={menuOpen} onOpenChange={setMenuOpen}>
              <Dialog.Trigger asChild>
                <Button
                  aria-label="Open navigation menu"
                  className="mobile-menu-trigger"
                  size="icon"
                  variant="outline"
                >
                  <Menu aria-hidden="true" size={21} />
                </Button>
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="mobile-menu-overlay" />
                <Dialog.Content className="mobile-menu-panel">
                  <div className="mobile-menu-panel__top">
                    <Brand />
                    <Dialog.Close asChild>
                      <Button aria-label="Close navigation menu" size="icon" variant="ghost">
                        <X aria-hidden="true" size={20} />
                      </Button>
                    </Dialog.Close>
                  </div>
                  <Dialog.Title className="visually-hidden">Main navigation</Dialog.Title>
                  <nav className="mobile-nav" aria-label="Mobile navigation">
                    {[...navigation, { label: 'Our impact', to: '/impact' }, { label: 'Get involved', to: '/get-involved' }, { label: 'Contact us', to: '/contact' }].map((item) => (
                      <NavLink key={item.to} to={item.to} onClick={() => setMenuOpen(false)}>
                        {item.label}<ArrowRight aria-hidden="true" size={18} />
                      </NavLink>
                    ))}
                  </nav>
                  <p className="mobile-menu-note">A welcoming space for every family.</p>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </div>
        </div>
      </header>
    </>
  )
}

export default SiteHeader
