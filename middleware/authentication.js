const { User } = require('../models');
const { verifyToken } = require('../helper/jwt');

async function authentication(req, res, next) {
    try {
        const token = req.headers.authorization;
        const userDecoded = verifyToken(token);

        const user = await User.findOne({
            where: {
                id: userDecoded.id,
                name: userDecoded.name,
            }
        });

        if (!user) {
            return res.status(401).json({
                message: 'User Not found'
            })
        }
        return next();
    } catch (error) {
        res.status(401).json(error);
    }
}

module.exports = authentication;