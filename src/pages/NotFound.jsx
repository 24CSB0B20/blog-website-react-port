import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="page-hero">
      <h1>404</h1>
      <p className="tagline">This page doesn't exist. Try heading back home.</p>
      <div className="hero-actions">
        <Link className="btn btn-accent" to="/">
          Back to Home
        </Link>
      </div>
    </section>
  )
}