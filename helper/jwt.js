const SECRET = "sangatrahasia";
const jwt = require('jsonwebtoken');

function generateToken(payload) {
    const token = jwt.sign(payload, SECRET);
    return token;
}

function verifyToken(token) {
    const decoded = jwt.verify(token, SECRET);
    return decoded;
}

module.exports = {
    generateToken,
    verifyToken,
}