import { DatabaseService } from './database-service';
import { Alimentacion } from "./models/alimentacion";

const table = "alimentacion";

export class AlimentacionService extends DatabaseService {


    insertAlimentacion(alimentacion:Alimentacion) {
        this.query(`INSERT INTO ${table} SET ?`, [alimentacion]);
    }

    getPraderas(id_bovino: number) {
        this.query(`SELECT * FROM ${table} WHERE id_bovino = ?`, [id_bovino]);
    }

    deleteAlimentacion(id_alimentacion: number) {
        this.query(`DELETE FROM ${table} WHERE id = ?`, [id_alimentacion]);
    }

}