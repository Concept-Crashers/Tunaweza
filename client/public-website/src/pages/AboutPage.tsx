import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowRight,
  Award,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  Compass,
  HandHeart,
  Heart,
  HeartHandshake,
  Music2,
  Palette,
  PersonStanding,
  ShieldCheck,
  Speech,
  Stethoscope,
  Target,
  UsersRound,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'
import DemoPhoto from '../components/content/DemoPhoto'
import PageHero from '../components/content/PageHero'

const coreValues = [
  { title: 'Professionalism', icon: <Award aria-hidden="true" size={20} /> },
  { title: 'Excellence', icon: <CheckCircle2 aria-hidden="true" size={20} /> },
  { title: 'Non-discrimination', icon: <ShieldCheck aria-hidden="true" size={20} /> },
  { title: 'Patience', icon: <Heart aria-hidden="true" size={20} /> },
  { title: 'Integrity', icon: <Compass aria-hidden="true" size={20} /> },
  { title: 'Teamwork', icon: <UsersRound aria-hidden="true" size={20} /> },
]

const careValues = [
  {
    title: 'Dignity',
    icon: <Heart aria-hidden="true" size={21} />,
    description: 'Recognise the inherent value of every child and treat children and families with dignity.',
  },
  {
    title: 'Respect',
    icon: <UsersRound aria-hidden="true" size={21} />,
    description: 'Respect the cultural importance of family in each child’s life.',
  },
  {
    title: 'Justice',
    icon: <ShieldCheck aria-hidden="true" size={21} />,
    description: 'Advocate for children with disabilities to participate and thrive in their communities.',
  },
  {
    title: 'Effective care',
    icon: <CheckCircle2 aria-hidden="true" size={21} />,
    description: 'Provide appropriate, effective therapy and care that supports each child’s potential.',
  },
  {
    title: 'Independence',
    icon: <PersonStanding aria-hidden="true" size={21} />,
    description: 'Help children build skills for greater independence and participation in everyday life.',
  },
]

const services = [
  { name: 'Child assessment and treatment plans', icon: <CheckCircle2 aria-hidden="true" size={18} /> },
  { name: 'Physiotherapy', icon: <Stethoscope aria-hidden="true" size={18} /> },
  { name: 'Speech and language therapy', icon: <Speech aria-hidden="true" size={18} /> },
  { name: 'Occupational and behavioural therapy', icon: <PersonStanding aria-hidden="true" size={18} /> },
  { name: 'Music therapy', icon: <Music2 aria-hidden="true" size={18} /> },
  { name: 'Special education and individualised education plans', icon: <BookOpen aria-hidden="true" size={18} /> },
  { name: 'Art therapy', icon: <Palette aria-hidden="true" size={18} /> },
  { name: 'Outreach', icon: <HandHeart aria-hidden="true" size={18} /> },
  { name: 'Social psychology support', icon: <HeartHandshake aria-hidden="true" size={18} /> },
]

const team = [
  { name: 'Pamela Titi', role: 'Chief Executive Officer / Founder' },
  { name: 'Sheila Sabune', role: 'Managing Partner / Co-Founder' },
]

