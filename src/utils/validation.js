const validation = {

    /*
    * Function to validate a username.
    * @param {string} username - The username to validate.
    * @returns {boolean} - The result of the validation.
    */
    usernameValidation: async (username) => {
        return !(/^[a-zA-Z0-9_]+$/.test(username));
    }

};

module.exports = validation;
