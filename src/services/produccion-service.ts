import { Produccion, TYPE_PRODUCCION } from "./models/produccion";
import 'rxjs/add/operator/mergeMap';
import { Observable } from 'rxjs/Observable';
import { DBConnection } from './db-connection';


export class ProduccionService {

    private static _instance: ProduccionService;
    static get instance(): ProduccionService {
        if (ProduccionService._instance == undefined) {
            ProduccionService._instance = new ProduccionService(DBConnection.instance);
        }
        return ProduccionService._instance;
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

}