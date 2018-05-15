import { TYPE_REGISTRO_SANIDAD, RegistroSanidad } from "./models/sanidad";
import 'rxjs/add/operator/mergeMap';
import { Observable } from 'rxjs/Observable';
import { DBConnection } from './db-connection';


export class SanidadService {

    private static _instance: SanidadService;
    static get instance(): SanidadService {
        if (SanidadService._instance == undefined) {
            SanidadService._instance = new SanidadService(DBConnection.instance);
        }
        return SanidadService._instance;
    }

    constructor(private db: DBConnection) { }

    getAll() {
        return this.db.ListByType(TYPE_REGISTRO_SANIDAD);
    }

    insert(registroSanidad: RegistroSanidad) {
        return this.db.insert(registroSanidad);
    }

    update(id: string, registroSanidad: RegistroSanidad) {
        return this.db.replace(id, registroSanidad);
    }

    getById(id: string) {
        return this.db.getById<RegistroSanidad>(id);
    }

}