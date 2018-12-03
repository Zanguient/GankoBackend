import 'rxjs/add/operator/mergeMap';
import { TYPE_MOVIMIENTO, Movimiento } from './models/movimientos';
import { toDate } from '../util/date-util';
import { DBConnection, DBHandler } from './database/db-handler';
import { Q } from './database/query-builder';


export class MovimientoService {

    private static _instance: MovimientoService;
    static get instance(): MovimientoService {
        if (MovimientoService._instance == undefined) {
            MovimientoService._instance = new MovimientoService(DBConnection.instance);
        }
        return MovimientoService._instance;
    }

    constructor(private db: DBHandler) { }

    getAllByIdFInca(idFinca: string) {
        return this.db.listByType(TYPE_MOVIMIENTO, Q().equalStr("idFarm", idFinca));
    }

    getAllByIdBovino(idBovino: string) {
        return this.db.listByType(TYPE_MOVIMIENTO, Q().containsStr("bovinos", idBovino));
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
        return this.db.byId<Movimiento>(id);
    }

    delete(id: string) {
        return this.db.remove(id);
    }

}