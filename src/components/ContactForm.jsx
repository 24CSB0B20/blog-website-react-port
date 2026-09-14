import { useState } from 'react'
import { submitContact } from '../api'
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
  const [submittedName, setSubmittedName] = useState('')
  const [serverError, setServerError] = useState('')
  const [sending, setSending] = useState(false)

  const errors = validate(form)
  const isValid = Object.keys(errors).length === 0

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    setServerError('')
  }

  const handleBlur = (e) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setTouched({ name: true, email: true, message: true })
    setServerError('')
    // Always POST so a DevTools bypass of the disabled button still shows server errors.

    setSending(true)
    try {
      await submitContact({
        name: form.name.trim(),
        email: form.email.trim(),
        message: form.message.trim(),
      })
      setSubmittedName(form.name.trim())
      setForm(EMPTY_FORM)
      setTouched({})
    } catch (err) {
      setSubmittedName('')
      setServerError(
        err instanceof TypeError
          ? 'Cannot reach the API. Start the backend in /server and try again.'
          : err.message || 'Could not send your message.',
      )
    } finally {
      setSending(false)
    }
  }

  const handleReset = () => {
    setForm(EMPTY_FORM)
    setTouched({})
    setSubmittedName('')
    setServerError('')
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

      {serverError && (
        <p className="form-error" role="alert">
          {serverError}
        </p>
      )}

      {submittedName && (
        <p className="form-success" role="status">
          Thanks, {submittedName}! Your message was saved. I will get back to you at
          dr24csb0b20@student.nitw.ac.in if needed.
        </p>
      )}

      <div className="btn-row">
        <button className="btn" type="reset">
          Reset
        </button>
        <button className="btn btn-accent" type="submit" disabled={!isValid || sending}>
          {sending ? 'Sending...' : 'Send'}
        </button>
      </div>
    </form>
  )
}
