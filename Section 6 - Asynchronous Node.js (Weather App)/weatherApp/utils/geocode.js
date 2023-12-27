const request = require('../../node_modules/postman-request')

const geocode = (address, callback) => {
    const url = 'http://api.positionstack.com/v1/forward?access_key=2680c3a155563d599c7526d35596c91d&query=' + address

    request({url, json:true}, (error, response) =>{
        if(error){
            callback('Unable to connect to weather service!', undefined)
        }else if (response.body.error) {
            callback('Unable to find location!', undefined)
        }else{
            callback(undefined, {
                latitude : response.body.data[0].latitude,
                longitude : response.body.data[0].longitude,
                location: response.body.data[0].name
            })
    }
    })
}

module.exports = geocode