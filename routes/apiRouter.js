const apiRouter = require('express').Router();

const restRouter = require('./restRouter');
const favRouter = require('./favRouter');
const authRouter = require('./authRouter');
const reviewsRouter = require('./reviewsRouter');

apiRouter.use('/auth', authRouter);
// apiRouter.use('/reviews', reviewsRouter);
// apiRouter.get('/restaurants', restRouter);
// apiRouter.get('/favs', favRouter);

module.exports = apiRouter;
