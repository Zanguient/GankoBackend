import { DatabaseService } from './database-service';
import { Bovino } from "./models/bovino"
import 'rxjs/add/operator/mergeMap';
import { Observable } from 'rxjs/Observable';


const table = "bovino"

export class BovinoService extends DatabaseService {

    //permite recuperar los bovinos pertenecientes a un usuario o finca
    findBovinos(idUsuario: number, idFinca: number) {
        return this.query<Bovino>(`SELECT * FROM ${table} WHERE finca = ? AND usuario = ?`, [idFinca, idUsuario]);
    }

    //permite encontrar un bovino por medio de su identificador asignado
    findByIdBovino(idbovino: string) {
        return this.query<Bovino>(`SELECT * FROM ${table} WHERE id_bovino = ?`, [idbovino]);
    }
    //permite buscar el bovino por id de BD
    findById(idbovino: number) {
        return this.query<Bovino>(`SELECT * FROM ${table} WHERE id = ?`, [idbovino]);
    }
    //permite insertar un nuevo bovino
    addBovino(bovino: Bovino) {
        return this.query(`INSERT INTO ${table} SET ?`, [bovino]);
    }

    //permite editar un bovino
    updateBovino(id_bovino: number, bovino: Bovino) {
        return this.query(`UPDATE ${table} SET ? WHERE id = ?`, [bovino, id_bovino]);
    }

    //permite subir la foto del bovino
    updateImageBovino(id: number, idImage: number) {
        return this.query(`UPDATE ${table} SET imagen = ? WHERE id = ?`, [idImage, id]);
    }

    //permite eliminar un bovino usando su identificador asignado
    deleteBovino(idbovino) {
        return this.query(`DELETE FROM ${table} WHERE id_bovino = ?`, [idbovino]);
    }

}

export const bovinoService: BovinoService = new BovinoService();