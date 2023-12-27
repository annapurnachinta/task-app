const request = require('../node_modules/postman-request')

const URL = 'http://api.weatherstack.com/current?access_key=dcfb2137caa3d7ef66b0fb31a810b11e&query=37.8267,-122.4233&units=f'

request({url: URL, json: true}, (error, response) => {
    console.log('It is currently '+ response.body.current.temperature + ' degree out. It feels like ' + response.body.current.feelslike + ' degree out.')
})