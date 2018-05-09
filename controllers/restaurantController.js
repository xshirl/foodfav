const servR = require('../services/restaurants');

function getChinNyc(req, res, next) {
  servR.getTypeLocation('chinese', 'nyc')
    .then(data => {
      res.locals.chineseNY = data
      next()
    })
    .catch(err => {
      next(err)
    })
}

function getItalNyc(req, res, next) {
  servR.getTypeLocation('italian', 'nyc')
    .then(data => {
      res.locals.italianNY = data
      next()
    })
    .catch(err => {
      next(err)
    })
}
module.exports = {
  getChinNyc,
  getItalNyc
}
