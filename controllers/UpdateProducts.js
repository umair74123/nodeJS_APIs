const db = require("../config/database");

//create product 
const updateProduct = async (req,res)=>{
    try{
        const productID = req.params.id
        console.log(productID)
        if(!productID)
        {
            return  res.status(500).send({
                success:false,
                "message" : "didnot find id ",
                error
                
            })
        }
        const {p_name,p_price,p_quantity} = req.body;
        if( !p_name || !p_price || !p_quantity)
        {
            return   res.status(500).send({
                success:false,
                " " : "Please Provide all feilds",
            })
        } 
        const query =`UPDATE nodejsapis SET p_name=? , p_price=? , p_quantity =?  WHERE id =?`
        const data = await db.query(query,[p_name,p_price,p_quantity,productID ]);
        
        if(!data[0] || data[0].affectedRows===0)
        {
            return res.status(404).send({
                success:false,
                "message" : "data didn't update",
                "reason":"invalid product ID"
            })
        }
        console.log(req.body) 
        res.status(201).send({
            success:true,
            "message" : "product Updated successfully",
        })
        

    }catch(err)
    {
        console.log(err)
        res.status(500).send({
            success:false,
            "message" : "error in updating product ",
            error
            
        })
    }
    
}
module.exports={updateProduct}