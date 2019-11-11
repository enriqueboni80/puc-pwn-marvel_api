var express = require('express');
var router = express.Router();
const axios = require('axios')


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/marvel', function(_, res) {
    /*For example, a user with a public key of "1234" and a private key of "abcd" 
    could construct a valid call as follows: 
    http://gateway.marvel.com/v1/public/comics?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150 
    (the hash value is the md5 digest of 1abcd1234)*/
    const params = {
        ts: 1,
        apikey: "73409b595d40bb327ffaef09b12619f6",
        hash: "3bd06986c4a20c66e5091acd8ffefb9b"
    }
    const url = `https://gateway.marvel.com:443/v1/public/characters?ts=${params['ts']}&apikey=${params['apikey']}&hash=${params['hash']}`;
    axios.get(url).then((response) => {
        return response.data.data.results;
    }).then(function(teste) {
        res.send(teste)
    }).catch(error => {
        console.log("deu pau")
    });
})

module.exports = router;