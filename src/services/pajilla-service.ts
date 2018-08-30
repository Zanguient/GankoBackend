import { Straw, TYPE_PAJILLA } from "./models/pajilla";
import 'rxjs/add/operator/mergeMap';
import { Observable } from 'rxjs/Observable';
import { DBConnection } from './db-connection';


export class PajillaService {

    private static _instance: PajillaService;
    static get instance(): PajillaService {
        if (PajillaService._instance == undefined) {
            PajillaService._instance = new PajillaService(DBConnection.instance);
        }
        return PajillaService._instance;
    }

    constructor(private db: DBConnection) { }

    getAll() {
        return this.db.ListByType(TYPE_PAJILLA);
    }

    getAllByIdFinca(idFinca:string,q:string) {
        return this.db.ListByType(TYPE_PAJILLA,"idFarm = $1 AND breed = $2 OR idStraw = $3",[idFinca,q,q]);
    }

    insert(pajilla: Straw) {
        return this.db.insert(pajilla);
    }

    update(id: string, pajilla: Straw) {
        return this.db.replace(id, pajilla);
    }

    getById(id: string) {
        return this.db.getById<Straw>(id);
    }
    delete(id:string){
        return this.db.remove(id);
    }

}