import { SalidaLeche,TYPE_VENTA } from "./models/venta";
import 'rxjs/add/operator/mergeMap';
import { Observable } from 'rxjs/Observable';
import { DBConnection } from './db-connection';


export class VentaService {

    private static _instance: VentaService;
    static get instance(): VentaService {
        if (VentaService._instance == undefined) {
            VentaService._instance = new VentaService(DBConnection.instance);
        }
        return VentaService._instance;
    }

    constructor(private db: DBConnection) { }

    getAll() {
        return this.db.ListByType(TYPE_VENTA);
    }

    insert(salidaLeche: SalidaLeche) {
        return this.db.insert(salidaLeche);
    }

    update(id: string, salidaLeche: SalidaLeche) {
        return this.db.replace(id, salidaLeche);
    }

    getById(id: string) {
        return this.db.getById<SalidaLeche>(id);
    }

}