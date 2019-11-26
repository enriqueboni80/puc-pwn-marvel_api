exports.up = function(knex) {
    return knex.schema.createTable('favorites', table => {
        table.integer('id_user')
        table.integer('id_character')
        table.string('name_character')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('favorites')
};