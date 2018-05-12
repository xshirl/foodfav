const apiRouter = require('express').Router();

const restRouter = require('./restRouter');
const favRouter = require('./favRouter');

// apiRouter.get('/restaurants', restRouter);
// apiRouter.get('/favs', favRouter);

module.exports = apiRouter;
