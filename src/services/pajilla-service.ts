import 'rxjs/add/operator/mergeMap';
import { Straw, TYPE_PAJILLA } from "./models/pajilla";
import { DBConnection, DBHandler } from './database/db-handler';
import { Q } from './database/query-builder';


export class PajillaService {

    private static _instance: PajillaService;
    static get instance(): PajillaService {
        if (PajillaService._instance == undefined) {
            PajillaService._instance = new PajillaService(DBConnection.instance);
        }
        return PajillaService._instance;
    }

    constructor(private db: DBHandler) { }

    getAll() {
        return this.db.listByType(TYPE_PAJILLA);
    }

    getAllByIdFinca(idFinca: string, q: string) {

        let where = Q().equalStr("idFarm", idFinca);
        if (q) {
            const qy = q.toLowerCase();
            where = where.andExp(Q().likeEnd("bread", qy).or().likeEnd("idStraw", qy))            
        }
        return this.db.listByType(TYPE_PAJILLA, where);
    }

    insert(pajilla: Straw) {
        return this.db.insert(pajilla);
    }

    update(id: string, pajilla: Straw) {
        return this.db.replace(id, pajilla);
    }

    getById(id: string) {
        return this.db.byId<Straw>(id);
    }
    delete(id: string) {
        return this.db.remove(id);
    }

}