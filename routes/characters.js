var express = require('express');
var router = express.Router();
const Characters = require('../store/Characters')

router.get('/', function(_, res) {
    Characters.getAll().then((response) => {
        return response.data.data.results;
    }).then(function(characters) {
        res.render('characters/index', { characters });
    }).catch(error => {
        console.log("deu pau")
    });;
})

module.exports = router;