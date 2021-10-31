var express = require('express');
var router = express.Router();
const simuladorController = require("../controllers/simuladorController");

/* GET home page. */
router.get('/', simuladorController.index);
/* router.get('/inicioSesion',simuladorController.inicioSesion);
router.get('/registro', simuladorController.registro);
router.post('/registro', simuladorController.registroBD);
router.get('/simulador', simuladorController.simulador); */


module.exports = router;
