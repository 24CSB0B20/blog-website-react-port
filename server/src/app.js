import express from 'express'
import cors from 'cors'
import { config } from './config.js'
import contactRouter from './routes/contact.js'
import projectsRouter from './routes/projects.js'
import { errorHandler } from './middleware/errorHandler.js'
import { notFound } from './middleware/notFound.js'

export function createApp() {
  const app = express()

  app.use(cors({ origin: config.corsOrigin }))
  app.use(express.json())
  app.use(express.static(config.publicDir))

  app.get('/', (req, res) => {
    res.status(200).json({ status: 'ok' })
  })

  app.use('/api/projects', projectsRouter)
  app.use('/api/contact', contactRouter)

  app.use(notFound)
  app.use(errorHandler)

  return app
}
