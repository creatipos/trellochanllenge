var express = require('express');
var router = express.Router();

var treolloC = require('../controllers/TrelloController.js');


router.post('/createTask', treolloC.createTask);

module.exports = router;