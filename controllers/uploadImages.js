const multer = require("multer");
const path = require("path");
//storage engine
const storage = multer.diskStorage({
    destination: "./upload/images",
    filename: (req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

//upload image
const upload = multer({
    storage: storage,
    limits:{}
})
const uploadImage =(req,res)=>{
    console.log(req.file);
    return `http://localhost:2000/profile/${req.file.filename}`;
  
}

const uploadType = upload.single('p_image'); // Update 'image' to match your field name


module.exports={uploadImage,uploadType};
