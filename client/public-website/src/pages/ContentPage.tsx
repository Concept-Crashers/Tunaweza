import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'
import PageHero from '../components/content/PageHero'
import type { ContentPageData } from '../data/pages'

function ContentPage({ page }: { page: ContentPageData }) {
  return (
    <>
      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        highlight={page.highlight}
        description={page.intro}
      />
      <section className="section content-page">
        <div className="container content-page__layout">
          <aside className="content-page__aside">
            <span className="content-page__monogram">TC</span>
            <p>Children&apos;s Centre<br />Kampala, Uganda</p>
            <span className="content-status">Preview content</span>
          </aside>
          <div className="content-page__main">
            {page.notice && (
              <p className="content-notice" role="note">{page.notice}</p>
            )}
            <div className="content-sections">
              {page.sections.map((section, index) => (
                <article className="content-section" key={section.title}>
                  <span className="content-section__number">{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <h2>{section.title}</h2>
                    <p>{section.body}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="content-page__cta">
              <h2>Have a question?</h2>
              <p>Contact details and services are being confirmed. You can still explore the preview enquiry form.</p>
              <Button asChild>
                <Link to="/contact">Get in touch <ArrowRight aria-hidden="true" size={17} /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContentPage
