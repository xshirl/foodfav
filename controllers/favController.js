const favDb = require('../models/favs');

function getFav(req, res, next) {
  favDb.getFav(user_id)
  .then(data => {
    res.locals.favs = data;
    next();
  })
  .catch(next);
}

function createFav(req, res, next) {
  favDb.createFav(user_id, rest_id)
  .then(data=> {
    res.locals.fav = data;
    next();
  })
  .catch(next);
}

function deleteFav(req, res, next) {
  favDb.deleteFav(rest_id)
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
