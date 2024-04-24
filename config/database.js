const mysql =require("mysql2/promise");
const MySqlPool = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"", 
    database :"test",
    connectionLimit:10
})

// const MySqlPool = mysql.createPool({
//     host:"sql6.freesqldatabase.com",
//     user:"sql6700389",
//     password:"KGG2h1IiKm", 
//     database :"sql6700389",
//     port:3306,
//     connectionLimit:10
// })

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

