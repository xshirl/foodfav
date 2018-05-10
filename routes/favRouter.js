const router = require('express').Router();

const favController = require('../controllers/favController');
const favRespController = require('../controllers/favRespController');

router.route('/:user_id')
.get(
  favController.getFav,
  favRespController.getFavResponse,
  favRespController.sendErrorResponse
)

router.route('/:user_id/:rest_id')
.post(
  favController.createFav,
  favRespController.createFavResponse,
  favRespController.sendErrorResponse
  )

router.route('/:rest_id')
.delete(
  favController.deleteFav,
  favRespController.deleteFavResponse,
  favRespController.sendErrorResponse
  )

module.exports = router;
