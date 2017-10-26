import { DatabaseService } from './database-service'
import 'rxjs/add/operator/mergeMap';
import { Observable } from 'rxjs/Observable';


const table = "finca"

export class FincaService extends DatabaseService {

    //permite recuperar las fincas pertenecientes a un usuario
    findFincas(id: string) {
        return this.query<Finca>(`SELECT * FROM ${table} WHERE usuario = ?`, [id]);
    }

    //permite agregar una finca nueva
    addFinca(nombre:string,ubicacion:string,hectareas:string,usuario:string){
        return this.query(`INSERT INTO `+table+` (nombre,ubicacion,hectareas,usuario) VALUES (?,?,?,?)`,[nombre,ubicacion,hectareas,usuario])
    }

    //permite eliminar una finca
    deleteFinca(id:number){
        return this.query(`DELETE FROM `+table+` WHERE id = ?`,[id]);
    }

    //permite editar una finca
    updateFinca(idfinca:number,nombre:string,ubicacion:string,hectareas:string,usuario:string){
        return this.query(`UPDATE `+table+` SET nombre = ?,ubicacion = ?,hectareas = ?, usuario = ? WHERE id = ? `,[nombre,ubicacion,hectareas,usuario,idfinca]);
    }

}

export class Finca {
    constructor(public name: string,
        public location: string,
        public size: string,
        public user: number) { }
}

export const fincaService: FincaService = new FincaService();