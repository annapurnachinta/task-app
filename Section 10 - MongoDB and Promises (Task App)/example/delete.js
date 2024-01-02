// CURD create update read delete

const {MongoClient, ObjectID} = require('../node_modules/mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const DatabaseName = 'task-manager'

MongoClient.connect(connectionURL, (error, client) => {
    if(error){
        return console.log('unable to connect database');
    }

    const db = client.db(DatabaseName)

    db.collection('data').deleteOne({
        age: 27
    }).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    })


    // db.collection('data').deleteMany({
    //     age: 27
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // })
})