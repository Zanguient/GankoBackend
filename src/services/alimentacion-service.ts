import 'rxjs/add/operator/mergeMap';
import { toDate } from "../util/date-util";
import { DBConnection, DBHandler } from "./database/db-handler";
import { Alimentacion, TYPE_ALIMENTACION } from "./models/alimentacion";
import { Q } from './database/query-builder';



export class AlimentacionService {

    private static _instance: AlimentacionService;
    static get instance(): AlimentacionService {
        if (AlimentacionService._instance == undefined) {
            AlimentacionService._instance = new AlimentacionService(DBConnection.instance);
        }
        return AlimentacionService._instance;
    }

    constructor(private db: DBHandler) { }

    getAll() {
        return this.db.listByType(TYPE_ALIMENTACION);
    }
    getAllByIdBovino(idBovino: string) {
        return this.db.listByType(TYPE_ALIMENTACION, Q().containsStr("bovinos", idBovino));
    }
    getById(idAlimentacion: string) {
        return this.db.byId<Alimentacion>(idAlimentacion);
    }
    getByIdFinca(idFinca: string) {
        return this.db.listByType<Alimentacion>(TYPE_ALIMENTACION,Q().equalStr("idFinca", idFinca));
    }
    insert(alimentacion: Alimentacion) {
        toDate(alimentacion, 'fecha');
        return this.db.insert(alimentacion);
    }

    update(id: string, alimentacion: Alimentacion) {
        toDate(alimentacion, 'fecha');
        return this.db.replace(id, alimentacion);
    }

    delete(id: string) {
        return this.db.remove(id);
    }

}