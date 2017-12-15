const express = require('express');
const router = express.Router();
const usersDataService = require('../services/data');

router.get('/users', (request, response) => {
    usersDataService.getUsers((error, users) => writeDataToResponse(error, users, response));
});

module.exports = router;

const writeDataToResponse = (error, data, response) => {
    if (error) {
        response.status(501).json(error.message);
    } else {
        response.status(200).json(data);
    }
};
