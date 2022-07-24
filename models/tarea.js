import { v4 as uudiv4  } from 'uuid';

class Tarea {

    id = '';
    desc = '';
    commpletadoEn = null;

    constructor( desc ){

        this.id = uudiv4();
        this.desc = desc;
        this.commpletadoEn = null

    }

}

export default Tarea;