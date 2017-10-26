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
    findByIdBovino(idbovino:string){
        return this.query<Bovino>(`SELECT * FROM ${table} WHERE id_bovino = ?`,[idbovino]);
    }

    //permite insertar un nuevo bovino
    addBovino(idBovino:string,imagen:string,name:string,fecha:Date,genero:string,proposito:string,
        peso:number,color:string,raza:string,idmadre:string,idpadre:string,salida:string,lote:string,salidaPor:string,
        numeroPartos:number,partoFallo:string,fechaSalida:Date,finca:number,usuario:number){
            this.query(`INSERT INTO ${table} (id_bovino,imagen,nombre,fecha,genero,proposito,peso,color,
                raza,id_madre,id_padre,salida,lote,salida_por,numero_partos,parto_fallido,fecha_salida,finca,usuario) VALUES 
                (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,[
                idBovino,imagen,name,fecha,genero,proposito,peso,color,raza,idmadre,idpadre,salida,lote,salidaPor,numeroPartos,
                partoFallo,fechaSalida,finca,usuario]);
        }

    //permite editar un bovino
    updateBovino(id:number,idBovino:string,imagen:string,name:string,fecha:Date,genero:string,proposito:string,
    peso:number,color:string,raza:string,idmadre:string,idpadre:string,salida:string,lote:string,salidaPor:string,
    numeroPartos:number,partoFallo:string,fechaSalida:Date,finca:number,usuario:number){
        this.query(`UPDATE ${table} SET id_bovino = ?, imagen = ?, nombre = ?, fecha = ?, genero = ?,
        proposito = ?, peso = ?, color = ?, raza = ?, id_madre = ?, id_padre = ?, salida = ?, lote = ?, salida_por = ?,
        numero_partos = ?, parto_fallido = ?, fecha_salida = ?, finca = ?, usuario = ? WHERE id = ? `,[
            idBovino,imagen,name,fecha,genero,proposito,peso,color,raza,idmadre,idpadre,salida,lote,salidaPor,numeroPartos,
            partoFallo,fechaSalida,finca,usuario,id]);
    }

    //permite eliminar un bovino usando su identificador asignado
    deleteBovino(idbovino){
        return this.query(`DELETE FROM ${table} WHERE id_bovino = ?`,[idbovino]);
    }

}

export class Bovino {
    constructor(public idBovino: string,
        public imagen: string,
        public name: string,
        public fecha: Date,
        public genero: string,
        public proposito: number,
        public peso: number,
        public color: string,
        public raza: string,
        public idMadre: string,
        public idPadre: string,
        public salida: string,
        public lote: string,
        public salidaPor: string,
        public numeroPartos: string,
        public partoFallo: string,
        public fechaSalida: string,
        public finca: number,
        public usuario: number) { }
}

export const bovinoService: BovinoService = new BovinoService();