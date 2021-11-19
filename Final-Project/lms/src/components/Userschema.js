import express from "express"
import cors from "cors"
import mongoose from "mongoose"
const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/reactdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB connected")
})

const userSchema = new mongoose.Schema({
    userid: Number,
    loginid: Number,
    username: String,
    useremail:String,
    userpassword:String,
    usertype: String,
    userstatus: String
})
const User = new mongoose.model("User", userSchema)

//Routes
/*app.post("/login", (req, res)=> {
    const { loginid, password} = req.body
    User.findOne({ loginid: loginid}, (err, user) => {
        if(user){
            if(userpassword === user.userpassword ) {
                res.send({message: "Login Successfull", user: user})
            } else {
                res.send({ message: "Password didn't match"})
            }
        } else {
            res.send({message: "User not registered"})
        }
    })
}) */

app.post("/register", (req, res)=> {
    const { userid,loginid,username,useremail,userpassword,usertype,userstatus} = req.body
    User.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "User already registerd"})
        } else {
            const user = new User({
                
                userid,
                loginid,
                username,
               useremail,
               userpassword,
               usertype,
               userstatus,
               
            })
            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Successfully Registered, Please login now." })
                }
            })
        }
    })
    
}) 
   
app.listen(1000,() => {
    console.log("BE started at port 1000")
})