const barDb = require('../models/bars');

function getAll(req, res, next){
  barDb.getAll()
  .then (data => {
    res.locals.bars = data;
    next();
  })
  .catch(next);
}

function getOne(req, res, next) {
 barDb.getOne(req.params.id)
  .then (data => {
    res.locals.bar = data;
    next();
  })
  .catch(next);
}

module.exports = {
  getAll,
  getOne
}
