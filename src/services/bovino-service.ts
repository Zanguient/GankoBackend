import { DatabaseService } from './database-service'
import 'rxjs/add/operator/mergeMap';
import { Observable } from 'rxjs/Observable';


const table = "bovino"

export class BovinoService extends DatabaseService {

    //permite recuperar los bovinos pertenecientes a un usuario o finca
    findBovinos(id_finca: string) {
        return this.query<Bovino>(`SELECT * FROM ${table} WHERE finca = ?`, [id_finca]);
    }
}

export class Bovino {
    constructor(public name: string,
        public location: string,
        public size: string,
        public user: number) { }
}

export const bovinoService: BovinoService = new BovinoService();