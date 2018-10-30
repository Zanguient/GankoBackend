import { TYPE_VACUNA,Vacuna } from "./models/vacunas";
import 'rxjs/add/operator/mergeMap';
import { Observable } from 'rxjs/Observable';
import { DBConnection } from './db-connection';
import { toDate } from "../util/date-util";


export class VacunaService {

    private static _instance: VacunaService;
    static get instance(): VacunaService {
        if (VacunaService._instance == undefined) {
            VacunaService._instance = new VacunaService(DBConnection.instance);
        }
        return VacunaService._instance;
    }

    constructor(private db: DBConnection) { }

    getAll() {
        return this.db.ListByType(TYPE_VACUNA);
    }

    getByIdBovino(idBovino:string){
        return this.db.ListByType(TYPE_VACUNA,"ANY bovino in bovinos SATISFIES bovino = $1 END",[idBovino])
    }

    insert(registroVacunas: Vacuna) {
        toDate(registroVacunas, 'fecha', 'fechaProxima');
        return this.db.insert(registroVacunas);
    }

    update(id: string, registroVacunas: Vacuna) {
        toDate(registroVacunas, 'fecha', 'fechaProxima');
        return this.db.replace(id, registroVacunas);
    }

    getById(id: string) {
        return this.db.getById<Vacuna>(id);
    }
    delete(id:string){
        return this.db.remove(id);
    }
    getByIdFincaReciente(idFinca: string) {
        return this.db.ListByType(TYPE_VACUNA, "idFinca = $1 ORDER BY fecha DESC", [idFinca])
    }
    getByIdFincaProximos(idFinca: string){
        return this.db.ListByType(TYPE_VACUNA, "idFinca = $1 AND fechaProxima IS NOT NULL AND fechaProxima IS NOT MISSING AND SUBSTR(fechaProxima,0,10) >= SUBSTR(NOW_STR(),0,10) AND estadoProximo = 0", [idFinca])
    }
    getByIdFincaPendientes(idFinca: string){
        return this.db.ListByType(TYPE_VACUNA, "idFinca = $1 AND fechaProxima IS NOT NULL AND fechaProxima IS NOT MISSING AND SUBSTR(fechaProxima,0,10) < SUBSTR(NOW_STR(),0,10) AND estadoProximo = 0", [idFinca])
    }
}