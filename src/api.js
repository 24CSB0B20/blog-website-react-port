const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'

async function parseJson(response) {
  const text = await response.text()
  if (!text) return null
  try {
    return JSON.parse(text)
  } catch {
    return { error: text }
  }
}

export async function fetchProjects() {
  const response = await fetch(`${API_BASE_URL}/api/projects`)
  const data = await parseJson(response)
  if (!response.ok) {
    throw new Error(data?.error || 'Could not load projects.')
  }
  return data
}

export async function fetchProject(id) {
  const response = await fetch(`${API_BASE_URL}/api/projects/${encodeURIComponent(id)}`)
  const data = await parseJson(response)
  if (response.status === 404) {
    const error = new Error(data?.error || 'Project not found')
    error.status = 404
    throw error
  }
  if (!response.ok) {
    throw new Error(data?.error || 'Could not load this project.')
  }
  return data
}

export async function submitContact(payload) {
  const response = await fetch(`${API_BASE_URL}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  const data = await parseJson(response)
  if (!response.ok) {
    const error = new Error(data?.error || 'Could not send your message.')
    error.status = response.status
    error.field = data?.field
    error.errors = data?.errors
    throw error
  }
  return data
}
