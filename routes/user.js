var express = require('express');
var router = express.Router();
var auth = require('../helpers/ensureAuthenticated')
var user = require('../controllers/usersController')

router.get('/', auth.ensureAuthenticated, user.getFavorites);
router.get('/create', user.create);
router.post('/store', user.store);
router.get('/store-social-network', user.storeSocialNetwork);
router.get('/favorites', user.storeFavorites)
router.get('/favorites/delete/:characterID', user.deleteFavorites)

module.exports = router;