import { Finca, TYPE_FINCA } from "./models/finca";
import 'rxjs/add/operator/mergeMap';
import { Observable } from 'rxjs/Observable';
import { DBConnection } from './db-connection';


export class FincaService {

    private static _instance: FincaService;
    static get instance(): FincaService {
        if (FincaService._instance == undefined) {
            FincaService._instance = new FincaService(DBConnection.instance);
        }
        return FincaService._instance;
    }

    constructor(private db: DBConnection) { }

    getAll(user: string) {
        return this.db.ListByType(TYPE_FINCA, "usuarioId = $1", [user]);
    }

    insert(finca: Finca) {
        return this.db.insert(finca);
    }

    update(id: string, finca: Finca) {
        return this.db.replace(id, finca);
    }

    getById(id: string) {
        return this.db.getById<Finca>(id);
    }
    delete(id: string) {
        return this.db.remove(id);
    }

}