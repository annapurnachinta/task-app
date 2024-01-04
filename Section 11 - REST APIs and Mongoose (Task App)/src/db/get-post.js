const express = require('../node_modules/express')
const Users = require('./model/user.js')
require('./db/mongoose')

const app = express()
const port = process.env.PORT || 3001

app.use(express.json())

app.post('/users', (req, res) =>{
    const user = new Users(req.body)

    user.save().then(() => {
        res.send(user)
    }).catch((error) => {
        res.send(error);
    })
})

app.get('/users', (req, res) =>{
    Users.find({}).then((user) => {
        res.send(user)
    }).catch((error) => {
        res.status(500).send(error);
    })
})

app.get('/users/:id', (req, res) =>{
    const _id = req.params.id

    Users.findById(_id).then((user) => {
            if(!user){
                return res.status(404).send()
            }
            res.send(user)
        }).catch((e) => {
            res.status(500).send();
        })
})


app.listen(port, () => {
    console.log('Server is up on port' + port);
})