const express = require('../node_modules/express')
const taskRouter = require('../src/routers/task.js')
const userRouter = require('../src/routers/user.js')
require('./db/mongoose.js')

const app = express()
const port = process.env.PORT || 3001

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port);
})

const Task = require('./model/task.js')
const User = require('./model/user.js')

// const main = async () => {
//     // const task = await Task.findById('659814eadca4c45a82c2ad5f')
//     // await task.populate('author')
//     // console.log(task.author);

//     const user = await User.findById('65981454dca4c45a82c2ad4d')
//     await user.populate('tasks')
//     console.log(user.tasks);
// }

// main()