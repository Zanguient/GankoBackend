import { DatabaseService } from './database-service';
import { Parto } from "./models/parto";

const table = "parto";

export class PartoService extends DatabaseService {


    insertParto(parto:Parto) {
        this.query(`INSERT INTO ${table} SET ?`, [parto]);
    }

    getParto(id_bovino: number) {
        this.query(`SELECT * FROM ${table} WHERE id_bovino = ?`, [id_bovino]);
    }

    deleteParto(id_parto: number) {
        this.query(`DELETE FROM ${table} WHERE id = ?`, [id_parto]);
    }

}