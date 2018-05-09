const fetch = require('node-fetch');
require('dotenv').config();
const bearer = 'Bearer ' + process.env.API_KEY;

function getTypeLocation(type, location) {
  const query = fetch(`https://api.yelp.com/v3/businesses/search?term=${type}&location=${location}`, {
    method: 'GET',
    withCredentials: true,
    credentials: 'include',
    headers: {
      Authorization: bearer,
      'content-type': 'application/json'
    }
  })
  .then(data => {
    return data.json()
  })
  .catch(err => err.message)
  return query;
}

module.exports = {
  getTypeLocation
}
