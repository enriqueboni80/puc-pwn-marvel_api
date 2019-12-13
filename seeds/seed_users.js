exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('users').del()
        .then(function() {
            // Inserts seed entries
            return knex('users').insert([{
                    id: 1,
                    name: 'Enrique',
                    email: 'enrique@teste.com',
                    password: '123'
                },
                {
                    id: 2,
                    name: 'prost',
                    email: 'prost@prost.fr',
                    password: '12345'
                },
            ]);
        });
};