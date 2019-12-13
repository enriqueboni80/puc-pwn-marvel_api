var auth = require('../helpers/ensureAuthenticated')
const Users = require('../store/Users');
var Favorites = require('../store/Favorites');

module.exports = {
    getAllUsers(req, res, next) {
        Users.getAll()
            .then(users => {
                res.render('admin/users', { users });
            })
    }
}