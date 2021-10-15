const mysql = require('mysql');
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'dbcontainer'
    
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