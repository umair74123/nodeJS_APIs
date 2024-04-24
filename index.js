var express = require('express');
const colors= require("colors");
const morgan= require("morgan");
const dotenv= require("dotenv");
const MySqlPool = require('./config/database');
const { productlist } = require('./controllers/readProducts');
const fs = require('fs');
const path = require('path');
const multer = require("multer");
const errHandler = require('./errorHandler/errHandler');





//configure dotenv
dotenv.config();
var app = express();
//middleware
app.use(morgan("dev"));
app.use(errHandler);
app.use(express.json());
app.use(express.urlencoded( {extended : true}))


//routes to get data
app.use('/api/v1/product' , require('./routes/productroutes')); //url for getting product list 

//port on which server is running
const  PORT =process.env.PORT || 3000;


//checking database connectivity
MySqlPool.query("SELECT 1")
.then(()=>{
    
    console.log(`Database connected successfully`);
    app.listen(PORT,()=>{
        console.log(`app is listning at PORT ${process.env.PORT}`.bgCyan.white);
    })

}).catch(err=>{
    console.log(err);
})



app.use('/profile',express.static('upload/images'));


//ROUTES
//basic route
app.get('/', function (req, res) {
    // Read the HTML file
    fs.readFile(path.join(__dirname, 'index.html'), 'utf8', function (err, data) {
        if (err) {
            // Handle error
            console.error('Error reading HTML file:', err);
            res.status(500).send('Internal Server Error');
        } else {
            // Send the HTML content as the response
            res.send(data);
        }
    });
});










// //get productdata from db
// app.get('/api/get_product_fromdb', function (req, res) {
// const query = `select * from nodejsapis `;
// MySqlPool.query(query,(err,result)=>{
//         if(err)
//         {
//             return res.json(err);
//         }
//         else
//         {
//             console.log("result is ".bgMagenta.blue, result);
//             if(result.length>0)
//             {
//               res.status(200).send({
//                   "status_code" :200,
//                   "message" : "list of products",
//                   "data": result,
//               })
//           }
//               else
//               {
//                   res.status(400).send({
//                       "status_code" :400,
//                       "message" : "didn't find any product",
//                       "data": [],
//                   })
//               }
//         }
//     })
//   }); 
  





























// const productData=[];

// app.get('/', function (req, res) {
//   res.send('Hello World!')});

// app.post('/api/insert_product', function (req, res) {
//     var data = {
//         "id" : productData.length+1,
//         "name" :req.body.name,
//         "des" :req.body.des,
//         "price" :req.body.price,
//     }
//     productData.push(data);
//     const finaldata = productData

//     res.status(200).send({
//         "status_code" :200,
//         "message" : "product added successfully",
//         "data": finaldata,
//     })

    
    


// });

// app.get('/api/get_product', function (req, res) {

//   if(productData.length>0)
//   {
//     res.status(200).send({
//         "status_code" :200,
//         "message" : "list of products",
//         "data": productData,
//     })
// }
//     else
//     {
//         res.status(400).send({
//             "status_code" :400,
//             "message" : "didn't find any product",
//             "data": [],
//         })
//     }
  
// }); 

// app.post('/api/update_product:id', function (req, res) {

//     let id = req.params.id *1;
    
//     let producttoupdate = productData.find(p=>p.id == id);

//     let index = productData.indexOf(producttoupdate);

//     productData[index]=req.body;

    
//     res.status(200).send({
//         "status_code" :"success",
//         "message" : "product updated successflly", 

//     })
    
//   }); 

//   app.post('/api/delete:id', function (req, res) {

//     let id = req.params.id *1;
    
//     let producttoupdate = productData.find(p=>p.id == id);

//     let index = productData.indexOf(producttoupdate);

//     productData.splice(index,1);

    
//     res.status(204).send({
//         "status_code" :"success",
//         "message" : "product deleted successflly", 

//     })
    
//   }); 

