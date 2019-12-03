var express = require('express');
var router = express.Router();
var Characters = require('../store/Characters');
var Favorites = require('../store/Favorites');
var Users = require('../store/Users');
var util = require('../helpers/util')
var auth = require('../helpers/ensureAuthenticated')

router.get('/', auth.ensureAuthenticated, function(req, res) {
    let limitPerPage = 10
    let offset = (req.query.page - 1) * limitPerPage
    if (offset < 0) {
        offset = 0
    }
    Characters.getAll(limitPerPage, offset).then((response) => {
        return response.data.data;
    }).then((characters) => {
        res.render('characters/index', {
            characters,
            paginacao: util.montarPaginacao(characters.total, limitPerPage, req.query.page)
        });
    }).catch(error => {
        console.log("\x1b[31m", "deu pau!   (ノಠ益ಠ)ノ彡┻━┻ ")
    });
})

router.get('/name/:name', auth.ensureAuthenticated, function(req, res) {
    Characters.getByName(req.params.name).then((response) => {
        return response.data.data.results;
    }).then((characters) => {
        res.render('characters/profile', { character: characters[0] });
    }).catch(error => {
        console.log("\x1b[31m", "deu pau!   (ಥ﹏ಥ)  ")
    });
})

router.get('/id/:id', auth.ensureAuthenticated, function(req, res) {
    Characters.getByID(req.params.id).then((response) => {
        return response.data.data.results;
    }).then((characters) => {
        res.render('characters/profile', { character: characters[0] });
    }).catch(error => {
        console.log("\x1b[31m", "deu pau!  ლ(ಠ益ಠლ)   ")
    });
})


router.get('/favorites', function(req, res) {
    if (req.user.username) {
        Users.getByEmail(req.user.username).then(function(user) {
            clienteID = user[0].id
        })
    } else {
        clienteID = req.user[0].id
    }

    var favorite = {
        id_user: clienteID,
        id_character: req.query.id,
        name_character: req.query.name
    }
    Favorites.store(favorite).then(function() {
        res.redirect('/user')
    })

})

module.exports = router;