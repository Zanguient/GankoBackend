import { DatabaseService } from './database-service';
import { Servicio } from "./models/servicio";

const table = "servicio";

export class ServicioService extends DatabaseService {


    insertServicio(servicio:Servicio) {
        this.query(`INSERT INTO ${table} SET ?`, [servicio]);
    }

    getServicio(id_bovino: number) {
        this.query(`SELECT * FROM ${table} WHERE id_bovino = ?`, [id_bovino]);
    }

    deleteServicio(id_servicio: number) {
        this.query(`DELETE FROM ${table} WHERE id = ?`, [id_servicio]);
    }

}