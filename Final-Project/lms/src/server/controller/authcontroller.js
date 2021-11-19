const jwt= require('jsonwebtoken');
const bcrypt= require('bcryptjs');

const User = require('..../models/lms_user');

// User registration...
const register =(req,res)=>{
    bcrypt.hash(req.body.user_password,10,(err,_hashedPass)=>{
        if(err){
            res.json({error: err});
            console.log("Cannot save user , error: " +err)
        }
       let lms_user = new User({
        user_name:req.body.user_name,
        user_email:req.body.user_email,
        user_address:req.body.user_address,
        user_login_id:req.body.user_login_id,
        user_type:req.body.user_type,
        user_status:req.body.user_status,
        user_password: _hashedPass       
    })
    lms_user.save().
            then(lms_user =>{
                res.json({message:"User added successfully"})
            }).catch(err=>{
                res.json({message:"Error occured"})
    })
})
}

// User login / authentication ...
const login = (req,res)=>{
    user_name = req.body.user_name,
    user_password = req.body.user_password,

   User.findOne({$or: [{user_email:user_name},{user_type:user_name}]})
   .then(function (lms_user) {
           if (lms_user) {
               bcrypt.compare(user_password, lms_user.user_password, (err, result) => {
                   if (err) {
                       res.json({ error: err })
                   }
                   if (result) {
                       const token = jwt.sign({ user_name: lms_user.user_name }, 'sercretvaluehellohowareyouasdfffafas',
                        { expiresIn: '15 minutes' })
                       res.json({ message: "login succesfull", token })

                   } else {
                       res.json({ message: "username / password does not match!" })
                   }
               })
           } else {
               res.json("no user found")
           }
       })
}

module.exports={register, login}
