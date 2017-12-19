const runQuery = require('./data.service.base').runQuery;

module.exports = {
    getUsers: async () => await runQuery(async (db) => {
        const usersCursor = await db.collection('users')
            .find()
            .map(toUser);

        const users = await usersCursor.toArray();
        return users;    
    }),

    insertUser: async (user) => await runQuery(async (db) => {
        const result = await db.collection('users')
            .insertOne(user);

        return result;
    })
}

const toUser = user => {
    return {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName
    }
}

