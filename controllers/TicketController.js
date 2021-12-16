const express = require("express");
const { Ticket } = require("../models/Ticket");
const router=express.Router();

//Creacion del usuario
router.post('/generarTicket', async (request, response)=>{

    /*const ticket = request.json();

    console.log(ticket);*/

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