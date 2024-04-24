const multer = require("multer");

//error handler
function errHandler(err,req,res,next){
    if(err instanceof multer.MulterError)
    {
        res.json({
            success:false,
            message: err.message
        })
    }
}
module.exports=errHandler;