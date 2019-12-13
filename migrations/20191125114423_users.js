exports.up = function(knex, Promisse) {
    return knex.schema.createTable('users', table => {
        table.increments('id').primary()
        table.string('name')
        table.string('email')
        table.string('password')
        table.timestamps(false, true)
    })
};

exports.down = function(knex, Promisse) {
    return knex.schema.dropTableIfExists('users')
};