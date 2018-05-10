const favDb = require('../models/favs');

function getFav(req, res, next) {
  favDb.getFav(req.params.user_id)
  .then(data => {
    res.locals.favs = data;
    next();
  })
  .catch(next);
}

function createFav(req, res, next) {
  favDb.createFav(req.params.user_id, req.params.rest_id)
  .then(data=> {
    res.locals.fav = data;
    next();
  })
  .catch(next);
}

function deleteFav(req, res, next) {
  favDb.deleteFav(req.params.rest_id)
  .then(()=> {
    next()
  })
  .catch(next);
}

module.exports = {
  getFav,
  createFav,
  deleteFav
}
