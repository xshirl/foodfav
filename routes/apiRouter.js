const apiRouter = require('express').Router();

const restRouter = require('./restRouter');
const favRouter = require('./favRouter');

apiRouter.use('/restaurants', restRouter);
apiRouter.use('/favs', favRouter);

// module.exports = apiRouter;
