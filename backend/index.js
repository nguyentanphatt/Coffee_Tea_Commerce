const port = 4000;
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const { Schema } = mongoose 
const jwt = require("jsonwebtoken")
const multer = require("multer")
const path = require("path")
const cors = require("cors");
const { type } = require("os");

app.use(express.json())
app.use(cors())

//mongdb connect
mongoose.connect("mongodb+srv://kyakya972003:qwert741%40@cluster0.tk7ce.mongodb.net/coffee_tea_commerce")

//api
app.get("/",(req,res)=>{
    res.send("Express App is Running")
})

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './upload/images');
    },
    filename: function (req, file, cb) {
        cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});

const upload = multer({storage:storage})
//upload img API
app.use('/images',express.static('upload/images'))

app.post("/upload",upload.single('product'),(req,res)=>{
    res.json({
        success:1,
        image_url:`http://localhost:${port}/images/${req.file.filename}`
    })
})
//Schema for product
const productSchema = new Schema({
    id:{
        type: Number,
        required: true
    },
    name:{
        type:String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    small_description: {
        type: String,
        required: false
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    grind: {
        type: String,
        required: function() {
            return this.category === 'coffee' ? true : false;
        },
    },
    form: {
        type: String,
        required: function() {
            return this.category === 'tea' ? true : false;
        },
    },
    favor: {
        type: String,
        required: function() {
            return this.category === 'coffee' || this.category === 'tea' ? true : false; // Required for coffee or tea
        },
    },
    available: {
        type: Boolean,
        default: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const Product = mongoose.model('Product',productSchema);
module.exports = Product
//Add Product API
app.post('/addproduct',async (req,res)=>{
    try {
        let products = await Product.find({});
        let id;
        if(products.length > 0){
            let last_product = products[products.length - 1];
            id = last_product.id + 1
        }
        else{
            id = 1
        }

        const productData = {
            id: id,
            name: req.body.name,
            description: req.body.description,
            small_description: req.body.small_description,
            price: req.body.price,
            image: req.body.image,
            category: req.body.category,
            type: req.body.type,
            quantity: req.body.quantity,
            available: req.body.available || true 
        };
        if(req.body.category === 'coffee'){
            productData.favor = req.body.favor;
            productData.grind = req.body.grind;
        } else if (req.body.category === 'tea') {
            productData.favor = req.body.favor;
            productData.form = req.body.form; 
        }

        const product = new Product(productData)

        await product.save()
        console.log("Product Saved", product);
        
        res.json({
            success: true,
            product: product
        })
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json({success: false, error: "Failed to add product"})
    }
})
//List All Product API
app.get('/listproduct',async (req,res)=>{
    let listProduct = await Product.find({})
    console.log("All Product fetched");
    res.send(listProduct)
})

//Delete Product API
app.post('/deleteproduct', async (req, res) => {
    await Product.findOneAndDelete({id:req.body.id})
    console.log("Removed");
    res.json({
        success:true,
        name:req.body.name
    })
})
//Update Product API
app.post('/updateproduct', upload.single('image'),async (req, res) => {
    const { id, ...updateData } = req.body;
    if(req.file){
        updateData.image = `http://localhost:${port}/images/${req.file.filename}`;
    }
    try {
        const updateProduct = await Product.findOneAndUpdate({ id: id }, updateData, { new: true });
        if (!updateProduct) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }
        res.json({
            success: true,
            data: updateProduct
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
})
//Schema for user
const Users = mongoose.model('Users',{
    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
    },
    cartData:{
        type:Object,
    },
    date:{
        type:Date,
        default:Date.now()
    }
})
//Create User API
app.post('/signup', async(req,res)=>{
    let check = await Users.findOne({email:req.body.email})
    if(check){
        return res.status(400).json({success:false, errors:"Existing User Email"})
    }
    let cart = {}
    for(let i = 0; i < 300; i++){
        cart[i] = 0
    }
    const user = new Users({
        name:req.body.username,
        email:req.body.email,
        password:req.body.password,
        cartData: cart,
    })
    await user.save()
    const data = {
        user:{
            id:user.id
        }
    }
    const token = jwt.sign(data, 'secret_token')
    res.json({success:true, token})
})

//Login User API
app.post('/login', async (req,res) => {
    let user = await Users.findOne({email:req.body.email})
    if(user){
        const pass = req.body.password === user.password
        if(pass){
            const data = {
                user:{
                    id:user.id
                }
            }
            const token = jwt.sign(data, 'secret_token')
            res.json({
                success:true,
                token
            })
        } else{
            res.json({
                success:false,
                errors: "Wrong passwor!!! Try Again"
            })
        }
    } else{
        res.json({
            success:false,
            errors: "Wrong email or not found email adress"
        })
    }
})

//Schema for Admin
const Admins = mongoose.model('Admins',{
    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
    },
    date:{
        type:Date,
        default:Date.now()
    }
})
//Create Admin API
app.post('/adminsignup', async(req,res)=>{
    let check = await Admins.findOne({email:req.body.email})
    if(check){
        return res.status(400).json({success:false, errors:"Existing Admin Email"})
    }
    const admin = new Admins({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
    })
    await admin.save()
    const data = {
        user:{
            id:admin.id
        }
    }
    const token = jwt.sign(data, 'secret_token')
    res.json({success:true, token})
})

//Login Admin API
app.post('/adminlogin', async (req,res) => {
    let admin = await Admins.findOne({email:req.body.email})
    if(admin){
        const pass = req.body.password === admin.password
        if(pass){
            const data = {
                user:{
                    id:admin.id
                }
            }
            const token = jwt.sign(data, 'secret_token')
            res.json({
                success:true,
                token
            })
        } else{
            res.json({
                success:false,
                errors: "Wrong passwor!!! Try Again"
            })
        }
    } else{
        res.json({
            success:false,
            errors: "Wrong email or not found email adress"
        })
    }
})

//Fetch User for add cart item
const fetchUser = async (req,res,next) => {
    const token = req.header('auth-token')
    if(!token){
        res.status(401).send({errors: "Please Login"})
    } else {
        try {
            const data = jwt.verify(token, 'secret_token')
            req.user = data.user
            next()
        } catch (error) {
            res.status(401).send({errors: "Please Login"})
        }
    }
}

//Add product to cart API
app.post('/addtocart', fetchUser, async(req,res) => {
    const {itemId, quantity} = req.body
    let userData = await Users.findOne({_id:req.user.id})
    userData.cartData = userData.cartData || {};
    userData.cartData[itemId] = (userData.cartData[itemId] || 0) + quantity;
    await Users.findOneAndUpdate({_id:req.user.id}, {cartData:userData.cartData})
    res.send("Added")
    
})

//Remove product from cart API
app.post('/removefromcart',fetchUser, async (req,res)=>{
    let userData = await Users.findOne({_id:req.user.id});
    if(userData.cartData[req.body.itemId]>0)
    userData.cartData[req.body.itemId] -= 1
    await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData})
    res.send("Removed")
})

//Get all item in user cart to cart API
app.post('/getcart',fetchUser,async (req,res)=>{
    let userData = await Users.findOne({_id:req.user.id})
    res.json(userData.cartData)
})

app.listen(port,(error)=>{
    if(!error){
        console.log("server running on port "+port);
    }
    else {
        console.log("Error "+error);
    }
})