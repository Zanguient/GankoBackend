import { Produccion,TYPE_PRODUCCION } from "./models/produccion";
import 'rxjs/add/operator/mergeMap';
import { Observable } from 'rxjs/Observable';
import { DBConnection } from './db-connection';


export class LecheService {

    private static _instance: LecheService;
    static get instance(): LecheService {
        if (LecheService._instance == undefined) {
            LecheService._instance = new LecheService(DBConnection.instance);
        }
        return LecheService._instance;
    }

    constructor(private db: DBConnection) { }

    getAll() {
        return this.db.ListByType(TYPE_PRODUCCION);
    }

    insert(produccion: Produccion) {
        return this.db.insert(produccion);
    }

    update(id: string, produccion: Produccion) {
        return this.db.replace(id, produccion);
    }

    getById(id: string) {
        return this.db.getById<Produccion>(id);
    }
    delete(id:string){
        return this.db.remove(id);
    }

}