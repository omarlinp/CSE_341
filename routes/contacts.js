const router = require('express').Router();
const path = require('path');
const controller = require('../controllers/db');


router.get('/', controller.getdata);
router.get('/:id', controller.getContactData);
module.exports = router;