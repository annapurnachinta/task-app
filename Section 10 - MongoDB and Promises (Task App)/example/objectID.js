// CURD create update read delete

const {MongoClient, ObjectID} = require('../node_modules/mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const DatabaseName = 'task-manager'

const id = new ObjectID()
console.log(id);
console.log(id.toHexString());
// console.log(id.timeStramp())

MongoClient.connect(connectionURL, (error, client) => {
    if(error){
        return console.log('unable to connect database');
    }

    const db = client.db(DatabaseName)
    db.collection('users').insertOne({
        id: id,
        name: 'Mohan',
        age: 30
    }, (error, result) => {
        if(error){
            return console.log('unable to insert user');
        }

        console.log(result.ops);
    })
})