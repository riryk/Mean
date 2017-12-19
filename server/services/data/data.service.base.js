const MongoClient = require('mongodb').MongoClient;

module.exports = {
	runQuery: async (query) => {
        const client = await MongoClient.connect('mongodb://localhost:27018');
        const db = client.db('mean');

        const result = await query(db);
        return result;
    }
};