import type { ReactNode } from 'react'

function SectionHeading({
  eyebrow,
  title,
  highlight,
  action,
  light = false,
}: {
  eyebrow: string
  title: string
  highlight?: string
  action?: ReactNode
  light?: boolean
}) {
  return (
    <div className={`section-heading${light ? ' section-heading--light' : ''}`}>
      <div>
        <p className="section-label"><span className="section-label__line" />{eyebrow}</p>
        <h2>{title}{highlight && <> <em>{highlight}</em></>}</h2>
      </div>
      {action}
    </div>
  )
}

export default SectionHeading
