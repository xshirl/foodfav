const router = require('express').Router();

const restController = require('../controllers/restaurantController');
const responseController = require('../controllers/responseController');

router.route('/chinese/nyc')
.get(
  restController.getChinNyc,
  responseController.sendChineseNyResponse,
  responseController.sendErrorResponse
)

router.route('/italian/nyc')
.get(
  restController.getItalNyc,
  responseController.sendItalNyResponse,
  responseController.sendErrorResponse
)

module.exports = router;
