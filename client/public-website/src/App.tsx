import { useEffect, useState, type ReactNode } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  BookOpenText,
  Check,
  ChevronDown,
  HeartHandshake,
  Menu,
  MoveUpRight,
  Sparkles,
  UsersRound,
  X,
} from 'lucide-react'
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import * as Dialog from '@radix-ui/react-dialog'
import { Button } from './components/ui/button'
import { cn } from './lib/utils'
import ContactPage from './pages/ContactPage'
import './App.css'

const primaryNavigation = [
  { label: 'About', to: '/about' },
  { label: 'Our services', to: '/services' },
  { label: 'For families', to: '/families' },
  { label: 'Stories & news', to: '/stories' },
]

const CURRENT_YEAR = new Date().getFullYear()
const routeMetadata: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Home',
    description: 'A frontend preview for the Tunaweza Children’s Centre website.',
  },
  '/about': {
    title: 'About Tunaweza',
    description: 'Learn about Tunaweza Children’s Centre. Content in this preview is pending organisational review.',
  },
  '/services': {
    title: 'Our services',
    description: 'Explore draft service information for Tunaweza Children’s Centre.',
  },
  '/programmes': {
    title: 'Our programmes',
    description: 'Explore draft programme information for Tunaweza Children’s Centre.',
  },
  '/families': {
    title: 'For parents and caregivers',
    description: 'Find draft information and resources for parents and caregivers.',
  },
  '/stories': {
    title: 'Stories and news',
    description: 'Approved stories and updates will be shared here after review.',
  },
  '/resources': {
    title: 'Resources',
    description: 'Browse resources for families and the wider community.',
  },
  '/get-involved': {
    title: 'Get involved',
    description: 'Explore draft ways to connect and support Tunaweza Children’s Centre.',
  },
  '/contact': {
    title: 'Contact',
    description: 'Contact information and form preview for Tunaweza Children’s Centre.',
  },
  '/privacy': {
    title: 'Privacy',
    description: 'The approved privacy policy will be published before launch.',
  },
  '/safeguarding': {
    title: 'Safeguarding',
    description: 'The approved child safeguarding statement will be published before launch.',
  },
  '/accessibility': {
    title: 'Accessibility',
    description: 'Accessibility information for the Tunaweza Children’s Centre website preview.',
  },
}

const serviceCards = [
  {
    number: '01',
    icon: Sparkles,
    title: 'Therapy & development',
    text: 'Learn about the support available to children and families. Service details are being confirmed.',
    to: '/services',
  },
  {
    number: '02',
    icon: BookOpenText,
    title: 'Learning & education',
    text: 'Explore the centre’s learning approach and the ways it works alongside families.',
    to: '/programmes',
  },
  {
    number: '03',
    icon: UsersRound,
    title: 'Family support',
    text: 'Find practical information for caregivers and ways to get in touch with the team.',
    to: '/families',
  },
]

function PageScrollManager() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
    const metadata = routeMetadata[pathname] ?? {
      title: 'Page not found',
      description: 'The requested page could not be found.',
    }

    document.title = `${metadata.title} | Tunaweza Children’s Centre`
    document
      .querySelector<HTMLMetaElement>('meta[name="description"]')
      ?.setAttribute('content', metadata.description)
  }, [pathname])

  return null
}

