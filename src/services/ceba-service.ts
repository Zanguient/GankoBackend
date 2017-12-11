import { DatabaseService } from './database-service';
import { Ceba } from "./models/ceba";

const table = "ceba";

export class CebaService extends DatabaseService {


    insertCeba(ceba:Ceba) {
        return this.query(`INSERT INTO ${table} SET ?`, [ceba]);
    }

    getCeba(id_bovino: number) {
        return this.query(`SELECT * FROM ${table} WHERE id_bovino = ?`, [id_bovino]);
    }

    deleteCeba(id_ceba: number) {
        return this.query(`DELETE FROM ${table} WHERE id = ?`, [id_ceba]);
    }

}
export const cebaService: CebaService = new CebaService();