import { DatabaseService } from './database-service';
import { Vacuna } from "./models/vacuna";

const table = "vacuna";

export class VacunaService extends DatabaseService {


    insertVacuna(vacuna:Vacuna) {
        return this.query(`INSERT INTO ${table} SET ?`, [vacuna]);
    }

    getVacuna(id_bovino: number) {
        return this.query(`SELECT * FROM ${table} WHERE id_bovino = ?`, [id_bovino]);
    }

    deleteVacuna(id_vacuna: number) {
        return this.query(`DELETE FROM ${table} WHERE id = ?`, [id_vacuna]);
    }

}
export const vacunaService: VacunaService = new VacunaService();