function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="preview-banner">
        <div className="container preview-banner__inner">
          <span className="preview-dot" aria-hidden="true" />
          <p>
            <strong>Design preview</strong>
            <span>Copy and service information are drafts pending review.</span>
          </p>
        </div>
      </div>
      <header className="site-header">
        <div className="container site-header__inner">
          <Link className="brand" to="/" aria-label="Tunaweza Children's Centre home">
            <span className="brand__symbol" aria-hidden="true">t</span>
            <span className="brand__name">
              <strong>tunaweza</strong>
              <small>CHILDREN&apos;S CENTRE</small>
            </span>
          </Link>
          <nav className="desktop-nav" aria-label="Main navigation">
            {primaryNavigation.map((item) => (
              <NavLink
                className={({ isActive }) => cn('desktop-nav__link', isActive && 'is-active')}
                key={item.to}
                to={item.to}
              >
                {item.label}
              </NavLink>
            ))}
            <NavLink
              className={({ isActive }) => cn('desktop-nav__link', isActive && 'is-active')}
              to="/get-involved"
            >
              Get involved
            </NavLink>
          </nav>
          <div className="site-header__actions">
            <Button asChild size="small" className="header-contact">
              <Link to="/contact">Talk to us <ArrowUpRight aria-hidden="true" size={16} /></Link>
            </Button>
            <Dialog.Root open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
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
                <Dialog.Content
                  className="mobile-menu-panel"
                  onKeyDown={(event) => {
                    if (event.key === 'Escape') setMobileMenuOpen(false)
                  }}
                >
                  <div className="mobile-menu-panel__top">
                    <Link
                      className="brand"
                      to="/"
                      onClick={() => setMobileMenuOpen(false)}
                      aria-label="Tunaweza Children's Centre home"
                    >
                      <span className="brand__symbol" aria-hidden="true">t</span>
                      <span className="brand__name">
                        <strong>tunaweza</strong>
                        <small>CHILDREN&apos;S CENTRE</small>
                      </span>
                    </Link>
                    <Dialog.Close asChild>
                      <Button aria-label="Close navigation menu" size="icon" variant="ghost">
                        <X aria-hidden="true" size={20} />
                      </Button>
                    </Dialog.Close>
                  </div>
                  <Dialog.Title className="visually-hidden">Main navigation</Dialog.Title>
                  <nav className="mobile-nav" aria-label="Mobile navigation">
                    {[...primaryNavigation, { label: 'Get involved', to: '/get-involved' }].map((item) => (
                      <NavLink
                        key={item.to}
                        to={item.to}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}<ArrowRight aria-hidden="true" size={18} />
                      </NavLink>
                    ))}
                    <NavLink to="/resources" onClick={() => setMobileMenuOpen(false)}>
                      Resources<ArrowRight aria-hidden="true" size={18} />
                    </NavLink>
                    <NavLink to="/contact" onClick={() => setMobileMenuOpen(false)}>
                      Contact<ArrowRight aria-hidden="true" size={18} />
                    </NavLink>
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

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__main">
          <div className="site-footer__identity">
            <Link className="brand brand--footer" to="/">
              <span className="brand__symbol" aria-hidden="true">t</span>
              <span className="brand__name">
                <strong>tunaweza</strong>
                <small>CHILDREN&apos;S CENTRE</small>
              </span>
            </Link>
            <p>A draft digital home for the Tunaweza Children&apos;s Centre community.</p>
          </div>
          <div className="site-footer__links">
            <div>
              <h2>Explore</h2>
              <Link to="/about">About</Link>
              <Link to="/services">Our services</Link>
              <Link to="/programmes">Programmes</Link>
              <Link to="/stories">Stories & news</Link>
            </div>
            <div>
              <h2>Connect</h2>
              <Link to="/families">For families</Link>
              <Link to="/get-involved">Get involved</Link>
              <Link to="/resources">Resources</Link>
              <Link to="/contact">Contact</Link>
            </div>
            <div>
              <h2>Information</h2>
              <Link to="/privacy">Privacy</Link>
              <Link to="/safeguarding">Safeguarding</Link>
              <Link to="/accessibility">Accessibility</Link>
            </div>
          </div>
        </div>
        <div className="site-footer__bottom">
          <span>© {CURRENT_YEAR} Tunaweza Children&apos;s Centre</span>
          <span>Draft frontend preview · Not connected to live services</span>
        </div>
      </div>
    </footer>
  )
}

function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main id="main-content">{children}</main>
      <SiteFooter />
    </>
  )
}

