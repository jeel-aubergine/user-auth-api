const allowedEndpoints = [
    {method: 'GET', path: '/auth/register'},
    {method: 'POST', path: '/auth/login'},
    {method: 'GET', path: '/auth/profile'},
    {method: 'GET', path: '/auth/logout'}
]

const requestValidationMiddleware = (request, response, next) => {
    const {method, path} = request;
    const isAllowed = allowedEndpoints.some(endpoint => {
        return endpoint.method === method && endpoint.path === path;
    });

    if (!isAllowed) {
        return response
                    .status(404)
                    .json({
                        message: 'Endpoint not found.'
                    });
    }

    next();
};

module.exports = requestValidationMiddleware;
