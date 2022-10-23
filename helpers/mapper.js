import fs from 'fs';

const path = './db/tareas.json'

export const guardarTarea = ( data )=>{
    fs.writeFileSync(path, JSON.stringify( data ));
}

export const getTareas = ()=>{
    if(!fs.existsSync(path)){
        return null;
    } else{
        const data = fs.readFileSync(path, { encoding: 'utf-8'})
        const dataSerialized = JSON.parse(data);
        return dataSerialized;
    }
}