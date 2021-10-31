const jwt = require('jwt-simple');
const moment = require('moment');
//const users = require('../models/users');

const checkToken = (req, res, next) => {
    console.log('Entrando a middleware');
    if(!req.headers['user_token']){
        return res.json({
            error: 'You must include the header'
        });
    }
    const token = req.headers['user_token'];
    let payload = null
    try {
        payload = jwt.decode(token, process.env.TOKEN_KEY)
        //console.log(payload);
    } catch (error) {
        return res.json({
            error: 'Invalid token'
        });
    }
    //console.log(moment().unix());
    //console.log(payload.expiredAt);
    if(moment().unix() > payload.expiredAt){
        return res.json({
            error: 'Expired token'
        });
    }
    //console.log('estoy aqui: ' + typeof(req) + req);
    //console.log('payload.userId vale: ' + payload.userId);
    req.idCliente = payload.userId;

    next();
        
    
    
};

module.exports = {
    checkToken: checkToken
}