function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="container hero-section__grid">
          <div className="hero-copy">
            <p className="eyebrow"><span /> A place to grow together</p>
            <h1>Every child deserves room to <em>become.</em></h1>
            <p className="hero-copy__intro">
              A welcoming place for children and families to find support,
              discover strengths, and take their next steps together.
            </p>
            <div className="hero-actions">
              <Button asChild size="large">
                <Link to="/services">Explore our services <ArrowRight aria-hidden="true" size={18} /></Link>
              </Button>
              <Button asChild size="large" variant="outline">
                <Link to="/contact">Talk to our team</Link>
              </Button>
            </div>
            <div className="hero-assurance">
              <span className="hero-assurance__icon"><HeartHandshake aria-hidden="true" size={18} /></span>
              <p><strong>Care that starts with listening.</strong><br />Every child and family is unique.</p>
            </div>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="hero-art__ring hero-art__ring--one" />
            <div className="hero-art__ring hero-art__ring--two" />
            <div className="hero-art__sun" />
            <div className="hero-art__leaf hero-art__leaf--one" />
            <div className="hero-art__leaf hero-art__leaf--two" />
            <div className="hero-art__center">
              <span className="hero-art__spark hero-art__spark--one">✳</span>
              <span className="hero-art__word">Together,<br /><em>we grow.</em></span>
              <span className="hero-art__spark hero-art__spark--two">✳</span>
            </div>
            <div className="hero-art__caption">
              <span className="hero-art__caption-mark"><Check aria-hidden="true" size={15} /></span>
              <span>Every family has a place here</span>
            </div>
          </div>
        </div>
        <div className="hero-bottom container">
          <span>LEARNING · CARE · COMMUNITY</span>
          <span>Scroll to discover <ChevronDown aria-hidden="true" size={15} /></span>
        </div>
      </section>

      <section className="intro-section section-space">
        <div className="container intro-section__grid">
          <div className="section-label">
            <span className="section-label__line" />
            <span>Welcome to Tunaweza</span>
          </div>
          <div className="intro-section__content">
            <h2>Support, understanding, and possibility — <em>all in one place.</em></h2>
            <div className="intro-section__bottom">
              <p>
                We believe children thrive when they are understood and included.
                Our team works alongside families to help each child explore,
                learn, and take part in everyday life.
              </p>
              <Link className="text-link" to="/about">Get to know us <ArrowUpRight aria-hidden="true" size={17} /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="services-section section-space">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="section-label"><span className="section-label__line" /><span>How we support</span></div>
              <h2>Support shaped around <em>each child.</em></h2>
            </div>
            <Link className="text-link section-heading__link" to="/services">
              See all services <ArrowUpRight aria-hidden="true" size={17} />
            </Link>
          </div>
          <div className="row g-3 g-lg-4 service-card-row">
            {serviceCards.map(({ number, icon: Icon, title, text, to }) => (
              <div className="col-md-4" key={number}>
                <Link className="service-card" to={to}>
                  <div className="service-card__top">
                    <span className="service-card__icon"><Icon aria-hidden="true" size={21} strokeWidth={1.7} /></span>
                    <span className="service-card__number" aria-hidden="true">{number}</span>
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <span className="service-card__link">Explore <ArrowRight aria-hidden="true" size={17} /></span>
                </Link>
              </div>
            ))}
          </div>
          <p className="content-note">
            Service categories and descriptions shown here are draft content
            from the project brief; Tunaweza must confirm current offerings.
          </p>
        </div>
      </section>

      <section className="family-section section-space">
        <div className="container family-section__grid">
          <div className="family-visual" aria-hidden="true">
            <div className="family-visual__sun" />
            <div className="family-visual__shape family-visual__shape--back" />
            <div className="family-visual__shape family-visual__shape--front" />
            <div className="family-visual__quote-mark">“</div>
            <div className="family-visual__caption">A space to listen, learn and grow</div>
          </div>
          <div className="family-copy">
            <div className="section-label"><span className="section-label__line" /><span>For parents & caregivers</span></div>
            <h2>You know your child best. <em>We’re here to listen.</em></h2>
            <p>
              Finding the right support can bring up many questions. Start with
              simple information about connecting with the centre and what to
              expect when you reach out.
            </p>
            <ul className="family-list">
              <li><span><Check aria-hidden="true" size={14} /></span> Learn about the first steps</li>
              <li><span><Check aria-hidden="true" size={14} /></span> Find answers to common questions</li>
              <li><span><Check aria-hidden="true" size={14} /></span> Explore family resources</li>
            </ul>
            <Button asChild variant="outline">
              <Link to="/families">Visit the family hub <ArrowRight aria-hidden="true" size={17} /></Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="stories-section section-space">
        <div className="container stories-section__inner">
          <div className="stories-section__text">
            <div className="section-label section-label--light"><span className="section-label__line" /><span>Stories & updates</span></div>
            <h2>Good things grow when <em>we share.</em></h2>
            <p>Approved stories and centre updates will be shared here as they become ready.</p>
            <Link className="text-link text-link--light" to="/stories">Visit stories & news <ArrowRight aria-hidden="true" size={17} /></Link>
          </div>
          <div className="stories-section__stamp" aria-hidden="true">
            <span>Community</span>
            <span className="stories-section__stamp-star">✳</span>
            <span>Connection</span>
            <span className="stories-section__stamp-star">✳</span>
            <span>Possibility</span>
          </div>
        </div>
      </section>

      <section className="involved-section section-space">
        <div className="container involved-section__inner">
          <div className="section-label"><span className="section-label__line" /><span>Be part of the journey</span></div>
          <h2>Every kind of support <em>matters.</em></h2>
          <p>Explore ways to connect, contribute your skills, or start a conversation about working together.</p>
          <Button asChild size="large">
            <Link to="/get-involved">See how to get involved <MoveUpRight aria-hidden="true" size={17} /></Link>
          </Button>
        </div>
      </section>
    </>
  )
}

