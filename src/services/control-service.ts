import { DatabaseService } from './database-service';
import { Control } from "./models/control";

const table = "control";

export class ControlService extends DatabaseService {


    insertControl(control:Control) {
        this.query(`INSERT INTO ${table} SET ?`, [control]);
    }

    getControl(id_bovino: number) {
        this.query(`SELECT * FROM ${table} WHERE id_bovino = ?`, [id_bovino]);
    }

    deleteControl(id_control: number) {
        this.query(`DELETE FROM ${table} WHERE id = ?`, [id_control]);
    }

}