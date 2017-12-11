import { DatabaseService } from './database-service';
import { Alimentacion } from "./models/alimentacion";

const table = "alimentacion";

export class AlimentacionService extends DatabaseService {


    insertAlimentacion(alimentacion:Alimentacion) {
        return this.query(`INSERT INTO ${table} SET ?`, [alimentacion]);
    }

    getAlimentacion(id_bovino: number) {
        return this.query(`SELECT * FROM ${table} WHERE id_bovino = ?`, [id_bovino]);
    }

    deleteAlimentacion(id_alimentacion: number) {
        return this.query(`DELETE FROM ${table} WHERE id = ?`, [id_alimentacion]);
    }

}
export const alimentacionService: AlimentacionService = new AlimentacionService();