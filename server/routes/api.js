const express = require('express');
const router = express.Router();

const MongoClient = require('mongodb').MongoClient;

const connectToDatabase = (query, response) => {
    return MongoClient.connect('mongodb://localhost:27017', (error, client) => {
        if (!returnIfError(error, response)) {
            const database = client.db('mean');
            query(database);    
        }
    });
};

const returnIfError = (error, response) => {
    if (error) {
        writeErrorToResponse(error, response);
    }
    return error;
};

let defaultResponse = {
    status: 200,
    data: [],
    message: null
};

const handleError = (query, response) => {
    query.then((users) => {
        defaultResponse.data = users;
        response.json(defaultResponse);
    })
    .catch((error) => {
    	writeErrorToResponse(error, response);
    });
};

const writeErrorToResponse = (error, response) => {
    defaultResponse.status = 501;
    defaultResponse.message = typeof error == 'object' ? error.message : error;
    response.status(501).json(defaultResponse);
};

router.get('/users', (request, response) => {
    connectToDatabase((db) =>
    	handleError(db.collection('users')
            .find()
            .toArray(), response), response);
});

module.exports = router;

