const mysql = require('mysql');
const con = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME
    
});
con.connect(
    (err) =>{
        if(!err){
            console.log('Conexion establecida');
        }
        else{
            console.log('Error de conexion'+err);
        }
    }
);

module.exports = con;