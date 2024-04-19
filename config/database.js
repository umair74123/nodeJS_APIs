const mysql =require("mysql2/promise");
const MySqlPool = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"", 
    database :"test",
    connectionLimit:10
})


// pool.query('select * from nodejsapis' ,(err,result,feild)=>{
//     if(err)
//     {
//         console.log(err);
//     }
//     else
//     {
//         console.log(result);
//     }
// })
// pool.query(`select * from nodejsapis where id=?`,[1] ,(err,result,feild)=>{
//     if(err)
//     {
//         console.log(err);
//     }
//     else
//     {
//         console.log(result);
//     }
// })

module.exports=MySqlPool;

