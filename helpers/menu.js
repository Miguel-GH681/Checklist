import inquirer from 'inquirer';
import color from 'colors';

const menuOptions = [{
    type: 'list',
    name: 'option',
    message: '¿Qué desea hacer?',
    choices: [{
        value: '1',
        name: `${ color.yellow(1.) } Crear tarea.`
    },
    {
        value: '2',
        name: `${ color.yellow(2.) } Listar tareas.`
    },
    {
        value: '3',
        name: `${ color.yellow(3.) } Listar tareas pendientes.`
    },
    {
        value: '4',
        name: `${ color.yellow(4.) } Listar tareas completadas.`
    },
    {
        value: '5',
        name: `${ color.yellow(5.) } Completar tarea(s).`
    },
    {
        value: '6',
        name: `${ color.yellow(6.) } Eliminar Tarea.`
    },
    {
        value: '0',
        name: `${ color.yellow(0.) } Salir.`
    }]
}]

const confirmationAlert = [{
    type: 'input',
    name: 'confirmacion',
    message: 'Presione enter para continuar'
}]

export const inquirerMenu = async ()=>{
    console.clear();
    console.log(`${'========================'.yellow}`);
    console.log(`${'='.yellow}    ${'Tareas Diarias'.blue}    ${'='.yellow}`);
    console.log(`${'========================'.yellow}`);

    const { option } = await inquirer.prompt(menuOptions);
    return option;
}

export const confirmation = async ()=>{
    await inquirer.prompt(confirmationAlert);
}

export const getDescription = async (message)=>{
    const question = [{
        type: 'input',
        name: 'description',
        message,
        validate(value){
            if(!value){
                return 'Por favor llene el campo';
            }
            return true
        }
    }]

    const { description } = await inquirer.prompt(question);
    return description;
}

export const tareasMenu = async (tareas = [])=>{

    const choices = tareas.map((tarea, index)=>{
        return {
            value: tarea.id,
            name: `${index + 1}. ${tarea.description}`
        }
    })

    choices.unshift({
        value: '0',
        name: '0. Salir'
    })

    const question = [{
        type: 'list',
        name: 'id',
        message: '¿Qué tarea desea eliminar?',
        choices
    }]

    const { id } = await inquirer.prompt(question);
    return id;
}

export const confirmarEliminacion = async (message = '')=>{
    const question = [{
        type: 'confirm',
        name: 'ok',
        message
    }]

    const { ok } = await inquirer.prompt(question);
    return ok
}

export const completarTareas = async ( tareas = [] )=>{
    const choices = tareas.map( (tarea, index)=>{
        return {
            value: tarea.id,
            name: `${index+1}. ${tarea.description}`,
            checked: tarea.completed ? true : false
        }
    })

    const pregunta = [
        {
            type: 'checkbox',
            name: 'id',
            message: 'Completar tarea(s).',
            choices
        }
    ]

    const { id } = await inquirer.prompt(pregunta);
    return id;
}