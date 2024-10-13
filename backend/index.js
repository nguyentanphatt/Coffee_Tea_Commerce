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
app.post('/updateProduct', async (req, res) => {
    const {id, ...updateData } = req.body;
    try {
        const updateProduct = await Product.findByIdAndUpdate(id, updateData, {new: true})
        if(!updateProduct){
            return res.status(404).json({
                success: false,
                message: "Product not found"
            })
        }
        res.json({
            success:true,
            data: updateProduct
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message: error.message
        })
    }
    

})


app.listen(port,(error)=>{
    if(!error){
        console.log("server running on port "+port);
    }
    else {
        console.log("Error "+error);
    }
})