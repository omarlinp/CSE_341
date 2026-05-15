const routes = require('express').Router();
const myController = require('../controllers');

routes.get('/first',  myController.firstFunction);
routes.get('/second',  myController.secondFunction);
routes.use('/contacts', require('./contacts'));

module.exports = routes;