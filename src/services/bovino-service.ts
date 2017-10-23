import { DatabaseService } from './database-service'
import 'rxjs/add/operator/mergeMap';
import { Observable } from 'rxjs/Observable';


const table = "bovino"

export class BovinoService extends DatabaseService {

    //permite recuperar los bovinos pertenecientes a un usuario o finca
    findBovinos(idUsuario: number, idFinca: number) {
        return this.query<Bovino>(`SELECT * FROM ${table} WHERE finca = ? AND usuario = ?`, [idFinca, idUsuario]);
    }
}

export class Bovino {
    constructor(public idBovino: string,
        public urlFoto: string,
        public name: string,
        public fecha: Date,
        public genero: string,
        public proposito: number,
        public peso: number,
        public color: string,
        public raza: string,
        public idPadre: string,
        public idMadre: string,
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