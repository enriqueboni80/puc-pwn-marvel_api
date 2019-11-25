const knex = require('knex')
const knexConfigs = require('../knexfile')
const db = knex(knexConfigs.development)

const TABLE_NAME = 'users'

module.exports = {
    getAll() {
        return db(TABLE_NAME).select('*')
    },
    getByID(id) {
        return db(TABLE_NAME).where('id', id)
    },
    insert(user) {
        return db(TABLE_NAME).insert(user);
    },
    auth(user) {
        return db(TABLE_NAME).where({
            email: user.email,
            password: user.password
        })
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