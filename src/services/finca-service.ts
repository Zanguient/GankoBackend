import { DatabaseService } from './database-service'
import 'rxjs/add/operator/mergeMap';
import { Observable } from 'rxjs/Observable';
import { Finca } from "./models/finca"


const table = "finca"

export class FincaService extends DatabaseService {

    //permite recuperar las fincas pertenecientes a un usuario
    findFincas(id_usuario: string) {
        return this.query<Finca>(`SELECT * FROM ${table} WHERE usuario = ?`, [id_usuario]);
    }

    //permite agregar una finca nueva
    addFinca(finca: Finca) {
        return this.query(`INSERT INTO ${table} SET ?`, [finca]);
    }

    //permite eliminar una finca
    deleteFinca(id: number) {
        return this.query(`DELETE FROM ${table} WHERE id = ?`, [id]);
    }

    //permite editar una finca
    updateFinca(id_finca: number, finca: Finca) {
        return this.query(`UPDATE ${table} SET ? WHERE id = ?`, [finca, id_finca]);
    }
}

export const fincaService: FincaService = new FincaService();