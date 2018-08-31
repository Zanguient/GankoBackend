import 'rxjs/add/operator/mergeMap';
import { Observable } from 'rxjs/Observable';
import { DBConnection } from './db-connection';
import { TYPE_PRADERA, Pradera } from "./models/praderas";
import { TYPE_ALARMA_PRADERA, AlarmaPradera } from './models/alarma-pradera';


export class PraderaService {

    private static _instance: PraderaService;
    static get instance(): PraderaService {
        if (PraderaService._instance == undefined) {
            PraderaService._instance = new PraderaService(DBConnection.instance);
        }
        return PraderaService._instance;
    }

    constructor(private db: DBConnection) { }

    getAll(){
        return this.db.ListByType(TYPE_PRADERA);
    }

    getAllByIdFarm(idFarm:string){
        return this.db.ListByType(TYPE_PRADERA,"idFinca = $1",[idFarm]);
    }

    insert(pradera: Pradera) {
        return this.db.insert(pradera);
    }

    update(id: string, pradera: Pradera) {
        return this.db.replace(id, pradera);
    }

    getById(id: string) {
        return this.db.getById<Pradera>(id);
    }
    delete(id:string){
        return this.db.remove(id);
    }

    getAlertByIdPradera(idPradera:string){
        return this.db.ListByType(TYPE_ALARMA_PRADERA,"meadow = $1",[idPradera]);
    }

    addAlert(alerta:AlarmaPradera){
        return this.db.insert(alerta);
    }
}