const doWorkCallBack = (data) => {
    setTimeout(() => {
        // data('This is error msg', undefined)
        data(undefined, [1,4,5])
    }, 2000)
}

doWorkCallBack((error, result) => {
    if(error){
        return console.log(error);
    }

    console.log(result);
})