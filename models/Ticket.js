const { Schema, model } = require("mongoose");

const ticketSchema = new Schema({

    ticketId:{
        type:Number,
        unique:true
    },
    usuarioId:{
        type:Number,
        required:true
    },
    montoApostado:{
        type:Number,
        required:true
    }
},{
    collection: 'Ticket'
});



exports.Ticket = model('Ticket', ticketSchema);
