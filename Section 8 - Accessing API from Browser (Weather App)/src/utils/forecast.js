const request = require('../../node_modules/postman-request')

const forecast = (lit, long, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=dcfb2137caa3d7ef66b0fb31a810b11e&query=' + lit +',' + long

    request({url, json:true}, (error, response) =>{
        if(error){
            callback('Unable to connect to weather service!', undefined)
        }else if (response.error) {
            callback('Unable to find location!', undefined)
        }else{
            // callback(undefined, response.body.location.lat + ', ' + response.body.location.lon)
            callback(undefined ,  response.body.current.weather_descriptions[0]  + '! It is currently ' +  response.body.current.temperature +' degress out. It feels like ' +  response.body.current.feelslike + ' degress out.')
            // console.log(body.location)
    }
    })
}

module.exports = forecast