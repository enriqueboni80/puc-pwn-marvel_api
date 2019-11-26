var express = require('express');
var router = express.Router();
var auth = require('../helpers/ensureAuthenticated')
const Users = require('../store/Users');
const favorites = require('../store/Favorites');


router.get('/', auth.ensureAuthenticated, function(req, res, next) {
    favorites.getUserFavorites(req.user[0].id).then(favorites => {
        res.render('user/index', { user: req.user[0], favorites })
    })
});

router.get('/create', function(req, res, next) {
    res.render('user/create')
});

router.post('/store', function(req, res, next) {
    user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }
    Users.insert(user).then(function() {
        res.send('criado com sucesso')
    })
});

router.post('/auth', function(req, res, next) {
    res.send('autenticado - fazer tela')
});

module.exports = router;