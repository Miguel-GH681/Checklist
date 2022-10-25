import { inquirerMenu, tareasMenu, confirmation, confirmarEliminacion, getDescription, completarTareas } 
from './helpers/menu.js';
import { Tareas } from './models/tareas.js';
import { guardarTarea, getTareas } from './helpers/mapper.js';


const main = async ()=>{
    let opcion = '';
    const tareas = new Tareas();

    const tareasDb = getTareas();
    if(tareasDb){
        tareas.cargarTareasDb(tareasDb);
    }

    do {
        opcion = await inquirerMenu();
        switch(opcion){
            case '1':
                const description = await getDescription('descripcion: ');
                tareas.crearTarea(description);
                guardarTarea(tareas.obtenerTareas); 

            break;
            case '2':
                tareas.listarTareas()
            break;
            case '3':
                tareas.listarTareasPC(false);
            break;
            case '4':
                tareas.listarTareasPC(true);
            break;
            case '5':
                const ids = await completarTareas(tareas.obtenerTareas);
                tareas.toggleCompletadas(ids);
                guardarTarea(tareas.obtenerTareas);
            break;
            case '6':
                const id = await tareasMenu(tareas.obtenerTareas);
                if(id != '0'){
                    const confirmacion = await confirmarEliminacion('¿Está seguro de eliminar la tarea?');
                    if(confirmacion){
                        tareas.eliminarTarea(id);
                        guardarTarea(tareas.obtenerTareas);
                        console.log('Tarea eliminada correctamente');
                    }   
                }                  
            break;
        }

        await confirmation();
    } while(opcion !== '0')
}

main();