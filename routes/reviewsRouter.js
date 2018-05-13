const router = require('express').Router();

const reviewsController = require('../controllers/reviewsController');
const reviewsRespController = require('../controllers/reviewsRespController');
const authController = require('../controllers/authController');

router.route('/')
.get(
  reviewsController.getReviews,
  reviewsRespController.getReviewsResponse,
  reviewsRespController.sendErrorResponse)
.post(
  authController.restrict,
  reviewsController.createReview,
  reviewsRespController.createReviewsResponse,
  reviewsRespController.sendErrorResponse
  )

router.route('/:user_id')
.get(
  reviewsController.getUserReviews,
  reviewsRespController.getUserReviewsResponse,
  reviewsRespController.sendErrorResponse)

router.route('/:user_id/:rest_id')
.get(
  reviewsController.getUserRestReviews,
  reviewsRespController.getUserRestReviewsResponse,
  reviewsRespController.sendErrorResponse
)

router.route('/:id')
.put(
  reviewsController.updateReview,
  reviewsRespController.updateReviewsResponse,
  reviewsRespController.sendErrorResponse)
.delete(
  reviewsController.deleteReview,
  reviewsRespController.deleteReviewsResponse,
  reviewsRespController.sendErrorResponse
  )

module.exports = router;
