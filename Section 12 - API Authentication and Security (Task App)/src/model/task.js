const mongoose = require('../../node_modules/mongoose')

const Task = mongoose.model('Task', {
    description: {
        type: String,
        require: true,
        trim: true
    },
    status: {
        type: Boolean,
        default: false,
        require: true,
    }, 
    author: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
})



module.exports = Task