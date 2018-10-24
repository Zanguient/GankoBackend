import { Produccion,TYPE_PROD_LECHE } from "./models/leche";
import 'rxjs/add/operator/mergeMap';
import { Observable } from 'rxjs/Observable';
import { DBConnection } from './db-connection';
import { toDate } from "../util/date-util";


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

    getAllByIdFInca(idFinca:string) {
        return this.db.ListByType(TYPE_PROD_LECHE,"idFarm = $1",[idFinca]);
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
        return this.db.getById<Produccion>(id);
    }

    getByIdBovino(idBovino: string) {
        return this.db.ListByType(TYPE_PROD_LECHE,"bovino = $1",[idBovino]);
    }

    delete(id:string){
        return this.db.remove(id);
    }

}