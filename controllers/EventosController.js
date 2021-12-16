const express = require("express");
const { Eventos } = require("../models/Eventos");
const router=express.Router();

//Creacion del usuario
router.post('/gestionarEventos', async (request, response)=>{

    const eventos = new Eventos(request.body);
    try {
        await eventos.save();
        response.send({"mensaje" : "Evento registrado con exito." });        
    } catch (error) {
        response.status(500).send("Ocurrió un error en la base de datos de usuarios.");
        console.log(error);
    }
});

module.exports = router;