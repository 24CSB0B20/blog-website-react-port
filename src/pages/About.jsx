import Skills from '../components/Skills'

export default function About() {
  return (
    <>
      <section className="page-hero">
        <h1>About</h1>
        <p className="tagline">who I am and what I work on</p>
      </section>

      <section>
        <h2 className="section-title">About</h2>
        <article className="about-text">
          <p>
            B.Tech Computer Science and Engineering student at the National Institute of
            Technology, Warangal (Roll No: 24CSB0B20), with a minor in Applied and Computational
            Mathematics and a CGPA of 9.29.
          </p>
          <p>
            I've interned as a research student in computer vision and image processing at IIT
            Hyderabad's Micromechanics Lab, and worked as a full stack developer at a startup
            building B2B GenAI sales agents. I'm interested in computer architecture, operating
            systems and computer networks.
          </p>
        </article>
      </section>

      <section>
        <h2 className="section-title">Experience</h2>
        <div className="experience">
          <article className="exp-item">
            <h3>Indian Institute of Technology, Hyderabad - Micromechanics Lab</h3>
            <span className="date">
              Research Intern, Computer Vision and Image Processing, under Prof. Viswanath
              Chinthapenta | Apr 2026 - Jun 2026
            </span>
            <p className="date">Hyderabad, Telangana</p>
            <ul>
              <li>
                Designed an ML pipeline to predict phase fractions in Inconel using deep learning
                and morphological techniques.
              </li>
              <li>
                Trained a diffusion model to generate synthetic SEM images for data augmentation of
                downstream ML models.
              </li>
              <li>
                Re-implemented a research paper from scratch using Vision Transformers (ViTs) for
                material property prediction.
              </li>
            </ul>
          </article>

          <article className="exp-item">
            <h3>Debales AI</h3>
            <span className="date">
              Full Stack Developer Intern at a startup building B2B GenAI Sales Agents | Apr 2025 -
              Jul 2025
            </span>
            <p className="date">Remote - San Francisco, CA</p>
            <ul>
              <li>
                Built a personalized push notification system for the company's analytics iOS app
                based on client feedback.
              </li>
              <li>
                Designed and deployed the backend for a real-time ticketing system with live support
                for client users.
              </li>
              <li>
                Built a demo viewer for the company's AI agent product, trained on custom user data
                via web scraping.
              </li>
            </ul>
          </article>
        </div>
      </section>

      <section>
        <h2 className="section-title">Skills</h2>
        <Skills />
      </section>
    </>
  )
}