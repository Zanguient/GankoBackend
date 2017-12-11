import { DatabaseService } from './database-service';
import { Diagnostico } from "./models/diagnostico";

const table = "diagnostico";

export class DiagnosticoService extends DatabaseService {


    insertDiagnostico(diagnostico:Diagnostico) {
        return this.query(`INSERT INTO ${table} SET ?`, [diagnostico]);
    }

    getDiagnostico(id_bovino: number) {
        return this.query(`SELECT * FROM ${table} WHERE id_bovino = ?`, [id_bovino]);
    }

    deleteDiagnostico(id_diagnostico: number) {
        return this.query(`DELETE FROM ${table} WHERE id = ?`, [id_diagnostico]);
    }

}
export const diagnosticoService: DiagnosticoService = new DiagnosticoService();