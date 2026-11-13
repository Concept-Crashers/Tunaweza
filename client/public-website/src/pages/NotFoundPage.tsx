import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '../components/content/PageHero'

function NotFoundPage() {
  return (
    <PageHero
      eyebrow="Page not found"
      title="Let’s find your"
      highlight="way back."
      description="That page isn’t here. Head home or explore the site navigation."
    >
      <Link className="back-link page-hero__back" to="/"><ArrowLeft aria-hidden="true" size={16} /> Back to home</Link>
    </PageHero>
  )
}

export default NotFoundPage
