// setTimeout(() => {
//     console.log('2 second timer');
// }, 2000)

// const names = ['annapurna', 'mohan', 'mondava']
// const shortname = names.filter((name) => {
//     return name.length <= 4
// })

// const geocode = (address, callback) => {
//     const data = {
//         latitude : 0,
//         longitude : 0
//     }
//     return data
// }

// callback functionilty
// const geocode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             latitude : 0,
//             longitude : 0
//         }
//         callback(data)
//     }, 2000)
// }

// geocode('londan', (data) => {
//     console.log(data);
// })

// challange

// 1. define an add function that accespt the correct arugments
// 2. use setimeout to simulate 2 second delay
// 3. after 2 seconds are up, call the callback function with the sum
// 4. test the work

// add(1,4, (sum) => {
//     console.log(sum)
// })

const addSum = (a,b, callback) => {
    setTimeout(() => {
        callback(a+b)
    }, 2000)
}

addSum(1,4, (sum) => {
    console.log(sum)
})