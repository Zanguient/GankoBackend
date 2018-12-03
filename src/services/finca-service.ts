import { Finca, TYPE_FINCA } from "./models/finca";
import 'rxjs/add/operator/mergeMap';
import { Observable } from 'rxjs/Observable';
import { Q } from "./database/query-builder";
import { DBHandler, DBConnection } from "./database/db-handler";


export class FincaService {

    private static _instance: FincaService;
    static get instance(): FincaService {
        if (FincaService._instance == undefined) {
            FincaService._instance = new FincaService(DBConnection.instance);
        }
        return FincaService._instance;
    }

    constructor(private db: DBHandler) { }

    getAll(user: string) {
        return this.db.listByType(TYPE_FINCA, Q().equalStr("usuarioId", user));
    }

    insert(finca: Finca) {
        return this.db.insert(finca);
    }

    update(id: string, finca: Finca) {
        return this.db.replace(id, finca);
    }

    getById(id: string) {
        return this.db.byId<Finca>(id);
    }
    delete(id: string) {
        return this.db.remove(id);
    }

}