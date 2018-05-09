function sendChineseNyResponse(req, res) {
  res.json({
    status: 'ok',
    data: res.locals.chineseNY
  })
}

function sendItalNyResponse(req, res) {
  res.json({
    status: 'ok',
    data: res.locals.italianNY
  })
}

function sendErrorResponse(err, req, res, next) {
  res.json({
    status: 'Error',
    message: err.message
  })
}

module.exports = {
  sendChineseNyResponse,
  sendItalNyResponse,
  sendErrorResponse
}

