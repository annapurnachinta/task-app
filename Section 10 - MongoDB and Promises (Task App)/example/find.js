// CURD create update read delete

const {MongoClient, ObjectID} = require('../node_modules/mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const DatabaseName = 'task-manager'

MongoClient.connect(connectionURL, (error, client) => {
    if(error){
        return console.log('unable to connect database');
    }

    const db = client.db(DatabaseName)
    // db.collection('users').findOne({age: 27}, (error, result) => {
    //     if(error){
    //         return console.log('unable to find user');
    //     }

    //     console.log(result);
    // })

    //  db.collection('users').findOne({_id: new ObjectID("6594084d491e1935a4cddd48")}, (error, result) => {
    //     if(error){
    //         return console.log('unable to find user');
    //     }

    //     console.log(result);
    // })

    db.collection('users').find({age: 30}).toArray((error, result) => {
        if(error){
            return console.log('unable to find user');
        }

        console.log(result);
    })
})