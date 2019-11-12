var express = require('express');
var router = express.Router();
const Characters = require('../store/Characters')

router.get('/', function(_, res) {
    Characters.getAll().then((response) => {
        return response.data.data.results;
    }).then((characters) => {
        res.render('characters/index', { characters });
    }).catch(error => {
        console.log("deu pau")
    });
})

router.get('/name/:name', function(req, res) {
    Characters.getByName(req.params.name).then((response) => {
        return response.data.data.results;
    }).then((characters) => {
        res.render('characters/profile', { character: characters[0] });
    }).catch(error => {
        console.log("deu pau")
    });
})

router.get('/id/:id', function(req, res) {
    Characters.getByID(req.params.id).then((response) => {
        return response.data.data.results;
    }).then((characters) => {
        res.render('characters/profile', { character: characters[0] });
    }).catch(error => {
        console.log("deu pau")
    });
})

module.exports = router;