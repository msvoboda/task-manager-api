const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, ()=>{
    console.log('Server is set up of port ' + port)
})

const Task = require('./models/task')
const User = require('./models/user')

const main = async () => {
    /*
    const user = await User.findById('5e999bbadbfa4c4f50894e89')
    if (!user) {
        await user.populate('tasks').execPopulate()
        console.log(user.tasks)
    }*/
}

main()