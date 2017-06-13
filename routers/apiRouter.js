var express = require('express');
var apiRouter = express.Router();
var lionController = require('../controllers/lionController')


apiRouter.get('/lions', lionController.getLions);
apiRouter.post('/lions', lionController.postLion);

module.exports = apiRouter;
