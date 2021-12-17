const express = require("express");
const { authGuard } = require('../middlewares/auth');
const { Eventos } = require("../models/Eventos"); //Importa el esquema eventos
const router=express.Router();

//Creacion de los eventos
router.post('/gestionarEventos', authGuard, async (request, response)=>{
    const eventos = new Eventos(request.body);
    try {
        await eventos.save();
        response.send({"mensaje" : "Evento creado con exito." });        
    } catch (error) {
        response.status(500).send("Ocurrió un error en la base de datos de usuarios.");
        console.log(error);
    }
});

router.get('/gestionarEventos', authGuard, async (request, response)=>{
    response.send("Lista de eventos");
});

module.exports = router;