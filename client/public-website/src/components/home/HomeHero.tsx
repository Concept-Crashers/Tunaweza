import { useEffect, useState } from 'react'
import { ArrowRight, HeartHandshake } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'

const values = ['Dignity', 'Respect', 'Justice', 'Excellence', 'Independence']
const heroBackgrounds = [
  '/images/children-playing-demo.jpg',
  '/images/classroom-demo.jpg',
  '/images/child-activity-demo.jpg',
]

function useTypedValue() {
  const [value, setValue] = useState('')

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(values[0])
      return
    }

    let wordIndex = 0
    let characterIndex = 0
    let deleting = false
    let timeout = 0

    const tick = () => {
      const word = values[wordIndex]

      if (deleting) {
        characterIndex -= 1
        setValue(word.slice(0, characterIndex))
        if (characterIndex === 0) {
          deleting = false
          wordIndex = (wordIndex + 1) % values.length
          timeout = window.setTimeout(tick, 260)
          return
        }
      } else {
        characterIndex += 1
        setValue(word.slice(0, characterIndex))
        if (characterIndex === word.length) {
          deleting = true
          timeout = window.setTimeout(tick, 1450)
          return
        }
      }

      timeout = window.setTimeout(tick, deleting ? 58 : 105)
    }

    timeout = window.setTimeout(tick, 120)
    return () => window.clearTimeout(timeout)
  }, [])

  return value
}

function useRotatingBackground() {
  const [activeBackground, setActiveBackground] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const interval = window.setInterval(() => {
      setActiveBackground((current) => (current + 1) % heroBackgrounds.length)
    }, 6500)

    return () => window.clearInterval(interval)
  }, [])

  return activeBackground
}

function HomeHero() {
  const typedValue = useTypedValue()
  const activeBackground = useRotatingBackground()

  return (
    <section className="home-hero">
      <div className="home-hero__backgrounds" aria-hidden="true">
        {heroBackgrounds.map((image, index) => (
          <div
            className={`home-hero__background${index === activeBackground ? ' is-active' : ''}`}
            key={image}
            style={{ backgroundImage: `url("${image}")` }}
          />
        ))}
      </div>
      <div className="container home-hero__grid">
        <div className="home-hero__copy">
          <p className="eyebrow"><span /> Tunaweza Children&apos;s Centre · Kampala, Uganda</p>
          <p className="home-hero__typed" aria-hidden="true">
            A holistic approach rooted in <strong>{typedValue}<span className="home-hero__caret" /></strong>
          </p>
          <span className="visually-hidden">
            A holistic approach rooted in dignity, respect, justice, excellence, and independence.
          </span>
          <h1>
            <span>Making your child&apos;s</span>
            <span>world <em>better.</em></span>
          </h1>
          <p className="home-hero__intro">
            Tunaweza Children&apos;s Centre supports children with disabilities
            through therapy and day programmes shaped around the needs of each
            child and family.
          </p>
          <div className="home-hero__actions">
            <Button asChild size="large">
              <Link to="/services">Explore our services <ArrowRight aria-hidden="true" size={18} /></Link>
            </Button>
            <Button asChild size="large" variant="outline">
              <Link to="/contact">Talk to our team</Link>
            </Button>
          </div>
          <div className="home-hero__assurance">
            <span><HeartHandshake aria-hidden="true" size={19} /></span>
            <p><strong>Care begins with listening.</strong><br />Every child and family is unique.</p>
          </div>
        </div>
      </div>
      <div className="container home-hero__foot">
        <span>DIGNITY <i /> RESPECT <i /> INDEPENDENCE</span>
        <span>Unsplash stock photography · not Tunaweza participants</span>
      </div>
    </section>
  )
}

export default HomeHero
