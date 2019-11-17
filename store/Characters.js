const axios = require('axios')
const env = require('../env')

const url_params = `?ts=${env.params.ts}&apikey=${env.params.apikey}&hash=${env.params.hash}`
const marvel_url = `https://gateway.marvel.com:443/v1/public/characters`

module.exports = {
    getAll(limitPerPage, offset) {
        return axios.get(`${marvel_url}${url_params}&limit=${limitPerPage}&offset=${offset}`)
    },
    getByName(name) {
        return axios.get(`${marvel_url}${url_params}&name=${name}`)
    },
    getByID(id) {
        return axios.get(`${marvel_url}/${id}${url_params}`)
    }
}