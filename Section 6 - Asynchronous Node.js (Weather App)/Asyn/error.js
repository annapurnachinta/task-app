// Geocoding
// Address => lat/long => weather

const request = require('../node_modules/postman-request')

const URL = 'http://api.positionstack.com/v1/forward?access_key=2680c3a155563d599c7526d35596c91d&query=1600%20Pennsylvania%20Ave%20NW,%20Washington%20DC'

request({url: URL}, (error, response) => {
    const data = JSON.parse(response.body)
    if(error){
        console.log('Unable to connect to weather service!')
    }else if (data.error) {
        console.log('Unable to find location!')
    }else{
        const latitude = data.data[0].latitude
        const longitude = data.data[1].longitude
    
        console.log('Latitude is ' + latitude + '. Longitude is ' + longitude)
    }
})


