import { v4 as uuidv4 } from 'uuid'

export class Tarea {
    id = '';
    description = '';
    completed = null;

    constructor( description ){
        this.description = description;
        this.id = uuidv4();
    }
}