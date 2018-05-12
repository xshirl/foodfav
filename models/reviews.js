//TODO:Update quote table and model
// - Add creator_id column referencing users and cascading on delete
// - When a quote is created, give it a default creator_id prop of null

const db = require('../config/connection');

function getReviews(id) {
  const query = db.one(`
    SELECT rest_id FROM reviews
    WHERE user_id = $1`, user_id)
  console.log(query);
  return query;
}


function createReviews(id) {
  return query = db.one(`
    INSERT INTO reviews (user_id, rest_id)
    VALUES ($/user_id/, $/rest_id/
    RETURNING *`, user_id, rest_id)
}


function deleteReviews(id) {
  return query = db.none(`
    DELETE FROM reviews
    WHERE rest_id = $1`, rest_id)
}


function updateReviews(id) {
  return query= db.one(`
    UPDATE reviews
    SET content = $/content/
    WHERE id = $/id/
    RETURNING *
    `, reviews
  );
}


module.exports = {
  getReviews,
  createReviews,
  deleteReviews,
  updateReviews
}
