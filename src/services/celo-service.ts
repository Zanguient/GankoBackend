import { DatabaseService } from './database-service';
import { Celo } from "./models/celo";
import { CebaService } from './ceba-service';

const table = "celo";

export class CeloService extends DatabaseService {


    insertCelo(celo:Celo) {
        return this.query(`INSERT INTO ${table} SET ?`, [celo]);
    }

    getCelo(id_bovino: number) {
        return this.query(`SELECT * FROM ${table} WHERE id_bovino = ?`, [id_bovino]);
    }

    deleteCelo(id_celo: number) {
        return this.query(`DELETE FROM ${table} WHERE id = ?`, [id_celo]);
    }

}
export const celoService: CeloService = new CeloService();