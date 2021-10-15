const { registro } = require("../controllers/simuladorController");
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
        // const { nombres_usuario }
        /*const nombres_usuario = req.body.nombres_usuario;
        const apellidos_usuario = req.body.apellidos_usuario;
        const numero_celular = req.body.numero_celular;
        const email_usuario = req.body.email_usuario;
        const contrasena_usuario = req.body.contrasena_usuario;
        let passwordHaash = bcryptjw.hash(contrasena_usuario,8);

        await conexion.query("INSERT INTO tblcliente SET ?", (
            nombresCliente: nombres_usuario,
            apellidos: apellidos_usuario,
            telefonoCliente: numero_celular,
            emailCliente: email_usuario,
            contrasenaCliente: passwordHaash);*/

    },
    
}


