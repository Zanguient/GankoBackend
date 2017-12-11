import { DatabaseService } from './database-service';
import { Celo } from "./models/celo";

const table = "celo";

export class CeloService extends DatabaseService {


    insertCelo(celo:Celo) {
        this.query(`INSERT INTO ${table} SET ?`, [celo]);
    }

    getCelo(id_bovino: number) {
        this.query(`SELECT * FROM ${table} WHERE id_bovino = ?`, [id_bovino]);
    }

    deleteCelo(id_celo: number) {
        this.query(`DELETE FROM ${table} WHERE id = ?`, [id_celo]);
    }

}