import {TYPE_CEBA,Ceba } from "./models/ceba";
import 'rxjs/add/operator/mergeMap';
import { Observable } from 'rxjs/Observable';
import { DBConnection } from './db-connection';


export class CebaService {

    private static _instance: CebaService;
    static get instance(): CebaService {
        if (CebaService._instance == undefined) {
            CebaService._instance = new CebaService(DBConnection.instance);
        }
        return CebaService._instance;
    }

    constructor(private db: DBConnection) { }

    getAll(){
        return this.db.ListByType(TYPE_CEBA);
    }

    insert(ceba: Ceba) {
        return this.db.insert(ceba);
    }

    update(id: string, ceba: Ceba) {
        return this.db.replace(id, ceba);
    }

    getById(id: string) {
        return this.db.getById<Ceba>(id);
    }

}