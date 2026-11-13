import type { ReactNode } from 'react'

function PageHero({
  eyebrow,
  title,
  highlight,
  description,
  children,
}: {
  eyebrow: string
  title: string
  highlight?: string
  description: string
  children?: ReactNode
}) {
  return (
    <section className="page-hero">
      <div className="container page-hero__inner">
        <p className="section-label"><span className="section-label__line" />{eyebrow}</p>
        <h1>{title}{highlight && <> <em>{highlight}</em></>}</h1>
        <p className="page-hero__description">{description}</p>
        {children}
      </div>
    </section>
  )
}

export default PageHero
