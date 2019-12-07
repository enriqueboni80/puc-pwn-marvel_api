module.exports = {
    index(req, res, next) {
        res.render('index', { title: 'Sistema Marvel' });
    }
}