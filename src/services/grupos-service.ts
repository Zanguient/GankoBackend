import 'rxjs/add/operator/mergeMap';
import { Group, TYPE_GRUPO } from "./models/grupos";
import { TYPE_PROD_LECHE } from "./models/produccion";
import { DBConnection, DBHandler } from './database/db-handler';
import { Q } from './database/query-builder';


export class GruposService {

    private static _instance: GruposService;
    static get instance(): GruposService {
        if (GruposService._instance == undefined) {
            GruposService._instance = new GruposService(DBConnection.instance);
        }
        return GruposService._instance;
    }

    constructor(private db: DBHandler) { }

    getAll() {
        return this.db.listByType(TYPE_PROD_LECHE);
    }

    getById(idGroup:string){
        return this.db.listByType(TYPE_GRUPO,Q().equalID(idGroup));
    }

    insert(grupo: Group) {
        return this.db.insert(grupo);
    }

    update(id: string, grupo: Group) {
        return this.db.replace(id, grupo);
    }

    getByIdFinca(idFinca: string) {
        return this.db.listByType(TYPE_GRUPO,Q().equalStr("finca", idFinca));
    }

    delete(id:string){
        return this.db.remove(id);
    }

}