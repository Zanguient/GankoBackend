import 'rxjs/add/operator/mergeMap';
import { Observable } from 'rxjs/Observable';
import { DBConnection } from './db-connection';
import { TYPE_PRADERA, Pradera } from "./models/praderas";
import { TYPE_ALARMA_PRADERA, AlarmaPradera } from './models/alarma-pradera';
import { toDate } from '../util/date-util';


export class PraderaService {

    private static _instance: PraderaService;
    static get instance(): PraderaService {
        if (PraderaService._instance == undefined) {
            PraderaService._instance = new PraderaService(DBConnection.instance);
        }
        return PraderaService._instance;
    }

    constructor(private db: DBConnection) { }

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
        return this.db.ListByType(TYPE_PRADERA);
    }

    getAllByIdFarm(idFarm: string) {
        return this.db.ListByType(TYPE_PRADERA, "idFinca = $1", [idFarm]);
    }

    insert(pradera: Pradera) {
        this.preparePradera(pradera);
        return this.db.insert(pradera);
    }

    update(id: string, pradera: Pradera) {
        this.preparePradera(pradera);
        return this.db.replace(id, pradera);
    }

    getById(id: string) {
        return this.db.getById<Pradera>(id);
    }
    delete(id: string) {
        return this.db.remove(id);
    }

    getAlertByIdPradera(idPradera: string) {
        return this.db.ListByType(TYPE_ALARMA_PRADERA, "meadow = $1", [idPradera]);
    }

    addAlert(alerta: AlarmaPradera) {
        toDate(alerta, 'fechaProxima');
        return this.db.insert(alerta);
    }
}