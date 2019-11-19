var pagination = require('pagination');

exports.montarPaginacao = function(totalCharacters, limitPerPage, currentPage = 0) {
    var paginator = pagination.create('search', {
        prelink: '/characters',
        current: currentPage,
        rowsPerPage: limitPerPage,
        totalResult: totalCharacters
    });
    return paginator.render()
}