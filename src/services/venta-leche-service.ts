import { DatabaseService } from './database-service';
import { VentaLeche } from "./models/venta-leche";

const table = "venta_leche";

export class VentaLecheService extends DatabaseService {


    insertVentaLeche(ventaLeche:VentaLeche) {
        this.query(`INSERT INTO ${table} SET ?`, [ventaLeche]);
    }

    getVentaLeche() {
        this.query(`SELECT * FROM ${table}`);
    }

    getVentaLecheFecha(fecha:Date){
        this.query(`SELECT * FROM ${table} WHERE fecha >= ?`,[fecha])
    }

    deleteVentaLeche(id_venta_leche: number) {
        this.query(`DELETE FROM ${table} WHERE id = ?`, [id_venta_leche]);
    }

}