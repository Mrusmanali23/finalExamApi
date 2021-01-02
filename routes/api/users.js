const express=require("express");
let router=express.Router();
let User=require("../../Models/user");
var bcrypt=require("bcryptjs");
//var  lodash=require;
const jwt=require("jsonwebtoken");
const _=require("lodash");
const config=require("config");

router.get('/register', function(req, res, next) {
    res.render('users/register');
  });
  router.get('/login', function(req, res, next) {
    res.render('users/login');
  });
  
  router.get('/logout', function(req, res, next) {
    req.session.user=null;
    res.redirect('/login');
  });
  
router.post("/register",async(req,res)=>{
let user=await User.findOne({Email:req.body.Email});
if(user) return res.status(400).send("User with given Email already email exist");
user=new User();
user.Name=req.body.Name;
user.Email=req.body.Email;
user.Password=req.body.Password;
let salt=await bcrypt.genSalt(10);
user.Password= await bcrypt.hash(user.Password,salt);
await user.save();
return res.send(_.pick(user,["Name","Email"]));
});

router.post("/login", async function (req, res, next) {
    let user = await User.findOne({
      Email: req.body.Email,
      Password: req.body.Password,
    });
    console.log(user);
    if (!user) return res.redirect("/login");
    req.session.user = user;
    return res.redirect("/");
  });


  
/*
router.post("/login",async(req,res)=>{
    let user=await User.findOne({Email:req.body.Email});
    if(!user) return res.status(400).send("User not Register");
    let isValid=await bcrypt.compare(req.body.Password,user.Password);
    if(!isValid) return res.status(401).send("Invalid Password");
  
    if(user.Role=="admin") return res.status(401).send("Invalid Password");
    
   let token=jwt.sign(
       {_id:user._id,name:user.Name},
    config.get("MongoDB.jwtPrivateKey"));
    res.send(token); 
});*/
module.exports=router;