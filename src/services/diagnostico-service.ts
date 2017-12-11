import { DatabaseService } from './database-service';
import { Diagnostico } from "./models/diagnostico";

const table = "diagnostico";

export class DiagnosticoService extends DatabaseService {


    insertDiagnostico(diagnostico:Diagnostico) {
        this.query(`INSERT INTO ${table} SET ?`, [diagnostico]);
    }

    getDiagnostico(id_bovino: number) {
        this.query(`SELECT * FROM ${table} WHERE id_bovino = ?`, [id_bovino]);
    }

    deleteDiagnostico(id_diagnostico: number) {
        this.query(`DELETE FROM ${table} WHERE id = ?`, [id_diagnostico]);
    }

}