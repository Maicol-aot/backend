const UsersController = require('./UsersController');
const EventosController = require('./EventosController');
const TicketController = require('./EventosController');

exports.registrarControladores = (app) => {
    //De esta forma aseguro todos los metodos del controlador de proyectos
    app.use('/ticket', TicketController);
    app.use('/', EventosController);
    app.use('/', UsersController);
}