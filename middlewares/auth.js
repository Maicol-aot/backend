const { verify }  = require('jsonwebtoken');

const authGuard = (_request, _respones, next) =>{
    const authorization = _request.headers.authorization;
    if (!authorization){
        _response.status(401).send("Usted no tiene permisos para acceder a esta accion");
    }else{
        try {
            console.log("Validando peticion" + authorization);
            const token = authorization.split(' ')[1];
            const datosToken = verify(token, process.env.JWT_ACCES_SECRET);
            _request.jwtData = datosToken;
            return next();
        } catch (error) {
            console.log(error);
            if(error.name = "TokenExpiredError"){
                _response.status(410).send('No se encuentra autenticado');
            }else{
                _response.status(401).send("Usted no tiene permisos para acceder a esta accion");
            }
            
        }
    }
}

exports.authGuard =authGuard;