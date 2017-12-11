import { DatabaseService } from './database-service';
import { Pradera } from "./models/pradera";

const table = "pradera";

export class PraderaService extends DatabaseService {

    insertPradera(pradera: Pradera) {
        return this.query(`INSERT INTO ${table} SET ?`, [pradera]);
    }

    getPraderas(id_finca: number) {
        return this.query(`SELECT * FROM ${table} WHERE finca = ?`, [id_finca]);
    }

    deletePradera(id_pradera: number) {
        return this.query(`DELETE FROM ${table} WHERE id = ?`, [id_pradera]);
    }
}
export const praderaService: PraderaService = new PraderaService();