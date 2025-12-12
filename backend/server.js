
const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT || 5000

require('./config/db')()
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded())

app.get('/',(req,res)=>{
    res.send("server created")
})

const dataRoute = require('./routes/dataRoute')



app.use('/api/task',dataRoute)


app.listen(PORT,()=>console.log(`sever connected http://localhost:${PORT}`))