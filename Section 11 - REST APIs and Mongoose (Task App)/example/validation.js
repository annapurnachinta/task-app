const mongoose = require('../node_modules/mongoose')
const validate = require('../node_modules/validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager')

const User = mongoose.model('Task', {
    name: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
        trim: true,
        lowercase: true,
        validate(value){
            if(!validate.isEmail(value)){
                throw new Error('Email is invalid') 
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if(value<0){
                throw new Error('Age must be a postive number')
            }
        }
    }
})

const UserData = new User({
    name: '   Annapurna  ',
    email: '    ANNAPURNA@GMAIL.COM    '
})

UserData.save().then(() => {
    console.log(UserData);
}).catch((error) => {
    console.log(error);
})