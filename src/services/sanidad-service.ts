import { Sanidad,TYPE_SANIDAD } from "./models/sanidad";
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
        return this.db.ListByType(TYPE_SANIDAD);
    }

    getAllByIdBovino(idBovino:string){
        return this.db.ListByType(TYPE_SANIDAD,"bovinos.id = $1",[idBovino]);
    }

    insert(registroSanidad: Sanidad) {
        return this.db.insert(registroSanidad);
    }

    update(id: string, registroSanidad: Sanidad) {
        return this.db.replace(id, registroSanidad);
    }

    getById(id: string) {
        return this.db.getById<Sanidad>(id);
    }
    delete(id:string){
        return this.db.remove(id);
    }

}