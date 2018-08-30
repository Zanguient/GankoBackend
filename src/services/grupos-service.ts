import { Produccion,TYPE_PROD_LECHE } from "./models/produccion";
import 'rxjs/add/operator/mergeMap';
import { Observable } from 'rxjs/Observable';
import { DBConnection } from './db-connection';
import { Group, TYPE_GRUPO } from "./models/grupos";


export class GruposService {

    private static _instance: GruposService;
    static get instance(): GruposService {
        if (GruposService._instance == undefined) {
            GruposService._instance = new GruposService(DBConnection.instance);
        }
        return GruposService._instance;
    }

    constructor(private db: DBConnection) { }

    getAll() {
        return this.db.ListByType(TYPE_PROD_LECHE);
    }

    getById(idGroup:string){
        return this.db.ListByType(TYPE_GRUPO,"id = $1",[idGroup]);
    }

    insert(grupo: Group) {
        return this.db.insert(grupo);
    }

    update(id: string, grupo: Group) {
        return this.db.replace(id, grupo);
    }

    getByIdFinca(idFinca: string) {
        return this.db.ListByType(TYPE_GRUPO,"finca = $1",[idFinca]);
    }

    getByIdBovino(idBovino: string) {
        return this.db.ListByType<Group>(TYPE_PROD_LECHE,"ANY bovino in Produccion.bovinos SATISFIES bovino = $1",[idBovino]);
    }

    delete(id:string){
        return this.db.remove(id);
    }

}