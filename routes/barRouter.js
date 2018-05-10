const router = require('express').Router();

const barController = require('../controllers/barController');
const barRespController = require('../controllers/barRespController');

router.route('/')
.get(barController.getAll, barRespController.sendAllResponse);

router.route('/:id')
.get(barController.getOne, barRespController.sendOneResponse);

module.exports = router;
