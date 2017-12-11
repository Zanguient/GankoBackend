import { DatabaseService } from './database-service';
import { Pradera } from "./models/pradera";

const table = "pradera";

export class PraderaService extends DatabaseService {

    insertPradera(pradera: Pradera) {
        this.query(`INSERT INTO ${table} SET ?`, [pradera]);
    }

    getPraderas(id_finca: number) {
        this.query(`SELECT * FROM ${table} WHERE finca = ?`, [id_finca]);
    }

    deletePradera(id_pradera: number) {
        this.query(`DELETE FROM ${table} WHERE id = ?`, [id_pradera]);
    }
}
