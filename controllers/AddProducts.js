const db = require("../config/database");

//create product 
const createProduct =async (req,res)=>{
    try{
        const {p_name,p_price,p_quantity} = req.body;
        if(!p_name || !p_price || !p_quantity)
        {
            return   res.status(500).send({
                success:false,
                " " : "Please Provide all feilds",
            })
        } 
        const query =`INSERT INTO nodejsapis( p_name, p_price, p_quantity) VALUES (? ,? ,?)`
        const data =  await db.query(query,[p_name,p_price,p_quantity]);
        
        if(data[0].affectedRows ===0)
        {
            return res.status(404).send({
                success:false,
                "message" : "data didn't insert",
            })
        }
        console.log(req.body) 
        res.status(201).send({
            success:true,
            "message" : "new product inserted successfully",
        })
        

    }catch(err)
    {
        console.log(err)
        res.status(500).send({
            success:false,
            "message" : "error in creating product ",
            error
            
        })
    }
    
}
module.exports={createProduct}