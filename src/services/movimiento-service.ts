import 'rxjs/add/operator/mergeMap';
import { DBConnection } from './db-connection';
import { TYPE_MOVIMIENTO,Movimiento } from './models/movimientos';
import { toDate } from '../util/date-util';


export class MovimientoService {

    private static _instance: MovimientoService;
    static get instance(): MovimientoService {
        if (MovimientoService._instance == undefined) {
            MovimientoService._instance = new MovimientoService(DBConnection.instance);
        }
        return MovimientoService._instance;
    }

    constructor(private db: DBConnection) { }

    getAllByIdFInca(idFinca:string) {
        return this.db.ListByType(TYPE_MOVIMIENTO,"idFarm = $1",[idFinca]);
    }

    insert(produccion: Movimiento) {
        toDate(produccion, 'transactionDate');
        return this.db.insert(produccion);
    }

    update(id: string, produccion: Movimiento) {
        toDate(produccion, 'transactionDate');
        return this.db.replace(id, produccion);
    }

    getById(id: string) {
        return this.db.getById<Movimiento>(id);
    }
    
    delete(id:string){
        return this.db.remove(id);
    }

}