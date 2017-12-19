const express = require('express');
const router = express.Router();

const processRequest = require('./api-base');
const usersDataService = require('../services/data');

router.get('/users', async (req, res) => {
    await processRequest(async () => {
        const users = await usersDataService.getUsers();

        return users;
    })(res);  
});

router.post('/users', async (req, res) => {
    await processRequest(async () => {
        const newUser = req.body.body;    

        await usersDataService.insertUser(newUser);

        const users = await usersDataService.getUsers();

        return users;
    })(res); 
});

module.exports = router;
