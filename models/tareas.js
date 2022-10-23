import { Tarea } from "./tarea.js"
import { getTareas } from "../helpers/mapper.js";

export class Tareas{

    listado = [];

    get obtenerTareas(){     

        if(getTareas()){
            this.listado = getTareas();

            const tarea = this._listado;
            this.listado.push(tarea);
            this._listado = {}

            return this.listado;

        } else {
            if(this._listado.id){
                const tarea = this._listado;
                this.listado.push(tarea);
                this._listado = {}
                return this.listado;
            } else{
                return this.listado;
            }
            
        }

        /*
        if(!getTareas()){
            Object.keys(this._listado).forEach( key=>{
                const tarea = this._listado[key];
                listado.push(tarea);
            });

            return listado;
        } else{
            listado = getTareas();
            return listado;
        }*/
    }

    constructor(){
        this._listado = {};
    }

    crearTarea( description = '' ){
        const tarea = new Tarea(description);
        this._listado[tarea.id] = tarea;
    }    
}