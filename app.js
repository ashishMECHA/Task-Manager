const express = require('express');
const app = express();
const tasks = require('./routes/tasks')

const port = 4000

// middleware
app.use(express.json())

app.get('/hello', (req,res)=>{
    res.send('task manager app')
})

app.use('/api/v1/tasks',tasks)


app.listen(port, console.log(`Server is listening on port ${port}...`))
