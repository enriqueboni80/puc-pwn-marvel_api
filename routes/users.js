var express = require('express');
var router = express.Router();
var auth = require('../helpers/ensureAuthenticated')
const Users = require('../store/Users');

/* GET users listing. */
router.get('/', auth.ensureAuthenticated, function(req, res, next) {
    Users.getAll()
        .then(users => {
            res.render('users', { users });
        })
});

router.get('/create', function(req, res, next) {
    res.render('users/create')
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