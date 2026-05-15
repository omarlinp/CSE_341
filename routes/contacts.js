const router = require('express').Router();
const path = require('path');
const controller = require('../controllers/db');


router.get('/', controller.getdata);
router.get('/:id', controller.getContactData);
router.post('/', controller.createContact);
router.put('/:id', controller.updateContact);
router.delete('/:id', controller.deleteContact);
module.exports = router;