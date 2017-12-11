import { DatabaseService } from './database-service';
import { Pajilla } from "./models/pajilla";

const table = "pajilla";

export class PajillaService extends DatabaseService {


    insertPajilla(pajilla:Pajilla) {
        this.query(`INSERT INTO ${table} SET ?`, [pajilla]);
    }

    getPajillas() {
        this.query(`SELECT * FROM ${table} WHERE usada=false ORDER BY desc`);
    }

    deletePajilla(id_pajilla: number) {
        this.query(`DELETE FROM ${table} WHERE id = ?`, [id_pajilla]);
    }

}