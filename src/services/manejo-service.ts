import { DatabaseService } from './database-service';
import { Manejo } from "./models/manejo";

const table = "manejo";

export class ManejoService extends DatabaseService {


    insertManejo(manejo:Manejo) {
        return this.query(`INSERT INTO ${table} SET ?`, [manejo]);
    }

    getManejo(id_bovino: number) {
        return this.query(`SELECT * FROM ${table} WHERE id_bovino = ?`, [id_bovino]);
    }

    deleteManejo(id_manejo: number) {
        return this.query(`DELETE FROM ${table} WHERE id = ?`, [id_manejo]);
    }

}
export const manejoService: ManejoService = new ManejoService();