const pet = {
    name: 'hall'
}

pet.toJSON = function () {
    return {}
}

console.log(JSON.stringify(pet));