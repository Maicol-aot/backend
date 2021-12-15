const UsersController = require('./UsersController');

exports.registrarControladores = (app) => {
    //De esta forma aseguro todos los metodos del controlador de proyectos
    //app.use('/projects', authGuard, ProjectsController);
    app.use('/users', UsersController);
}