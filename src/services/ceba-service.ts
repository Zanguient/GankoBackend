import { TYPE_CEBA, Meat } from "./models/ceba";
import 'rxjs/add/operator/mergeMap';
import { Observable } from 'rxjs/Observable';
import { toDate } from "../util/date-util";
import { DBConnection, DBHandler } from "./database/db-handler";
import { Q } from "./database/query-builder";


export class CebaService {

    private static _instance: CebaService;
    static get instance(): CebaService {
        if (CebaService._instance == undefined) {
            CebaService._instance = new CebaService(DBConnection.instance);
        }
        return CebaService._instance;
    }

    constructor(private db: DBHandler) { }

    getAll() {
        return this.db.listByType(TYPE_CEBA);
    }

    getAllByIdBovino(idBovino: string) {
        return this.db.listByType(TYPE_CEBA, Q().equalStr("bovino", idBovino));
    }

    insert(ceba: Meat) {
        toDate(ceba, 'fecha');
        return this.db.insert(ceba);
    }

    update(id: string, ceba: Meat) {
        toDate(ceba, 'fecha');
        return this.db.replace(id, ceba);
    }

    getById(id: string) {
        return this.db.byId<Meat>(id);
    }
    delete(id: string) {
        return this.db.remove(id);
    }
    deleteByIdBovinoAndCeba(idBovino: string, idCeba: string) {
        return this.db.deleteByQuery(Q().equalStr("type", TYPE_CEBA).and().equalStr("id", idCeba).and().equalStr("bovino", idBovino))
            .then(() => idCeba);
    }

}