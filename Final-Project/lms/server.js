const express= require('express')
const mongoose = require('mongoose')

const authRoute= require('.../router/auth')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))
mongoose.connect("mongodb://localhost:27017/lms",() =>{
    console.log("LMS-Connected to DB");})

const PORT=process.env.PORT || 4500

app.listen(PORT,()=>{
    console.log(`server is running on port no ${PORT}`)
})
app.use('/api',authRoute)

// To register user,  in postman URL: "http://localhost:4500/api/register"
// Input content: {     "user_name": "karmi",   "user_email": "karmi@abc.com",    "user_address": "india",    "user_password": "strong", "user_login_id":"karmi", "user_status":"active", "user_type":"user"}

// To login user,  in postman URL: "http://localhost:4500/api/login"
// Input content:{    "user_name": "karmi@abc.com", "user_password": "strong"}
