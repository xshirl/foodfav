const db = require('../config/connection');

function getAll() {
  return query = db.any(`
    SELECT * FROM bars`);
}

function getOne(id) {
  return query = db.one(`
    SELECT * FROM bars
    WHERE id = $1`, id);
}

module.exports = {
  getAll,
  getOne
}
