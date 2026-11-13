import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeading from '../content/SectionHeading'

const newsItems = [
  {
    category: 'Community',
    title: 'Global Kindness in Action!',
    summary: 'A story celebrating generosity from Colonial Children’s Academy.',
    date: 'September 4, 2025',
  },
  {
    category: 'Newsletter',
    title: 'Tunaweza Children’s Centre Newsletter',
    summary: 'The August 2025 edition, with centre news and community updates.',
    date: 'August 2025',
  },
  {
    category: 'Community event',
    title: 'ASD Run 2025',
    summary: 'A community run for awareness and inclusion.',
    date: '2025',
  },
]

function StoriesPreview() {
  return (
    <section className="section stories-preview">
      <div className="container">
        <SectionHeading
          eyebrow="News, stories & events"
          title="A space for community"
          highlight="voices."
          action={<Link className="text-link" to="/news-events">Explore news & events <ArrowRight aria-hidden="true" size={17} /></Link>}
        />
        <div className="news-grid">
          {newsItems.map((item, index) => (
            <article className="news-card" key={item.title}>
              <div className={`news-card__art news-card__art--${index + 1}`} aria-hidden="true">
                <span>{item.category}</span>
                <span className="news-card__art-mark">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <div className="news-card__body">
                <p className="news-card__date">{item.date}</p>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <Link className="text-link" to="/news-events">Read updates <ArrowRight aria-hidden="true" size={15} /></Link>
              </div>
            </article>
          ))}
        </div>
        <p className="content-note">
          Titles and dates are based on existing public listings; confirm links,
          details, and publication permissions before launch.
        </p>
        <p className="stories-preview__safeguarding">
          Family stories will only be featured after consent and safeguarding review.
        </p>
      </div>
    </section>
  )
}

export default StoriesPreview
