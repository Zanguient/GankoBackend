import 'rxjs/add/operator/mergeMap';
import { toDate } from '../util/date-util';
import { DBConnection, DBHandler } from './database/db-handler';
import { Q } from './database/query-builder';
import { AlarmaPradera, TYPE_ALARMA_PRADERA } from './models/alarma-pradera';
import { Pradera, TYPE_PRADERA } from "./models/praderas";


export class PraderaService {

    private static _instance: PraderaService;
    static get instance(): PraderaService {
        if (PraderaService._instance == undefined) {
            PraderaService._instance = new PraderaService(DBConnection.instance);
        }
        return PraderaService._instance;
    }

    constructor(private db: DBHandler) { }

    private preparePradera(pradera: Pradera) {
        toDate(pradera, 'fechaOcupacion', 'fechaSalida');
        if (!pradera.mantenimiento) {
            pradera.mantenimiento = [];
        }
        if (!pradera.aforo) {
            pradera.aforo = [];
        }

        pradera.mantenimiento.forEach(x => {
            if(x.fechaMantenimiento){
                x.fechaMantenimiento = new Date(x.fechaMantenimiento);
            }
        });

        pradera.aforo.forEach(x=>{
            if(x.fechaAforo){
                x.fechaAforo = new Date(x.fechaAforo);
            }
        });
    }

    getAll() {
        return this.db.listByType(TYPE_PRADERA);
    }

    getAllByIdFarm(idFarm: string) {
        return this.db.listByType(TYPE_PRADERA,Q().equalStr("idFinca", idFarm).size(100).orderAsc("orderValue"));
    }

    insert(pradera: Pradera,orderValue:number) {
        this.preparePradera(pradera);
        pradera.orderValue = orderValue
        return this.db.insert(pradera);
    }

    update(id: string, pradera: Pradera) {
        this.preparePradera(pradera);
        return this.db.replace(id, pradera);
    }

    getById(id: string) {
        return this.db.byId<Pradera>(id);
    }
    delete(id: string) {
        return this.db.remove(id);
    }

    getAlertByIdPradera(idPradera: string) {
        return this.db.listByType(TYPE_ALARMA_PRADERA, Q().equalStr("meadow", idPradera));
    }

    addAlert(alerta: AlarmaPradera) {
        toDate(alerta, 'fechaProxima');
        return this.db.insert(alerta);
    }
}