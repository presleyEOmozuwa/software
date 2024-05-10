const express = require('express');
const router = express.Router();
const User = require('../user-model');

router.post('/register', async (req, res) => {
    try {
        const { firstname, lastname, gender } = req.body;
        const user = await User.create({
            firstname: firstname,
            lastname: lastname,
            gender: gender
        });
        if (!user) {
            throw new Error("registration failed")
        }
        res.send(user);
    }
    catch (err) {
        const { message } = err;
        res.status(400).send({ error: message })
    }
})

router.get('/users', (req, res) => {
    const users = [{ id: 1, firstname: "Smith", lastname: "Blake" }, { id: 2, firstname: "James", lastname: "Eddie" }, { id: 3, firstname: "Mary", lastname: "Payne" }]
    res.send({ "users": users });
});

router.get('/userbyid', (req, res) => {
    const users = [{ id: 1, firstname: "Smith", lastname: "Blake" }, { id: 2, firstname: "James", lastname: "Eddie" }, { id: 3, firstname: "Mary", lastname: "Payne" }]
    res.send({ "user": users[2] });
});

module.exports = router;