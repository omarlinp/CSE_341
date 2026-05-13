const routes = require('express').Router();
const myController = require('../controllers');


routes.get('/',  myController.firstFunction);
routes.get('/second',  myController.secondFunction);


module.exports = routes;