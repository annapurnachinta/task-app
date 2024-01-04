const Users = require('../model/user')
require('../db/mongoose')

// const updateAgeAndCount = async (id, age) => {
//     const user = await Users.findByIdAndUpdate(id, {age})
//     const count = await Users.countDocuments({age})
//     return count
// }

// updateAgeAndCount('65945146690535d3c80023de', 2).then((count) => {
//     console.log(count);
// }).catch((e) => {
//     console.log(e);
// })

const deleteAgeAndCount = async (id) => {
    const user = await Users.findByIdAndDelete(id)
    const count = await Users.countDocuments({age})
    return count
}

deleteAgeAndCount('65945146690535d3c80023de').then((count) => {
    console.log(count);
}).catch((e) => {
    console.log(e);
})