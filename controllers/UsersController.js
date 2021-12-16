const express = require("express");
const { User } = require("../models/User");  //Importa el esquema de usuarios
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

module.exports = router;