function getFavResponse(req, res) {
  res.json({
    status: 'ok',
    data: res.locals.faves
  })
}

function createFavResponse(req, res) {
  res.json({
    status: 'ok',
    data: res.locals.fav
  })
}

function deleteFavResponse(req, res) {
  res.json({
    status: 'ok'
  })
}

function sendErrorResponse(err, req, res, next) {
  res.json({
    status: 'Error',
    message: err.message
  })
}

module.exports = {
  getFavResponse,
  createFavResponse,
  deleteFavResponse,
  sendErrorResponse
}
