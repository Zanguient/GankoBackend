import { TYPE_REGISTRO_VACUNAS, RegistroVacunas } from "./models/vacunas";
import 'rxjs/add/operator/mergeMap';
import { Observable } from 'rxjs/Observable';
import { DBConnection } from './db-connection';


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
        return this.db.ListByType(TYPE_REGISTRO_VACUNAS);
    }

    insert(registroVacunas: RegistroVacunas) {
        return this.db.insert(registroVacunas);
    }

    update(id: string, registroVacunas: RegistroVacunas) {
        return this.db.replace(id, registroVacunas);
    }

    getById(id: string) {
        return this.db.getById<RegistroVacunas>(id);
    }
    delete(id:string){
        return this.db.remove(id);
    }
}