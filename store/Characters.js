require('dotenv').load();

const axios = require('axios')

const url_params = `?ts=${process.env.MARVEL_API_TS}&apikey=${process.env.MARVEL_API_APIKEY}&hash=${process.env.MARVEL_API_HASH}`

const marvel_url = `https://gateway.marvel.com:443/v1/public/characters`

module.exports = {
    getAll(limitPerPage, offset = 0) {
        return axios.get(`${marvel_url}${url_params}&limit=${limitPerPage}&offset=${offset}`)
    },
    getByName(name) {
        return axios.get(`${marvel_url}${url_params}&nameStartsWith=${name}`)
    },
    getByID(id) {
        return axios.get(`${marvel_url}/${id}${url_params}`)
    }
}