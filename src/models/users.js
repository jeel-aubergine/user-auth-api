const pool = require('../database/database');

const users = {

    userModelInitialization: async () => {
        try {
            await pool.query(
                `CREATE TABLE IF NOT EXISTS users(
                    id SERIAL PRIMARY KEY,
                    username VARCHAR(50) NOT NULL,
                    email VARCHAR(100) NOT NULL
                );`
            );
            console.log('Users table created.');
        } catch(error) {
            console.log(`Error creating users table: ${error.message}`);
        }
    },
}

module.exports = users;