const express=require("express");
let router=express.Router();
var Product=require("../../Models/product");

let User=require("../../Models/user");

const validateProduct=require("../../middleware/validateProduct")
const auth=require("../../middleware/auth");
const admin=require("../../middleware/admin");


router.get("/",async(req,res)=>{
    console.log(req.user);
     let products=await Product.find();

     //console.log(products);
     res.render('Products/list',{Name:"Products", products  });
    //return res.send(products);

 });

 router.get('/add', function(req, res, next) {
   
  res.render('Products/add');
});
//get single Products
router.get("/:id",async(req,res)=>{
    
  try{  
    let product=await Product.findById(req.params.id);
    if (!product){return res.status(400).send("Product given ID is not present")}
return res.send(product);
  }catch(err){
      return res.send(400).send("Invalid ID")


  }

});

//update router
router.put("/:id",async (req,res) =>{
let product= await Product.findById(req.params.id);
product.Name=req.body.Name;
product.price=req.body.price;
await product.save();
return res.send(product);
});


//delete router
router.delete("/:id",async (req,res) =>{
  let product= await Product.findByIdAndDelete(req.params.id);
 
  return res.send(product);
  });
  
  //insert  router
router.post("/add",async (req,res) =>{
  let product= new Product(req.body);
  product.Name=req.body.Name;
  product.price=req.body.price;
  product.Details=req.body.Details;
  product.Category=req.body.Category;
  
  await product.save();
  return res.redirect("/products");
  
  });
  


module.exports=router;