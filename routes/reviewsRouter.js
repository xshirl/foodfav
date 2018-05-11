const router = require('express').Router();

const reviewsController = require('../controllers/reviewsController');
const reviewsRespController = require('../controllers/reviewsRespController');

router.route('/:user_id')
.get(
  reviewController.getReviews,
  reviewRespController.getReviewsResponse,
  reviewRespController.sendErrorResponse
)

router.route('/:user_id/:rest_id')
.post(
  reviewController.createReviews,
  reviewRespController.createReviewsResponse,
  reviewRespController.sendErrorResponse
  )

router.route('/:rest_id')
.delete(
  reviewController.deleteReviews,
  reviewRespController.deleteReviewsResponse,
  reviewRespController.sendErrorResponse
  )


router.route('/:rest_id')
.delete(
  reviewController.updateReviews,
  reviewRespController.updateReviewsResponse,
  reviewRespController.sendErrorResponse

  )

module.exports = router;
