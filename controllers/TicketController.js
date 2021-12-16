const express = require("express");
const { Ticket } = require("../models/Ticket"); //Importa el esquema del ticket
const router=express.Router();

//Creacion del ticket
router.post('/generarTicket', async (request, response)=>{
    const ticket = new Ticket(request.body);
    try {
        await ticket.save();
        response.send({"mensaje" : "ticket generado con exito." });        
    } catch (error) {
        response.status(500).send("Ocurrió un error en la base de datos de usuarios.");
        console.log(error);
    }
});

module.exports = router;