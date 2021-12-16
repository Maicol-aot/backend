const UsersController = require('./UsersController');
const EventosController = require('./EventosController');
const TicketController = require('./TicketController');
const EquiposController = require('./EquiposController');

//Exporta todos los controladores dentro de una funcion para que los utilice el app.js
exports.registrarControladores = (app) => {

    app.use('/', EventosController);
    app.use('/', UsersController);
    app.use('/', EquiposController);
    app.use('/', TicketController);
};