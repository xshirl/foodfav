const db = require('../config/connection');

function getReviews() {
  const query = db.any(`
    SELECT * FROM reviews`)
  return query;
}

function getUserReviews(user_id) {
  return query = db.any(`
    SELECT * FROM reviews
    WHERE user_id = $1`, user_id)
}

function getUserRestReview(user_id, rest_id) {
  return query = db.one(`
    SELECT * FROM reviews
    WHERE user_id = $1 and rest_id = $2`, [user_id, rest_id])
}

function createReview(review) {
  return query = db.one(`
    INSERT INTO reviews (rest_name, content, rating, user_id, rest_id)
    VALUES ($/rest_name/, $/content/, $/rating/, $/user_id/, $/rest_id/)
    RETURNING *`, review)
}

function deleteReview(id) {
  return query = db.none(`
    DELETE FROM reviews
    WHERE id=$1`, id)
}


function updateReview(review) {
  return query= db.one(`
    UPDATE reviews
    SET content = $/content/, rating=$/rating/, user_id= $/user_id/, rest_id = $/rest_id/
    WHERE id = $/id/
    RETURNING *
    `, review
  );
}


module.exports = {
  getReviews,
  getUserReviews,
  getUserRestReview,
  createReview,
  deleteReview,
  updateReview
}
