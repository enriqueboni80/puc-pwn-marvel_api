var express = require('express');
var router = express.Router();
var auth = require('../helpers/ensureAuthenticated')
const Users = require('../store/Users');
var Favorites = require('../store/Favorites');


router.get('/', auth.ensureAuthenticated, function(req, res, next) {

    if (req.user.username) {
        Users.getByEmail(req.user.username).then(function(user) {
            clienteID = user[0].id
            displayName = user[0].name
            Favorites.getUserFavorites(clienteID).then(favorites => {
                res.render('user/index', { displayName, favorites })
            })
        })
    } else {
        clienteID = req.user[0].id
        displayName = req.user[0].name
        Favorites.getUserFavorites(clienteID).then(favorites => {
            res.render('user/index', { displayName, favorites })
        })
    }
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
    Users.getByEmail(user.email).then(email => {
        if (email.length == 0) {
            Users.insert(user).then(function() {
                res.send('criado com sucesso')
            })
        } else {
            res.send('esse email já existe')
        }
    })
});

router.get('/store-social-network', function(req, res, next) {
    user = {
        name: req.user.displayName,
        email: req.user.username,
        password: Math.random().toString(36).substring(0, 7)
    }
    Users.getByEmail(user.email).then(email => {
        if (email.length == 0) {
            Users.insert(user).then(function() {
                console.log('Criado via Redes sociais')
            })
        }
        res.redirect('/user')
    })
});

router.get('/favorites', function(req, res) {
    if (req.user.username) {
        Users.getByEmail(req.user.username).then(function(user) {
            userID = user[0].id
            var favorite = {
                id_user: userID,
                id_character: req.query.id,
                name_character: req.query.name
            }
            Favorites.store(favorite).then(function() {
                res.redirect('/user')
            })
        })
    } else {
        userID = req.user[0].id
        var favorite = {
            id_user: userID,
            id_character: req.query.id,
            name_character: req.query.name
        }
        Favorites.store(favorite).then(function() {
            res.redirect('/user')
        })
    }

})


router.get('/favorites/delete/:characterID', function(req, res) {
    characterID = req.params.characterID
    if (req.user.username) {
        Users.getByEmail(req.user.username).then(function(user) {
            userID = user[0].id
        })
    } else {
        userID = req.user[0].id
    }
    Favorites.delete(characterID, userID).then(function() {
        res.redirect('/user')
    })
})

module.exports = router;