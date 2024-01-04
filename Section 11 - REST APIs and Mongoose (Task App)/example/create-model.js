const mongoose = require('../node_modules/mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager')

const Task = mongoose.model('Task', {
    description: {
        type: String
    },
    status: {
        type: Boolean
    }
})

const TaskData = new Task({
    description: 'This is me',
    status: true
})

TaskData.save().then(() => {
    console.log(TaskData);
}).catch((error) => {
    console.log(error);
})