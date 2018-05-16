import { RegistroManejo, TYPE_REGISTRO_MANEJO } from "./models/manejo";
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
        return this.db.ListByType(TYPE_REGISTRO_MANEJO);
    }

    insert(manejo: RegistroManejo) {
        return this.db.insert(manejo);
    }

    update(id: string, manejo:RegistroManejo) {
        return this.db.replace(id, manejo);
    }

    getById(id: string) {
        return this.db.getById<RegistroManejo>(id);
    }
    delete(id:string){
        return this.db.remove(id);
    }

}