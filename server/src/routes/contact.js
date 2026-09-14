import { randomUUID } from 'node:crypto'
import { Router } from 'express'
import { config } from '../config.js'
import { readJson, writeJson } from '../store.js'

const router = Router()
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validateContact(body) {
  const name = typeof body?.name === 'string' ? body.name.trim() : ''
  const email = typeof body?.email === 'string' ? body.email.trim() : ''
  const message = typeof body?.message === 'string' ? body.message.trim() : ''
  const errors = {}

  if (!name) errors.name = 'Please enter your name.'
  if (!email) errors.email = 'Please enter your email.'
  else if (!EMAIL_RE.test(email)) errors.email = 'Please enter a valid email address.'
  if (!message) errors.message = 'Please enter a message.'

  return { name, email, message, errors }
}

router.get('/', async (req, res, next) => {
  try {
    const submissions = await readJson(config.contactsDataPath)
    res.status(200).json(submissions)
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const { name, email, message, errors } = validateContact(req.body)
    const fields = Object.keys(errors)
    if (fields.length > 0) {
      const firstField = fields[0]
      res.status(400).json({
        error: errors[firstField],
        field: firstField,
        errors,
      })
      return
    }

    const submissions = await readJson(config.contactsDataPath)
    const entry = {
      id: randomUUID(),
      name,
      email,
      message,
      createdAt: new Date().toISOString(),
    }
    submissions.push(entry)
    await writeJson(config.contactsDataPath, submissions)

    res.status(201).json({
      status: 'created',
      message: 'Thanks, your message was saved.',
      submission: entry,
    })
  } catch (error) {
    next(error)
  }
})

export default router
