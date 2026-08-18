import { useState } from 'react'
import './ContactForm.css'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Please enter your name.'
  if (!values.email.trim()) errors.email = 'Please enter your email.'
  else if (!EMAIL_RE.test(values.email)) errors.email = 'Please enter a valid email address.'
  if (!values.message.trim()) errors.message = 'Please enter a message.'
  return errors
}

const EMPTY_FORM = { name: '', email: '', message: '' }

export default function ContactForm() {
  const [form, setForm] = useState(EMPTY_FORM)
  const [touched, setTouched] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const errors = validate(form)
  const isValid = Object.keys(errors).length === 0

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleBlur = (e) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setTouched({ name: true, email: true, message: true })
    if (!isValid) return
    setSubmitted(true)
  }

  const handleReset = () => {
    setForm(EMPTY_FORM)
    setTouched({})
    setSubmitted(false)
  }

  return (
    <form onSubmit={handleSubmit} onReset={handleReset} noValidate>
      <div className="form-field">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={touched.name && errors.name ? 'true' : undefined}
          aria-describedby={touched.name && errors.name ? 'name-error' : undefined}
        />
        {touched.name && errors.name && (
          <span id="name-error" className="form-error" role="alert">
            {errors.name}
          </span>
        )}
      </div>

      <div className="form-field">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          value={form.email}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={touched.email && errors.email ? 'true' : undefined}
          aria-describedby={touched.email && errors.email ? 'email-error' : undefined}
        />
        {touched.email && errors.email && (
          <span id="email-error" className="form-error" role="alert">
            {errors.email}
          </span>
        )}
      </div>

      <div className="form-field">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          placeholder="Write your message..."
          value={form.message}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={touched.message && errors.message ? 'true' : undefined}
          aria-describedby={touched.message && errors.message ? 'message-error' : undefined}
        />
        {touched.message && errors.message && (
          <span id="message-error" className="form-error" role="alert">
            {errors.message}
          </span>
        )}
      </div>

      {submitted && (
        <p className="form-success" role="status">
          Thanks, {form.name}! This is front-end only for now — reach me at
          dr24csb0b20@student.nitw.ac.in.
        </p>
      )}

      <div className="btn-row">
        <button className="btn" type="reset">
          Reset
        </button>
        <button className="btn btn-accent" type="submit" disabled={!isValid}>
          Send
        </button>
      </div>
    </form>
  )
}