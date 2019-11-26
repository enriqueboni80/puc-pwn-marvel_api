exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('favorites').del()
        .then(function() {
            // Inserts seed entries
            return knex('favorites').insert([{
                    id_user: 1,
                    id_character: 1009149,
                    name_character: "Abyss"
                },
                {
                    id_user: 1,
                    id_character: 1009156,
                    name_character: "Apocalypse"
                },
            ]);
        });
};