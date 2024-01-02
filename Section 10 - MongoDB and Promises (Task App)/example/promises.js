const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('This is reject msg')
        // resolve([1,4,5])
    }, 2000)
})

doWorkPromise.then((result) => {
    console.log('success', result);
}).catch((error) => {
    console.log('Error', error);
})