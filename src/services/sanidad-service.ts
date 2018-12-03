import 'rxjs/add/operator/mergeMap';
import { toDate } from "../util/date-util";
import { Sanidad, TYPE_SANIDAD } from "./models/sanidad";
import { DBConnection, DBHandler } from './database/db-handler';
import { Q } from './database/query-builder';


export class SanidadService {

    private static _instance: SanidadService;
    static get instance(): SanidadService {
        if (SanidadService._instance == undefined) {
            SanidadService._instance = new SanidadService(DBConnection.instance);
        }
        return SanidadService._instance;
    }

    constructor(private db: DBHandler) { }

    getAll() {
        return this.db.listByType(TYPE_SANIDAD);
    }

    getAllByIdBovino(idBovino: string) {
        return this.db.listByType(TYPE_SANIDAD, Q().containsStr("bovinos", idBovino));
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
        return this.db.byId<Sanidad>(id);
    }
    delete(id: string) {
        return this.db.remove(id);
    }
    getByIdFincaReciente(idFinca: string) {
        return this.db.listByType(TYPE_SANIDAD, Q().equalStr("idFinca", idFinca).orderDesc("fecha"));
    }
    getByIdFincaProximos(idFinca: string) {
        return this.db.listByType(TYPE_SANIDAD, Q().equalStr("idFinca", idFinca).and().isNotNull("fechaProxima").and().isNotMissing("fechaProxima").gteToday("fechaProxima").and().equalInt("estadoProximo", 0).and().ltField("aplicacion", "numeroAplicaciones").orderAsc("fechaProxima"));
    }
    getByIdFincaPendientes(idFinca: string) {
        return this.db.listByType(TYPE_SANIDAD, Q().equalStr("idFinca", idFinca).and().isNotNull("fechaProxima").and().isNotMissing("fechaProxima").ltToday("fechaProxima").and().equalInt("estadoProximo", 0).and().ltField("aplicacion", "numeroAplicaciones").orderAsc("fechaProxima"));
    }
}