// import mongoose
const mongoose = require('mongoose');
// load env variables
const dotenv = require('dotenv');
dotenv.config()
 const bodyParser=require('body-parser')
//db connection
mongoose.connect(
  process.env.MONGO_URI,
  {useNewUrlParser: true}
)
.then(() => console.log('DB Connected'))
 
mongoose.connection.on('error', err => {
  console.log(`DB connection error: ${err.message}`)
});

const express=require('express')
const expressValidator=require('express-validator')
const app=express()
const morgan=require('morgan')
const postRoutes=require('./routes/post')
// middleware
app.use(morgan('dev'))
app.use(expressValidator())
app.use(bodyParser.json())
app.use('/',postRoutes)
const port=8080
app.listen(port,()=>{
    console.log(`a node js api is listening on port ${port}`)
})