type InfoPageContent = {
  eyebrow: string
  title: string
  highlight: string
  intro: string
  sections: { title: string; body: string }[]
}

const infoPages: Record<string, InfoPageContent> = {
  about: {
    eyebrow: 'About Tunaweza',
    title: 'A community built around',
    highlight: 'every child.',
    intro: 'Get to know the centre, its approach, and the people who make its work possible.',
    sections: [
      { title: 'Our story', body: 'The organisation’s history and milestones will be added after review with Tunaweza.' },
      { title: 'Our mission & values', body: 'Approved mission, vision, and values will be published here once confirmed by the organisation.' },
      { title: 'Our people', body: 'Leadership, board, and team profiles will appear here after each person approves their biography and photograph.' },
    ],
  },
  services: {
    eyebrow: 'Our services',
    title: 'A thoughtful approach to',
    highlight: 'support.',
    intro: 'Every child’s needs are different. Learn about available support and speak with the team about current services.',
    sections: [
      { title: 'Assessment & planning', body: 'A starting conversation helps families understand options. Confirm the current assessment process directly with Tunaweza.' },
      { title: 'Therapy & learning', body: 'The project brief lists several therapy and education areas. The current service list and delivery details are awaiting staff verification.' },
      { title: 'Family & community support', body: 'The centre’s family and community support information will be added after its scope and availability are confirmed.' },
    ],
  },
  programmes: {
    eyebrow: 'Our programmes',
    title: 'Learning through',
    highlight: 'everyday moments.',
    intro: 'Explore the programmes offered by Tunaweza. Programme schedules and activities will be shared after confirmation.',
    sections: [
      { title: 'Day programme', body: 'The project brief refers to a day programme. Current eligibility, schedule, activities, and availability need to be confirmed.' },
      { title: 'A family-centred approach', body: 'Approved information about how families take part in programme planning will be added here.' },
    ],
  },
  families: {
    eyebrow: 'For parents & caregivers',
    title: 'You do not have to figure it out',
    highlight: 'on your own.',
    intro: 'A starting place for families looking for information about the centre and the next step to take.',
    sections: [
      { title: 'Getting started', body: 'Contact the centre to ask about current services and how to access them. Intake details will be added once approved.' },
      { title: 'Helpful resources', body: 'Family information and educational resources will be published after editorial review. General information here is not a substitute for individual professional advice.' },
      { title: 'Frequently asked questions', body: 'Answers about referrals, visits, costs, and programme schedules are being confirmed with the team.' },
    ],
  },
  stories: {
    eyebrow: 'Stories & news',
    title: 'A place for voices and',
    highlight: 'updates.',
    intro: 'Stories, news, and events will be shared here once they have been reviewed and approved for publication.',
    sections: [
      { title: 'Stories from the community', body: 'No stories are displayed in this preview. Any story involving a child or family requires documented consent and organisational approval before publication.' },
      { title: 'News & events', body: 'Approved news and event information will be added when current details are available.' },
    ],
  },
  resources: {
    eyebrow: 'Resources',
    title: 'Information to help you',
    highlight: 'find your way.',
    intro: 'Browse useful, reviewed information for families, educators, and the wider community.',
    sections: [
      { title: 'Family resources', body: 'Resources will be added after review for accuracy, accessibility, and relevance.' },
      { title: 'Reports & newsletters', body: 'Approved public documents will be available to read or download here.' },
    ],
  },
  'get-involved': {
    eyebrow: 'Get involved',
    title: 'Let’s make room for',
    highlight: 'possibility.',
    intro: 'There are many ways to connect with Tunaweza. Start a conversation about the kind of support you have in mind.',
    sections: [
      { title: 'Volunteer or share your skills', body: 'Opportunities, requirements, and application steps will be confirmed by the organisation before publication.' },
      { title: 'Partner with us', body: 'Organisations interested in working together can start a conversation through the contact page.' },
      { title: 'Donations', body: 'Donation instructions and payment methods will only be shown after they are confirmed by Tunaweza. This preview does not accept payments.' },
    ],
  },
  privacy: {
    eyebrow: 'Privacy',
    title: 'Your information deserves',
    highlight: 'care.',
    intro: 'The organisation’s approved privacy policy will be published here before any live forms or analytics are enabled.',
    sections: [{ title: 'Policy pending approval', body: 'This is a placeholder for review, not a privacy policy. Do not submit personal or sensitive information through this preview.' }],
  },
  safeguarding: {
    eyebrow: 'Safeguarding',
    title: 'Children’s safety and dignity',
    highlight: 'come first.',
    intro: 'Tunaweza’s approved safeguarding and media-consent information will be published here.',
    sections: [{ title: 'Statement pending approval', body: 'This placeholder does not replace the organisation’s safeguarding policy. Child-related images and stories are not included in this preview.' }],
  },
  accessibility: {
    eyebrow: 'Accessibility',
    title: 'A website designed for',
    highlight: 'everyone.',
    intro: 'We are building this frontend with accessibility and inclusive access in mind.',
    sections: [{ title: 'Statement pending review', body: 'A complete accessibility statement, feedback route, and known-issues list will be added before launch.' }],
  },
}

