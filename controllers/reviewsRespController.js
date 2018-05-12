function getReviewsResponse(req, res) {
  res.json({
    status: 'ok',
    data: res.locals.reviews
  })
}

function getUserReviewsResponse(req, res) {
  res.json({
    status: 'ok',
    data: res.locals.userReviews
  })
}

function getUserRestReviewsResponse(req, res) {
   res.json({
    status: 'ok',
    data: res.locals.userRestReviews
  })
}
function createReviewsResponse(req, res) {
  res.json({
    status: 'ok',
    data: res.locals.review
  })
}

function deleteReviewsResponse(req, res) {
  res.json({
    status: 'ok'
  })
}

function updateReviewsResponse(req, res){
  res.json({
    status: 'ok',
    data: res.locals.updateReview
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
  getUserReviewsResponse,
  getUserRestReviewsResponse,
  updateReviewsResponse,
  createReviewsResponse,
  deleteReviewsResponse,
  sendErrorResponse
}
