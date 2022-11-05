require('./db/connect')
const express = require('express');
const app = express();
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()
const notFound = require('./middleware/not-found')



const port = 4000

// middleware
app.use(express.static('./public'))
app.use(express.json())



app.use('/api/v1/tasks',tasks)

app.use(notFound)

const start = async () =>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on port ${port}...`))
    } catch (error) {
        console.log(error)
    }
}

start();


