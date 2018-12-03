import 'rxjs/add/operator/mergeMap';
import { toDate } from "../util/date-util";
import { Leche, TYPE_LECHE } from "./models/leche";
import { DBHandler, DBConnection } from './database/db-handler';
import { Q } from './database/query-builder';


export class LecheService {

    private static _instance: LecheService;
    static get instance(): LecheService {
        if (LecheService._instance == undefined) {
            LecheService._instance = new LecheService(DBConnection.instance);
        }
        return LecheService._instance;
    }

    constructor(private db: DBHandler) { }

    getAll() {
        return this.db.listByType(TYPE_LECHE);
    }

    getAllByIdFInca(idFinca:string) {
        return this.db.listByType(TYPE_LECHE, Q().equalStr("idFarm", idFinca).orderDesc("fecha"));
    }

    insert(produccion: Leche) {
        toDate(produccion, 'fecha');
        return this.db.insert(produccion);
    }

    update(id: string, produccion: Leche) {
        toDate(produccion, 'fecha');
        return this.db.replace(id, produccion);
    }

    getById(id: string) {
        return this.db.byId<Leche>(id);
    }

    delete(id:string){
        return this.db.remove(id);
    }

}