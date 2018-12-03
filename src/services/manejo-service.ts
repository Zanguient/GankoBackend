import 'rxjs/add/operator/mergeMap';
import { toDate } from "../util/date-util";
import { Manejo, TYPE_MANEJO } from "./models/manejo";
import { DBConnection, DBHandler } from './database/db-handler';
import { Q } from './database/query-builder';


export class ManejoService {

    private static _instance: ManejoService;
    static get instance(): ManejoService {
        if (ManejoService._instance == undefined) {
            ManejoService._instance = new ManejoService(DBConnection.instance);
        }
        return ManejoService._instance;
    }

    constructor(private db: DBHandler) { }

    getAll() {
        return this.db.listByType(TYPE_MANEJO);
    }

    getAllByIdBovino(idBovino: string) {
        return this.db.listByType(TYPE_MANEJO, Q().containsStr("bovinos", idBovino));
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
        return this.db.byId<Manejo>(id);
    }

    getByIdFincaReciente(idFinca: string) {
        return this.db.listByType(TYPE_MANEJO, Q().equalStr("idFinca", idFinca).orderDesc("fecha"))
    }
    getByIdFincaProximos(idFinca: string){
        return this.db.listByType(TYPE_MANEJO, Q().equalStr("idFinca", idFinca).and().isNotNull("fechaProxima").and().isNotMissing("fechaProxima").and().ltToday("fechaProxima").and().equalInt("estadoProximo", 0).and().ltField("aplicacion", "numeroAplicaciones").orderDesc("fechaProxima"));
    }
    getByIdFincaPendientes(idFinca: string){
        return this.db.listByType(TYPE_MANEJO, Q().equalStr("idFinca", idFinca).and().isNotNull("fechaProxima").and().isNotMissing("fechaProxima").and().ltToday("fechaProxima").and().equalInt("estadoProximo", 0).and().ltField("aplicacion", "numeroAplicaciones").orderAsc("fechaProxima"));
    }

    delete(id: string) {
        return this.db.remove(id);
    }

}