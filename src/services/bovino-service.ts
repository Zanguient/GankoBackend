import { Bovino, TYPE_BOVINO } from "./models/bovinos"
import 'rxjs/add/operator/mergeMap';
import { Observable } from 'rxjs/Observable';
import { DBConnection } from './db-connection';

export class BovinoService {

    private static _instance: BovinoService;
    static get instance(): BovinoService {
        if (BovinoService._instance == undefined) {
            BovinoService._instance = new BovinoService(DBConnection.instance);
        }
        return BovinoService._instance;
    }

    constructor(private db: DBConnection) { }

    //permite recuperar los bovinos pertenecientes a un usuario o finca
    findBovinos(idFinca: number) {
        return this.db.ListByType<Bovino>(TYPE_BOVINO,"finca = $1",[idFinca]);
    }

    //permite encontrar un bovino por medio de su identificador asignado
    findByIdBovino(idbovino: string) {
        return this.db.typedOne<Bovino>(TYPE_BOVINO,"codigo = $1",[idbovino]);
    }
    //permite buscar el bovino por id de BD
    findById(idbovino: string) {
        return this.db.getById(idbovino)
    }
    //permite insertar un nuevo bovino
    addBovino(bovino: Bovino) {
        return this.db.insert(bovino)
    }

    //permite editar un bovino
    updateBovino(idBovino: string, bovino: Bovino) {
        return this.db.replace(idBovino,bovino)
    }

    //permite subir la foto del bovino
    // updateImageBovino(id: number, idImage: number) {
    //     return this.query(`UPDATE ${table} SET imagen = ? WHERE id = ?`, [idImage, id]);
    // }

    //permite eliminar un bovino usando su identificador asignado
    deleteBovino(idbovino) {
        return this.db.remove(idbovino)
    }

}