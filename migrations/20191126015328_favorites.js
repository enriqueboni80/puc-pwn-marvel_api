exports.up = function(knex) {
    return knex.schema.createTable('favorites', table => {
        table.increments('id').primary()
        table.integer('id_user')
        table.integer('id_character')
        table.string('name_character')
        table.string('image_path')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('favorites')
};