var express = require('express');
var router = express.Router();
var auth = require('../helpers/ensureAuthenticated')
const Users = require('../store/Users');

/* GET users listing. */
router.get('/users', auth.ensureAuthenticated, function(req, res, next) {
    Users.getAll()
        .then(users => {
            res.render('admin/users', { users });
        })
});

module.exports = router;