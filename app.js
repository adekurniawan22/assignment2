const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 4000;
const UserController = require('./controller/User');
const HouseController = require('./controller/House');
const authentication = require('./middleware/authentication');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/login', UserController.login);
app.use(authentication);
app.get('/house', HouseController.getAllHouse);

app.listen(PORT, () => {
    console.log(`Server running in http://localhost:${PORT}/login`);
})
