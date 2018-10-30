import 'rxjs/add/operator/mergeMap';
import { toDate } from "../util/date-util";
import { DBConnection } from './db-connection';
import { Leche, TYPE_LECHE } from "./models/leche";


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
        return this.db.ListByType(TYPE_LECHE);
    }

    getAllByIdFInca(idFinca:string) {
        return this.db.ListByType(TYPE_LECHE,"idFarm = $1",[idFinca]);
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
        return this.db.getById<Leche>(id);
    }

    delete(id:string){
        return this.db.remove(id);
    }

}