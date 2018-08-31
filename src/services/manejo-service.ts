import { Manejo, TYPE_MANEJO } from "./models/manejo";
import 'rxjs/add/operator/mergeMap';
import { Observable } from 'rxjs/Observable';
import { DBConnection } from './db-connection';


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
        return this.db.ListByType(TYPE_MANEJO, "bovinos.id = $1", [idBovino]);
    }

    insert(manejo: Manejo) {
        return this.db.insert(manejo);
    }

    update(id: string, manejo: Manejo) {
        return this.db.replace(id, manejo);
    }

    getById(id: string) {
        return this.db.getById<Manejo>(id);
    }

    getByIdFincaReciente(idFinca: string) {
        return this.db.ListByType(TYPE_MANEJO, "idFinca = $1 ORDER BY fecha DESC", [idFinca])
    }
    getByIdFincaProximos(idFinca: string){
        return this.db.ListByType(TYPE_MANEJO, "idFinca = $1 AND  SUBSTR(fechaProxima,0,10) > SUBSTR(NOWS_STR(),0,10) AND estadoProximo = 0", [idFinca])
    }
    getByIdFincaPendientes(idFinca: string){
        return this.db.ListByType(TYPE_MANEJO, "idFinca = $1 AND  SUBSTR(fechaProxima,0,10) < SUBSTR(NOWS_STR(),0,10) AND estadoProximo = 0", [idFinca])
    }

    delete(id: string) {
        return this.db.remove(id);
    }

}