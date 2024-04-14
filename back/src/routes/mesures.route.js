const express = require('express')
const router = express.Router()
const mesurescontroler = require('../controllers/mesure.controller');

// Retrieve all users
router.get('/', mesurescontroler.findAll);
router.get('/:id', mesurescontroler.findById);
router.post('/',mesurescontroler.create)
module.exports = router