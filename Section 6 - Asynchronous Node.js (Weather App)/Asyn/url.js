const request = require('./node_modules/postman-request')

const URL = 'http://api.weatherstack.com/current?access_key=dcfb2137caa3d7ef66b0fb31a810b11e&query=37.8267,-122.4233'

request({url: URL}, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.current)
})