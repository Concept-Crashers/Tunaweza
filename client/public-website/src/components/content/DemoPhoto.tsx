import { ExternalLink } from 'lucide-react'

function DemoPhoto({
  src,
  alt,
  className = '',
  eager = false,
  caption = 'Unsplash stock photo · demo only',
}: {
  src: string
  alt: string
  className?: string
  eager?: boolean
  caption?: string
}) {
  return (
    <figure className={`demo-photo ${className}`}>
      <img
        src={src}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        fetchPriority={eager ? 'high' : 'auto'}
      />
      <figcaption className="demo-photo__caption">
        {caption} · <a href="https://unsplash.com/" target="_blank" rel="noreferrer">Unsplash <ExternalLink aria-hidden="true" size={11} /></a>
      </figcaption>
    </figure>
  )
}

export default DemoPhoto
