import { Produccion,TYPE_PROD_LECHE } from "./models/produccion";
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
        return this.db.ListByType(TYPE_PROD_LECHE);
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

    getByIdBovino(idBovino: string) {
        return this.db.ListByType<Produccion>(TYPE_PROD_LECHE,"ANY bovino in Produccion.bovinos SATISFIES bovino = $1",[idBovino]);
    }

    delete(id:string){
        return this.db.remove(id);
    }

}