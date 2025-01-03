const constants = require('../constants/constants');
const pool = require('../database/database');
const validation = require('../utils/validation');
const jwt = require('jsonwebtoken');

const authServices = {

    /*
    * Function to register a user.
    * @param {string} username - The username of the user.
    * @param {string} email - The email of the user.
    * @returns {object} - The result of the registration.
    */
    registerUserService: async (username, email) => {

        if (await validation.usernameValidation(username)) {
            return {
                success: false,
                message: "Invalid username."
            };
        }

        try {

            const result = await pool.query(
                `SELECT * FROM users WHERE username = '${username}';`
            );

            if (result.rows.length > 0) {
                return {
                    success: false,
                    message: 'User already exists.'
                };
            }

            await pool.query(
                `INSERT INTO users(username, email) VALUES ('${username}', '${email}');`
            );
            return {
                success: true,
                message: 'User registered successfully.'
            };

        } catch(error) {
            console.log(`Error registering user: ${error.message}`);
            return {
                success: false,
                message: 'Server error during registering user.'
            };
        }
    },

    /*
    * Function to login a user.
    * @param {string} username - The username of the user.
    * @param {string} email - The email of the user.
    * @returns {object} - The result of the login.
    */
    loginUserService: async (username, email) => {

        try {

            const result = await pool.query(
                `SELECT * FROM users WHERE username = '${username}' AND email = '${email}';`
            );

            if (result.rows.length === 0) {
                return {
                    success: false,
                    message: 'Invalid credentials.'
                };
            }

            const token = jwt.sign({
                username: result.rows[0].username,
            }, constants.JWT_SECRET, {expiresIn: '1h'});

            return {
                success: true,
                token: token,
                message: 'User logged in successfully.'
            };

        } catch (error) {
            console.log(`Error logging in user: ${error.message}`);
            return {
                success: false,
                message: 'Server error during logging in user.'
            };
        }
    }
};

module.exports = authServices;
