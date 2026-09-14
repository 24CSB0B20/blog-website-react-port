export function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    next(err)
    return
  }

  const isJsonParseError =
    err.type === 'entity.parse.failed' ||
    (err instanceof SyntaxError && 'body' in err)
  const status = isJsonParseError ? 400 : err.status || err.statusCode || 500
  const message = isJsonParseError
    ? 'Malformed JSON body'
    : err.expose === false || status >= 500
      ? 'Internal server error'
      : err.message || 'Request failed'

  res.status(status).json({ error: message })
}
