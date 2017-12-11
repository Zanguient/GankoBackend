import { DatabaseService } from './database-service';
import { Vacuna } from "./models/vacuna";

const table = "vacuna";

export class VacunaService extends DatabaseService {


    insertVacuna(vacuna:Vacuna) {
        this.query(`INSERT INTO ${table} SET ?`, [vacuna]);
    }

    getVacuna(id_bovino: number) {
        this.query(`SELECT * FROM ${table} WHERE id_bovino = ?`, [id_bovino]);
    }

    deleteVacuna(id_vacuna: number) {
        this.query(`DELETE FROM ${table} WHERE id = ?`, [id_vacuna]);
    }

}