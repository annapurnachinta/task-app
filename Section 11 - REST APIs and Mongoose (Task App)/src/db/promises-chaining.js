const Users = require('../model/user')
require('../db/mongoose')

// update
// Users.findByIdAndUpdate('65945146690535d3c80023de', {age : 1}).then((user) => {
//     console.log(user);
//     return Users.countDocuments({age:1})
// }).then((result) => {
//     console.log(result);
// }).catch((e) => {
//     console.log(e);
// })

// delete
Users.findByIdAndDelete('65945146690535d3c80023de').then((user) => {
    console.log(user);
    return Users.countDocuments({age:1})
}).then((result) => {
    console.log(result);
}).catch((e) => {
    console.log(e);
})
