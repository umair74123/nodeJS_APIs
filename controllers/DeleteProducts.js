const db = require("../config/database");

//create product 
const deleteProduct = async (req,res)=>{
    try{
        const productID = req.params.id
        if(!productID)
        {
            return  res.status(500).send({
                success:false,
                "message" : "didnot find id ",
                error
                
            })
        }
    
        const query =`DELETE FROM nodejsapis WHERE id = ?`
        const data = await db.query(query,[productID]);
        if(!data || data[0].affectedRows===0)
        {
            return res.status(404).send({
                success:false,
                "message" : "product didn't delete",
                "reason":"invalid Product ID or ID not found"
            })
        }
        console.log(req.body)
        res.status(201).send({
            success:true,
            "message" : "product deleted successfully",
        })
        

    }catch(err)
    {
        console.log(err)
        res.status(500).send({
            success:false,
            "message" : "error in deleting product ",
            error
            
        })
    }
    
}
module.exports={deleteProduct}