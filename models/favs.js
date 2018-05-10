const db = require('../config/connection');

function getFav(user_id) {
  const query = db.one(`
    SELECT rest_id FROM favs
    WHERE user_id = $1`, user_id)
  console.log(query);
  return query;
}

function createFav(user_id, rest_id) {
  return query = db.one(`
    INSERT INTO faves (user_id, rest_id)
    VALUES ($/user_id/, $/rest_id/
    RETURNING *`, user_id, rest_id)
}

function deleteFav(rest_id) {
  return query = db.none(`
    DELETE FROM faves
    WHERE rest_id = $1`, rest_id)
}

module.exports = {
  getFav,
  createFav,
  deleteFav
}
