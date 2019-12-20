module.exports = {
    create(req, res) {
        if (req.user) {
            res.redirect('user')
        } else {
            res.render('login', { custom_css: 'login.css', flashInfo: req.flash('flashInfo'), flashSucess: req.flash('flashSucess') });
        }
    }
}