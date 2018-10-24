import {TYPE_CEBA,Meat } from "./models/ceba";
import 'rxjs/add/operator/mergeMap';
import { Observable } from 'rxjs/Observable';
import { DBConnection } from './db-connection';
import { toDate } from "../util/date-util";


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

    getAllByIdBovino(idBovino:string){
        return this.db.ListByType(TYPE_CEBA,"bovino = $1",[idBovino]);
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
        return this.db.getById<Meat>(id);
    }
    delete(id:string){
        return this.db.remove(id);
    }
    deleteByIdBovinoAndCeba(idBovino:string,idCeba:string){
        return this.db.deleteByQuery("type = $1 AND id = $2 AND bovino = $3",[TYPE_CEBA,idCeba,idBovino])
    }

}