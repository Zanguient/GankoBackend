import { DatabaseService } from './database-service'
import 'rxjs/add/operator/mergeMap';
import { Observable } from 'rxjs/Observable';


const table = "finca"

export class FincaService extends DatabaseService {

    //permite recuperar las fincas pertenecientes a un usuario
    findFincas(id: string) {
        return this.query<Finca>(`SELECT * FROM ${table} WHERE usuario = ?`, [id]);
    }
}

export class Finca {
    constructor(public name: string,
        public location: string,
        public size: string,
        public user: number) { }
}

export const fincaService: FincaService = new FincaService();