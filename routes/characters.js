var express = require('express');
var router = express.Router();
var Characters = require('../store/Characters');
var pagination = require('pagination');

function montarPaginacao(totalCharacters, limitPerPage, currentPage = 0) {
    var paginator = pagination.create('search', {
        prelink: '/characters',
        current: currentPage,
        rowsPerPage: limitPerPage,
        totalResult: totalCharacters
    });
    return paginator.render()
}

router.get('/', function(req, res) {
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
            paginacao: montarPaginacao(characters.total, limitPerPage, req.query.page)
        });
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