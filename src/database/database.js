const constants = require('../constants/constants');
const { Pool } = require('pg');

const pool = new Pool({

    user: constants.DB_USERNAME,
    password: constants.DB_PASSWORD,
    database: constants.DB_NAME,
    host: constants.DB_HOST,
    port: constants.DB_PORT

});

module.exports = pool;
