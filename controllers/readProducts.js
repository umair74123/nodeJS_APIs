const db = require("../config/database");



//function to get all products
const productlist = async (req,res)=>{
    try{
        const query = `select * from nodejsapis`;
       const data = await  db.pool.query(query );
        
            if(!data[0] || data[0].length ===0)
            {
                return res.status(404).send({
                    success:false,
                    "message" : "didn't find any product",
                    "data": [],
                })
            }
                console.log("result is ".bgMagenta.blue, data[0]);
               
                  res.status(200).send({
                    success:true,
                    totalStudent : data[0].length,
                      message : "list of products",
                      data : data[0]
                  })     
            }
    catch(error)
    {
        console.log(error);
        res.status(500).send({
            success:false,
            "message" : "error in getting productlist",
            error: error
            
        })
    }
};

const onlyproductlist = async (req, res) => {
    try {
        const productID = req.params.id;
        if (!productID) {
            return res.status(400).send({
                success: false,
                message: "Please provide a product ID",
            });
        }

        const query = `SELECT * FROM nodejsapis WHERE id = ?`;
        const data = await db.query(query, [productID]);
        console.log(data[0].length);
        if (!data[0] || data[0].length === 0) {
            return res.status(404).send({
                success: false,
                message: "No record found for the provided ID",
            });
        }

        console.log("Result:", data[0]);
        return res.status(200).send({
            success: true,
            message: "Record found",
            data: data[0],
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "Error in getting product by ID",
            error: error,
        });
    }
};




module.exports = {productlist,onlyproductlist};