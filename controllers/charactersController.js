var Characters = require('../store/Characters');
var util = require('../helpers/util')

module.exports = {
    getAllCharacters(req, res) {
        let limitPerPage = 10
        let offset = (req.query.page - 1) * limitPerPage
        if (offset < 0) {
            offset = 0
        }
        Characters.getAll(limitPerPage, offset).then((response) => {
            return response.data.data;
        }).then((characters) => {
            res.render('characters/index', {
                custom_css: 'characters.css',
                characters,
                paginacao: util.montarPaginacao(characters.total, limitPerPage, req.query.page)
            });
        }).catch(error => {
            console.log("\x1b[31m", "deu pau!   (ノಠ益ಠ)ノ彡┻━┻ ")
        });
    },
    getByName(req, res) {
        Characters.getByName(req.query.search).then((response) => {
            return response.data.data;
        }).then((characters) => {
            res.render('characters/index', {
                custom_css: 'characters.css',
                characters
            });
        }).catch(error => {
            console.log("\x1b[31m", "deu pau!   (ಥ﹏ಥ)  ")
        });
    },
    getByID(req, res) {
        Characters.getByID(req.params.id).then((response) => {
            return response.data.data.results;
        }).then((characters) => {
            res.render('characters/profile', { character: characters[0] });
        }).catch(error => {
            console.log("\x1b[31m", "deu pau!  ლ(ಠ益ಠლ)   ")
        });
    }
}