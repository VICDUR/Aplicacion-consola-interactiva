import Tarea from "./tarea.js";


class Tareas {

    _listado = {};

    get listadoArr(){
        const listado = [];
        Object.keys(this._listado).forEach( key => {
            const addTarea = this._listado[key];
            listado.push(addTarea);
        })
        return listado;
    }


    constructor(){
        this._listado = {}
    }

    borrarTarea( id = ''){
        if (this._listado[id]){
            delete this._listado[id];
        }
    }

    cargarTareas(tareas = []){
        tareas.forEach( tarea => {
            this._listado[tarea.id] = tarea;
        })
    }

    crearTarea( desc = '' ){

        const tarea = new Tarea( desc )
        this._listado[tarea.id] = tarea

    }


    listadoCompleto(){
        console.log();
        this.listadoArr.forEach( (tarea, i ) => {
           
            const id = `${i + 1}`.green;
            const { desc, commpletadoEn } = tarea;

            const estado = commpletadoEn 
                            ? 'Completada'.green
                            : 'Pendiente'.red;

            console.log(`${id} ${desc} :: ${estado}`);      
        })

    }

    listarPendientesCompletadas ( completadas = true){

        console.log();
        let contador = 0;
        this.listadoArr.forEach( (tarea) => {
           
            const { desc, commpletadoEn } = tarea;
            let estado = commpletadoEn 
                            ? 'Completado'.green
                            : 'Pendiente'.red;
                                         
            if (completadas){
                // Mostrar completadas
                if(commpletadoEn){
                    contador += 1;
                    console.log(`${(contador + '.').green} ${desc} :: ${commpletadoEn.green}`);
                } 
            }else {              
                // Mostrar pendientes
                 if(!commpletadoEn){
                    contador += 1;
                    console.log(`${(contador + '.').green} ${desc} :: ${estado}`);
                }
            }

            })

    }

    toggleCOmpletadas( ids = [] ){
        ids.forEach( id => {

            const tarea = this._listado[id];

            if(!tarea.commpletadoEn){
                tarea.commpletadoEn = new Date().toISOString()
            }
        })

        this.listadoArr.forEach( tarea => {

            if ( !ids.includes(tarea.id) ) {
                this._listado[tarea.id].commpletadoEn = null;
            }

        });
    }


}


export default  Tareas;