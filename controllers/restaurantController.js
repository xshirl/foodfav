const servR = require('../services/restaurants');

function getRestaurants(req, res, next) {
  servR.getTypeLocation(req.params.type, req.params.location)
    .then(data => {
      res.locals.restaurants = data
      next()
    })
    .catch(err => {
      next(err)
    })
}


module.exports = {
  getRestaurants
}
