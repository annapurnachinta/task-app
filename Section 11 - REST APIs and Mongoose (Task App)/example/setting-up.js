const mongoose = require('../../node_modules/mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager')

const User = mongoose.model('User', {
    name: {
        type: String
    },
    age: {
        type: Number
    }
})

const UserData = new User({
    name: 'Annapurna',
    age: 27
})

UserData.save().then(() => {
    console.log(UserData);
}).catch((error) => {
    console.log(error);
})