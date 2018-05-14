import jwtDecode from 'jwt-decode';

function checkStatus(resp) {
  if (!resp.ok) throw new Error(resp.statusMessage);
  return resp.json();
}

function saveToken(respBody) {
  localStorage.setItem('authToken', respBody.token)
  const user = jwtDecode(respBody.token);
  return user;
}

// review requests

function getReviews() {
  return fetch('/api/reviews').then(checkStatus);
}

function createReview(review) {
  return fetch('/api/reviews', {
    method: 'POST',
    body: JSON.stringify(review),
    headers: {
      'content-type': 'application/json'
    }
  }).then(checkStatus);
}

function deleteReview(id) {
  return fetch(`/api/reviews/${id}`, {
    method: 'DELETE',
  }).then(checkStatus)
}

function updateReview(review, id) {
  return fetch(`/api/reviews/${id}`, {
    method: 'PUT',
    body: JSON.stringify(review),
    headers: {
      'content-type': 'application/json'
    }
  }).then(checkStatus)
}

// Auth requests

function login(creds) {
  return fetch('/api/auth/login', {
    method: 'POST',
    body: JSON.stringify(creds),
    headers: {
      'content-type': 'application/json'
    }
  }).then(checkStatus).then(saveToken)
}

function register(creds) {
  return fetch('/api/auth/register', {
    method: 'POST',
    body: JSON.stringify(creds),
    headers: {
      'content-type': 'application/json'
    }
  }).then(checkStatus).then(saveToken)
}


export {
  getReviews,
  createReview,
  deleteReview,
  updateReview,
  login
}