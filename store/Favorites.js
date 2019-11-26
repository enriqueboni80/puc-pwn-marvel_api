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
    insert(user) {
        return db(TABLE_NAME).insert(user);
    }
    /* delete(product) {
        return db(TABLE_NAME)
            .where('id', product.id)
            .del();
    },
    update(product) {
        return db(TABLE_NAME)
            .where('id', product.id)
            .update({
                name: product.name,
                description: product.description,
                price: product.price
            });
    } */
}