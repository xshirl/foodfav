function getReviewsResponse(req, res) {
  res.json({
    status: 'ok',
    data: res.locals.reviews
  })
}

function createReviewsResponse(req, res) {
  res.json({
    status: 'ok',
    data: res.locals.reviews
  })
}

function deleteReviewsResponse(req, res) {
  res.json({
    status: 'ok'
  })
}

function updateReviewsResponse(req, res){
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
  getReviewsResponse,
  createReviewsResponse,
  deleteReviewsResponse,
  sendErrorResponse
}
