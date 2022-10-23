import { inquirerMenu, confirmation, getDescription } from './helpers/menu.js';
import { Tareas } from './models/tareas.js';
import { guardarTarea } from './helpers/mapper.js';


const main = async ()=>{
    let opcion = '';
    const tareas = new Tareas();

    do {
        opcion = await inquirerMenu();
        switch(opcion){
            case '1':
                const description = await getDescription('descripcion: ');
                tareas.crearTarea(description);
                guardarTarea(tareas.obtenerTareas);
            break;
            case '2':
                console.log( tareas.obtenerTareas);
            break;
        }

        await confirmation();
    } while(opcion !== '0')
}

main();