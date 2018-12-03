import { toDate } from "../util/date-util";
import { TYPE_VACUNA, Vacuna } from "./models/vacunas";
import { DBConnection, DBHandler } from "./database/db-handler";
import { Q } from "./database/query-builder";


export class VacunaService {

    private static _instance: VacunaService;
    static get instance(): VacunaService {
        if (VacunaService._instance == undefined) {
            VacunaService._instance = new VacunaService(DBConnection.instance);
        }
        return VacunaService._instance;
    }

    constructor(private db: DBHandler) { }

    getAll() {
        return this.db.listByType(TYPE_VACUNA);
    }

    getByIdBovino(idBovino: string) {
        return this.db.listByType(TYPE_VACUNA, Q().containsStr("bovinos", idBovino));
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
        return this.db.byId<Vacuna>(id);
    }
    delete(id: string) {
        return this.db.remove(id);
    }
    getByIdFincaReciente(idFinca: string) {
        return this.db.listByType(TYPE_VACUNA, Q().equalStr("idFinca", idFinca).orderDesc("fecha"));
    }
    getByIdFincaProximos(idFinca: string) {
        return this.db.listByType(TYPE_VACUNA, Q().equalStr("idFinca", idFinca).and().isNotNull("fechaProxima").and().isNotMissing("fechaProxima")
            .and().gteToday("fechaProxima").and().equalInt("estadoProximo", 0));
            
    }
    getByIdFincaPendientes(idFinca: string) {
        return this.db.listByType(TYPE_VACUNA, Q().equalStr("idFinca", idFinca).and().isNotNull("fechaProxima").and().isNotMissing("fechaProxima")
            .and().ltToday("fechaProxima").and().equalInt("estadoProximo", 0));
    }
}