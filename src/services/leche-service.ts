import { DatabaseService } from './database-service';
import { Leche } from "./models/leche";

const table = "leche";

export class LecheService extends DatabaseService {


    insertLeche(leche:Leche) {
        return this.query(`INSERT INTO ${table} SET ?`, [leche]);
    }

    getLeche(id_bovino: number) {
        return this.query(`SELECT * FROM ${table} WHERE id_bovino = ?`, [id_bovino]);
    }

    deleteLeche(id_leche: number) {
        return this.query(`DELETE FROM ${table} WHERE id = ?`, [id_leche]);
    }

}
export const lecheService: LecheService = new LecheService();