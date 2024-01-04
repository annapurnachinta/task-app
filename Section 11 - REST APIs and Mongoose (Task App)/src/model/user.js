const mongoose = require('../../node_modules/mongoose')
const validate = require('../../node_modules/validator')

const User = mongoose.model('User', {
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
    password: {
        type: String,
        require: true,
        minlength: 7,
        trim: true,
        validate(value) {
            if(value.includes('password')){
                throw new Error('Does not conatin word password')
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

module.exports = User