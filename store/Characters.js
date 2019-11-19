const axios = require('axios')
const env = require('../env')

const url_params = `?ts=${env.marvel_api_ts}&apikey=${env.marvel_api_apikey}&hash=${env.marvel_api_hash}`
const marvel_url = `https://gateway.marvel.com:443/v1/public/characters`

module.exports = {
    getAll(limitPerPage, offset = 0) {
        return axios.get(`${marvel_url}${url_params}&limit=${limitPerPage}&offset=${offset}`)
    },
    getByName(name) {
        return axios.get(`${marvel_url}${url_params}&name=${name}`)
    },
    getByID(id) {
        return axios.get(`${marvel_url}/${id}${url_params}`)
    }
}