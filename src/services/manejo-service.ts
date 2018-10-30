import { Manejo, TYPE_MANEJO } from "./models/manejo";
import 'rxjs/add/operator/mergeMap';
import { Observable } from 'rxjs/Observable';
import { DBConnection } from './db-connection';
import { toDate } from "../util/date-util";


export class ManejoService {

    private static _instance: ManejoService;
    static get instance(): ManejoService {
        if (ManejoService._instance == undefined) {
            ManejoService._instance = new ManejoService(DBConnection.instance);
        }
        return ManejoService._instance;
    }

    constructor(private db: DBConnection) { }

    getAll() {
        return this.db.ListByType(TYPE_MANEJO);
    }

    getAllByIdBovino(idBovino: string) {
        return this.db.ListByType(TYPE_MANEJO, 'ARRAY_CONTAINS(bovinos, $1)', [idBovino]);
    }

    insert(manejo: Manejo) {
        toDate(manejo, 'fecha', 'fechaProxima');
        return this.db.insert(manejo);
    }

    update(id: string, manejo: Manejo) {
        toDate(manejo, 'fecha', 'fechaProxima');
        return this.db.replace(id, manejo);
    }

    getById(id: string) {
        return this.db.getById<Manejo>(id);
    }

    getByIdFincaReciente(idFinca: string) {
        return this.db.ListByType(TYPE_MANEJO, "idFinca = $1 ORDER BY fecha DESC", [idFinca])
    }
    getByIdFincaProximos(idFinca: string){
        return this.db.ListByType(TYPE_MANEJO, "idFinca = $1 AND fechaProxima IS NOT NULL AND fechaProxima IS NOT MISSING AND SUBSTR(fechaProxima,0,10) >= SUBSTR(NOW_STR(),0,10) AND estadoProximo = 0 ORDER BY fechaProxima ASC", [idFinca])
    }
    getByIdFincaPendientes(idFinca: string){
        return this.db.ListByType(TYPE_MANEJO, "idFinca = $1 AND fechaProxima IS NOT NULL AND fechaProxima IS NOT MISSING AND SUBSTR(fechaProxima,0,10) < SUBSTR(NOW_STR(),0,10) AND estadoProximo = 0 ORDER BY fechaProxima ASC", [idFinca])
    }

    delete(id: string) {
        return this.db.remove(id);
    }

}