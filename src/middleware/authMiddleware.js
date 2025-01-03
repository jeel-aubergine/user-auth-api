const jwt = require('jsonwebtoken');
const constants = require('../constants/constants');

const authMiddleware = (req, res, next) => {

    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        var token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
        return res.status(401).json({
            success: false,
            message: 'No token provided.'
        });
    }

    try {
        const decoded = jwt.verify(token, constants.JWT_SECRET);
        req.user = decoded;
        next();
    }
    
    catch(error) {
        return res.status(401).json({
            success: false,
            message: 'Invalid token.'
        });
    }
};

module.exports = authMiddleware;
