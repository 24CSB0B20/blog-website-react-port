import { Link } from 'react-router-dom'
import Skills from '../components/Skills'

export default function Resume() {
  return (
    <>
      <section className="page-hero">
        <h1>Resume</h1>
        <p className="tagline">a slightly longer look at where I've worked and studied</p>
      </section>

      <section>
        <h2 className="section-title">Education</h2>
        <div className="exp-item">
          <h3>National Institute of Technology, Warangal</h3>
          <span className="date">B.Tech Computer Science and Engineering | Sept 2024 - Apr 2028</span>
          <p>CGPA 9.29, with a minor in Applied and Computational Mathematics.</p>
        </div>
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
        <h2 className="section-title">Technical Skills &amp; Interests</h2>
        <Skills />
        <div className="exp-item resume-skill-lines">
          <p>
            <strong>Soft Skills:</strong> Communication, presentation skills, leadership,
            cross-functional teamwork
          </p>
          <p>
            <strong>Areas of Interest:</strong> Computer Architecture, Operating Systems, Computer
            Networks
          </p>
        </div>
      </section>

      <section>
        <h2 className="section-title">Positions of Responsibility &amp; Achievements</h2>
        <div className="experience">
          <article className="exp-item">
            <h3>Flight Control Software Architect, Team Mechaholics NITW</h3>
            <span className="date">2026 - Present</span>
            <ul>
              <li>
                Developing embedded flight-control software in C with FreeRTOS on STM32 for the
                national IN-SPACe Model Rocketry and CAN-SAT Competition.
              </li>
            </ul>
          </article>

          <article className="exp-item">
            <h3>Executive Member, CSES NITW, IEEE CAS NITW and Innovation Garage NITW</h3>
            <span className="date">2024 - Present</span>
            <ul>
              <li>
                Conducted technical workshops for 100+ students, judged hackathons with 200+
                participants, led and managed software development teams for college events.
              </li>
              <li>
                Planned and coordinated club events, from ideas to ground execution, working closely
                with fellow club members in cross-functional teams to ensure smooth delivery.
              </li>
            </ul>
          </article>

          <article className="exp-item">
            <h3>Delegate, Harvard Project for Asian and International Relations (HPAIR)</h3>
            <span className="date">2025</span>
            <ul>
              <li>
                Selected from a competitive global applicant pool to attend HPAIR 2025, participating
                in policy discussions and case competitions on Asia-Pacific and global affairs with
                officials and students from around the world.
              </li>
            </ul>
          </article>

          <article className="exp-item">
            <h3>Student, IISc Bangalore CeNSE Winter School</h3>
            <span className="date">2025</span>
            <ul>
              <li>
                Selected to be a part of the winter school program at IISc Bangalore's Centre for
                Nano Science and Engineering (CeNSE), learning about semiconductor engineering, and
                interacting with leading researchers in the field.
              </li>
            </ul>
          </article>
        </div>
      </section>

      <section>
        <div className="hero-actions">
          <Link className="btn btn-accent" to="/">
            Back to Portfolio
          </Link>
        </div>
      </section>
    </>
  )
}