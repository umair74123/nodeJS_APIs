var express = require('express');
const { productlist, onlyproductlist } = require('../controllers/readProducts');
const { createProduct } = require('../controllers/AddProducts');
const { updateProduct } = require('../controllers/UpdateProducts');
const { deleteProduct } = require('../controllers/DeleteProducts');
const multer = require('multer');
const router = express.Router()
const path = require('path');
const { uploadType, uploadImage } = require('../controllers/uploadImages');




router.post("/upload", uploadType,uploadImage )
//get productlost route 
router.get('/getall' , productlist)
//get  product by ID 
router.get('/get/:id' , onlyproductlist)

//add product
router.post('/AddProduct' ,uploadType, createProduct);

//updateProduct
router.put('/update/:id' , updateProduct)

//DeleteProduct
router.delete('/delete/:id' , deleteProduct)

module.exports = router;


