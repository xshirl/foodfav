const router = require('express').Router();

const favController = require('../controllers/favController');
const favRespController = require('../controllers/favRespController');

router.route('/favs')
.get(
  favController.getFav,
  favRespController.getFavResponse,
  responseController.sendErrorResponse
)
.post(
  favController.createFav,
  favRespController.createFavResponse,
  responseController.sendErrorResponse
  )
.delete(
  favController.deleteFav,
  favRespController.deleteFavResponse,
  responseController.sendErrorResponse
  )

module.exports = router;
