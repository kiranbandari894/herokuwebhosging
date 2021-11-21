const knex = require("knex");

const conntectedKnex = knex({
    client: 'mysql',
    connection: {
      host     : 'localhost',
      user     : 'root',
      password : '',
      database : 'cars'
    }
});

module.exports = conntectedKnex ;