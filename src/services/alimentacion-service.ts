import { TYPE_ALIMENTACION,Alimentacion } from "./models/alimentacion"
import 'rxjs/add/operator/mergeMap';
import { Observable } from 'rxjs/Observable';
import { DBConnection } from './db-connection';


export class AlimentacionService {

    private static _instance: AlimentacionService;
    static get instance(): AlimentacionService {
        if (AlimentacionService._instance == undefined) {
            AlimentacionService._instance = new AlimentacionService(DBConnection.instance);
        }
        return AlimentacionService._instance;
    }

    constructor(private db: DBConnection) { }

    getAll(){
        return this.db.ListByType(TYPE_ALIMENTACION);
    }

    insert(alimentacion: Alimentacion) {
        return this.db.insert(alimentacion);
    }

    update(id: string, alimentacion: Alimentacion) {
        return this.db.replace(id, alimentacion);
    }

    getById(id: string) {
        return this.db.getById<Alimentacion>(id);
    }

}