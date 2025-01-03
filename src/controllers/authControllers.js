const authServices = require('../services/authServices');

const authControllers = {

    /*
    * Controller to register a user.
    * @param {object} request - The request object.
    * @param {object} response - The response object.
    * @returns {object} - The result of the registration.
    */
    registerUserController: async (request, response) => {

        const { username, email } = request.body;

        if (!username || !email) {
            return response
                        .status(400)
                        .json({
                            message: 'username and email are required.'
                        });
        }

        const result = await authServices.registerUserService(username, email);

        if (result.success) {
            return response
                        .status(200)
                        .json({
                            message: result.message
                        });
        }

        else {
            return response
                        .status(400)
                        .json({
                            message: result.message
                        });
        }
    },

    /*
    * Controller to login a user.
    * @param {object} request - The request object.
    * @param {object} response - The response object.
    * @returns {object} - The result of the login.
    */
    loginUserController : async (request, response) => {

        const {username, email} = request.body;

        if (!username || !email) {
            return response
                        .status(400)
                        .json({
                            message: 'Username and Email are required.'
                        });
        }

        const result = await authServices.loginUserService(username, email);

        if (result.success) {
            return response
                        .status(200)
                        .json({
                            token: result.token,
                            message: result.message
                        });
        }

        else {
            return response
                        .status(400)
                        .json({
                            message: result.message
                        });
        }
    },

    /*
    * Controller to get the profile of a user.
    * @param {object} request - The request object.
    * @param {object} response - The response object.
    * @returns {object} - The profile page.
    */
    profileUserController: async (request, response) => {
        return response
                    .status(200)
                    .json({
                        message: 'Profile page.'
                    });
    },

    /*
    * Controller to logout a user.
    * @param {object} request - The request object.
    * @param {object} response - The response object.
    * @returns {object} - The result of the logout.
    */
    logoutUserController: async (request, response) => {
        return response
                    .status(200)
                    .json({
                        message: 'User logged out.'
                    });
    }
};

module.exports = authControllers;
