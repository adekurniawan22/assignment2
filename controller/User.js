const { generateToken } = require('../helper/jwt');
const { User } = require('../models/');

class UserController {
    static async login(req, res) {
        const { name, password } = req.body;
        try {
            const dataUser = await User.findOne({
                where: {
                    name: name,
                }
            });

            if (dataUser) {
                const passwordCorrect = password === dataUser.password;
                if (passwordCorrect) {
                    const token = generateToken({
                        id: dataUser.id,
                        name: dataUser.name,
                    });
                    return res.status(200).json({ token: token })
                } else {
                    res.status(400).json({
                        message: 'Password salah'
                    });
                }
            } else {
                res.status(400).json({
                    message: 'User not found'
                });
            }
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

module.exports = UserController;