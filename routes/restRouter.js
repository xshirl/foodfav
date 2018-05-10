const router = require('express').Router();

const restController = require('../controllers/restaurantController');
const responseController = require('../controllers/responseController');

router.route('/:type/:location')
.get(
  restController.getRestaurants,
  responseController.sendOkResponse,
  responseController.sendErrorResponse
)


module.exports = router;
