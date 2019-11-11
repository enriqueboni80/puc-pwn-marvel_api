var express = require('express');
var router = express.Router();
const axios = require('axios')
const Characters = require('../store/Characters')

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/marvel', function(_, res) {
    Characters.getAll().then((response) => {
        return response.data.data.results;
    }).then(function(characters) {
        res.render('characters/index', { characters });
    }).catch(error => {
        console.log("deu pau")
    });;
})

module.exports = router;