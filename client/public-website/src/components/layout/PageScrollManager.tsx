import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { pageMetadata, services } from '../../data/siteContent'

function PageScrollManager() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
    const serviceSlug = pathname.startsWith('/services/')
      ? pathname.slice('/services/'.length)
      : ''
    const service = services.find((item) => item.slug === serviceSlug)
    const metadata = pageMetadata[pathname] ?? (service
      ? { title: service.title, description: service.summary }
      : { title: 'Page not found', description: 'The requested page could not be found.' })

    document.title = `${metadata.title} | Tunaweza Children’s Centre`
    document
      .querySelector<HTMLMetaElement>('meta[name="description"]')
      ?.setAttribute('content', metadata.description)
  }, [pathname])

  return null
}

export default PageScrollManager
