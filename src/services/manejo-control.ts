import { DatabaseService } from './database-service';
import { Manejo } from "./models/manejo";

const table = "manejo";

export class ManejoService extends DatabaseService {


    insertManejo(manejo:Manejo) {
        this.query(`INSERT INTO ${table} SET ?`, [manejo]);
    }

    getManejo(id_bovino: number) {
        this.query(`SELECT * FROM ${table} WHERE id_bovino = ?`, [id_bovino]);
    }

    deleteManejo(id_manejo: number) {
        this.query(`DELETE FROM ${table} WHERE id = ?`, [id_manejo]);
    }

}