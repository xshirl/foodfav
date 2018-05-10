function sendAllResponse(req, res) {
  res.json({
    status: 'ok',
    data: res.locals.bars
  })
}

function sendOneResponse(req, res) {
  res.json({
    status: 'ok',
    data: res.locals.bar
  })
}

function sendErrorResponse(err, req, res, next) {
  res.json({
    status: 'Error',
    message: err.message
  })
}

module.exports = {
  sendAllResponse,
  sendOneResponse,
  sendErrorResponse
}
