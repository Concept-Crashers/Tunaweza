import { Link } from 'react-router-dom'

function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <Link
      className={`brand${footer ? ' brand--footer' : ''}`}
      to="/"
      aria-label="Tunaweza Children’s Centre home"
    >
      <span className="brand__symbol" aria-hidden="true">t</span>
      <span className="brand__name">
        <strong>tunaweza</strong>
        <small>CHILDREN&apos;S CENTRE</small>
      </span>
    </Link>
  )
}

export default Brand
