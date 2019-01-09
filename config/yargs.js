const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

const completado = {
    alias: 'c',
    default: true
};

const argv = require('yargs')
    .command('crear', 'Crea una nueva tarea en la lista de tareas', {
        descripcion
    })
    .command('actualizar', 'Actualiza una tarea existente', {
        descripcion,
        completado
    })
    .command('borrar', 'Borrar tarea', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}