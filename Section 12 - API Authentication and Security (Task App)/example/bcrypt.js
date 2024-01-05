const bcrypt = require('../node_modules/bcryptjs')

const myFunction = async () => {
    const pass = 'Annapurna'
    const hashPassword = await bcrypt.hash(pass, 8)

    console.log(pass);
    console.log(hashPassword);

    // const isMatch = await bcrypt.compare('Annapurna', hashPassword)
    const isMatch = await bcrypt.compare('annapurna', hashPassword)
    console.log(isMatch);
}

myFunction()