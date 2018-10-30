import { TYPE_ALIMENTACION, Alimentacion } from "./models/alimentacion"
import 'rxjs/add/operator/mergeMap';
import { Observable } from 'rxjs/Observable';
import { DBConnection } from './db-connection';
import { toDate } from "../util/date-util";


export class AlimentacionService {

    private static _instance: AlimentacionService;
    static get instance(): AlimentacionService {
        if (AlimentacionService._instance == undefined) {
            AlimentacionService._instance = new AlimentacionService(DBConnection.instance);
        }
        return AlimentacionService._instance;
    }

    constructor(private db: DBConnection) { }

    getAll() {
        return this.db.ListByType(TYPE_ALIMENTACION);
    }
    getAllByIdBovino(idBovino: string) {
        return this.db.ListByType(TYPE_ALIMENTACION, 'ARRAY_CONTAINS(bovinos, $1)', [idBovino]);
    }
    getById(idAlimentacion: string) {
        return this.db.getById<Alimentacion>(idAlimentacion);
    }
    getByIdFinca(idFinca: string) {
        return this.db.ListByType<Alimentacion>(TYPE_ALIMENTACION,"idFinca = $1",[idFinca] );
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