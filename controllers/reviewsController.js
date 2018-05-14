const reviewsDb = require('../models/reviews')


function getReviews(req, res, next) {
  reviewsDb.getReviews()
  .then(data => {
    res.locals.reviews = data;
    next();
  })
  .catch(next);
}

function getUserReviews(req, res, next) {
  reviewsDb.getUserReviews(req.params.user_id)
  .then(data => {
    res.locals.userReviews= data;
    next();
  })
  .catch(next);
}

function getUserRestReviews(req, res, next) {
  reviewsDb.getUserRestReview(req.params.user_id, req.params.rest_id)
  .then(data => {
    res.locals.userRestReviews= data;
    next();
  })
  .catch(next);
}

function createReview(req, res, next) {
  // reviewsDb.createReview(req.body)
  reviewsDb.createReview({
    ...req.body,
    user_id: res.locals.user && res.locals.user.id
  })
  .then(data=> {
    res.locals.review = data;
    next();
  })
  .catch(next);
}

function updateReview(req, res, next) {
  req.body.id = req.params.id;
  reviewsDb.updateReview(req.body)
    .then(data => {
      res.locals.updateReview = data;
      next();
    })
    .catch(next);
}



function deleteReview(req, res, next) {
  reviewsDb.deleteReview(req.params.id)
  .then(()=> {
    next()
  })
  .catch(next);
}

module.exports = {
  getReviews,
  getUserReviews,
  getUserRestReviews,
  createReview,
  deleteReview,
  updateReview
}

