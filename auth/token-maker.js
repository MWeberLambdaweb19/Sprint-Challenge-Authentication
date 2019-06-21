const jWebToken = require('jsonwebtoken');

const secrets = require('../config/secrets.js');

function generateToken(user) {
    const payload = {
        subject: user.id,
        username: user.username,
    };

    const options = {
        expiresIn: '1d',
    };

    return jWebToken.sign(payload, secrets.jWebTokenSecret, options);
}

module.exports = {
    generateToken,
};