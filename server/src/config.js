import path from 'node:path'
import { fileURLToPath } from 'node:url'
import dotenv from 'dotenv'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
export const SERVER_ROOT = path.resolve(__dirname, '..')

dotenv.config({ path: path.join(SERVER_ROOT, '.env') })

function required(name) {
  const value = process.env[name]
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`)
  }
  return value
}

function resolveDataPath(envPath) {
  return path.isAbsolute(envPath) ? envPath : path.resolve(SERVER_ROOT, envPath)
}

export const config = {
  port: required('PORT'),
  corsOrigin: required('CORS_ORIGIN'),
  projectsDataPath: resolveDataPath(required('PROJECTS_DATA_PATH')),
  contactsDataPath: resolveDataPath(required('CONTACTS_DATA_PATH')),
  publicBaseUrl: required('PUBLIC_BASE_URL').replace(/\/$/, ''),
  publicDir: path.join(SERVER_ROOT, 'public'),
}
