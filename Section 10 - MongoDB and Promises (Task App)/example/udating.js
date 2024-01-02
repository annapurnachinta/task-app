// CURD create update read delete

const {MongoClient, ObjectID} = require('../node_modules/mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const DatabaseName = 'task-manager'

MongoClient.connect(connectionURL, (error, client) => {
    if(error){
        return console.log('unable to connect database');
    }

    const db = client.db(DatabaseName)

    // const updatePromise = db.collection('data').updateOne({
    //     _id: new ObjectID("6594074b5f3f4c2e880bbd34")
    // },{
    //     $set: {
    //         name: 'Chandu'
    //             }
    // })

    // const updatePromise = db.collection('data').updateOne({
    //     _id: new ObjectID("6594074b5f3f4c2e880bbd34")
    // },{
    //     $inc: {
    //         age: -3
    //     }
    // })

    const updatePromise = db.collection('data').updateMany({
        age: 30
    },{
        $set: {
            age: 31
        }
    })

    updatePromise.then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    })
})