import { Sanidad,TYPE_SANIDAD } from "./models/sanidad";
import 'rxjs/add/operator/mergeMap';
import { Observable } from 'rxjs/Observable';
import { DBConnection } from './db-connection';
import { toDate } from "../util/date-util";


export class SanidadService {

    private static _instance: SanidadService;
    static get instance(): SanidadService {
        if (SanidadService._instance == undefined) {
            SanidadService._instance = new SanidadService(DBConnection.instance);
        }
        return SanidadService._instance;
    }

    constructor(private db: DBConnection) { }

    getAll() {
        return this.db.ListByType(TYPE_SANIDAD);
    }

    getAllByIdBovino(idBovino:string){
        return this.db.ListByType(TYPE_SANIDAD,"ARRAY_CONTAINS(bovinos, $1)",[idBovino]);
    }

    insert(registroSanidad: Sanidad) {
        toDate(registroSanidad, 'fecha', 'fechaProxima');
        return this.db.insert(registroSanidad);
    }

    update(id: string, registroSanidad: Sanidad) {
        toDate(registroSanidad, 'fecha', 'fechaProxima');
        return this.db.replace(id, registroSanidad);
    }

    getById(id: string) {
        return this.db.getById<Sanidad>(id);
    }
    delete(id:string){
        return this.db.remove(id);
    }
    getByIdFincaReciente(idFinca: string) {
        return this.db.ListByType(TYPE_SANIDAD, "idFinca = $1 ORDER BY fecha DESC", [idFinca])
    }
    getByIdFincaProximos(idFinca: string){
        return this.db.ListByType(TYPE_SANIDAD, "idFinca = $1 AND fechaProxima IS NOT NULL AND fechaProxima IS NOT MISSING AND SUBSTR(fechaProxima,0,10) >= SUBSTR(NOW_STR(),0,10) AND estadoProximo = 0 ORDER BY fechaProxima ASC", [idFinca])
    }
    getByIdFincaPendientes(idFinca: string){
        return this.db.ListByType(TYPE_SANIDAD, "idFinca = $1 AND fechaProxima IS NOT NULL AND fechaProxima IS NOT MISSING AND SUBSTR(fechaProxima,0,10) < SUBSTR(NOW_STR(),0,10) AND estadoProximo = 0 ORDER BY fechaProxima ASC", [idFinca])
    }
}