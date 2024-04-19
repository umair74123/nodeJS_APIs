var express = require('express');
const { productlist, onlyproductlist } = require('../controllers/readProducts');
const { createProduct } = require('../controllers/AddProducts');
const { updateProduct } = require('../controllers/UpdateProducts');
const { deleteProduct } = require('../controllers/DeleteProducts');
const router = express.Router()


//get productlost route 
router.get('/getall' , productlist)
//get  product by ID 
router.get('/get/:id' , onlyproductlist)

//add product
router.post('/AddProduct' , createProduct);

//updateProduct
router.put('/update/:id' , updateProduct)

//DeleteProduct
router.delete('/delete/:id' , deleteProduct)

module.exports = router;


