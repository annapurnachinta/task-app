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