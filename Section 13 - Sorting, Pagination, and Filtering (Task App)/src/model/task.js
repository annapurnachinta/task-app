const mongoose = require('../../node_modules/mongoose')

const TaskSchema = new mongoose.Schema({
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
}, {
    timestamps: true
})

const Task = mongoose.model('Task', TaskSchema)

module.exports = Task