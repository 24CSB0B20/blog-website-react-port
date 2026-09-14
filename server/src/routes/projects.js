import { Router } from 'express'
import { getProjectById, getProjects } from '../projects.js'

const router = Router()

router.get('/', async (req, res, next) => {
  try {
    const projects = await getProjects()
    res.status(200).json(projects)
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const project = await getProjectById(req.params.id)
    if (!project) {
      res.status(404).json({ error: 'Project not found' })
      return
    }
    res.status(200).json(project)
  } catch (error) {
    next(error)
  }
})

export default router
