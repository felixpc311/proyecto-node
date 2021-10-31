const con = require('../config/conexion');

const getALL = () =>{
    return new Promise((resolve, reject) => {
        con.query('SELECT * FROM tblcliente', (err, rows) =>{
            
            if (err) {
                console.log(`error ${err}`)
                reject (err)
            } else {
                console.log(rows)
                resolve(rows)
                
            }
        });

    });
};

/*Registro de usuarios*/
const insert = ({ nombres_usuario, apellidos_usuario, numero_celular, email_usuario , contrasena_usuario }) => {
    return new Promise((resolve, reject) => {
        con.query('INSERT INTO tblcliente ( nombres_usuario , apellidos_usuario , numero_celular , email_usuario , contrasena_usuario ) VALUES (? , ? , ? , ? , ?)', [ nombres_usuario , apellidos_usuario , numero_celular , email_usuario , contrasena_usuario ],  (err, result) => {
            if (err) reject (err)
            if (result) {
                resolve(result)
            };

        });
    });

};

/*Obtener usuarios por su Email */
const getByEmail = (email_u) => {
    return new Promise ((resolve, reject) => {
        con.query('SELECT * FROM tblcliente WHERE email_usuario = ?', [email_u], (err, rows) =>{
            if (err) reject (err)
            resolve(rows)

        });
    });

};

const getById = (idCliente) =>{
    return new Promise((resolve, reject) =>{
        con.query('SELECT * FROM tblcliente WHERE idCliente = ?', [idCliente], (err, rows)=>{
            if (err) {
                reject (err)
            } else {
                console.log(typeof rows)
                console.log(rows)
                resolve(rows)
            }
        });
    });
};

module.exports = {
    getALL: getALL,
    insert: insert,
    getByEmail: getByEmail,
    getById: getById
};

/* const { registro } = require("../controllers/simuladorController");
const bycriptjs = require('bcryptjs');

module.exports={
    obtener:function(conexion, funcion){
        conexion.query("SELECT * FROM tblcliente", funcion);
    },
    inicioSesion:function(conexion, funcion){
        conexion.query("SELECT * FROM tblcontenedor", funcion);
    },
    registro:function(conexion, funcion){
        conexion.query("SELECT * FROM tblcliente", funcion);
        

    },
    registroBD:function(conexion, newRegistro, funcion){
        conexion.query('INSERT INTO tblcliente SET ?', [newRegistro], funcion);
        

    },
    simulador:function(conexion, funcion){
        conexion.query("SELECT * FROM tblcontenedor", funcion);
    },
    
}
 */

