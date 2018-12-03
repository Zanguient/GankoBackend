import 'rxjs/add/operator/mergeMap';
import { toDate } from "../util/date-util";
import { Produccion, TYPE_PROD_LECHE } from "./models/produccion";
import { DBConnection, DBHandler } from './database/db-handler';
import { Q } from './database/query-builder';


export class ProduccionService {

    private static _instance: ProduccionService;
    static get instance(): ProduccionService {
        if (ProduccionService._instance == undefined) {
            ProduccionService._instance = new ProduccionService(DBConnection.instance);
        }
        return ProduccionService._instance;
    }

    constructor(private db: DBHandler) { }

    getByIdBovino(idBovino: string) {
        return this.db.listByType(TYPE_PROD_LECHE,Q().equalStr("bovino", idBovino));
    }

    getAll() {
        return this.db.listByType(TYPE_PROD_LECHE);
    }

    insert(produccion: Produccion) {
        toDate(produccion, 'fecha');
        return this.db.insert(produccion);
    }

    update(id: string, produccion: Produccion) {
        toDate(produccion, 'fecha');
        return this.db.replace(id, produccion);
    }

    getById(id: string) {
        return this.db.byId<Produccion>(id);
    }
    delete(id:string){
        return this.db.remove(id);
    }

}