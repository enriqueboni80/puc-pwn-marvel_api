const knex = require('knex')
const knexConfigs = require('../knexfile')
const db = knex(knexConfigs.development)

const TABLE_NAME = 'favorites'

module.exports = {
    getUserFavorites(clientID) {
        return db(TABLE_NAME).where('id_user', clientID)
    },
    getByID(id) {
        return db(TABLE_NAME).where('id', id)
    },
    store(favorite) {
        return db(TABLE_NAME).insert(favorite);
    },
    delete(characterID, userID) {
        console.log(characterID, userID)
        return db(TABLE_NAME)
            .where('id_character', characterID)
            .where('id_user', userID)
            .del();
    },
    /* update(product) {
        return db(TABLE_NAME)
            .where('id', product.id)
            .update({
                name: product.name,
                description: product.description,
                price: product.price
            });
    } */
}