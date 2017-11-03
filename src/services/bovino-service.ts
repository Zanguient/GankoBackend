import { DatabaseService } from './database-service'
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
    addBovino(bovino : Bovino) {
        return this.query(`INSERT INTO ${table} SET ?`, [bovino]);
    }

    //permite editar un bovino
    updateBovino(bovino:Bovino) {
        return this.query(`UPDATE ${table} SET ? `, [bovino]);
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

export class Bovino {
    constructor(public id_bovino:string,
        public imagen: number,
        public name: string,
        public fecha_ingreso: Date,
        public genero: string,
        public proposito: number,
        public peso: number,
        public color: string,
        public raza: string,
        public id_Madre: string,
        public id_Padre: string,
        public lote: string,
        public salida_por: string,
        public numero_partos: string,
        public parto_fallo: string,
        public fecha_salida: string,
        public precio_compra:number,
        public precio_venta:number,
        public finca: number,
        public usuario: number,
        public version:number) { }
}

export const bovinoService: BovinoService = new BovinoService();