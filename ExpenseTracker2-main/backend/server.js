const cors=require("cors");
const express = require('express')
const dbConnect = require('./dbConnect')
const app = express()
app.use(express.json())
app.use(cors())
const path = require('path')
const userRoute = require('./routes/usersRoute')
const transactionsRoute = require('./routes/transactionsRoute')
app.use('/api/users/' , userRoute)
app.use('/api/transactions/' , transactionsRoute)

const port = 4000 ;




app.listen(port,()=>console.log('Node JS server started!'));