function InfoPage({ page }: { page: InfoPageContent }) {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="section-label"><span className="section-label__line" /><span>{page.eyebrow}</span></div>
          <h1>{page.title} <em>{page.highlight}</em></h1>
          <p>{page.intro}</p>
        </div>
      </section>
      <section className="info-content section-space">
        <div className="container info-content__grid">
          <div className="info-content__aside">
            <span className="info-content__aside-number">TCC</span>
            <span className="info-content__aside-caption">A draft experience<br />for review</span>
          </div>
          <div className="info-content__sections">
            {page.sections.map((section, index) => (
              <article className="info-block" key={section.title}>
                <span className="info-block__number">0{index + 1}</span>
                <div>
                  <h2>{section.title}</h2>
                  <p>{section.body}</p>
                </div>
              </article>
            ))}
            <Button asChild className="info-content__cta">
              <Link to="/contact">Get in touch <ArrowRight aria-hidden="true" size={17} /></Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

function NotFoundPage() {
  return (
    <section className="page-hero page-hero--not-found">
      <div className="container">
        <div className="section-label"><span className="section-label__line" /><span>Page not found</span></div>
        <h1>Let’s find your <em>way back.</em></h1>
        <p>That page isn’t here. Head home or explore the site navigation.</p>
        <Button asChild><Link to="/">Back to home <ArrowRight aria-hidden="true" size={17} /></Link></Button>
      </div>
    </section>
  )
}

function App() {
  return (
    <SiteLayout>
      <PageScrollManager />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        {Object.entries(infoPages).map(([path, page]) => (
          <Route key={path} path={`/${path}`} element={<InfoPage page={page} />} />
        ))}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </SiteLayout>
  )
}

export default App
