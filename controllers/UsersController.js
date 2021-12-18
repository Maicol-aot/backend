const express = require("express");
const { User } = require("../models/User");  //Importa el esquema de usuarios
const { validarUsuario } = require('../utils/authUtils');
const router=express.Router();

//Creacion del usuario
router.post('/registro', async (request, response)=>{
    const usr = new User(request.body);
    try {
        await usr.save();
        response.send({"mensaje" : "Usuario registrado con exito." });        
    } catch (error) {
        response.status(500).send("Ocurrió un error en la base de datos de usuarios.");
        console.log(error);
    }
});

//Json del cuerpo de la peticion para iniciar sesion
//(username: xxxxxx, password xxxx)
router.post('/login', async (request, response)=>{
    try {
        const { refreshToken, accesToken } = await validarUsuario(request.body);
        console.log("Respondiendo inicio de sesión.");
        response.cookie('RTC',refreshToken, { httpOnly: true })
            .json({ token: accesToken });
        console.log("Usuario ingreso con exito")
    } catch (error) {
        console.log("Error al iniciar sesion");
        console.log(error);
        response.status(403).send("Nombre de usuario o contraseña incorrecta.");
    }
});

router.get('/listaUsuarios', async (request, response) =>{

    try {
        
        const datosU = await User.find().exec();
        response.send(datosU);
        console.log("se recibieron los datos");

    }catch (e) {
        response.status(500).send("Ocurrió un error al intentar la conexión con la base de datos");
        console.log(e);
        await cerrarMongoDB();
    }
        
});


module.exports = router;