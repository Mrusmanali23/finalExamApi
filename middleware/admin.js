function admin(req,res,next){
if (req.user.Role!="Admin"){

    return res.status(403).send("You are not authorised person")
    
    next();

}



}
module.exports=admin;