function AboutPage() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <div className="about-page">
      <PageHero
        eyebrow="About Tunaweza"
        title="Making your child’s world"
        highlight="better."
        description="Tunaweza Children’s Centre is an early childhood intervention centre supporting children with disabilities through therapy, education programmes, and support for families."
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

      <nav className="about-section-nav" aria-label="About page sections">
        <div className="container about-section-nav__inner">
          <a href="#our-story">Our story</a>
          <a href="#purpose">Mission & vision</a>
          <a href="#values">Values</a>
          <a href="#services">Services</a>
          <a href="#our-people">Our people</a>
          <a href="#get-involved">Get involved</a>
        </div>
      </nav>

      <section className="about-intro section" id="our-story">
        <div className="container about-intro__grid">
          <div className="about-intro__copy">
            <p className="section-label"><span className="section-label__line" />Why choose Tunaweza</p>
            <h2>Support shaped around <em>each child.</em></h2>
            <p>
              Tunaweza brings together a multidisciplinary team to support children
              with a wide range of developmental needs. Therapy and education
              programmes are intended to respond to each child, while recognising
              the important role families and communities play.
            </p>
            <p>
              The centre’s approach is grounded in patience, teamwork, and respect
              for every child’s dignity and potential.
            </p>
            <span className="about-intro__location">Kampala, Uganda</span>
          </div>
          <DemoPhoto
            className="about-page__photo"
            src="/images/child-activity-demo.jpg"
            alt="A child engaged in a play activity in an Unsplash stock photo used for this website demo; the child is not a Tunaweza participant."
          />
        </div>
      </section>

      <section className="about-purpose section" id="purpose">
        <div className="container about-purpose__grid">
          <motion.article
            initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: prefersReducedMotion ? 0 : .35 }}
          >
            <p className="section-label"><span className="section-label__line" />Our vision</p>
            <span className="about-purpose__icon" aria-hidden="true"><Target size={23} /></span>
            <h2>Empowering children to reach their <em>full potential.</em></h2>
            <p>Strive to empower children with special needs in the region to reach their full potential.</p>
          </motion.article>
          <motion.article
            initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: prefersReducedMotion ? 0 : .35, delay: prefersReducedMotion ? 0 : .08 }}
          >
            <p className="section-label"><span className="section-label__line" />Our mission</p>
            <span className="about-purpose__icon" aria-hidden="true"><HeartHandshake size={23} /></span>
            <h2>Practical support for children, families, and <em>communities.</em></h2>
            <p>
              To empower children with various disabilities through tailored
              curriculums of excellent therapy services, and by providing
              resources, information, training, and support to children, their
              families, and communities.
            </p>
          </motion.article>
        </div>
      </section>

      <section className="about-values" id="values">
        <div className="container">
          <div className="about-values__heading">
            <p className="section-label section-label--light"><span className="section-label__line" />Our core values</p>
            <h2>How we work, <em>together.</em></h2>
            <p>These principles guide how the team works with children, families, and one another.</p>
          </div>
          <ul className="about-values__list about-values__list--core">
            {coreValues.map((value, index) => (
              <motion.li
                key={value.title}
                initial={prefersReducedMotion ? false : { opacity: 0, scale: .94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: prefersReducedMotion ? 0 : .3, delay: prefersReducedMotion ? 0 : index * .05 }}
              >
                <span className="about-values__icon">{value.icon}</span>
                <strong>{value.title}</strong>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      <section className="about-care section">
        <div className="container">
          <div className="about-approach__heading">
            <p className="section-label"><span className="section-label__line" />Our commitment to children and families</p>
            <h2>Care that makes room for <em>possibility.</em></h2>
          </div>
          <div className="about-care__grid">
            {careValues.map((value, index) => (
              <motion.article
                key={value.title}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: prefersReducedMotion ? 0 : .3, delay: prefersReducedMotion ? 0 : index * .05 }}
              >
                <span className="about-care__icon">{value.icon}</span>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-services" id="services">
        <div className="container about-services__grid">
          <div>
            <p className="section-label section-label--light"><span className="section-label__line" />What we do</p>
            <h2>Connecting families with <em>experienced support.</em></h2>
            <p>
              The centre’s existing information describes a multidisciplinary
              team across therapy, special education, and family support.
            </p>
          </div>
          <ul className="about-services__list">
            {services.map((service) => (
              <li key={service.name}>
                {service.icon}
                <span>{service.name}</span>
              </li>
            ))}
          </ul>
          <Link className="about-services__link" to="/services">
            View services <ArrowRight aria-hidden="true" size={17} />
          </Link>
        </div>
      </section>

      <section className="about-day-program section">
        <div className="container about-day-program__inner">
          <div>
            <p className="section-label"><span className="section-label__line" />Day programme</p>
            <h2>Therapy, learning, and activities throughout <em>the day.</em></h2>
          </div>
          <div>
            <p>
              The supplied information describes a day programme for school
              holidays or children who need multiple therapies, with activities
              scheduled between therapy sessions.
            </p>
            <Button asChild>
              <Link to="/contact?topic=enrolment">Ask about enrolment <ArrowRight aria-hidden="true" size={16} /></Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="about-team section" id="our-people">
        <div className="container">
          <div className="about-approach__heading">
            <p className="section-label"><span className="section-label__line" />Our people</p>
            <h2>A team built around <em>care and learning.</em></h2>
            <p className="about-team__intro">
              Tunaweza’s supplied information describes Ugandan and international
              staff, visiting volunteers, and a board that provides direction to
              the centre.
            </p>
          </div>

          <h3 className="about-team__subheading">Leadership</h3>
          <div className="about-team__leaders">
            {team.map((member, index) => (
              <motion.article
                key={member.name}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: prefersReducedMotion ? 0 : .3, delay: prefersReducedMotion ? 0 : index * .07 }}
              >
                <div>
                  <span className="about-team__role">Leadership</span>
                  <h4>{member.name}</h4>
                  <p>{member.role}</p>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="about-team__details">
            <article>
              <span className="about-team__detail-icon" aria-hidden="true"><UsersRound size={20} /></span>
              <h3>The board</h3>
              <p>
                The supplied copy describes a five-person Board of Directors and
                two development partners who guide management and support
                implementation of the centre’s activities.
              </p>
            </article>
            <article>
              <span className="about-team__detail-icon" aria-hidden="true"><HeartHandshake size={20} /></span>
              <h3>Staff and volunteers</h3>
              <p>
                The centre describes a full-time Ugandan and international staff
                team, alongside rotating international volunteers who contribute
                support and exchange of knowledge and experience.
              </p>
            </article>
          </div>
          <aside className="about-review-note">
            <strong>Details to confirm before launch</strong>
            <p>
              Verify current services and availability, programme schedules and
              eligibility, day programme details, leadership names and roles,
              board composition, and current staffing with Tunaweza.
            </p>
          </aside>
        </div>
      </section>

      <section className="about-opportunities" id="get-involved">
        <div className="container about-opportunities__grid">
          <article>
            <p className="section-label"><span className="section-label__line" />Volunteer with us</p>
            <span className="about-opportunities__icon" aria-hidden="true"><HandHeart size={23} /></span>
            <h2>Share skills. <em>Grow together.</em></h2>
            <p>
              Existing information describes volunteers contributing support
              and capacity building through an exchange of knowledge and
              experiences.
            </p>
            <Button asChild variant="outline">
              <Link to="/get-involved">Ask about volunteering <ArrowRight aria-hidden="true" size={16} /></Link>
            </Button>
          </article>
          <article>
            <p className="section-label"><span className="section-label__line" />Internships and co-op programmes</p>
            <span className="about-opportunities__icon" aria-hidden="true"><BriefcaseBusiness size={23} /></span>
            <h2>Learn through <em>practical experience.</em></h2>
            <p>
              The supplied copy describes placements for local and international
              university students, with learning experiences in research and
              therapy fields.
            </p>
            <Button asChild>
              <Link to="/contact?topic=partnership">Ask about placements <ArrowRight aria-hidden="true" size={16} /></Link>
            </Button>
          </article>
        </div>
      </section>

      <section className="about-page__cta">
        <div className="container">
          <p className="section-label"><span className="section-label__line" />Join us</p>
          <h2>Every child deserves the chance to grow.</h2>
          <p>
            The centre’s supplied information welcomes children with disabilities
            to enquire about services. Contact Tunaweza to ask about current
            programme details and enrolment.
          </p>
          <div className="about-page__hero-actions">
            <Button asChild size="large">
              <Link to="/contact">Enquire about enrolment <ArrowRight aria-hidden="true" size={18} /></Link>
            </Button>
            <Button asChild size="large" variant="outline">
              <Link to="/services">Explore services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
