const { House } = require('../models/');

class HouseController {
    static async getAllHouse(req, res) {
        try {
            const dataHouse = await House.findAll();
            return res.status(200).json(dataHouse);
        } catch (error) {
            return res.status(500).json(error);
        }

    }
}

module.exports = HouseController;