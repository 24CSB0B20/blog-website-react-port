import { config } from './config.js'
import { readJson } from './store.js'

function withImageUrl(project) {
  const { imageFile, ...rest } = project
  return {
    ...rest,
    image: `${config.publicBaseUrl}/images/${imageFile}`,
  }
}

export async function getProjects() {
  const projects = await readJson(config.projectsDataPath)
  return projects.map(withImageUrl)
}

export async function getProjectById(id) {
  const projects = await getProjects()
  return projects.find((project) => project.id === id) ?? null
}
