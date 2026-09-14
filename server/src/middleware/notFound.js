export function notFound(req, res, next) {
  const error = new Error(`Route not found: ${req.method} ${req.path}`)
  error.status = 404
  next(error)
}
