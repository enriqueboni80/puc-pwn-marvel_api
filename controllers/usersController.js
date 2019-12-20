const Users = require('../store/Users');
var Favorites = require('../store/Favorites');


function validateUser(user) {
    let arrayErro = []
    if (user.name.length < 5) {
        arrayErro.push("Nome não pode ser menor que cinco")
    }
    if (user.email.length < 0) {
        arrayErro.push('email não pode ser vazio')
    }
    if (user.password.length < 5) {
        arrayErro.push("Password Fraco")
    }
    return arrayErro
}

module.exports = {
    getFavorites(req, res, next) {
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
    },
    create(req, res, next) {
        res.render('user/create', { custom_css: 'login.css', flashInfo: req.flash('flashInfo') })
    },
    store(req, res, next) {
        user = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }
        let errors = validateUser(user)
        if (errors.length != 0) {
            req.flash('flashInfo', errors)
            res.redirect('back')
        } else {
            Users.getByEmail(user.email).then(email => {
                if (email.length == 0) {
                    Users.insert(user).then(function() {
                        req.flash('flashSucess', "Criado - already? go!!")
                        res.redirect('/login?sucess')
                    })
                } else {
                    req.flash('flashInfo', "esse email já existe no sistema")
                    res.redirect('back')
                }
            })
        }
    },
    storeSocialNetwork(req, res, next) {
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
    },
    storeFavorites(req, res) {
        if (req.user.username) {
            Users.getByEmail(req.user.username).then(function(user) {
                userID = user[0].id
                var favorite = {
                    id_user: userID,
                    id_character: req.body.id,
                    name_character: req.body.name,
                    image_path: req.body.image_path
                }
                Favorites.store(favorite).then(function() {
                    res.redirect('/user')
                })
            })
        } else {
            userID = req.user[0].id
            var favorite = {
                id_user: userID,
                id_character: req.body.id,
                name_character: req.body.name,
                image_path: req.body.image_path
            }
            Favorites.store(favorite).then(function() {
                res.redirect('/user')
            })
        }
    },
    deleteFavorites(req, res) {
        favoriteID = req.params.favoriteID
        if (req.user.username) {
            Users.getByEmail(req.user.username).then(function(user) {
                userID = user[0].id
                Favorites.delete(favoriteID, userID).then(function() {
                    res.redirect('/user')
                })
            })
        } else {
            userID = req.user[0].id
            Favorites.delete(favoriteID, userID).then(function() {
                res.redirect('/user')
            })
        }
    }
}