const data = __dirname + '/../data/data.json';
const fs = require('fs');

class HouseController {
    static getAll(req, res) {
        let dataJson = JSON.parse(fs.readFileSync(data, 'utf8'));
        try {
            res.status(200).json(dataJson.House);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    static getOneById(req, res) {
        let dataJson = JSON.parse(fs.readFileSync(data, 'utf8'));
        const { id } = req.params;
        try {
            let data = dataJson.House;
            let house = data.find(obj => obj.id == id);
            res.status(200).json(house);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }
}

module.exports = HouseController;