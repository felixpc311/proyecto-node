var con = require('../config/conexion')
var simuladorModel = require('../model/simuladorModel')
var swal = require('sweetalert');

module.exports = {
    index:function(req, res){
        simuladorModel.obtener(con,function(err, datos){
            if (!err) {
                console.log(datos);
                res.render('simulador/index', { title: 'Simulator' });
            } else {
                console.log("Error de: "+err);
            }
        });
    },
    inicioSesion:function(req,res){
        simuladorModel.inicioSesion(con, function(err,datos){
            if (!err) {
                console.log(datos);
                res.render('simulador/inicioSesion',{ tittle: 'Iniciar Sesion' });
            } else {
                console.log("Error de: "+err);
            }
        });
    },
    registro:function(req,res){
        simuladorModel.registro(con, function(err,datos){
            

            if (!err) {
                console.log(datos);
                res.render('simulador/registro',{ tittle: 'Registro' });
            } else {
                console.log("Error de: "+err);
            }
        });
        //res.send('recibido');
    },
    registroBD:async function(req,res){
        const { nombres_usuario, apellidos_usuario, numero_celular, 
            email_usuario, contrasena_usuario } = req.body;
        const newRegistro = {
            nombres_usuario, apellidos_usuario, numero_celular, 
            email_usuario, contrasena_usuario
        };
        await con.query('INSERT INTO tblcliente SET ?', [newRegistro]);
        res.send('Ha sido registrado satisfactoriamente');
        //swal("Bien hecho!", "Su registro ha sido procesado!", "success");
        
        //res.send("Usuario guardado en la base de datos");
    }
}