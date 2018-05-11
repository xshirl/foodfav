const reviewsDb = require('../models/favs')


function getReviews(req, res, next) {
  reviewsDb.getReviews(req.params.user_id)
  .then(data => {
    res.locals.reviews = data;
    next();
  })
  .catch(next);
}

function createReviews(req, res, next) {
  reviewsDb.createReviews(req.params.user_id, req.params.rest_id)
  .then(data=> {
    res.locals.reviews = data;
    next();
  })
  .catch(next);
}

function updateReviews(req, res, next) {
  reviewsDb.update(req.body)
    .then(data => {
      res.locals.reviews = data;
      next();
    })
    .catch(next);
}



function deleteReviews(req, res, next) {
  reviewsDb.deleteReviews(req.params.rest_id)
  .then(()=> {
    next()
  })
  .catch(next);
}

module.exports = {
  getReviews,
  createReviews,
  deleteReviews,
  updateReviews
}

