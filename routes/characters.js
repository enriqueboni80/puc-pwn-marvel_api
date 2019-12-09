var express = require('express');
var router = express.Router();
var auth = require('../helpers/ensureAuthenticated')
var characters = require('../controllers/charactersController')

router.get('/', auth.ensureAuthenticated, characters.getAllCharacters)
router.get('/name/:name', auth.ensureAuthenticated, characters.getByName)
router.get('/id/:id', auth.ensureAuthenticated, characters.getByID)

module.exports = router;