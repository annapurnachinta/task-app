const mongoose = require('../node_modules/mongoose')
const validate = require('../node_modules/validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager')

const test = mongoose.model('test', {
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
    }
})

const TestData = new test({
    password: '   pass  '
})

TestData.save().then(() => {
    console.log(TestData);
}).catch((error) => {
    console.log(error);
})