const express = require("express");
const { User } = require("../models/User");  //Importa el esquema de usuarios
const { validarUsuario } = require('../utils/authUtils');
const router=express.Router();

//Creacion del usuario
router.post('/registro', async (request, response)=>{
    const usr = new User(request.body);
    console.log(usr)
    try {
        await usr.save();
        
        response.json({mensaje : "Usuario registrado con exito." });     
           
    } catch (error) {
        response.status(500).json({mensaje:"Ocurrió un error en la base de datos de usuarios."});
        console.log(error);
    }
});

//Json del cuerpo de la peticion para iniciar sesion
//(username: xxxxxx, password xxxx)
router.post('/login', async (request, response)=>{

    try {

        const { refreshToken, accesToken } = await validarUsuario(request.body);
        const usr = await validarUsuario(request.body);
        const rol = usr.rol;
        console.log("Respondiendo inicio de sesión.");
        
        //Dependiendo del tipo de usuario que sea va a enviar un status code diferente
        //StatusCode 200 == Usuario
        //StatusCode 201 == Administrador
        if(rol == 'user'){ 
            response.status(200).json({ token: accesToken }); 
        }else if(rol == 'admin'){
            response.status(201).json({ token: accesToken }); 
        }
        
    } catch (error) {
        console.log("Error al iniciar sesion");
        console.log(error);
        response.status(403).json({mensaje: "Nombre de usuario o contraseña incorrecta."});
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