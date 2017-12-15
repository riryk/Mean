const MongoClient = require('mongodb').MongoClient;

const executeQuery = (query, callback) => {
	return MongoClient.connect('mongodb://localhost:27017', (error, client) => {
		if (error) {
			callback(error, null);
			return;
		}
		const db = client.db('mean');
        query(db).then((users) => { 
    	    callback(null, users);
        })
        .catch((error) => {
    	    callback(error, null);
        });
    });
};

const usersDataService = {
	getUsers: function(callback) {
		const getUsersQuery = db => db.collection('users')
            .find()
            .map(user => { 
                return {
            	    id: user._id,
                    firstName: user.firstName,
            	    lastName: user.lastName
                }
            })
            .toArray();
            

        executeQuery(getUsersQuery, callback);
	}
}

module.exports = usersDataService;
