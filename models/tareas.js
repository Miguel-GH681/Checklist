import { Tarea } from "./tarea.js"
import  colors  from 'colors';

export class Tareas{

    get obtenerTareas(){    
        const listado = [];
        Object.keys(this._listado).forEach( key => {
            const tarea = this._listado[key];
            listado.push(tarea);
        });

        return listado;
    }

    constructor(){
        this._listado = {};
    }

    cargarTareasDb(tareas = []){
        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea;
        });
    }

    eliminarTarea(id= ''){
        if( this._listado[id] ){
            delete this._listado[id];
        }
    }

    crearTarea( description = '' ){
        const tarea = new Tarea(description);
        this._listado[tarea.id] = tarea;
    }

    toggleCompletadas( ids = []){
        ids.forEach(id=>{
            const tarea = this._listado[id];
            if(!tarea.completed){
                tarea.completed = new Date().toISOString();
            }
        })

        this.obtenerTareas.forEach(tarea=>{
            if(!ids.includes(tarea.id)){
                this._listado[tarea.id].completed = null;
            }
        })
    }

    listarTareas(){
        this.obtenerTareas.forEach( (tarea, index) =>{
            const completed = tarea.completed ? 'Completada'.green : 'Pendiente'.red;
            console.log(`${colors.red(index+1) }. ${ colors.blue(tarea.description)} :: ${completed}`);
        })
    }

    listarTareasPC( opcion = true ){
        this.obtenerTareas.forEach( (tarea, index)=>{
            if(opcion && tarea.completed){
                console.log(`${colors.red(index + 1)}. ${tarea.description}`);
            } else if(!opcion && !tarea.completed){
                console.log(`${colors.red(index + 1)}. ${tarea.description}`);
            }
        });
    }
}