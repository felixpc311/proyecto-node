var express = require('express');
var router = express.Router();
const Users = require('../model/simuladorModel');
const bcrypt = require('bcrypt');
const jwt = require('jwt-simple');
const moment = require('moment');
const middleware = require('./middleware');


/* GET users listing. */
router.get('/inicioSesion', async function(req, res) {
  const users = await Users.getALL();
  //res.json(users);
  //console.log(users);
  res.render('users/inicioSesion');
});

router.post('/inicioSesion', async (req, res) => {
  let user = await Users.getByEmail(req.body.email_usuario);
  console.log(typeof(user))
  if (user === undefined || user.length == 0) {
    res.json({
      error: 'Email or password not found 1.'
    });
  } else {
    const equals = bcrypt.compareSync(req.body.contrasena_usuario, user[0].contrasena_usuario);
    if (!equals) {
      res.json({error: 'Email or password not found 2'});
    } else {
      res.json({
        succesfull: createToken(user),
        done: 'Login correct'
      });
      //res.render('simulador/simulador');
    };      
  };
});

/* GET user register */
router.get('/registro', async (req, res) =>{
  res.render('users/registro');
});


/* POST user register */
router.post('/registro', async (req, res) =>{
  console.log (req.body);
  req.body.contrasena_usuario = bcrypt.hashSync(req.body.contrasena_usuario, 10);
  const result = await Users.insert(req.body);
  
  
  res.render('users/inicioSesion');
});

router.use(middleware.checkToken);

router.get('/mainUser', (req, res) =>{
  Users.getById(req.idCliente)
    .then(rows => {
      res.json(rows);
      console.log('Token verificado, puede acceder a la ruta mainUser');
    })
    .catch(err => console.log(err));
});

const createToken = (user) =>{
  //console.log(typeof (user));
  //console.log(user);
  let payload = {
    userId: user[0].idCliente,
    createdAt: moment().unix(),
    expiredAt: moment().add(600, 'seconds').unix()
  }
  //console.log(user[0].idCliente);
  return jwt.encode(payload, process.env.TOKEN_KEY);
};

module.exports = router;



/* var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
 */