import { DatabaseService } from './database-service';
import { VentaLeche } from "./models/venta-leche";

const table = "venta_leche";

export class VentaLecheService extends DatabaseService {


    insertVentaLeche(ventaLeche:VentaLeche) {
        return this.query(`INSERT INTO ${table} SET ?`, [ventaLeche]);
    }

    getVentaLeche() {
        return this.query(`SELECT * FROM ${table}`);
    }

    getVentaLecheFecha(fecha:Date){
        return this.query(`SELECT * FROM ${table} WHERE fecha >= ?`,[fecha])
    }

    deleteVentaLeche(id_venta_leche: number) {
        return this.query(`DELETE FROM ${table} WHERE id = ?`, [id_venta_leche]);
    }
}
export const ventaLecheService: VentaLecheService = new VentaLecheService();