import { motion, useReducedMotion } from 'framer-motion'
import PageHero from '../components/content/PageHero'
import DemoPhoto from '../components/content/DemoPhoto'

const demoPhotos = [
  {
    src: '/images/children-playing-demo.jpg',
    alt: 'Children playing outdoors in an Unsplash stock photo; they are not Tunaweza participants.',
  },
  {
    src: '/images/classroom-demo.jpg',
    alt: 'A classroom scene in an Unsplash stock photo; it is not a Tunaweza programme.',
  },
  {
    src: '/images/child-activity-demo.jpg',
    alt: 'A child playing in an Unsplash stock photo; the child is not a Tunaweza participant.',
  },
]

function GalleryPage() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Moments that bring us"
        highlight="together."
        description="A place for approved photographs and videos from Tunaweza Children’s Centre."
      />
      <section className="section gallery-page">
        <div className="container">
          <p className="content-notice" role="note">
            These Unsplash photos are temporary design samples, not images of Tunaweza children, families, staff, or programmes. Replace with approved media before launch.
          </p>
          <div className="gallery-grid">
            {demoPhotos.map((photo, index) => (
              <motion.div
                className="gallery-grid__item"
                key={photo.src}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: prefersReducedMotion ? 0 : .35, delay: prefersReducedMotion ? 0 : index * .07 }}
              >
                <DemoPhoto {...photo} className="gallery-photo" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default GalleryPage
