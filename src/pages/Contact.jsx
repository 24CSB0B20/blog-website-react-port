import ContactForm from '../components/ContactForm'

export default function Contact() {
  return (
    <>
      <section className="page-hero">
        <h1>Contact</h1>
        <p className="tagline">say hello, or not</p>
      </section>

      <section>
        <div className="contact-grid">
          <ContactForm />
          <div className="contact-info">
            <p>dr24csb0b20@student.nitw.ac.in</p>
            <p>+91 7356106869</p>
            <p>
              <a href="https://github.com/SergeantQuickscoper">GitHub</a> ·{' '}
              <a href="https://www.linkedin.com/in/don-chacko/">LinkedIn</a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}