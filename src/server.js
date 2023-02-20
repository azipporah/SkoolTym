const express = require('express')
const app = express()
const dotenv = require('dotenv')
const path = require('path')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

// route imports
const postRoutes = require('./routes/post.routes')
const getRoutes = require('./routes/get.routes')
const specificGetRoutes = require('./routes/specific.get.routes')
const deleteRoutes = require('./routes/delete.routes')
const updateRoutes = require('./routes/update.routes')

// linking the .env file
require('dotenv').config()
dotenv.config({ path: __dirname + '/.env' });

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use('/post', postRoutes)
app.use('/get', getRoutes)
app.use('/delete', deleteRoutes)
app.use('/update', updateRoutes)
app.use('/specific', specificGetRoutes)
app.use(bodyParser.json)
app.use(bodyParser.urlencoded({extended: true}))
// app.use('school_badge', express.static('/uploads'))

// linking the port
const port = process.env.PORT || 6001

// connecting to the database
mongoose.set('strictQuery', false);
mongoose.connect(process.env.db_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to db')
}).catch(err => {
    console.error("Connection error", err)
    process.exit()
})


// listening on port
app.listen(port, (req,res) => {
    console.log(`Server started at port: ${port}`);
})