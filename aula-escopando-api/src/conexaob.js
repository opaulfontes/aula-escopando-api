const knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'postgres',
        password: 'XXXXXX',
        database: 'MI'
    }
});

module.exports = knex;