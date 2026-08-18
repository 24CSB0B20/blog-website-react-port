import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import headshot from '../assets/headshot.jpg'
import './Home.css'

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <section className="hero loading" aria-live="polite">
        <div className="spinner" aria-hidden="true" />
        <p className="tagline">Loading portfolio...</p>
      </section>
    )
  }

  return (
    <section className="hero">
      <img src={headshot} alt="Portrait of Don Roy Chacko" />
      <h1>Don Roy Chacko</h1>
      <p className="tagline">B.Tech Computer Science and Engineering, NIT Warangal</p>
      <div className="hero-actions">
        <Link className="btn btn-accent" to="/projects">
          My Projects
        </Link>
        <Link className="btn" to="/resume">
          Resume
        </Link>
      </div>
    </section>
  )
}