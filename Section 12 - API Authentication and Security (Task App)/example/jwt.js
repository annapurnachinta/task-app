const jwt = require('../node_modules/jsonwebtoken')

const myFunction = async () => {
    // const token = jwt.sign({_id: '1235'}, 'thisismycouse')

    // expired in 1sec
    const token = jwt.sign({_id: '1235'}, 'thisismycouse', { expiresIn: '1 seconds'})
    console.log(token);

    console.log(jwt.verify(token, 'thisismycouse'));
}

myFunction()