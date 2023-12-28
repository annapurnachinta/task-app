const express = require('express')

const app = express()

app.get('', (req,res) => {
    res.send('<h1>welcome to web</h1>')
})

app.get('/help', (req,res) => {
    res.send({
        name: 'Anna',
        age: 27
    })
})

app.get('/about', (req,res) => {
    res.send([{
        name: 'Anna',
        age: 27
    }, {
        name: 'mohan',
        age: 30
    }])
})

app.get('/weather', (req,res) => {
    res.send('weather')
})

app.listen(3000, () => {
    console.log('server is up on port 3000');
})