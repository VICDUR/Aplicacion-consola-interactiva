require('colors');

const mostratMneu = ( ) => {

    
    return new Promise ( resolve => {

        console.clear();
    
        console.log('==========================='.green);
        console.log('   Seleccione una opción   '.green);
        console.log('===========================\n'.green);
    
    
        console.log(`${'1.'.green} Crear tarea`)
        console.log(`${'2.'.green} Listar tareas`)
        console.log(`${'3.'.green} listar tareas completadas`)
        console.log(`${'4.'.green} listar tareas pendientes`)
        console.log(`${'5.'.green} Completar tarea(s)`)
        console.log(`${'6.'.green} Borrar tarea`)
        console.log(`${'0.'.green} Salir Tarea \n`)
    
    
        // preparar la interface que le voy a presentar al usuario
    
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readline.question('Seleccione una opción: ', ( opt ) => {
            readline.close();
            resolve(opt)
        })
    })


};


const pausa = () => {

    return new Promise ( resolve => {

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readline.question(`\nPresiones ${'ENTER'.red} para continuar\n`, ( opt ) => {
            readline.close();
            resolve()
        })
    })


}

module.exports = {
    mostratMneu,
    pausa,

};