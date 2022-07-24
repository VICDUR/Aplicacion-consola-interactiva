import colors from 'colors';
import {guardarDB, lecturaDB} from './helpers/guardarArchivo.js';

import { confirmar, 
        inquirerMenu, 
        leerInput, 
        listadoTareasBorrar, 
        mostrarListadoCheckList, 
        pausa 
        } from './helpers/inquirer.js'

import Tareas from './models/tareas.js';


const main = async ()=>{

   
    let opt = '';
    //se genera una instancia de la clase Tarea 
    const tareilla = new Tareas();

    const tareasDB = lecturaDB();
    
    if ( tareasDB ) {
        tareilla.cargarTareas(tareasDB);
        // establecer tareas
    };

    do {

        // ----> crea el menu y espera la opcion que selecciona el susuario
        opt = await inquirerMenu() 
        // console.log({ opt })


        //---> validas los diferenyes casos del 0 al 6 y entra en uno de ellos
        switch (opt) {              
            case '1': // crear tarea
                // se espera el input "descripcion" de la que sera la nueva tarea 
                const desc = await leerInput('descripcion:');
                // se crea una nueva tarea llamando el metodo generado por la clase Tareas
                tareilla.crearTarea(desc);
                 break;

            case '2': // listar tarea
                tareilla.listadoCompleto();
                // console.log(tareilla.listadoArr)

                break;
            case '3': // listar completadas
               tareilla.listarPendientesCompletadas(true)
                break;

            case '4': //listar pendientes
                tareilla.listarPendientesCompletadas(false)
                break;
            
            case '5': // completado | pendiente
                const ids = await mostrarListadoCheckList( tareilla.listadoArr)
                tareilla.toggleCOmpletadas(ids);
                break;

            case '6': //borrar
                const id = await listadoTareasBorrar(tareilla.listadoArr);
                if(id !== '0'){
                    const ok = await  confirmar('¿Estas seguro?')
                    if (ok){
                        tareilla.borrarTarea(id);
                        console.log()
                        console.log(`tarea borrada exitosamente`.red)
                    }
                }

                break;
        
        }
        // se hacer persistencia de datos mediante la siguiente funcion.
         guardarDB( tareilla.listadoArr );
        
        // si es diferente a 0 prosigue continuar con el menu pidiendo input de tecla enter
        /* if ( opt !== '0') */ await pausa() 
    
    } while (opt !== '0'); 
     // --> mientras sea diferente a 0 entra y presenta el menu ...

    

}

main()
// se invoca la funcion 