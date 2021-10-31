var con = require('../config/conexion')
var simuladorModel = require('../model/simuladorModel')
var swal = require('sweetalert');

module.exports = {
    index:function(req, res){
        res.render('simulador/index', { title: 'Simulator' });
    },
    inicioSesion:function(req,res){
        simuladorModel.inicioSesion(con, function(err,datos){
            if (!err) {
                //console.log(datos);
                res.render('simulador/inicioSesion',{ tittle: 'Iniciar Sesion' });
            } else {
                console.log("Error de: "+err);
            }
        });
    },
    registro:function(req,res){
        simuladorModel.registro(con, function(err,datos){
            

            if (!err) {
                //console.log(datos);
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
        await simuladorModel.registroBD(con, newRegistro, function(err, datos){
            if (!err) {
                alert("Ha sido registrado satisfactoriamente");
        
                res.render('simulador/inicioSesion',{ tittle: 'Iniciar Sesion' });
            } else {
                console.log("Error de: "+err);
            }
        });
        
        

    },
    simulador:function(req,res){
        simuladorModel.simulador(con, function(err,datos){
            

            if (!err) {
                console.log(datos);
                res.render('simulador/simulador',{ tittle: 'Simulador' });
            } else {
                console.log("Error de: "+err);
            }
        });
        //res.send('recibido');
    }
}