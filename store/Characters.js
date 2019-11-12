const axios = require('axios')

/*For example, a user with a public key of "1234" and a private key of "abcd" 
could construct a valid call as follows: 
http://gateway.marvel.com/v1/public/comics?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150 
(the hash value is the md5 digest of 1abcd1234)*/
const params = {
    ts: 1,
    apikey: "73409b595d40bb327ffaef09b12619f6",
    hash: "3bd06986c4a20c66e5091acd8ffefb9b"
};

const url_params = `?ts=${params['ts']}&apikey=${params['apikey']}&hash=${params['hash']}`
const marvel_url = `https://gateway.marvel.com:443/v1/public/characters`

module.exports = {
    getAll() {
        return axios.get(`${marvel_url}${url_params}`)
    },
    getByName(name) {
        return axios.get(`${marvel_url}${url_params}&name=${name}`)
    },
    getByID(id) {
        return axios.get(`${marvel_url}/${id}${url_params}`)
    }
}