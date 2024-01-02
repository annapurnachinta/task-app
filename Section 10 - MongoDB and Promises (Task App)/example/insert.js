// CURD create update read delete

const mongodb = require('../node_modules/mongodb')
const mongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const DatabaseName = 'task-manager'

mongoClient.connect(connectionURL, (error, client) => {
    if(error){
        return console.log('unable to connect database');
    }

    const db = client.db(DatabaseName)
    // db.collection('users').insertOne({
    //     name: 'Mohan',
    //     age: 30
    // }, (error, result) => {
    //     if(error){
    //         return console.log('unable to insert user');
    //     }

    //     console.log(result.ops);
    // })

    db.collection('data').insertMany([{
        name: 'Annapurna',
        age: 27
    },{
        name: 'Mohan',
        age: 30
    }], (error, result) => {
        if(error){
            return console.log('unable to insert user');
        }

        console.log(result.ops);
    })

})